'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Video, Image as ImageIcon, X } from 'lucide-react';
import { dataService, Article } from '@/lib/supabase';

function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  return null;
}

export default function BeritaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    fetchArticle();
  }, [resolvedParams.id]);

  const fetchArticle = async () => {
    setLoading(true);
    const found = await dataService.getArticleById(resolvedParams.id);
    if (found) {
      setArticle(found);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-500 text-sm font-medium">Memuat isi berita...</p>
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-md">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Artikel Tidak Ditemukan</h2>
          <p className="text-gray-500 text-sm mb-6">Berita yang Anda cari mungkin telah dihapus atau diubah.</p>
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Berita
          </Link>
        </div>
      </main>
    );
  }

  const embedVideoUrl = getYouTubeEmbedUrl(article.videoUrl);

  return (
    <main className="min-h-screen bg-white py-12 sm:py-16">
      {/* Lightbox Photo Preview Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img src={selectedPhoto} alt="Dokumentasi Full" className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl" />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/berita"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Kembali ke Semua Berita
        </Link>

        {/* Category & Date Header */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
            <Tag className="w-3.5 h-3.5" /> {article.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <Calendar className="w-3.5 h-3.5" /> {article.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Header Banner Image */}
        <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100 mb-10 shadow-lg border border-gray-100">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Excerpt / Highlight */}
        <div className="p-6 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-2xl mb-8">
          <p className="text-emerald-950 font-medium text-lg leading-relaxed italic">{article.excerpt}</p>
        </div>

        {/* Article Content Body */}
        <div className="prose prose-emerald max-w-none text-gray-800 text-base sm:text-lg leading-relaxed space-y-4 whitespace-pre-line mb-12">
          {article.content}
        </div>

        {/* Video Embed Section (If Available) */}
        {embedVideoUrl && (
          <div className="mb-12 bg-gray-900 rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-800">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider mb-4">
              <Video className="w-5 h-5 text-emerald-400" /> Dokumentasi Video Kegiatan
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
              <iframe
                src={embedVideoUrl}
                title="Dokumentasi Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}

        {/* Multi-Photo Documentation Gallery (If Available) */}
        {article.images && article.images.length > 0 && (
          <div className="mb-12 bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-900 font-bold text-lg mb-6">
              <ImageIcon className="w-5 h-5 text-emerald-600" /> Galeri Dokumentasi Foto ({article.images.length})
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {article.images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPhoto(imgUrl)}
                  className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative group cursor-pointer border border-gray-200 shadow-sm"
                >
                  <img src={imgUrl} alt={`Foto Dok ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                    Klik Pembesar
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
          <Link
            href="/berita"
            className="text-sm font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
          >
            ← Kembali ke Semua Berita
          </Link>
        </div>
      </div>
    </main>
  );
}
