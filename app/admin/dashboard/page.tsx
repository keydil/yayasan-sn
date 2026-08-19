'use client';

import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin-layout';
import { dataService } from '@/lib/supabase';
import Link from 'next/link';
import { Newspaper, Image, Users, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    articlesCount: 0,
    galleryCount: 0,
    pengurusCount: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setLoading(true);
    const [articles, gallery, pengurus] = await Promise.all([
      dataService.getArticles(),
      dataService.getGallery(),
      dataService.getPengurus(),
    ]);
    setStats({
      articlesCount: articles.length,
      galleryCount: gallery.length,
      pengurusCount: pengurus.length,
    });
    setLoading(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/30 text-emerald-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-emerald-400/30">
              <ShieldCheck className="w-3.5 h-3.5" /> Web Content Control Panel
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
              Selamat Datang di Portal Admin YSN
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Kelola berita, foto galeri kegiatan, dan susunan pengurus Yayasan Sahabat Nusantara secara langsung dan real-time.
            </p>
          </div>
        </div>

        {/* Real Dynamic Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Newspaper className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">Aktif</span>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-1">{loading ? '...' : stats.articlesCount}</div>
            <p className="text-gray-500 font-semibold text-sm">Artikel Berita</p>
            <p className="text-xs text-gray-400 mt-2">Dipublikasikan di website</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Image className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">Foto</span>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-1">{loading ? '...' : stats.galleryCount}</div>
            <p className="text-gray-500 font-semibold text-sm">Galeri Kegiatan</p>
            <p className="text-xs text-gray-400 mt-2">Dokumentasi program</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full">Pengurus</span>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-1">{loading ? '...' : stats.pengurusCount}</div>
            <p className="text-gray-500 font-semibold text-sm">Susunan Kepengurusan</p>
            <p className="text-xs text-gray-400 mt-2">Pembina s/d Pelaksana</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">2025–2030</span>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-1">4</div>
            <p className="text-gray-500 font-semibold text-sm">Pilar Program Terpadu</p>
            <p className="text-xs text-gray-400 mt-2">Penghijauan, Pendidikan, dll</p>
          </div>
        </div>

        {/* Quick Management Shortcuts */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Akses Cepat Pengelolaan Website</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link href="/admin/berita" className="group">
              <div className="p-6 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl hover:bg-emerald-100/80 transition-all flex flex-col justify-between h-full">
                <div>
                  <Newspaper className="w-8 h-8 text-emerald-700 mb-3" />
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Kelola Berita</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">Publish artikel & kabar kegiatan terbaru yayasan.</p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                  Buka Menu <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link href="/admin/galeri" className="group">
              <div className="p-6 bg-blue-50/70 border border-blue-200/80 rounded-2xl hover:bg-blue-100/80 transition-all flex flex-col justify-between h-full">
                <div>
                  <Image className="w-8 h-8 text-blue-700 mb-3" />
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Kelola Galeri</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">Upload foto dokumentasi aksi nyata lapangan.</p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
                  Buka Menu <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link href="/admin/pengurus" className="group">
              <div className="p-6 bg-purple-50/70 border border-purple-200/80 rounded-2xl hover:bg-purple-100/80 transition-all flex flex-col justify-between h-full">
                <div>
                  <Users className="w-8 h-8 text-purple-700 mb-3" />
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Kelola Pengurus</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">Update susunan Pembina, Pengawas, & Pengurus.</p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-purple-700 group-hover:translate-x-1 transition-transform">
                  Buka Menu <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
