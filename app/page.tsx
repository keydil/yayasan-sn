import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Beranda | Yayasan Sahabat Nusantara',
  description: 'Organisasi lingkungan terdepan di Indonesia untuk pelestarian alam dan keberlanjutan.',
};

const impactStats = [
  { number: '150+', label: 'Anggota Aktif', color: 'bg-emerald-50 text-emerald-700' },
  { number: '50,000+', label: 'Pohon Ditanam', color: 'bg-blue-50 text-blue-700' },
  { number: '25', label: 'Program Berjalan', color: 'bg-amber-50 text-amber-700' },
  { number: '6', label: 'Divisi Aktif', color: 'bg-purple-50 text-purple-700' },
];

const programs = [
  {
    title: 'Konservasi Hutan',
    description: 'Program penanaman pohon dan pelestarian ekosistem hutan di berbagai wilayah Indonesia.',
    icon: '🌲',
    impact: '50K+ pohon ditanam',
  },
  {
    title: 'Pendidikan Lingkungan',
    description: 'Workshop dan pelatihan untuk meningkatkan kesadaran lingkungan di sekolah dan komunitas.',
    icon: '📚',
    impact: '10K+ peserta',
  },
  {
    title: 'Energi Terbarukan',
    description: 'Inisiatif transisi energi menuju sumber energi bersih dan berkelanjutan.',
    icon: '⚡',
    impact: '25 lokasi',
  },
  {
    title: 'Pengelolaan Sampah',
    description: 'Program daur ulang dan pengurangan sampah untuk komunitas urban dan pedesaan.',
    icon: '♻️',
    impact: '500+ ton',
  },
  {
    title: 'Air Bersih',
    description: 'Akses air bersih dan sanitasi untuk desa-desa terpencil di seluruh Indonesia.',
    icon: '💧',
    impact: '30 desa',
  },
  {
    title: 'Advokasi Kebijakan',
    description: 'Kampanye advokasi untuk perubahan kebijakan lingkungan yang lebih progresif.',
    icon: '🏛️',
    impact: '15 inisiatif',
  },
];

const articles = [
  {
    id: 1,
    title: 'Dampak Perubahan Iklim terhadap Keanekaragaman Hayati Indonesia',
    excerpt: 'Penelitian terbaru menunjukkan peningkatan suhu global mempengaruhi habitat alami spesies endemik Indonesia.',
    date: '15 Maret 2024',
    category: 'Riset',
  },
  {
    id: 2,
    title: 'Kisah Sukses: Masyarakat Lokal Menjaga Terumbu Karang',
    excerpt: 'Nelayan di Sulawesi berhasil merestorasi terumbu karang dengan teknik konservasi inovatif.',
    date: '10 Maret 2024',
    category: 'Cerita Sukses',
  },
  {
    id: 3,
    title: 'Panduan Praktis: Memulai Gaya Hidup Ramah Lingkungan',
    excerpt: 'Tips sederhana untuk mengurangi jejak karbon Anda dalam kehidupan sehari-hari.',
    date: '5 Maret 2024',
    category: 'Panduan',
  },
  {
    id: 4,
    title: 'Webinar Gratis: Solusi Energi Terbarukan untuk UMKM',
    excerpt: 'Bergabunglah dengan para ahli untuk mempelajari implementasi energi terbarukan di bisnis Anda.',
    date: '1 Maret 2024',
    category: 'Event',
  },
  {
    id: 5,
    title: 'Update Terbaru: Perkembangan Proyek Reboisasi Lahan Kritis',
    excerpt: 'Tim kami telah menanam 10,000 pohon di lahan kritis Jawa Timur dalam kuartal pertama 2024.',
    date: '25 Februari 2024',
    category: 'Update Proyek',
  },
  {
    id: 6,
    title: 'Bergabunglah dengan Kami: Lowongan Volunteer Pendamping Komunitas',
    excerpt: 'Kami membuka peluang bagi individu bersemangat untuk mendampingi program-program komunitas kami.',
    date: '20 Februari 2024',
    category: 'Volunteer',
  },
];

const testimonials = [
  {
    name: 'Ibu Siti Nurhaliza',
    role: 'Kepala Desa, Jawa Barat',
    quote: 'Program Yayasan Sahabat Nusantara telah mengubah cara kami menjaga lingkungan. Kualitas air di desa kami meningkat signifikan.',
    avatar: '👩',
  },
  {
    name: 'Pak Ahmad Dahlan',
    role: 'Pemilik UMKM Energi Terbarukan',
    quote: 'Dukungan dan pelatihan dari tim mereka membuat bisnis saya lebih berkelanjutan dan menguntungkan.',
    avatar: '👨',
  },
  {
    name: 'Maya Kusuma',
    role: 'Pelajar, Jakarta',
    quote: 'Workshop mereka menginspirasi saya untuk memulai gerakan daur ulang di sekolah. Kini kami mengurangi sampah 60%!',
    avatar: '👧',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, idx) => (
              <div
                key={idx}
                className={`${stat.color} p-8 rounded-2xl text-center transform hover:scale-105 transition-transform`}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Program-Program Unggulan</h2>
            <p className="text-xl text-gray-600">Inisiatif nyata untuk masa depan yang lebih hijau dan berkelanjutan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-8">
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {program.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/program">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                Lihat Semua Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Artikel & Berita Terbaru</h2>
            <p className="text-xl text-gray-600">Tetap update dengan perkembangan dan pengetahuan lingkungan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-6xl"></div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex-1">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link href={`/berita/${article.id}`} className="text-emerald-600 font-semibold hover:text-emerald-700">
                    Baca Selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/berita">
              <Button variant="outline" className="px-8 py-3 text-lg border-emerald-600 text-emerald-600">
                Lihat Semua Berita
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-emerald-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Kata-Kata Mereka</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.avatar}</div>
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

      {/* CTA Section */}
      <section className="bg-emerald-600 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">
            Siap Membuat Perbedaan?
          </h2>
          <p className="text-xl text-emerald-100">
            Bergabunglah dengan ribuan individu yang berkomitmen untuk kelestarian lingkungan Indonesia.
          </p>
          <Link href="/admin/login">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg font-semibold rounded-lg">
              Daftar Anggota Sekarang
            </Button>
          </Link>
        </div>
      </section>

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
              <h4 className="text-white font-bold mb-4">Komunitas</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/tentang" className="hover:text-white">Tim Kami</Link></li>
                <li><Link href="/tentang" className="hover:text-white">Volunteer</Link></li>
                <li><Link href="/berita" className="hover:text-white">Blog</Link></li>
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
