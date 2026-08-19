'use client';

import { Card } from '@/components/ui/card';
import { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, Image as ImageIcon, ChevronLeft, ChevronRight, Images, Video } from 'lucide-react';
import { dataService, GalleryItem } from '@/lib/supabase';

function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  return null;
}

function ModalCarousel({ images, title }: { images: string[]; title: string }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = useCallback(() => setActiveIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActiveIdx((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next]);

  return (
    <div className="bg-gray-950">
      {/* Main Image Display */}
      <div className="relative aspect-[16/9] bg-black flex items-center justify-center group overflow-hidden">
        <img
          key={activeIdx}
          src={images[activeIdx]}
          alt={`${title} - Foto ${activeIdx + 1}`}
          className="max-h-full max-w-full object-contain"
        />

        {/* Counter Badge */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
          {activeIdx + 1} / {images.length}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex gap-2 p-3 bg-gray-900 overflow-x-auto scrollbar-thin">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                idx === activeIdx
                  ? 'border-emerald-400 ring-2 ring-emerald-400/40 opacity-100 scale-105'
                  : 'border-transparent opacity-50 hover:opacity-90'
              }`}
            >
              <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function GaleriPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedYear, setSelectedYear] = useState('Semua');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    setLoading(true);
    const data = await dataService.getGallery();
    setGalleryItems(data);
    setLoading(false);
  };

  const years = ['Semua', ...Array.from(new Set(galleryItems.map((item) => item.year)))];

  const filteredItems =
    selectedYear === 'Semua' ? galleryItems : galleryItems.filter((item) => item.year === selectedYear);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Dokumentasi Aksi
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Galeri Foto Kegiatan
          </h1>

          <p className="text-lg text-gray-600 text-balance">
            Dokumentasi visual dari aksi nyata kami di lapangan untuk pelestarian lingkungan dan pemberdayaan masyarakat.
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

          {loading ? (
            <div className="text-center py-16">
              <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-gray-500 text-sm font-medium">Memuat foto galeri dari database...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const itemPhotos = Array.from(new Set([item.image, ...(item.images || [])].filter(Boolean)));
                return (
                  <Card
                    key={item.id}
                    className="overflow-hidden border-0 bg-white group cursor-pointer hover:shadow-lg transition-shadow rounded-2xl"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-emerald-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <ZoomIn className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      {itemPhotos.length > 1 && (
                        <div className="absolute top-3 right-3 bg-black/70 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur flex items-center gap-1">
                          <Images className="w-3.5 h-3.5" /> {itemPhotos.length} Foto
                        </div>
                      )}
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-500">{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{item.title}</h3>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          {!loading && filteredItems.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
              <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">Belum ada foto galeri.</p>
            </div>
          )}
        </div>
      </section>

      {/* Zoom / Carousel Popup Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-2">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                  {selectedItem.category}
                </span>
                <span className="text-sm text-gray-500">{selectedItem.year}</span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Carousel display for modal */}
            <ModalCarousel
              images={Array.from(new Set([selectedItem.image, ...(selectedItem.images || [])].filter(Boolean)))}
              title={selectedItem.title}
            />

            {/* Title / Caption & Video */}
            <div className="p-5 bg-white border-t border-gray-100 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">{selectedItem.title}</h3>

              {/* YouTube Video Player Embed if present */}
              {selectedItem.videoUrl && getYouTubeEmbedUrl(selectedItem.videoUrl) && (
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                    <Video className="w-4 h-4" /> Video Dokumentasi
                  </div>
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow">
                    <iframe
                      src={getYouTubeEmbedUrl(selectedItem.videoUrl)!}
                      title="Video Dokumentasi Galeri"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
