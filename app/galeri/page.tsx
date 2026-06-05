'use client';

import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Penanaman Pohon di Jawa Timur', category: 'Konservasi', year: '2024', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80' },
  { id: 2, title: 'Workshop Pertanian Hijau', category: 'Pendidikan', year: '2024', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80' },
  { id: 3, title: 'Restorasi Terumbu Karang', category: 'Konservasi Laut', year: '2024', image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80' },
  { id: 4, title: 'Instalasi Panel Surya Desa', category: 'Energi', year: '2023', image: 'https://images.unsplash.com/photo-1509391366360-12001c361405?w=800&q=80' },
  { id: 5, title: 'Edukasi Lingkungan di Sekolah', category: 'Pendidikan', year: '2023', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80' },
  { id: 6, title: 'Program Daur Ulang Komunitas', category: 'Ekonomi Sirkular', year: '2023', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80' },
  { id: 7, title: 'Survei Ekosistem Mangrove', category: 'Riset', year: '2022', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80' },
  { id: 8, title: 'Festival Lingkungan 2022', category: 'Event', year: '2022', image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80' },
  { id: 9, title: 'Pembersihan Pantai Bali', category: 'Aksi Nyata', year: '2022', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80' },
];

const years = ['Semua', '2024', '2023', '2022'];

export default function GaleriPage() {
  const [selectedYear, setSelectedYear] = useState('Semua');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedYear === 'Semua'
    ? galleryItems
    : galleryItems.filter(item => item.year === selectedYear);

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Galeri Foto
          </h1>

          <p className="text-lg text-gray-600 text-balance">
            Dokumentasi visual dari aksi nyata kami di lapangan untuk pelestarian lingkungan Indonesia.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Year Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedYear === year
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-300 hover:text-emerald-600'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden border-0 bg-white group cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-emerald-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              <p className="text-lg">Belum ada foto untuk tahun ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Zoom / Popup Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                  {selectedItem.category}
                </span>
                <span className="text-sm text-gray-500">{selectedItem.year}</span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Image Area */}
            <div className="aspect-video bg-gray-200 relative overflow-hidden">
              <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
            </div>

            {/* Caption */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Aesthetic Green Section */}
      <section className="bg-emerald-600 h-24 lg:h-32 w-full"></section>
    </main>
  );
}
