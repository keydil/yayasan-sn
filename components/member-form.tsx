'use client';

import { useState, useEffect } from 'react';
import { Member, Divisi, MemberStatus, CreateMemberInput } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface MemberFormProps {
  member?: Member;
  onSubmit: (data: CreateMemberInput) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

const DIVISI_OPTIONS: Divisi[] = [
  'Operasional',
  'Pendidikan',
  'Pemasaran',
  'Keuangan',
  'Riset & Pengembangan',
  'Keberlanjutan',
];

const STATUS_OPTIONS: MemberStatus[] = ['Aktif', 'Tidak Aktif', 'Pending'];

export function MemberForm({
  member,
  onSubmit,
  onCancel,
  isLoading,
}: MemberFormProps) {
  const [formData, setFormData] = useState<CreateMemberInput>({
    nama: '',
    email: '',
    divisi: 'Operasional',
    status: 'Pending',
    nomor_hp: '',
    alamat: '',
    catatan: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (member) {
      setFormData({
        nama: member.nama,
        email: member.email,
        divisi: member.divisi,
        status: member.status,
        nomor_hp: member.nomor_hp || '',
        alamat: member.alamat || '',
        catatan: member.catatan || '',
      });
    }
  }, [member]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama harus diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.divisi) {
      newErrors.divisi = 'Divisi harus dipilih';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (validateForm()) {
      try {
        await onSubmit(formData);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <Card className="bg-white border-0 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {member ? 'Edit Anggota' : 'Tambah Anggota Baru'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nama */}
          <div>
            <label htmlFor="nama" className="block text-sm font-medium text-gray-900 mb-2">
              Nama Lengkap *
            </label>
            <input
              id="nama"
              name="nama"
              type="text"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                errors.nama ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isLoading}
            />
            {errors.nama && (
              <p className="text-red-600 text-sm mt-1">{errors.nama}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@contoh.com"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Divisi */}
          <div>
            <label htmlFor="divisi" className="block text-sm font-medium text-gray-900 mb-2">
              Divisi *
            </label>
            <select
              id="divisi"
              name="divisi"
              value={formData.divisi}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                errors.divisi ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isLoading}
            >
              {DIVISI_OPTIONS.map((divisi) => (
                <option key={divisi} value={divisi}>
                  {divisi}
                </option>
              ))}
            </select>
            {errors.divisi && (
              <p className="text-red-600 text-sm mt-1">{errors.divisi}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-900 mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status || 'Pending'}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              disabled={isLoading}
            >
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Nomor HP */}
          <div>
            <label htmlFor="nomor_hp" className="block text-sm font-medium text-gray-900 mb-2">
              Nomor Telepon
            </label>
            <input
              id="nomor_hp"
              name="nomor_hp"
              type="tel"
              value={formData.nomor_hp || ''}
              onChange={handleChange}
              placeholder="08123456789"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              disabled={isLoading}
            />
          </div>

          {/* Alamat */}
          <div>
            <label htmlFor="alamat" className="block text-sm font-medium text-gray-900 mb-2">
              Alamat
            </label>
            <input
              id="alamat"
              name="alamat"
              type="text"
              value={formData.alamat || ''}
              onChange={handleChange}
              placeholder="Alamat lengkap"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Catatan */}
        <div>
          <label htmlFor="catatan" className="block text-sm font-medium text-gray-900 mb-2">
            Catatan
          </label>
          <textarea
            id="catatan"
            name="catatan"
            value={formData.catatan || ''}
            onChange={handleChange}
            placeholder="Catatan atau informasi tambahan"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            disabled={isLoading}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-end pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isLoading}
          >
            Batal
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            {isLoading ? 'Sedang menyimpan...' : member ? 'Simpan Perubahan' : 'Tambah Anggota'}
          </Button>
        </div>
      </form>

      <p className="text-xs text-gray-500 mt-4">
        * Kolom yang wajib diisi
      </p>
    </Card>
  );
}
