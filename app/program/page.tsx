'use client';

import { useState } from 'react';

export const metadata = undefined; // handled in layout

const pillars = [
  {
    id: 1,
    slug: 'penghijauan',
    icon: '🌱',
    color: 'from-green-600 to-emerald-700',
    accent: 'bg-green-100 text-green-700 border-green-200',
    tag: 'Pilar 01',
    title: 'Penghijauan & Reboisasi',
    description: 'Rehabilitasi lahan kritis, penanaman pohon, dan monitoring pertumbuhan vegetasi secara berkala untuk memulihkan ekosistem yang rusak.',
    details: [
      'Rehabilitasi lahan kritis di kawasan rawan deforestasi',
      'Program penanaman pohon endemik bersama komunitas lokal',
      'Monitoring pertumbuhan vegetasi menggunakan data lapangan',
      'Edukasi masyarakat tentang pengelolaan hutan desa',
    ],
  },
  {
    id: 2,
    slug: 'pendidikan',
    icon: '📚',
    color: 'from-blue-600 to-indigo-700',
    accent: 'bg-blue-100 text-blue-700 border-blue-200',
    tag: 'Pilar 02',
    title: 'Pendidikan & Kapasitas',
    description: 'Pelatihan kader lingkungan, modul edukasi sekolah, dan kampanye kesadaran iklim untuk membangun generasi yang paham lingkungan.',
    details: [
      'Pelatihan kader lingkungan berbasis komunitas',
      'Pengembangan modul edukasi lingkungan untuk sekolah',
      'Kampanye kesadaran iklim di tingkat lokal dan regional',
      'Pendampingan komunitas dalam adaptasi perubahan iklim',
    ],
  },
  {
    id: 3,
    slug: 'pengelolaan-sampah',
    icon: '♻️',
    color: 'from-amber-500 to-orange-600',
    accent: 'bg-amber-100 text-amber-700 border-amber-200',
    tag: 'Pilar 03',
    title: 'Pengelolaan Sampah',
    description: 'Pengembangan Bank Sampah, TPS3R komunitas, dan edukasi pemilahan sampah organik untuk sistem pengelolaan sampah efektif.',
    details: [
      'Pembangunan dan pengelolaan Bank Sampah komunitas',
      'Pengembangan TPS3R (Tempat Pengolahan Sampah Reduce Reuse Recycle)',
      'Edukasi pemilahan sampah organik dan anorganik',
      'Pengembangan produk daur ulang bernilai ekonomi',
    ],
  },
  {
    id: 4,
    slug: 'konservasi-air',
    icon: '💧',
    color: 'from-cyan-600 to-teal-700',
    accent: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    tag: 'Pilar 04',
    title: 'Konservasi Air',
    description: 'Pemetaan kawasan resapan, perlindungan daerah tangkapan air, dan penguatan hutan desa untuk menjaga ketersediaan air bersih.',
    details: [
      'Pemetaan kawasan resapan dan mata air kritis',
      'Perlindungan daerah tangkapan air dari aktivitas merusak',
      'Penguatan hutan desa sebagai penopang ekosistem air',
      'Konservasi mata air dan sumber air bersih komunitas',
    ],
  },
];

const tujuanStrategis = [
  { icon: '🌳', text: 'Meningkatkan tutupan vegetasi melalui reboisasi lahan kritis' },
  { icon: '🏘️', text: 'Penguatan kapasitas masyarakat dalam adaptasi perubahan iklim' },
  { icon: '🗑️', text: 'Sistem pengelolaan sampah efektif berbasis komunitas' },
  { icon: '💦', text: 'Konservasi mata air dan perlindungan daerah resapan' },
];

const roadmap = [
  { year: 'Tahun 1', phase: 'Pemetaan Wilayah & Pilot Project Dasar', desc: 'Identifikasi lokasi prioritas, survei lapangan, dan pelaksanaan proyek percontohan skala kecil.' },
  { year: 'Tahun 2–3', phase: 'Pengembangan Kapasitas & Perluasan Wilayah', desc: 'Pelatihan intensif, rekrutmen kader lokal, dan replikasi model ke wilayah baru.' },
  { year: 'Tahun 4', phase: 'Penguatan Kelembagaan & Mandiri Komunitas', desc: 'Formalisasi kelembagaan komunitas, serah terima pengelolaan program, dan penguatan tata kelola.' },
  { year: 'Tahun 5', phase: 'Exit Strategy & Penjaminan Keberlanjutan', desc: 'Evaluasi dampak menyeluruh, dokumentasi pembelajaran, dan penjaminan keberlanjutan tanpa ketergantungan eksternal.' },
];

const mitra = [
  { icon: '🏛️', name: 'Pemerintah Desa & Komunitas Lokal' },
  { icon: '🎓', name: 'Akademisi & Mitra CSR/Donor' },
  { icon: '🌿', name: 'KLHK & Dinas Lingkungan Hidup' },
  { icon: '🤝', name: 'Organisasi Masyarakat Sipil (CSO)' },
];

const metodologi = [
  {
    name: 'Participatory Rural Appraisal (PRA)',
    desc: 'Melibatkan masyarakat secara aktif dalam proses perencanaan, pelaksanaan, dan evaluasi program.',
  },
  {
    name: 'Landscape Approach',
    desc: 'Memandang ekosistem secara holistik, mempertimbangkan interaksi antar lahan dan kepentingan pemangku kepentingan.',
  },
  {
    name: 'Kolaborasi Pentahelix',
    desc: 'Sinergi lima aktor: pemerintah, akademisi, komunitas, swasta, dan media untuk memastikan dampak berkelanjutan.',
  },
];

export default function ProgramPage() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-emerald-500/30 text-emerald-100 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
            Program Lingkungan Hidup 2025–2030
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Program <span className="text-emerald-300">Unggulan</span>
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl leading-relaxed">
            Intervensi sistematis berbasis masyarakat untuk pemulihan ekologi, penguatan kapasitas, 
            dan keberlanjutan sumber daya alam di Indonesia. Periode 2025–2030.
          </p>
          <blockquote className="mt-8 border-l-4 border-emerald-400 pl-5 italic text-emerald-200 text-base max-w-2xl">
            "Mewujudkan lingkungan yang lestari dan masyarakat yang tangguh secara ekologis melalui pengelolaan berbasis komunitas."
          </blockquote>
        </div>
      </section>

      {/* ── Tujuan Strategis ── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-emerald-700 tracking-widest uppercase text-center mb-8">Tujuan Strategis</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tujuanStrategis.map((t, i) => (
              <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <span className="text-3xl flex-shrink-0">{t.icon}</span>
                <p className="text-gray-700 font-medium leading-snug text-sm">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 Pilar Program (Interactive) ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Pilar Program</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">4 Pilar Program Terpadu</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Setiap pilar dirancang untuk saling menguatkan dan menciptakan dampak sistemik jangka panjang.</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {pillars.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActivePillar(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${activePillar === i
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-300'
                }`}
              >
                <span>{p.icon}</span>
                <span className="hidden sm:inline">{p.title}</span>
                <span className="sm:hidden">{p.tag}</span>
              </button>
            ))}
          </div>

          {/* Active Pillar Detail */}
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              className={`transition-all duration-300 ${activePillar === i ? 'block' : 'hidden'}`}
            >
              <div className={`rounded-3xl bg-gradient-to-br ${pillar.color} text-white p-8 sm:p-12 lg:p-14`}>
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <span className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 bg-white/20`}>
                      {pillar.tag}
                    </span>
                    <div className="text-6xl mb-5">{pillar.icon}</div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-white/80 text-lg leading-relaxed">{pillar.description}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-5">Kegiatan Utama</p>
                    <ul className="space-y-4">
                      {pillar.details.map((d, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-white/90 leading-relaxed">{d}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Metodologi ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Pendekatan</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Metodologi Pelaksanaan</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Tiga pendekatan utama yang memastikan keberlanjutan dampak di lapangan.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {metodologi.map((m, i) => (
              <div key={i} className="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-lg hover:border-emerald-200 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{m.name}</h3>
                <p className="text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap 5 Tahun ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-300 text-xs font-bold tracking-widest uppercase mb-3">Rencana Kerja</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Roadmap 2025–2030</h2>
            <p className="text-emerald-200 mt-3 max-w-xl mx-auto">Lima tahun transformasi sistematis menuju komunitas mandiri dan lingkungan yang lestari.</p>
          </div>
          <div className="relative">
            {/* Line connector (desktop) */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-emerald-600/50 mx-[10%]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmap.map((r, i) => (
                <div key={i} className="relative bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                  {/* Step dot */}
                  <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-400 items-center justify-center text-emerald-900 font-bold text-sm shadow-lg">
                    {i + 1}
                  </div>
                  <p className="text-emerald-300 text-xs font-bold tracking-widest uppercase mb-3">{r.year}</p>
                  <h3 className="text-white font-bold text-base mb-3 leading-snug">{r.phase}</h3>
                  <p className="text-emerald-200 text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mitra & Pelaksana ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Kolaborasi</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Pelaksana & Mitra Strategis</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Program kami dijalankan bersama ekosistem multipihak (Pentahelix) untuk memastikan dampak yang terukur dan berkelanjutan.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {mitra.map((m, i) => (
              <div key={i} className="flex gap-4 items-center bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 hover:border-emerald-300 hover:bg-emerald-50 transition-all">
                <span className="text-3xl">{m.icon}</span>
                <p className="font-semibold text-gray-900">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
