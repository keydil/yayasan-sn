import { Navbar } from '@/components/navbar';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Berita | Yayasan Sahabat Nusantara',
  description: 'Berita dan artikel terbaru tentang pelestarian lingkungan dan keberlanjutan Indonesia.',
};

const articles = [
  {
    id: 1,
    title: 'Teknologi Energi Terbarukan di Indonesia: Peluang dan Tantangan',
    excerpt: 'Indonesia memiliki potensi besar dalam pengembangan energi terbarukan. Artikel ini mengeksplorasi peluang dan tantangan implementasi energi surya dan angin di kepulauan Indonesia.',
    category: 'Energi',
    date: '15 April 2024',
    image: 'https://images.unsplash.com/photo-1509391366360-12001c361405?w=800&q=80',
  },
  {
    id: 2,
    title: 'Konservasi Laut: Melindungi Ekosistem Terumbu Karang',
    excerpt: 'Terumbu karang adalah ekosistem yang sangat penting namun terus terancam. Kami melakukan upaya konservasi laut yang inovatif untuk menjaga kelestarian terumbu karang Indonesia.',
    category: 'Konservasi',
    date: '12 April 2024',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80',
  },
  {
    id: 3,
    title: 'Pertanian Berkelanjutan: Masa Depan Petani Indonesia',
    excerpt: 'Pertanian berkelanjutan adalah kunci untuk meningkatkan kesejahteraan petani dan menjaga kelestarian lingkungan. Kami mendorong praktik pertanian yang ramah lingkungan dan menguntungkan ekonomi lokal.',
    category: 'Pertanian',
    date: '10 April 2024',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
  },
  {
    id: 4,
    title: 'Pendidikan Lingkungan: Membangun Generasi Sadar Lingkungan',
    excerpt: 'Pendidikan lingkungan memainkan peran krusial dalam membentuk kesadaran generasi muda tentang pentingnya pelestarian lingkungan.',
    category: 'Pendidikan',
    date: '8 April 2024',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
  },
  {
    id: 5,
    title: 'Ekonomi Sirkular: Mengubah Limbah Menjadi Aset',
    excerpt: 'Ekonomi sirkular adalah model ekonomi yang meminimalkan limbah dan memaksimalkan penggunaan sumber daya secara efisien.',
    category: 'Ekonomi',
    date: '5 April 2024',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
  },
  {
    id: 6,
    title: 'Dampak Perubahan Iklim terhadap Biodiversitas Indonesia',
    excerpt: 'Perubahan iklim global memiliki dampak signifikan terhadap biodiversitas Indonesia. Artikel ini membahas strategi adaptasi dan mitigasi yang diperlukan.',
    category: 'Iklim',
    date: '2 April 2024',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
  },
];

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-white">
 
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Berita & Artikel
          </h1>

          <p className="text-lg text-gray-600 text-balance">
            Perkembangan terkini, insight mendalam, dan artikel inspiratif tentang lingkungan dan keberlanjutan Indonesia.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/berita/${article.id}`}
                className="group block bg-white rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden shrink-0">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="text-emerald-600 text-sm font-semibold flex items-center gap-1 group-hover:text-emerald-700 mt-auto">
                    Baca Selengkapnya <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic Green Section */}
      <section className="bg-emerald-600 h-24 lg:h-32 w-full"></section>
    </main>
  );
}
