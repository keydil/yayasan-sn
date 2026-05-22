import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Galeri | Yayasan Sahabat Nusantara',
  description: 'Dokumentasi visual kegiatan dan program pelestarian lingkungan Yayasan Sahabat Nusantara.',
};

const galleryItems = [
  { id: 1, title: 'Penanaman Pohon di Jawa Timur', category: 'Konservasi' },
  { id: 2, title: 'Workshop Pertanian Hijau', category: 'Pendidikan' },
  { id: 3, title: 'Restorasi Terumbu Karang', category: 'Konservasi Laut' },
  { id: 4, title: 'Instalasi Panel Surya Desa', category: 'Energi' },
  { id: 5, title: 'Edukasi Lingkungan di Sekolah', category: 'Pendidikan' },
  { id: 6, title: 'Program Daur Ulang Komunitas', category: 'Ekonomi Sirkular' },
  { id: 7, title: 'Survei Ekosistem Mangrove', category: 'Riset' },
  { id: 8, title: 'Festival Lingkungan 2024', category: 'Event' },
  { id: 9, title: 'Pembersihan Pantai Bali', category: 'Aksi Nyata' },
];

export default function GaleriPage() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden border-0 bg-white group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="text-sm">Foto Kegiatan</span>
                  </div>
                  <div className="absolute inset-0 bg-emerald-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic Green Section */}
      <section className="bg-emerald-600 h-24 lg:h-32 w-full"></section>
    </main>
  );
}
