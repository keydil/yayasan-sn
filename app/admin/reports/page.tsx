'use client';

import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ReportsPage() {
  const handleExportPDF = () => {
    window.print();
  };

  const handleExportCSV = () => {
    // Dummy CSV export
    const csv = `Nama,Email,Nomor HP,Divisi,Status,Tanggal Bergabung
Ahmad Hidayat,ahmad.hidayat@email.com,+62 812 3456 7890,Konservasi Hutan,Aktif,2024-01-15
Siti Nurhaliza,siti.nur@email.com,+62 821 9876 5432,Pendidikan Lingkungan,Aktif,2024-02-20
Budi Santoso,budi.santoso@email.com,+62 823 1111 2222,Energi Terbarukan,Aktif,2024-01-10
Maya Kusuma,maya.kusuma@email.com,+62 856 5555 6666,Pengelolaan Sampah,Menunggu Verifikasi,2024-03-05
Rendra Wijaya,rendra.wijaya@email.com,+62 877 7777 8888,Air Bersih,Aktif,2024-02-28`;

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `laporan-anggota-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Laporan & Analisis</h1>
          <p className="text-gray-600 mt-2">Kelola dan export laporan data anggota</p>
        </div>

        {/* Export Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
            <div className="text-4xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Laporan PDF</h2>
            <p className="text-gray-600 mb-6">Export data anggota dalam format PDF yang siap cetak.</p>
            <Button
              onClick={handleExportPDF}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
            >
              📥 Download PDF
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Laporan CSV</h2>
            <p className="text-gray-600 mb-6">Export data dalam format CSV untuk analisis di Excel atau tools lain.</p>
            <Button
              onClick={handleExportCSV}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
            >
              📥 Download CSV
            </Button>
          </div>
        </div>

        {/* Report Summary */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ringkasan Laporan</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg">
              <div className="text-3xl font-bold text-emerald-600">150</div>
              <p className="text-gray-600 text-sm mt-2">Total Anggota</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">120</div>
              <p className="text-gray-600 text-sm mt-2">Anggota Aktif</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <div className="text-3xl font-bold text-amber-600">20</div>
              <p className="text-gray-600 text-sm mt-2">Menunggu Verifikasi</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <div className="text-3xl font-bold text-gray-600">10</div>
              <p className="text-gray-600 text-sm mt-2">Nonaktif</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Data Divisi</h3>
            <div className="space-y-3">
              {[
                { name: 'Konservasi Hutan', count: 25, color: 'bg-green-100 text-green-800' },
                { name: 'Pendidikan Lingkungan', count: 30, color: 'bg-blue-100 text-blue-800' },
                { name: 'Energi Terbarukan', count: 20, color: 'bg-yellow-100 text-yellow-800' },
                { name: 'Pengelolaan Sampah', count: 25, color: 'bg-purple-100 text-purple-800' },
                { name: 'Air Bersih', count: 28, color: 'bg-cyan-100 text-cyan-800' },
                { name: 'Advokasi Kebijakan', count: 22, color: 'bg-pink-100 text-pink-800' },
              ].map((divisi) => (
                <div key={divisi.name} className="flex items-center justify-between">
                  <span className={`${divisi.color} px-3 py-1 rounded-full text-sm font-medium`}>
                    {divisi.name}
                  </span>
                  <span className="font-bold text-gray-900">{divisi.count} anggota</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link href="/admin/dashboard">
            <Button variant="outline" className="border-emerald-600 text-emerald-600">
              ← Kembali ke Dashboard Admin
            </Button>
          </Link>
        </div>

        {/* Print styles */}
        <style>{`
          @media print {
            button, a { display: none; }
          }
        `}</style>
      </div>
    </AdminLayout>
  );
}
