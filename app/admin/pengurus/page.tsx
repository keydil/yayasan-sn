'use client';

import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { dataService, PengurusItem } from '@/lib/supabase';
import { Users, Plus, Edit2, Trash2, ArrowLeft } from 'lucide-react';

export default function AdminPengurusPage() {
  const [list, setList] = useState<PengurusItem[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<PengurusItem>>({
    name: '',
    role: '',
    tier: 'pengurus',
  });

  useEffect(() => {
    loadPengurus();
  }, []);

  const loadPengurus = () => {
    setList(dataService.getPengurus());
  };

  const handleEdit = (item: PengurusItem) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus data pengurus ini?')) {
      dataService.deletePengurus(id);
      loadPengurus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentItem.name || !currentItem.role) return;

    dataService.savePengurus({
      id: currentItem.id,
      name: currentItem.name || '',
      role: currentItem.role || '',
      tier: currentItem.tier || 'pengurus',
    });

    setIsEditing(false);
    setCurrentItem({ name: '', role: '', tier: 'pengurus' });
    loadPengurus();
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'pembina':
        return <span className="bg-amber-100 text-amber-800 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">Pembina</span>;
      case 'pengawas':
        return <span className="bg-blue-100 text-blue-800 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">Pengawas</span>;
      case 'pengurus':
        return <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">Pengurus</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">Pelaksana Harian</span>;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" /> Organizational Structure
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Kelola Susunan Pengurus</h1>
            <p className="text-gray-500 text-sm mt-1">Ubah nama, jabatan, dan struktur Pembina, Pengawas, Pengurus, & Pelaksana Harian.</p>
          </div>
          {!isEditing && (
            <Button
              onClick={() => {
                setCurrentItem({ name: '', role: '', tier: 'pengurus' });
                setIsEditing(true);
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" /> Tambah Pengurus Baru
            </Button>
          )}
        </div>

        {/* Add/Edit Form */}
        {isEditing ? (
          <Card className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-200 shadow-lg">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {currentItem.id ? 'Edit Data Pengurus' : 'Tambah Pengurus / Pengawas / Pembina Baru'}
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
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Tingkat Kepengurusan (Tier) *
                  </label>
                  <select
                    value={currentItem.tier}
                    onChange={(e) => setCurrentItem({ ...currentItem, tier: e.target.value as any })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                  >
                    <option value="pembina">👑 Pembina</option>
                    <option value="pengawas">👁️ Pengawas</option>
                    <option value="pengurus">💼 Pengurus Harian</option>
                    <option value="pelaksana">🏃 Pelaksana Harian</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Nama Lengkap & Gelar *
                  </label>
                  <input
                    type="text"
                    value={currentItem.name}
                    onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                    placeholder="Contoh: Ir. Surjaman"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Jabatan *
                  </label>
                  <input
                    type="text"
                    value={currentItem.role}
                    onChange={(e) => setCurrentItem({ ...currentItem, role: e.target.value })}
                    placeholder="Contoh: Ketua Pembina / Direktur"
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
                  Simpan Perubahan
                </Button>
              </div>
            </form>
          </Card>
        ) : (
          /* Table of Officers */
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 text-lg">Daftar Pengurus Terdaftar ({list.length})</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-xs font-bold text-gray-500 uppercase border-b border-gray-200">
                    <th className="p-4 pl-6">Nama Lengkap</th>
                    <th className="p-4">Jabatan</th>
                    <th className="p-4">Tingkat</th>
                    <th className="p-4 pr-6 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {list.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-4 pl-6 font-bold text-gray-900">{item.name}</td>
                      <td className="p-4 text-gray-600 font-medium">{item.role}</td>
                      <td className="p-4">{getTierBadge(item.tier)}</td>
                      <td className="p-4 pr-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(item)}
                            className="text-emerald-700 border-emerald-200 hover:bg-emerald-50 text-xs p-2 rounded-lg"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 border-red-200 hover:bg-red-50 text-xs p-2 rounded-lg"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
