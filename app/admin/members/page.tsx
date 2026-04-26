'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AdminLayout } from '@/components/admin-layout';

interface Member {
  id: string;
  nama: string;
  email: string;
  nomor_hp: string;
  divisi: string;
  status: string;
  tanggal_bergabung: string;
}

// Dummy data - akan diganti dengan Supabase
const DUMMY_MEMBERS: Member[] = [
  {
    id: '1',
    nama: 'Ahmad Hidayat',
    email: 'ahmad.hidayat@email.com',
    nomor_hp: '+62 812 3456 7890',
    divisi: 'Konservasi Hutan',
    status: 'Aktif',
    tanggal_bergabung: '2024-01-15',
  },
  {
    id: '2',
    nama: 'Siti Nurhaliza',
    email: 'siti.nur@email.com',
    nomor_hp: '+62 821 9876 5432',
    divisi: 'Pendidikan Lingkungan',
    status: 'Aktif',
    tanggal_bergabung: '2024-02-20',
  },
  {
    id: '3',
    nama: 'Budi Santoso',
    email: 'budi.santoso@email.com',
    nomor_hp: '+62 823 1111 2222',
    divisi: 'Energi Terbarukan',
    status: 'Aktif',
    tanggal_bergabung: '2024-01-10',
  },
  {
    id: '4',
    nama: 'Maya Kusuma',
    email: 'maya.kusuma@email.com',
    nomor_hp: '+62 856 5555 6666',
    divisi: 'Pengelolaan Sampah',
    status: 'Menunggu Verifikasi',
    tanggal_bergabung: '2024-03-05',
  },
  {
    id: '5',
    nama: 'Rendra Wijaya',
    email: 'rendra.wijaya@email.com',
    nomor_hp: '+62 877 7777 8888',
    divisi: 'Air Bersih',
    status: 'Aktif',
    tanggal_bergabung: '2024-02-28',
  },
];

const DIVISI_OPTIONS = [
  'Konservasi Hutan',
  'Pendidikan Lingkungan',
  'Energi Terbarukan',
  'Pengelolaan Sampah',
  'Air Bersih',
  'Advokasi Kebijakan',
];

const STATUS_OPTIONS = ['Aktif', 'Menunggu Verifikasi', 'Nonaktif'];

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>(DUMMY_MEMBERS);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDivisi, setFilterDivisi] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    nomor_hp: '',
    divisi: '',
    status: 'Aktif',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nama.trim()) newErrors.nama = 'Nama harus diisi';
    if (!formData.email.trim()) newErrors.email = 'Email harus diisi';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email tidak valid';
    }
    if (!formData.nomor_hp.trim()) newErrors.nomor_hp = 'Nomor HP harus diisi';
    if (!formData.divisi) newErrors.divisi = 'Divisi harus dipilih';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddMember = () => {
    if (!validateForm()) return;

    const newMember: Member = {
      id: Date.now().toString(),
      ...formData,
      tanggal_bergabung: new Date().toISOString().split('T')[0],
    };

    setMembers([...members, newMember]);
    setFormData({ nama: '', email: '', nomor_hp: '', divisi: '', status: 'Aktif' });
    setShowForm(false);
    setErrors({});
  };

  const handleUpdateMember = () => {
    if (!validateForm() || !editingId) return;

    setMembers(
      members.map((m) =>
        m.id === editingId
          ? { ...m, ...formData }
          : m
      )
    );
    setFormData({ nama: '', email: '', nomor_hp: '', divisi: '', status: 'Aktif' });
    setEditingId(null);
    setShowForm(false);
    setErrors({});
  };

  const handleEdit = (member: Member) => {
    setFormData({
      nama: member.nama,
      email: member.email,
      nomor_hp: member.nomor_hp,
      divisi: member.divisi,
      status: member.status,
    });
    setEditingId(member.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus anggota ini?')) {
      setMembers(members.filter((m) => m.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ nama: '', email: '', nomor_hp: '', divisi: '', status: 'Aktif' });
    setErrors({});
  };

  const handlePrint = () => {
    window.print();
  };

  // Filter members
  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDivisi = !filterDivisi || member.divisi === filterDivisi;
    const matchesStatus = !filterStatus || member.status === filterStatus;

    return matchesSearch && matchesDivisi && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Manajemen Anggota</h1>
            <p className="text-gray-600 mt-2">Kelola data anggota organisasi</p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handlePrint}
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 no-print"
            >
              🖨️ Cetak Laporan
            </Button>
            <Button
              onClick={() => setShowForm(!showForm)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white no-print"
            >
              {showForm ? 'Tutup Form' : '+ Tambah Anggota'}
            </Button>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 no-print">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingId ? 'Edit Anggota' : 'Tambah Anggota Baru'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nama */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => {
                    setFormData({ ...formData, nama: e.target.value });
                    if (errors.nama) setErrors({ ...errors, nama: '' });
                  }}
                  placeholder="Masukkan nama lengkap"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                    errors.nama ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.nama && <p className="text-red-600 text-sm mt-1">{errors.nama}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="email@example.com"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Nomor HP */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Nomor HP *
                </label>
                <input
                  type="tel"
                  value={formData.nomor_hp}
                  onChange={(e) => {
                    setFormData({ ...formData, nomor_hp: e.target.value });
                    if (errors.nomor_hp) setErrors({ ...errors, nomor_hp: '' });
                  }}
                  placeholder="+62 8XX XXXX XXXX"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                    errors.nomor_hp ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.nomor_hp && <p className="text-red-600 text-sm mt-1">{errors.nomor_hp}</p>}
              </div>

              {/* Divisi */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Divisi *
                </label>
                <select
                  value={formData.divisi}
                  onChange={(e) => {
                    setFormData({ ...formData, divisi: e.target.value });
                    if (errors.divisi) setErrors({ ...errors, divisi: '' });
                  }}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                    errors.divisi ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Pilih Divisi</option>
                  {DIVISI_OPTIONS.map((div) => (
                    <option key={div} value={div}>
                      {div}
                    </option>
                  ))}
                </select>
                {errors.divisi && <p className="text-red-600 text-sm mt-1">{errors.divisi}</p>}
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-3 mt-8">
              <Button
                onClick={editingId ? handleUpdateMember : handleAddMember}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                {editingId ? 'Update Anggota' : 'Tambah Anggota'}
              </Button>
              <Button
                onClick={handleCancel}
                variant="outline"
                className="border-gray-300 text-gray-700"
              >
                Batal
              </Button>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 no-print space-y-4">
          <h3 className="font-semibold text-gray-900">Filter Data</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Cari Nama atau Email
              </label>
              <input
                type="text"
                placeholder="Cari..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Divisi
              </label>
              <select
                value={filterDivisi}
                onChange={(e) => setFilterDivisi(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option value="">Semua Divisi</option>
                {DIVISI_OPTIONS.map((div) => (
                  <option key={div} value={div}>
                    {div}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option value="">Semua Status</option>
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Members Table */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nama</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nomor HP</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Divisi</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Bergabung</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 no-print">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{member.nama}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{member.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{member.nomor_hp}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                          {member.divisi}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            member.status === 'Aktif'
                              ? 'bg-green-100 text-green-800'
                              : member.status === 'Menunggu Verifikasi'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {member.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(member.tanggal_bergabung).toLocaleDateString('id-ID')}
                      </td>
                      <td className="px-6 py-4 text-sm text-right no-print">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => handleEdit(member)}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(member.id)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-600">
                      Tidak ada anggota yang ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
            <p>
              Menampilkan <strong>{filteredMembers.length}</strong> dari <strong>{members.length}</strong> anggota
            </p>
          </div>
        </div>

        {/* Print Styles */}
        <style>{`
          @media print {
            .no-print {
              display: none !important;
            }
            body {
              background: white;
            }
            table {
              font-size: 11px;
            }
            th, td {
              padding: 8px !important;
            }
          }
        `}</style>
      </div>
    </AdminLayout>
  );
}
