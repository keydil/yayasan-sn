'use client';

import { Button } from '@/components/ui/button';
import { AdminLayout } from '@/components/admin-layout';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Ringkasan Dashboard</h1>
          <p className="text-gray-600 mt-2">Selamat datang di Portal Admin Yayasan Sahabat Nusantara</p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold text-emerald-600 mb-2">150+</div>
            <p className="text-gray-600 font-medium">Total Anggota</p>
            <p className="text-sm text-gray-500 mt-2">Anggota terdaftar dalam organisasi</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold text-blue-600 mb-2">120</div>
            <p className="text-gray-600 font-medium">Anggota Aktif</p>
            <p className="text-sm text-gray-500 mt-2">Anggota dengan status aktif</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold text-amber-600 mb-2">25</div>
            <p className="text-gray-600 font-medium">Program Berjalan</p>
            <p className="text-sm text-gray-500 mt-2">Program aktif saat ini</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold text-purple-600 mb-2">6</div>
            <p className="text-gray-600 font-medium">Divisi Aktif</p>
            <p className="text-sm text-gray-500 mt-2">Divisi dalam organisasi</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Akses Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/admin/members">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg rounded-lg">
                Kelola Anggota
              </Button>
            </Link>
            <Link href="/admin/members?tab=reports">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-lg">
                Laporan
              </Button>
            </Link>
            <Link href="/admin/members?tab=settings">
              <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-6 text-lg rounded-lg">
                Pengaturan
              </Button>
            </Link>
          </div>
        </div>

        {/* Usage Guide */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Panduan Penggunaan</h2>
          <div className="space-y-4 text-gray-700">
            <p>Portal Admin memungkinkan Anda untuk mengelola data anggota organisasi dengan mudah:</p>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li><strong>Kelola Anggota:</strong> Lihat, tambah, edit, dan hapus data anggota dengan form terstruktur</li>
              <li><strong>Filter Data:</strong> Cari anggota berdasarkan nama, divisi, atau status</li>
              <li><strong>Cetak Laporan:</strong> Generate laporan anggota dalam format printable</li>
              <li><strong>Validasi Form:</strong> Semua input form tervalidasi untuk menjaga integritas data</li>
              <li><strong>Supabase Ready:</strong> Sistem siap dikoneksi ke Supabase untuk data persistent</li>
            </ul>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8 border border-emerald-200">
            <h3 className="text-lg font-bold text-emerald-900 mb-4">Status Sistem</h3>
            <div className="space-y-2 text-sm text-emerald-800">
              <p>✓ Database Backend: Siap (Dummy Data)</p>
              <p>✓ Form Validation: Aktif</p>
              <p>✓ Print Features: Aktif</p>
              <p>✓ Supabase Integration: Ready</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Tips & Trik</h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p>• Gunakan filter untuk mencari anggota spesifik dengan cepat</p>
              <p>• Cetak laporan menggunakan fitur browser print (Ctrl+P)</p>
              <p>• Validasi form memastikan data berkualitas</p>
              <p>• Sidebar memberi akses mudah ke semua menu utama</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
