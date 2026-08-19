import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, Image as ImageIcon } from 'lucide-react';

const programsData: Record<string, {
  icon: string;
  title: string;
  category: string;
  tag: string;
  stats: string;
  description: string;
  longDescription: string;
  achievements: string[];
  gallery: { title: string; image: string }[];
}> = {
  'penghijauan': {
    icon: '🌱',
    title: 'Penghijauan & Reboisasi Lahan Kritis',
    category: 'Pelestarian Ekosistem',
    tag: 'Pilar 01',
    stats: 'Target 50,000+ Pohon Endemik',
    description: 'Rehabilitasi lahan kritis, penanaman pohon endemik, dan monitoring pertumbuhan vegetasi secara berkala.',
    longDescription: 'Program Penghijauan & Reboisasi Yayasan Sahabat Nusantara berfokus pada rehabilitasi lahan kritis di kawasan rawan deforestasi dan resapan air di Jawa Barat. Melalui pendekatan partisipatif bersama komunitas lokal dan pemerintah desa, kami menanam berbagai jenis bibit pohon kayu dan buah endemik untuk memulihkan fungsi ekologis hutan serta mencegah bahaya tanah longsor.',
    achievements: [
      'Pemetaan 100+ hektar kawasan resapan air kritis',
      'Penanaman 10.000+ bibit pohon kayu dan buah endemik bersama warga',
      'Pembentukan kelompok tani hutan pemantau vegetasi desa',
      'Peningkatan kesadaran masyarakat desa terhadap mitigasi longsor',
    ],
    gallery: [
      { title: 'Penanaman Pohon di Lahan Kritis', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80' },
      { title: 'Pemetaan Kawasan Tangkapan Air', image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80' },
      { title: 'Pembibitan Pohon Endemik', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80' },
    ],
  },
  'pendidikan': {
    icon: '📚',
    title: 'Pendidikan & Penguatan Kapasitas',
    category: 'Edukasi Lingkungan',
    tag: 'Pilar 02',
    stats: '1.000+ Siswa & Kader Terlatih',
    description: 'Pelatihan kader lingkungan, modul edukasi hijau sekolah, dan kampanye kesadaran iklim komunitas.',
    longDescription: 'Program Pendidikan & Penguatan Kapasitas dirancang untuk membangun kesadaran iklim generasi muda dan masyarakat lokal. Kami menyusun modul pembelajaran hijau, menggelar workshop kader lingkungan desa, serta memfasilitasi program sekolah adiwiyata agar generasi mendatang memiliki ketangguhan ekologis yang tinggi.',
    achievements: [
      'Pelatihan 50+ Kader Lingkungan Muda Desa',
      'Implementasi Modul Edukasi Hijau di 15 Sekolah Binaaan',
      'Penyelenggaraan Eco-Camp & Workshop Pengomposan Sekolah',
      'Pembentukan Komunitas Pemuda Tangguh Ekologis',
    ],
    gallery: [
      { title: 'Workshop Edukasi Sekolah', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80' },
      { title: 'Pelatihan Kader Lingkungan', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80' },
      { title: 'Edukasi Iklim Generasi Muda', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80' },
    ],
  },
  'pengelolaan-sampah': {
    icon: '♻️',
    title: 'Pengelolaan Sampah & Ekonomi Sirkular',
    category: 'Kebersihan & Daur Ulang',
    tag: 'Pilar 03',
    stats: 'TPS3R & Bank Sampah Komunitas',
    description: 'Pengembangan Bank Sampah, TPS3R komunitas, dan edukasi pemilahan sampah organik.',
    longDescription: 'Program Pengelolaan Sampah memfasilitasi transformasi pengolahan limbah rumah tangga menjadi nilai ekonomi produktif. Kami mendampingi pendirian Bank Sampah unit desa, memfasilitasi infrastruktur TPS3R (Reduce, Reuse, Recycle), serta mengedukasi warga tentang teknik komposting sampah organik berbasis maggot dan pupuk cair.',
    achievements: [
      'Pembentukan 5 Unit Bank Sampah Berbasis RT/RW',
      'Pengurangan 40% Volume Sampah Organik ke TPA',
      'Pelatihan Pembuatan Kompos & Biopori Komunitas',
      'Pemberdayaan Ekonomi Ibu-Ibu Pengelola Daur Ulang',
    ],
    gallery: [
      { title: 'Pengolahan Sampah Organik Komunitas', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80' },
      { title: 'Pilah Sampah Daur Ulang', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80' },
      { title: 'Inovasi Pupuk Kompos', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80' },
    ],
  },
  'konservasi-air': {
    icon: '💧',
    title: 'Konservasi Mata Air & Hutan Desa',
    category: 'Sumber Daya Air',
    tag: 'Pilar 04',
    stats: 'Perlindungan Sumber Air Bersih',
    description: 'Pemetaan kawasan resapan, perlindungan daerah tangkapan air, dan penguatan hutan desa.',
    longDescription: 'Program Konservasi Air bertujuan menjaga ketersediaan debit dan kualitas air bersih bagi masyarakat hulu dan hilir. Kami melakukan penghijauan di sekitar hulu sumber mata air, membuat rorak penampung air hujan, serta mendorong penetapan peraturan desa (Perdes) untuk perlindungan kawasan hutan desa.',
    achievements: [
      'Perlindungan 10 Titik Mata Air Alami Desa',
      'Pembuatan 200+ Lubang Biopori & Rorak Resapan Air',
      'Inisiasi Peraturan Desa Konservasi Sumber Air',
      'Jaminan Pasokan Air Bersih bagi 500+ KK Komunitas',
    ],
    gallery: [
      { title: 'Pemetaan Daerah Resapan Air', image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80' },
      { title: 'Konservasi Mata Air Desa', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80' },
      { title: 'Penanaman Vegetasi Resapan', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80' },
    ],
  },
};

// Aliases for legacy or alternative slugs so 404 NEVER happens
programsData['konservasi-hutan'] = programsData['penghijauan'];
programsData['pelindung-laut'] = programsData['konservasi-air'];
programsData['pertanian-hijau'] = programsData['penghijauan'];
programsData['energi-terbarukan'] = programsData['pendidikan'];
programsData['pendidikan-lingkungan'] = programsData['pendidikan'];
programsData['ekonomi-sirkular'] = programsData['pengelolaan-sampah'];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(programsData).map((slug) => ({ slug }));
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = programsData[slug] || programsData['penghijauan'];

  if (!program) {
    notFound();
  }

  const otherPrograms = [
    { slug: 'penghijauan', ...programsData['penghijauan'] },
    { slug: 'pendidikan', ...programsData['pendidikan'] },
    { slug: 'pengelolaan-sampah', ...programsData['pengelolaan-sampah'] },
    { slug: 'konservasi-air', ...programsData['konservasi-air'] },
  ].filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white font-semibold text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Semua Program
          </Link>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="text-6xl p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur shrink-0">
              {program.icon}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-emerald-500/30 text-emerald-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-400/30">
                  {program.tag}
                </span>
                <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur">
                  {program.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
                {program.title}
              </h1>
              <p className="text-emerald-100 text-sm font-semibold">{program.stats}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="p-6 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-2xl mb-10">
            <p className="text-emerald-950 font-medium text-lg leading-relaxed">{program.description}</p>
          </div>

          <div className="prose prose-emerald max-w-none text-gray-700 text-base leading-relaxed mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Latar Belakang & Pendekatan Program</h2>
            <p>{program.longDescription}</p>
          </div>

          {/* Key Achievements */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Target & Pencapaian Utama</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {program.achievements.map((item, idx) => (
                <Card key={idx} className="bg-white border border-gray-200 p-5 shadow-sm rounded-2xl flex items-start gap-3 hover:border-emerald-300 transition-colors">
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-gray-800 text-sm font-medium leading-relaxed">{item}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dokumentasi Aksi Lapangan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {program.gallery.map((g, idx) => (
                <div key={idx} className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img src={g.image} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3 bg-white border-t border-gray-100 text-center">
                    <p className="text-xs font-bold text-gray-700 truncate">{g.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Program Unggulan Lainnya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPrograms.map((prog) => (
              <Link key={prog.slug} href={`/program/${prog.slug}`} className="group">
                <Card className="bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-md hover:border-emerald-300 transition-all h-full flex flex-col">
                  <div className="text-4xl mb-3">{prog.icon}</div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full w-fit mb-2">
                    {prog.tag}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-2 mb-4 flex-1">{prog.description}</p>
                  <div className="text-emerald-600 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                    Lihat Detail →
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
