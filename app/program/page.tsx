'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

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
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    title: 'Perencanaan Program',
    description: 'Merancang program yang disesuaikan dengan kebutuhan komunitas dan lingkungan setempat. Proses ini melibatkan konsultasi dengan pemangku kepentingan lokal, pemetaan sumber daya, dan penyusunan timeline yang realistis.',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80',
  },
  {
    title: 'Implementasi Aksi',
    description: 'Menjalankan program dengan melibatkan komunitas lokal, pemerintah, dan mitra swasta. Setiap program dilaksanakan dengan pendekatan partisipatif untuk memastikan keberlanjutan dan dampak yang maksimal.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
  },
  {
    title: 'Monitoring & Evaluasi',
    description: 'Memantau dampak program dan terus melakukan perbaikan untuk hasil yang optimal. Kami menggunakan indikator terukur untuk mengevaluasi keberhasilan setiap program secara berkala.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    title: 'Pelaporan & Transparansi',
    description: 'Menyusun laporan berkala yang transparan kepada seluruh pemangku kepentingan. Setiap pencapaian, tantangan, dan penggunaan dana didokumentasikan secara terbuka untuk menjaga akuntabilitas organisasi.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
];

export default function ProgramPage() {
  const [activeStep, setActiveStep] = useState(0);

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

      {/* How We Work - Interactive Tabs + Image */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Bagaimana Kami Bekerja
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Tabs */}
            <div className="space-y-3">
              {workSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-xl border-2 transition-all duration-300 ${
                    activeStep === idx
                      ? 'border-emerald-500 bg-emerald-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-emerald-200 hover:bg-emerald-50/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0 transition-colors ${
                      activeStep === idx
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold transition-colors ${
                        activeStep === idx ? 'text-emerald-700' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h3>
                      <div className={`overflow-hidden transition-all duration-300 ${
                        activeStep === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Image */}
            <div className="lg:sticky lg:top-24">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative">
                {workSteps.map((step, idx) => (
                  <img
                    key={idx}
                    src={step.image}
                    alt={step.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      activeStep === idx ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white font-bold text-lg">{workSteps[activeStep].title}</p>
                </div>
              </div>
            </div>
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

      {/* Aesthetic Green Section */}
      <section className="bg-emerald-600 h-24 lg:h-32 w-full"></section>
    </main>
  );
}
