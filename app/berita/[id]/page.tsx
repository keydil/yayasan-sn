'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { dataService, Article } from '@/lib/supabase';

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

  return (
    <main className="min-h-screen bg-white py-12 sm:py-16">
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
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Image Banner */}
        <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100 mb-10 shadow-lg border border-gray-100">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Excerpt / Highlight */}
        <div className="p-6 bg-emerald-50/60 border-l-4 border-emerald-600 rounded-r-2xl mb-8">
          <p className="text-emerald-950 font-medium text-lg leading-relaxed italic">{article.excerpt}</p>
        </div>

        {/* Content Body */}
        <div className="prose prose-emerald max-w-none text-gray-700 text-base leading-relaxed space-y-4 whitespace-pre-line">
          {article.content}
        </div>

        {/* Footer Share */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link
            href="/berita"
            className="text-sm font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
          >
            ← Berita Lainnya
          </Link>
        </div>
      </div>
    </main>
  );
}
