import { Navbar } from '@/components/navbar';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

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
    image: '🌞',
    content: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 2,
    title: 'Konservasi Laut: Melindungi Ekosistem Terumbu Karang',
    excerpt: 'Terumbu karang adalah ekosistem yang sangat penting namun terus terancam. Kami melakukan upaya konservasi laut yang inovatif untuk menjaga kelestarian terumbu karang Indonesia.',
    category: 'Konservasi',
    date: '12 April 2024',
    image: '🐠',
    content: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 3,
    title: 'Pertanian Berkelanjutan: Masa Depan Petani Indonesia',
    excerpt: 'Pertanian berkelanjutan adalah kunci untuk meningkatkan kesejahteraan petani dan menjaga kelestarian lingkungan. Kami mendorong praktik pertanian yang ramah lingkungan dan menguntungkan ekonomi lokal.',
    category: 'Pertanian',
    date: '10 April 2024',
    image: '🌾',
    content: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 4,
    title: 'Pendidikan Lingkungan: Membangun Generasi Sadar Lingkungan',
    excerpt: 'Pendidikan lingkungan memainkan peran krusial dalam membentuk kesadaran generasi muda tentang pentingnya pelestarian lingkungan.',
    category: 'Pendidikan',
    date: '8 April 2024',
    image: '🎓',
    content: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 5,
    title: 'Ekonomi Sirkular: Mengubah Limbah Menjadi Aset',
    excerpt: 'Ekonomi sirkular adalah model ekonomi yang meminimalkan limbah dan memaksimalkan penggunaan sumber daya secara efisien.',
    category: 'Ekonomi',
    date: '5 April 2024',
    image: '♻️',
    content: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 6,
    title: 'Dampak Perubahan Iklim terhadap Biodiversitas Indonesia',
    excerpt: 'Perubahan iklim global memiliki dampak signifikan terhadap biodiversitas Indonesia. Artikel ini membahas strategi adaptasi dan mitigasi yang diperlukan.',
    category: 'Iklim',
    date: '1 April 2024',
    image: '🌍',
    content: 'Lorem ipsum dolor sit amet...',
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
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-white flex flex-col"
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-6xl sm:text-7xl">
                  {article.image}
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 text-balance">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2 flex-grow">
                    {article.excerpt}
                  </p>

                  <Link href={`/berita/${article.id}`}>
                    <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm sm:text-base">
                      Baca Selengkapnya →
                    </button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
              Berlangganan Newsletter
            </h2>

            <p className="text-lg text-emerald-50 text-balance">
              Dapatkan berita dan artikel terbaru langsung ke email Anda.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
