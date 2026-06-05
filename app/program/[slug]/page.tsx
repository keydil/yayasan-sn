import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const programsData: Record<string, {
  icon: string;
  title: string;
  description: string;
  stats: string;
  longDescription: string;
  achievements: string[];
  gallery: string[];
}> = {
  'konservasi-hutan': {
    icon: '🌲',
    title: 'Konservasi Hutan',
    description: 'Program penanaman pohon dan rehabilitasi hutan di daerah yang telah rusak.',
    stats: '50,000+ pohon ditanam',
    longDescription: 'Program Konservasi Hutan Yayasan Sahabat Nusantara bertujuan untuk memulihkan ekosistem hutan yang rusak akibat deforestasi dan degradasi lahan. Melalui pendekatan partisipatif bersama masyarakat lokal, kami melakukan penanaman pohon, rehabilitasi lahan kritis, dan edukasi pentingnya menjaga kelestarian hutan bagi kehidupan.',
    achievements: [
      'Menanam lebih dari 50,000 pohon di 15 provinsi',
      'Merestorasi 500 hektar lahan kritis',
      'Melibatkan 2,000+ sukarelawan dari berbagai daerah',
      'Bermitra dengan 30 komunitas adat dan desa',
    ],
    gallery: ['Penanaman di Kalimantan', 'Rehabilitasi Lahan Jawa Timur', 'Nursery Bibit Lokal'],
  },
  'pelindung-laut': {
    icon: '🐠',
    title: 'Pelindung Laut',
    description: 'Konservasi ekosistem laut dan perlindungan terumbu karang Indonesia.',
    stats: '15 kawasan laut terlindungi',
    longDescription: 'Program Pelindung Laut fokus pada konservasi ekosistem laut Indonesia yang kaya akan keanekaragaman hayati. Kami bekerja bersama nelayan dan komunitas pesisir untuk menjaga terumbu karang, mengurangi pencemaran laut, dan mempromosikan praktik perikanan berkelanjutan.',
    achievements: [
      'Melindungi 15 kawasan laut di Indonesia Timur',
      'Merestorasi 200 hektar terumbu karang',
      'Melatih 500+ nelayan tentang perikanan berkelanjutan',
      'Mengurangi sampah laut sebesar 40% di area binaan',
    ],
    gallery: ['Transplantasi Karang', 'Pelatihan Nelayan', 'Survei Bawah Laut'],
  },
  'pertanian-hijau': {
    icon: '🌾',
    title: 'Pertanian Hijau',
    description: 'Sosialisasi pertanian berkelanjutan dan organik untuk petani lokal.',
    stats: '200+ petani terlatih',
    longDescription: 'Program Pertanian Hijau mendorong transisi petani lokal dari pertanian konvensional ke pertanian organik dan berkelanjutan. Kami menyediakan pelatihan, pendampingan teknis, dan akses pasar untuk produk pertanian ramah lingkungan.',
    achievements: [
      'Melatih 200+ petani di 10 kabupaten',
      'Konversi 150 hektar lahan ke pertanian organik',
      'Meningkatkan pendapatan petani rata-rata 30%',
      'Mengurangi penggunaan pestisida kimia sebesar 60%',
    ],
    gallery: ['Pelatihan Petani', 'Ladang Organik', 'Panen Bersama'],
  },
  'energi-terbarukan': {
    icon: '⚡',
    title: 'Energi Terbarukan',
    description: 'Promosi penggunaan energi surya dan angin untuk komunitas pedesaan.',
    stats: '50 instalasi energi surya',
    longDescription: 'Program Energi Terbarukan bertujuan mempercepat transisi energi di komunitas pedesaan yang belum terjangkau listrik konvensional. Kami memasang panel surya, turbin angin mikro, dan memberikan pelatihan perawatan kepada masyarakat lokal.',
    achievements: [
      'Memasang 50 instalasi panel surya di desa terpencil',
      'Menerangi 1,000+ rumah tangga',
      'Melatih 100 teknisi energi surya lokal',
      'Mengurangi emisi karbon 500 ton per tahun',
    ],
    gallery: ['Instalasi Panel Surya', 'Pelatihan Teknisi', 'Desa Berenergi Surya'],
  },
  'pendidikan-lingkungan': {
    icon: '🎓',
    title: 'Pendidikan Lingkungan',
    description: 'Program edukasi lingkungan di sekolah-sekolah untuk generasi muda.',
    stats: '100 sekolah terlibat',
    longDescription: 'Program Pendidikan Lingkungan dirancang untuk menanamkan kesadaran lingkungan pada generasi muda sejak dini. Melalui kurikulum kreatif, workshop interaktif, dan kegiatan lapangan, kami membantu siswa memahami pentingnya menjaga alam.',
    achievements: [
      'Menjangkau 100 sekolah di 8 provinsi',
      'Melatih 500 guru sebagai fasilitator lingkungan',
      'Membuat kurikulum lingkungan untuk SD hingga SMA',
      'Mengadakan 50+ eco-camp untuk siswa',
    ],
    gallery: ['Workshop di Sekolah', 'Eco-Camp', 'Guru Lingkungan'],
  },
  'ekonomi-sirkular': {
    icon: '♻️',
    title: 'Ekonomi Sirkular',
    description: 'Pemberdayaan masyarakat melalui pengolahan limbah dan daur ulang.',
    stats: '30 kelompok usaha',
    longDescription: 'Program Ekonomi Sirkular memberdayakan masyarakat untuk mengolah limbah menjadi produk bernilai ekonomi. Kami mendampingi kelompok usaha dalam membangun bisnis daur ulang yang menguntungkan sekaligus mengurangi pencemaran lingkungan.',
    achievements: [
      'Mendampingi 30 kelompok usaha daur ulang',
      'Mengolah 500+ ton limbah per tahun',
      'Menciptakan 200+ lapangan kerja baru',
      'Menghasilkan pendapatan Rp 2 miliar per tahun',
    ],
    gallery: ['Bank Sampah', 'Produk Daur Ulang', 'Pelatihan Pengolahan'],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(programsData).map((slug) => ({ slug }));
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = programsData[slug];

  if (!program) {
    notFound();
  }

  const otherPrograms = Object.entries(programsData)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/program" className="text-emerald-600 font-medium hover:text-emerald-700 mb-6 inline-block">
            ← Kembali ke Program
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{program.icon}</span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-balance">
                {program.title}
              </h1>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mt-2">
                {program.stats}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {program.longDescription}
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Pencapaian Utama</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {program.achievements.map((item, idx) => (
              <Card key={idx} className="bg-emerald-50 border-emerald-100 p-5 flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-gray-700">{item}</p>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Galeri Kegiatan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {program.gallery.map((caption, idx) => (
              <div key={idx} className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                  <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span className="text-xs">{caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Programs */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program Lainnya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPrograms.map(([key, prog]) => (
              <Link key={key} href={`/program/${key}`}>
                <Card className="bg-white border-0 p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <div className="text-4xl mb-3">{prog.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{prog.title}</h3>
                  <p className="text-gray-600 text-sm">{prog.description}</p>
                  <span className="text-emerald-600 text-sm font-medium mt-3 inline-block">Selengkapnya →</span>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/program">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 px-8 py-3">
                Lihat Semua Program
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
