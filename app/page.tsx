import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase, CalendarCheck, Handshake, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Beranda | Yayasan Sahabat Nusantara',
  description: 'Organisasi lingkungan terdepan di Indonesia untuk pelestarian alam dan keberlanjutan.',
};

const impactStats = [
  { label: 'Bidang Kegiatan', icon: 'briefcase', color: 'bg-emerald-50 text-emerald-700' },
  { label: 'Kegiatan', icon: 'calendar', color: 'bg-amber-50 text-amber-700' },
  { label: 'Afiliasi', icon: 'handshake', color: 'bg-purple-50 text-purple-700' },
];

const iconMap: Record<string, React.ReactNode> = {
  briefcase: <Briefcase className="w-12 h-12" />,
  calendar: <CalendarCheck className="w-12 h-12" />,
  handshake: <Handshake className="w-12 h-12" />,
};

const programs = [
  {
    title: 'Konservasi Hutan',
    slug: 'konservasi-hutan',
    description: 'Program penanaman pohon dan pelestarian ekosistem hutan di berbagai wilayah Indonesia.',
    icon: '🌲',
    impact: '50K+ pohon ditanam',
  },
  {
    title: 'Pendidikan Lingkungan',
    slug: 'pendidikan-lingkungan',
    description: 'Workshop dan pelatihan untuk meningkatkan kesadaran lingkungan di sekolah dan komunitas.',
    icon: '📚',
    impact: '10K+ peserta',
  },
  {
    title: 'Energi Terbarukan',
    slug: 'energi-terbarukan',
    description: 'Inisiatif transisi energi menuju sumber energi bersih dan berkelanjutan.',
    icon: '⚡',
    impact: '25 lokasi',
  },
  {
    title: 'Pengelolaan Sampah',
    slug: 'ekonomi-sirkular',
    description: 'Program daur ulang dan pengurangan sampah untuk komunitas urban dan pedesaan.',
    icon: '♻️',
    impact: '500+ ton',
  },
  {
    title: 'Air Bersih',
    slug: 'konservasi-hutan', // Note: Ideally we'd have a dedicated slug for this, using a fallback for now.
    description: 'Akses air bersih dan sanitasi untuk desa-desa terpencil di seluruh Indonesia.',
    icon: '💧',
    impact: '30 desa',
  },
  {
    title: 'Advokasi Kebijakan',
    slug: 'pendidikan-lingkungan', // Note: Fallback slug
    description: 'Kampanye advokasi untuk perubahan kebijakan lingkungan yang lebih progresif.',
    icon: '🏛️',
    impact: '15 inisiatif',
  },
];

const articles = [
  {
    id: 1,
    title: 'Teknologi Energi Terbarukan di Indonesia: Peluang dan Tantangan',
    excerpt: 'Indonesia memiliki potensi besar dalam pengembangan energi terbarukan. Artikel ini mengeksplorasi peluang dan tantangan implementasi energi surya dan angin di kepulauan Indonesia.',
    date: '15 April 2024',
    category: 'Energi',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
  },
  {
    id: 2,
    title: 'Konservasi Laut: Melindungi Ekosistem Terumbu Karang',
    excerpt: 'Terumbu karang adalah ekosistem yang sangat penting namun terus terancam. Kami melakukan upaya konservasi laut yang inovatif untuk menjaga kelestarian terumbu karang Indonesia.',
    date: '12 April 2024',
    category: 'Konservasi',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80',
  },
  {
    id: 3,
    title: 'Pertanian Berkelanjutan: Masa Depan Petani Indonesia',
    excerpt: 'Pertanian berkelanjutan adalah kunci untuk meningkatkan kesejahteraan petani dan menjaga kelestarian lingkungan. Kami mendorong praktik pertanian yang ramah lingkungan dan menguntungkan ekonomi lokal.',
    date: '10 April 2024',
    category: 'Pertanian',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
  },
  {
    id: 4,
    title: 'Pendidikan Lingkungan: Membangun Generasi Sadar Lingkungan',
    excerpt: 'Pendidikan lingkungan memainkan peran krusial dalam membentuk kesadaran generasi muda tentang pentingnya pelestarian lingkungan.',
    date: '8 April 2024',
    category: 'Pendidikan',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
  },
  {
    id: 5,
    title: 'Ekonomi Sirkular: Mengubah Limbah Menjadi Aset',
    excerpt: 'Ekonomi sirkular adalah model ekonomi yang meminimalkan limbah dan memaksimalkan penggunaan sumber daya secara efisien.',
    date: '5 April 2024',
    category: 'Ekonomi',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
  },
  {
    id: 6,
    title: 'Dampak Perubahan Iklim terhadap Biodiversitas Indonesia',
    excerpt: 'Perubahan iklim global memiliki dampak signifikan terhadap biodiversitas Indonesia. Artikel ini membahas strategi adaptasi dan mitigasi yang diperlukan.',
    date: '2 April 2024',
    category: 'Iklim',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
  },
];

const testimonials = [
  {
    name: 'Ibu Siti Nurhaliza',
    role: 'Kepala Desa, Jawa Barat',
    quote: 'Program Yayasan Sahabat Nusantara telah mengubah cara kami menjaga lingkungan. Kualitas air di desa kami meningkat signifikan.',
  },
  {
    name: 'Pak Ahmad Dahlan',
    role: 'Pemilik UMKM Energi Terbarukan',
    quote: 'Dukungan dan pelatihan dari tim mereka membuat bisnis saya lebih berkelanjutan dan menguntungkan.',
  },
  {
    name: 'Maya Kusuma',
    role: 'Pelajar, Jakarta',
    quote: 'Workshop mereka menginspirasi saya untuk memulai gerakan daur ulang di sekolah. Kini kami mengurangi sampah 60%!',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 text-balance leading-tight">
              Bersama Menjaga Kelestarian <span className="text-emerald-600">Alam Indonesia</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Yayasan Sahabat Nusantara berkomitmen untuk pelestarian lingkungan dan pembangunan berkelanjutan melalui program-program inovatif dan melibatkan komunitas lokal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/program">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg rounded-lg">
                  Jelajahi Program Kami
                </Button>
              </Link>
              <Link href="/tentang">
                <Button variant="outline" className="px-8 py-3 text-lg rounded-lg border-emerald-600 text-emerald-600">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Dampak Nyata Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStats.map((stat, idx) => (
              <div
                key={idx}
                className={`${stat.color} p-8 rounded-2xl text-center transform hover:scale-105 transition-transform flex flex-col items-center gap-4`}
              >
                <div className="opacity-80">{iconMap[stat.icon]}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Program-Program Unggulan</h2>
              <p className="text-xl text-gray-600">Inisiatif nyata untuk masa depan yang lebih hijau dan berkelanjutan</p>
            </div>
            <Link href="/program" className="group flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors whitespace-nowrap">
              Jelajahi Program <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <Link key={idx} href={`/program/${program.slug}`} className="group block h-full bg-white rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="p-8 h-full flex flex-col">
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{program.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium">
                      {program.impact}
                    </div>
                    <span className="text-emerald-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Detail <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>


        </div>
      </section>

      {/* Latest Articles & Gallery */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Articles */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Artikel & Berita</h2>
                  <p className="text-lg lg:text-xl text-gray-600">Tetap update dengan perkembangan lingkungan</p>
                </div>
                <Link href="/berita" className="group flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors whitespace-nowrap">
                  Lihat Semua <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-6">
                {articles.slice(0, 3).map((article) => (
                  <Link key={article.id} href={`/berita/${article.id}`} className="group block bg-white rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-48 sm:h-auto bg-gray-200 shrink-0 relative overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow">{article.excerpt}</p>
                      <div className="text-emerald-600 text-sm font-semibold flex items-center gap-1 group-hover:text-emerald-700 mt-auto">
                        Baca Selengkapnya <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>


            </div>

            {/* Right Column: Gallery */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Galeri Foto</h2>
                  <p className="text-lg lg:text-xl text-gray-600">Dokumentasi aksi nyata kami di lapangan</p>
                </div>
                <Link href="/galeri" className="group flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors whitespace-nowrap">
                  Lihat Galeri <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative group">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium">Lihat Foto</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-emerald-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Testimoni</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic Green Section */}
      <section className="bg-emerald-600 h-24 lg:h-32 w-full"></section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Tentang Kami</h4>
              <p className="text-sm">Organisasi lingkungan terdepan yang berdedikasi untuk pelestarian alam Indonesia.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Program</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/program" className="hover:text-white">Konservasi Hutan</Link></li>
                <li><Link href="/program" className="hover:text-white">Energi Terbarukan</Link></li>
                <li><Link href="/program" className="hover:text-white">Pendidikan</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legalitas</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:text-white cursor-default">SK Kemenkumham</span></li>
                <li><span className="hover:text-white cursor-default">NPWP Yayasan</span></li>
                <li><span className="hover:text-white cursor-default">Akta Pendirian</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Kontak</h4>
              <p className="text-sm">Email: info@sahabat-nusantara.org<br/>Telepon: +62 21 XXXX XXXX</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Yayasan Sahabat Nusantara. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
