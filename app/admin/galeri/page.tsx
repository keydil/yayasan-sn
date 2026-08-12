'use client';

import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { dataService, GalleryItem } from '@/lib/supabase';
import { Plus, Trash2, Image as ImageIcon, ArrowLeft } from 'lucide-react';

export default function AdminGaleriPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState<Partial<GalleryItem>>({
    title: '',
    category: 'Penghijauan',
    year: new Date().getFullYear().toString(),
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
  });

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = () => {
    setItems(dataService.getGallery());
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus foto galeri ini?')) {
      dataService.deleteGalleryItem(id);
      loadGallery();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.title || !newItem.image) return;

    dataService.saveGalleryItem({
      title: newItem.title || '',
      category: newItem.category || 'Penghijauan',
      year: newItem.year || '2025',
      image: newItem.image || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    });

    setIsEditing(false);
    setNewItem({
      title: '',
      category: 'Penghijauan',
      year: new Date().getFullYear().toString(),
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    });
    loadGallery();
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
              <ImageIcon className="w-4 h-4" /> Gallery Management
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Kelola Galeri Foto</h1>
            <p className="text-gray-500 text-sm mt-1">Upload dan atur dokumentasi kegiatan Yayasan Sahabat Nusantara.</p>
          </div>
          {!isEditing && (
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" /> Upload Foto Baru
            </Button>
          )}
        </div>

        {/* Add Modal Form */}
        {isEditing ? (
          <Card className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-200 shadow-lg">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-bold text-gray-900">Upload Foto Kegiatan Baru</h2>
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
                    Judul Foto / Kegiatan *
                  </label>
                  <input
                    type="text"
                    value={newItem.title}
                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    placeholder="Contoh: Penanaman 1.000 Pohon Mangrove di Pesisir"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Kategori *
                  </label>
                  <select
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                  >
                    <option value="Penghijauan">🌱 Penghijauan</option>
                    <option value="Pendidikan">📚 Pendidikan</option>
                    <option value="Pengelolaan Sampah">♻️ Pengelolaan Sampah</option>
                    <option value="Konservasi Air">💧 Konservasi Air</option>
                    <option value="Event">🎉 Event</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    URL Foto Gambar *
                  </label>
                  <input
                    type="url"
                    value={newItem.image}
                    onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Tahun Kegiatan *
                  </label>
                  <input
                    type="text"
                    value={newItem.year}
                    onChange={(e) => setNewItem({ ...newItem, year: e.target.value })}
                    placeholder="2025"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                    required
                  />
                </div>
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
                  Simpan & Publikasikan
                </Button>
              </div>
            </form>
          </Card>
        ) : (
          /* Gallery Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    {item.category}
                  </span>
                  <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur">
                    {item.year}
                  </span>
                </div>

                <div className="p-4 flex items-center justify-between gap-3 border-t border-gray-100 bg-white">
                  <h3 className="font-bold text-gray-900 text-sm truncate flex-1">{item.title}</h3>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 border-red-200 hover:bg-red-50 p-2 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}

            {items.length === 0 && (
              <div className="col-span-full bg-white p-12 rounded-2xl border border-dashed border-gray-300 text-center">
                <p className="text-gray-500 font-medium">Belum ada foto di galeri.</p>
                <Button onClick={() => setIsEditing(true)} className="mt-4 bg-emerald-600 text-white">
                  Upload Foto Pertama
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
