'use client';

import { useState } from 'react';
import { Member, Divisi, MemberStatus } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface MembersListProps {
  members: Member[];
  onEdit: (member: Member) => void;
  onDelete: (id: string) => Promise<void>;
  onPrint: () => void;
  isLoading?: boolean;
}

const DIVISI_COLORS: Record<Divisi, string> = {
  'Operasional': 'bg-blue-100 text-blue-800',
  'Pendidikan': 'bg-green-100 text-green-800',
  'Pemasaran': 'bg-purple-100 text-purple-800',
  'Keuangan': 'bg-yellow-100 text-yellow-800',
  'Riset & Pengembangan': 'bg-pink-100 text-pink-800',
  'Keberlanjutan': 'bg-emerald-100 text-emerald-800',
};

const STATUS_COLORS: Record<MemberStatus, string> = {
  'Aktif': 'bg-green-100 text-green-800',
  'Tidak Aktif': 'bg-gray-100 text-gray-800',
  'Pending': 'bg-yellow-100 text-yellow-800',
};

export function MembersList({
  members,
  onEdit,
  onDelete,
  onPrint,
  isLoading,
}: MembersListProps) {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [filterDivisi, setFilterDivisi] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');

  const handlePrintClick = () => {
    // Add print styles dynamically
    const printStyle = document.createElement('style');
    printStyle.innerHTML = `
      @media print {
        header, nav, button, .no-print { display: none !important; }
        body { background: white; }
        table { width: 100%; }
        th { background: #f3f4f6; padding: 12px; text-align: left; font-weight: 600; border-bottom: 2px solid #d1d5db; }
        td { padding: 10px 12px; border-bottom: 1px solid #e5e7eb; }
      }
    `;
    document.head.appendChild(printStyle);
    
    window.print();
    
    // Clean up
    setTimeout(() => document.head.removeChild(printStyle), 100);
  };

  const filteredMembers = members.filter((member) => {
    if (filterDivisi && member.divisi !== filterDivisi) return false;
    if (filterStatus && member.status !== filterStatus) return false;
    return true;
  });

  const handleDelete = async (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus anggota ini?')) {
      await onDelete(id);
      setDeleteId(null);
    }
  };

  const divisiOptions: Divisi[] = [
    'Operasional',
    'Pendidikan',
    'Pemasaran',
    'Keuangan',
    'Riset & Pengembangan',
    'Keberlanjutan',
  ];

  const statusOptions: MemberStatus[] = ['Aktif', 'Tidak Aktif', 'Pending'];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Filter Divisi
            </label>
            <select
              value={filterDivisi}
              onChange={(e) => setFilterDivisi(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="">Semua Divisi</option>
              {divisiOptions.map((divisi) => (
                <option key={divisi} value={divisi}>
                  {divisi}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Filter Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="">Semua Status</option>
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-2 items-end">
          <Button
            onClick={handlePrintClick}
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 no-print"
          >
            🖨️ Cetak Laporan
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="bg-white border-0 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500">
            Memuat data anggota...
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            Tidak ada anggota yang ditemukan
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Nama
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Divisi
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-right text-sm font-semibold text-gray-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member, index) => (
                  <tr
                    key={member.id}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 sm:px-6 py-4 text-sm text-gray-900 font-medium">
                      {member.nama}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-gray-600">
                      {member.email}
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${DIVISI_COLORS[member.divisi]}`}>
                        {member.divisi}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[member.status]}`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-right space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onEdit(member)}
                        className="text-blue-600 hover:bg-blue-50"
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(member.id)}
                        className="text-red-600 hover:bg-red-50"
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Summary */}
      <div className="text-sm text-gray-600">
        Menampilkan <strong>{filteredMembers.length}</strong> dari <strong>{members.length}</strong> anggota
      </div>
    </div>
  );
}
