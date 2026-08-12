'use client';

import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { dataService, Article } from '@/lib/supabase';
import { Plus, Edit2, Trash2, Newspaper, ArrowLeft, Image as ImageIcon } from 'lucide-react';

export default function AdminBeritaPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Partial<Article>>({
    title: '',
    excerpt: '',
    content: '',
    category: 'Penghijauan',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
  });

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    setArticles(dataService.getArticles());
  };

  const handleCreateNew = () => {
    setCurrentArticle({
      title: '',
      excerpt: '',
      content: '',
      category: 'Penghijauan',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    });
    setIsEditing(true);
  };

  const handleEdit = (article: Article) => {
    setCurrentArticle(article);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus artikel berita ini?')) {
      dataService.deleteArticle(id);
      loadArticles();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentArticle.title || !currentArticle.excerpt) return;

    dataService.saveArticle({
      id: currentArticle.id,
      title: currentArticle.title || '',
      excerpt: currentArticle.excerpt || '',
      content: currentArticle.content || currentArticle.excerpt || '',
      category: currentArticle.category || 'Penghijauan',
      image: currentArticle.image || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
      date: currentArticle.date,
    });

    setIsEditing(false);
    loadArticles();
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Newspaper className="w-4 h-4" /> Content Management
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Kelola Berita & Artikel</h1>
            <p className="text-gray-500 text-sm mt-1">Tambah, edit, dan publish artikel kegiatan Yayasan Sahabat Nusantara.</p>
          </div>
          {!isEditing && (
            <Button
              onClick={handleCreateNew}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" /> Tambah Berita Baru
            </Button>
          )}
        </div>

        {/* Edit / Create Form Modal Card */}
        {isEditing ? (
          <Card className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-200 shadow-lg">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {currentArticle.id ? 'Edit Artikel Berita' : 'Buat Artikel Berita Baru'}
              </h2>
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="text-gray-600 border-gray-200 hover:bg-gray-50 flex items-center gap-2 text-xs"
              >
                <ArrowLeft className="w-4 h-4" /> Batal
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Judul Berita *
                  </label>
                  <input
                    type="text"
                    value={currentArticle.title}
                    onChange={(e) => setCurrentArticle({ ...currentArticle, title: e.target.value })}
                    placeholder="Contoh: Program Reboisasi Lahan Kritis Periode 2025"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Kategori *
                  </label>
                  <select
                    value={currentArticle.category}
                    onChange={(e) => setCurrentArticle({ ...currentArticle, category: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                  >
                    <option value="Penghijauan">🌱 Penghijauan</option>
                    <option value="Pendidikan">📚 Pendidikan</option>
                    <option value="Pengelolaan Sampah">♻️ Pengelolaan Sampah</option>
                    <option value="Konservasi Air">💧 Konservasi Air</option>
                    <option value="Kegiatan Umum">📢 Kegiatan Umum</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  URL Gambar Header (Foto Artikel) *
                </label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <ImageIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      value={currentArticle.image}
                      onChange={(e) => setCurrentArticle({ ...currentArticle, image: e.target.value })}
                      placeholder="https://images.unsplash.com/photo-..."
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Ringkasan Singkat (Excerpt) *
                </label>
                <textarea
                  rows={2}
                  value={currentArticle.excerpt}
                  onChange={(e) => setCurrentArticle({ ...currentArticle, excerpt: e.target.value })}
                  placeholder="Tulis ringkasan singkat 1-2 kalimat..."
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Isi Lengkap Berita
                </label>
                <textarea
                  rows={6}
                  value={currentArticle.content}
                  onChange={(e) => setCurrentArticle({ ...currentArticle, content: e.target.value })}
                  placeholder="Tulis isi paragraf berita secara lengkap di sini..."
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                  className="border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-md"
                >
                  Simpan & Publish
                </Button>
              </div>
            </form>
          </Card>
        ) : (
          /* Articles List Table / Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group"
              >
                <div className="h-44 bg-gray-100 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    {article.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-gray-400 mb-2">{article.date}</p>
                  <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-3 mb-4 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(article)}
                      className="text-emerald-700 border-emerald-200 hover:bg-emerald-50 text-xs flex items-center gap-1.5 rounded-lg"
                    >
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(article.id)}
                      className="text-red-600 border-red-200 hover:bg-red-50 text-xs flex items-center gap-1.5 rounded-lg"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Hapus
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {articles.length === 0 && (
              <div className="col-span-full bg-white p-12 rounded-2xl border border-dashed border-gray-300 text-center">
                <p className="text-gray-500 font-medium">Belum ada artikel berita.</p>
                <Button onClick={handleCreateNew} className="mt-4 bg-emerald-600 text-white">
                  Buat Berita Pertama
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
