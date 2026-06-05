'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const programs = [
  {
    id: 1,
    slug: 'konservasi-hutan',
    icon: '🌲',
    title: 'Konservasi Hutan',
    description: 'Program penanaman pohon dan rehabilitasi hutan di daerah yang telah rusak.',
    stats: '50,000+ pohon ditanam',
  },
  {
    id: 2,
    slug: 'pelindung-laut',
    icon: '🐠',
    title: 'Pelindung Laut',
    description: 'Konservasi ekosistem laut dan perlindungan terumbu karang Indonesia.',
    stats: '15 kawasan laut terlindungi',
  },
  {
    id: 3,
    slug: 'pertanian-hijau',
    icon: '🌾',
    title: 'Pertanian Hijau',
    description: 'Sosialisasi pertanian berkelanjutan dan organik untuk petani lokal.',
    stats: '200+ petani terlatih',
  },
  {
    id: 4,
    slug: 'energi-terbarukan',
    icon: '⚡',
    title: 'Energi Terbarukan',
    description: 'Promosi penggunaan energi surya dan angin untuk komunitas pedesaan.',
    stats: '50 instalasi energi surya',
  },
  {
    id: 5,
    slug: 'pendidikan-lingkungan',
    icon: '🎓',
    title: 'Pendidikan Lingkungan',
    description: 'Program edukasi lingkungan di sekolah-sekolah untuk generasi muda.',
    stats: '100 sekolah terlibat',
  },
  {
    id: 6,
    slug: 'ekonomi-sirkular',
    icon: '♻️',
    title: 'Ekonomi Sirkular',
    description: 'Pemberdayaan masyarakat melalui pengolahan limbah dan daur ulang.',
    stats: '30 kelompok usaha',
  },
];

const workSteps = [
  {
    title: 'Riset & Analisis',
    description: 'Kami melakukan penelitian mendalam untuk memahami tantangan lingkungan lokal dan nasional. Tim riset kami mengumpulkan data lapangan, menganalisis tren lingkungan, dan mengidentifikasi area prioritas yang membutuhkan intervensi segera.',
  },
  {
    title: 'Perencanaan Program',
    description: 'Merancang program yang disesuaikan dengan kebutuhan komunitas dan lingkungan setempat. Proses ini melibatkan konsultasi dengan pemangku kepentingan lokal, pemetaan sumber daya, dan penyusunan timeline yang realistis.',
  },
  {
    title: 'Implementasi Aksi',
    description: 'Menjalankan program dengan melibatkan komunitas lokal, pemerintah, dan mitra swasta. Setiap program dilaksanakan dengan pendekatan partisipatif untuk memastikan keberlanjutan dan dampak yang maksimal.',
  },
  {
    title: 'Monitoring & Evaluasi',
    description: 'Memantau dampak program dan terus melakukan perbaikan untuk hasil yang optimal. Kami menggunakan indikator terukur untuk mengevaluasi keberhasilan setiap program secara berkala.',
  },
  {
    title: 'Pelaporan & Transparansi',
    description: 'Menyusun laporan berkala yang transparan kepada seluruh pemangku kepentingan. Setiap pencapaian, tantangan, dan penggunaan dana didokumentasikan secara terbuka untuk menjaga akuntabilitas organisasi.',
  },
];

export default function ProgramPage() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (idx: number) => {
    setOpenStep(openStep === idx ? null : idx);
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Program Unggulan
          </h1>

          <p className="text-lg text-gray-600 text-balance">
            Inisiatif komprehensif untuk pelestarian lingkungan dan pembangunan berkelanjutan di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program) => (
              <Link key={program.id} href={`/program/${program.slug}`}>
                <Card
                  className="bg-white border-0 p-6 sm:p-8 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full"
                >
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <p className="text-emerald-600 font-semibold text-sm">
                      {program.stats}
                    </p>
                    <span className="text-emerald-600 text-sm font-medium">Selengkapnya →</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Accordion */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Bagaimana Kami Bekerja
          </h2>

          <div className="space-y-4">
            {workSteps.map((step, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleStep(idx)}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-emerald-50/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex-1">
                    {step.title}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${openStep === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openStep === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[4.5rem]">
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Program Kegiatan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white border-0 p-6 sm:p-8 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
              <p className="text-gray-600">Program selesai</p>
            </Card>
            <Card className="bg-white border-0 p-6 sm:p-8 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">150+</div>
              <p className="text-gray-600">Program berjalan</p>
            </Card>
            <Card className="bg-white border-0 p-6 sm:p-8 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <p className="text-gray-600">Program selanjutnya</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
            Ingin Turut Berkontribusi?
          </h2>
          <p className="text-lg text-emerald-50 text-balance">
            Bergabunglah dengan kami dalam misi pelestarian lingkungan. Setiap kontribusi memiliki dampak nyata.
          </p>
        </div>
      </section>
    </main>
  );
}
