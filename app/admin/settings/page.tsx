'use client';

import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    organisasiNama: 'Yayasan Sahabat Nusantara',
    email: 'info@sahabat-nusantara.org',
    telepon: '+62 21 XXXX XXXX',
    alamat: 'Jakarta, Indonesia',
    websiteUrl: 'https://sahabat-nusantara.org',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (field: string, value: string) => {
    setSettings({ ...settings, [field]: value });
    setSaved(false);
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate save
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 500);
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Pengaturan</h1>
          <p className="text-gray-600 mt-2">Kelola informasi organisasi dan preferensi sistem</p>
        </div>

        {/* Organization Info */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Organisasi</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Nama Organisasi</label>
              <input
                type="text"
                value={settings.organisasiNama}
                onChange={(e) => handleChange('organisasiNama', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email Utama</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Nomor Telepon</label>
                <input
                  type="tel"
                  value={settings.telepon}
                  onChange={(e) => handleChange('telepon', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Alamat</label>
              <textarea
                value={settings.alamat}
                onChange={(e) => handleChange('alamat', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Website URL</label>
              <input
                type="url"
                value={settings.websiteUrl}
                onChange={(e) => handleChange('websiteUrl', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
              </Button>
              {saved && <span className="text-green-600 font-medium flex items-center">✓ Tersimpan</span>}
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Sistem</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Versi Sistem:</span>
                <span className="font-medium text-gray-900">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span>Database:</span>
                <span className="font-medium text-gray-900">Supabase (Ready)</span>
              </div>
              <div className="flex justify-between">
                <span>Status API:</span>
                <span className="font-medium text-green-600">✓ Aktif</span>
              </div>
              <div className="flex justify-between">
                <span>Terakhir Update:</span>
                <span className="font-medium text-gray-900">{new Date().toLocaleDateString('id-ID')}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Manajemen</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-gray-300 text-gray-700">
                📊 Backup Data
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 text-gray-700">
                🔄 Sinkronisasi
              </Button>
              <Button variant="outline" className="w-full justify-start border-red-300 text-red-600">
                🗑️ Clear Cache
              </Button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Keamanan</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Password</p>
                <p className="text-sm text-gray-600">Terakhir diubah 3 bulan lalu</p>
              </div>
              <Button variant="outline" className="border-emerald-600 text-emerald-600">
                Ubah Password
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">Nonaktif</p>
              </div>
              <Button variant="outline" className="border-emerald-600 text-emerald-600">
                Aktifkan
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link href="/admin/dashboard">
            <Button variant="outline" className="border-emerald-600 text-emerald-600">
              ← Kembali ke Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}
