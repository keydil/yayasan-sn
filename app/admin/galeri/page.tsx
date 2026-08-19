'use client';

import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { dataService, GalleryItem } from '@/lib/supabase';
import { ImageUpload } from '@/components/ui/image-upload';
import { MultiImageUpload } from '@/components/ui/multi-image-upload';
import { VideoUpload } from '@/components/ui/video-upload';
import { Plus, Edit2, Trash2, Image as ImageIcon, ArrowLeft, Images, Video } from 'lucide-react';

export default function AdminGaleriPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState<Partial<GalleryItem>>({
    title: '',
    category: 'Penghijauan',
    year: new Date().getFullYear().toString(),
    image: '',
    images: [],
  });

  useEffect(() => { loadGallery(); }, []);

  const loadGallery = async () => {
    setLoading(true);
    const data = await dataService.getGallery();
    setItems(data);
    setLoading(false);
  };

  const handleEdit = (item: GalleryItem) => {
    setNewItem({
      id: item.id,
      title: item.title,
      category: item.category,
      year: item.year,
      image: item.image,
      images: item.images || [],
      videoUrl: item.videoUrl || '',
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus foto galeri ini?')) {
      setLoading(true);
      await dataService.deleteGalleryItem(id);
      await loadGallery();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.title || !newItem.image) return;

    setLoading(true);
    await dataService.saveGalleryItem({
      id: newItem.id,
      title: newItem.title || '',
      category: newItem.category || 'Penghijauan',
      year: newItem.year || '2025',
      image: newItem.image || '',
      images: newItem.images || [],
      videoUrl: newItem.videoUrl || '',
    });

    setIsEditing(false);
    setNewItem({ title: '', category: 'Penghijauan', year: new Date().getFullYear().toString(), image: '', images: [], videoUrl: '' });
    await loadGallery();
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

        {/* Add / Edit Form */}
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
                  <ImageUpload
                    value={newItem.image || ''}
                    onChange={(val) => setNewItem({ ...newItem, image: val })}
                    label="Foto Cover Galeri (Utama) *"
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

              {/* Multi-image upload */}
              <div>
                <MultiImageUpload
                  value={newItem.images || []}
                  onChange={(vals) => setNewItem({ ...newItem, images: vals })}
                  label="Foto Dokumentasi Tambahan"
                />
              </div>

              <div>
                <VideoUpload
                  value={newItem.videoUrl || ''}
                  onChange={(val) => setNewItem({ ...newItem, videoUrl: val })}
                  label="Video Dokumentasi Kegiatan"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <Button type="button" variant="outline" onClick={() => setIsEditing(false)} className="border-gray-200 text-gray-600 hover:bg-gray-50">
                  Batal
                </Button>
                <Button type="submit" disabled={loading} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-md">
                  {loading ? 'Menyimpan...' : 'Simpan & Publikasikan'}
                </Button>
              </div>
            </form>
          </Card>
        ) : (
          <div>
            {loading ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
                <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <p className="text-gray-500 text-sm font-medium">Memuat data galeri...</p>
              </div>
            ) : (
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
                      {item.images && item.images.length > 0 && (
                        <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-full backdrop-blur flex items-center gap-1">
                          <Images className="w-3 h-3" /> +{item.images.length}
                        </span>
                      )}
                    </div>
                    <div className="p-4 flex items-center justify-between gap-2 border-t border-gray-100 bg-white">
                      <h3 className="font-bold text-gray-900 text-sm truncate flex-1">{item.title}</h3>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(item)}
                          className="text-emerald-700 border-emerald-200 hover:bg-emerald-50 p-2 rounded-lg"
                          title="Edit Foto & Dokumentasi"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 border-red-200 hover:bg-red-50 p-2 rounded-lg"
                          title="Hapus"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
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
        )}
      </div>
    </AdminLayout>
  );
}
