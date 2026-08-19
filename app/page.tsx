'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase, CalendarCheck, Handshake, ArrowRight } from 'lucide-react';
import { dataService, Article, GalleryItem } from '@/lib/supabase';

const impactStats = [
  { label: 'Bidang Program Prioritas', icon: 'briefcase', color: 'bg-emerald-50 text-emerald-700' },
  { label: 'Program 2025–2030', icon: 'calendar', color: 'bg-amber-50 text-amber-700' },
  { label: 'Mitra Strategis', icon: 'handshake', color: 'bg-purple-50 text-purple-700' },
];

const iconMap: Record<string, React.ReactNode> = {
  briefcase: <Briefcase className="w-12 h-12" />,
  calendar: <CalendarCheck className="w-12 h-12" />,
  handshake: <Handshake className="w-12 h-12" />,
};

const programs = [
  {
    title: 'Penghijauan & Reboisasi',
    slug: 'penghijauan',
    description: 'Rehabilitasi lahan kritis, penanaman pohon endemik, dan monitoring pertumbuhan vegetasi secara berkala bersama komunitas lokal.',
    icon: '🌱',
    impact: 'Pilar 01',
  },
  {
    title: 'Pendidikan & Kapasitas',
    slug: 'pendidikan',
    description: 'Pelatihan kader lingkungan, pengembangan modul edukasi sekolah, dan kampanye kesadaran iklim di tingkat komunitas.',
    icon: '📚',
    impact: 'Pilar 02',
  },
  {
    title: 'Pengelolaan Sampah',
    slug: 'pengelolaan-sampah',
    description: 'Pengembangan Bank Sampah, TPS3R komunitas, dan edukasi pemilahan sampah organik untuk sistem pengelolaan yang efektif.',
    icon: '♻️',
    impact: 'Pilar 03',
  },
  {
    title: 'Konservasi Air',
    slug: 'konservasi-air',
    description: 'Pemetaan kawasan resapan, perlindungan daerah tangkapan air, dan penguatan hutan desa untuk menjaga ketersediaan air bersih.',
    icon: '💧',
    impact: 'Pilar 04',
  },
];

const testimonials = [
  {
    name: 'Ir. Surjaman',
    role: 'Ketua Pembina',
    quote: 'Yayasan Sahabat Nusantara hadir sebagai wadah pengabdian nyata untuk mewujudkan keadilan sosial dan keberlanjutan ekologis di Indonesia.',
  },
  {
    name: 'Djati Pranoto, S.Sos',
    role: 'Ketua Pengurus',
    quote: 'Komitmen kami adalah memperkuat komunitas lokal melalui edukasi, reboisasi, dan pengelolaan sumber daya alam berbasis kemitraan.',
  },
  {
    name: 'Dadang Sudardja, S.H',
    role: 'Direktur Pelaksana Harian',
    quote: 'Setiap program dijalankan dengan transparansi, partisipasi aktif masyarakat, dan pendekatan ilmu pengetahuan yang terukur.',
  },
];

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    setLoading(true);
    const [fetchedArticles, fetchedGallery] = await Promise.all([
      dataService.getArticles(),
      dataService.getGallery(),
    ]);
    setArticles(fetchedArticles.slice(0, 3));
    setGallery(fetchedGallery.slice(0, 4));
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden py-20 lg:py-32">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <span className="inline-block bg-emerald-500/30 text-emerald-100 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-emerald-400/30">
              Yayasan Sahabat Nusantara
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Mendorong Keadilan Sosial & <span className="text-emerald-300">Ketangguhan Ekologis</span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Organisasi masyarakat sipil yang berkomitmen untuk pelestarian lingkungan, peningkatan kualitas pendidikan, dan ketangguhan masyarakat terhadap bencana dan iklim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/program">
                <Button className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-8 py-3 text-base rounded-xl shadow-lg">
                  Jelajahi Program Unggulan
                </Button>
              </Link>
              <Link href="/tentang">
                <Button variant="outline" className="px-8 py-3 text-base rounded-xl border-emerald-300 text-emerald-100 hover:bg-white/10">
                  Profil & Legalitas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-2">Pillar Utama</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Fokus Gerakan Nusantara</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStats.map((stat, idx) => (
              <div
                key={idx}
                className={`${stat.color} p-8 rounded-2xl text-center transform hover:-translate-y-1 transition-all border border-gray-100 shadow-sm flex flex-col items-center gap-4`}
              >
                <div className="opacity-90">{iconMap[stat.icon]}</div>
                <div className="text-lg font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-gray-50 py-16 lg:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-14">
            <div className="space-y-2">
              <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase">Periode 2025–2030</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Program-Program Unggulan</h2>
            </div>
            <Link href="/program" className="group flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors whitespace-nowrap">
              Jelajahi Semua Program <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, idx) => (
              <Link key={idx} href={`/program/${program.slug}`} className="group block h-full bg-white rounded-2xl border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 cursor-pointer overflow-hidden p-6 flex flex-col">
                <div className="text-4xl mb-4">{program.icon}</div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full w-fit mb-2 border border-emerald-100">
                  {program.impact}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{program.title}</h3>
                <p className="text-gray-600 text-xs line-clamp-3 mb-4 flex-grow leading-relaxed">{program.description}</p>
                <div className="text-emerald-600 font-semibold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                  Detail Program <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic News & Gallery Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Real-time Articles */}
            <div className="lg:col-span-7">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-1">Kabar Terkini</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Artikel & Berita terbaru</h2>
                </div>
                <Link href="/berita" className="group flex items-center gap-1 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors">
                  Semua Berita <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {loading ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <p className="text-gray-500 text-xs">Memuat berita terbaru...</p>
                </div>
              ) : articles.length === 0 ? (
                <div className="p-8 text-center bg-gray-50 rounded-2xl text-gray-500 text-sm">
                  Belum ada berita yang diterbitkan.
                </div>
              ) : (
                <div className="space-y-4">
                  {articles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/berita/${article.id}`}
                      className="group block bg-white rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-4 overflow-hidden"
                    >
                      <div className="sm:w-40 h-36 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col flex-1 py-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                            {article.category}
                          </span>
                          <span className="text-[11px] text-gray-400">{article.date}</span>
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-2 leading-relaxed">{article.excerpt}</p>
                        <div className="text-emerald-600 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                          Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Real-time Gallery */}
            <div className="lg:col-span-5">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-1">Dokumentasi</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Galeri Foto</h2>
                </div>
                <Link href="/galeri" className="group flex items-center gap-1 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors">
                  Lihat Galeri <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {loading ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <p className="text-gray-500 text-xs">Memuat galeri...</p>
                </div>
              ) : gallery.length === 0 ? (
                <div className="p-8 text-center bg-gray-50 rounded-2xl text-gray-500 text-sm">
                  Belum ada foto di galeri.
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {gallery.map((item) => (
                    <div key={item.id} className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group border border-gray-200 shadow-sm">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                        <p className="text-xs font-bold truncate">{item.title}</p>
                        <p className="text-[10px] text-emerald-300 font-medium">{item.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-emerald-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-300 text-xs font-bold tracking-widest uppercase mb-2">Kepemimpinan</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Pesan Pengurus Yayasan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-emerald-800/80 backdrop-blur p-8 rounded-2xl border border-emerald-700/50 flex flex-col justify-between">
                <blockquote className="text-emerald-100 text-sm italic leading-relaxed mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-emerald-700/50">
                  <div className="w-10 h-10 bg-emerald-500 text-emerald-950 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-emerald-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold text-sm mb-3">Yayasan Sahabat Nusantara</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Organisasi masyarakat sipil yang mendorong keadilan sosial, pendidikan, dan kelestarian lingkungan hidup di Indonesia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-3">Pilar Program</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/program/penghijauan" className="hover:text-emerald-400 transition-colors">Penghijauan & Reboisasi</Link></li>
                <li><Link href="/program/pendidikan" className="hover:text-emerald-400 transition-colors">Pendidikan & Kapasitas</Link></li>
                <li><Link href="/program/pengelolaan-sampah" className="hover:text-emerald-400 transition-colors">Pengelolaan Sampah</Link></li>
                <li><Link href="/program/konservasi-air" className="hover:text-emerald-400 transition-colors">Konservasi Air</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-3">Legalitas Resmi</h4>
              <ul className="space-y-2 text-xs">
                <li><span className="text-gray-300">Akta Notaris No. 01 (2025)</span></li>
                <li><span className="text-gray-300">AHU-0000732.AH.01.04</span></li>
                <li><span className="text-gray-300">NIB: 1301250085449</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-3">Kantor Pusat</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Jl. Cingised Komp. Pertanian No. 15, Cisaranten Endah, Arcamanik, Kota Bandung<br/>
                WhatsApp: 0852-1135-2636
              </p>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 text-center text-xs text-gray-500">
            <p>&copy; 2025 Yayasan Sahabat Nusantara. Semua Hak Dilindungi.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
