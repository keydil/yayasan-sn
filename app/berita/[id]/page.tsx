'use client';

import { useState, useEffect, use, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Video, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
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

function PhotoCarousel({ images }: { images: string[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = useCallback(() => setActiveIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActiveIdx((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') setLightbox(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prev, next]);

  return (
    <>
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-10"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="relative w-full max-w-5xl px-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={prev}
              className="absolute left-2 sm:left-6 z-10 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full backdrop-blur transition-all"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <img
              src={images[activeIdx]}
              alt={`Foto ${activeIdx + 1}`}
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
            />

            <button
              onClick={next}
              className="absolute right-2 sm:right-6 z-10 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full backdrop-blur transition-all"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          <p className="text-white/50 text-sm mt-4 font-medium">{activeIdx + 1} / {images.length}</p>

          {/* Lightbox thumbnails */}
          <div className="flex gap-2 mt-4 px-4 overflow-x-auto max-w-full pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setActiveIdx(idx); }}
                className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${idx === activeIdx ? 'border-emerald-400 scale-110' : 'border-white/20 opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="mb-12 rounded-3xl overflow-hidden border border-gray-200 bg-gray-950 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-gray-900 border-b border-gray-800">
          <span className="text-white font-bold text-sm tracking-wide">
            📸 Galeri Dokumentasi Foto
          </span>
          <span className="text-gray-400 text-xs font-medium">{activeIdx + 1} / {images.length}</span>
        </div>

        {/* Main Image */}
        <div className="relative aspect-[16/9] bg-black group cursor-zoom-in" onClick={() => setLightbox(true)}>
          <img
            key={activeIdx}
            src={images[activeIdx]}
            alt={`Foto ${activeIdx + 1}`}
            className="w-full h-full object-contain transition-opacity duration-300"
          />

          {/* Overlay zoom hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
            <div className="bg-black/60 text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur">
              <ZoomIn className="w-4 h-4" /> Klik untuk perbesar
            </div>
          </div>

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setActiveIdx(idx); }}
                  className={`rounded-full transition-all ${idx === activeIdx ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex gap-2 p-3 bg-gray-900 overflow-x-auto scrollbar-thin">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  idx === activeIdx
                    ? 'border-emerald-400 ring-2 ring-emerald-400/30 scale-105'
                    : 'border-transparent opacity-55 hover:opacity-90'
                }`}
              >
                <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default function BeritaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticle();
  }, [resolvedParams.id]);

  const fetchArticle = async () => {
    setLoading(true);
    const found = await dataService.getArticleById(resolvedParams.id);
    if (found) setArticle(found);
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
          <Link href="/berita" className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Berita
          </Link>
        </div>
      </main>
    );
  }

  const embedVideoUrl = getYouTubeEmbedUrl(article.videoUrl);

  return (
    <main className="min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link href="/berita" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Kembali ke Semua Berita
        </Link>

        {/* Category & Date */}
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

        {/* Excerpt Highlight */}
        <div className="p-6 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-2xl mb-8">
          <p className="text-emerald-950 font-medium text-lg leading-relaxed italic">{article.excerpt}</p>
        </div>

        {/* Content Body */}
        <div className="prose prose-emerald max-w-none text-gray-800 text-base sm:text-lg leading-relaxed space-y-4 whitespace-pre-line mb-12">
          {article.content}
        </div>

        {/* Carousel — Dokumentasi Foto */}
        {article.images && article.images.length > 0 && (
          <PhotoCarousel images={article.images} />
        )}

        {/* Video Embed */}
        {embedVideoUrl && (
          <div className="mb-12 bg-gray-900 rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-800">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider mb-4">
              <Video className="w-5 h-5" /> Dokumentasi Video Kegiatan
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
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

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/berita" className="text-sm font-bold text-emerald-700 hover:underline inline-flex items-center gap-1">
            ← Kembali ke Semua Berita
          </Link>
        </div>
      </div>
    </main>
  );
}
