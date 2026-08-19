'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Instagram, Shield, FileText, Building2, CreditCard } from 'lucide-react';
import { dataService, PengurusItem } from '@/lib/supabase';

const coreValues = [
  {
    icon: '❤️',
    title: 'Kemanusiaan & Keadilan Sosial',
    description: 'Menempatkan martabat manusia dan keadilan sosial sebagai landasan utama setiap program dan kebijakan organisasi.',
  },
  {
    icon: '🌿',
    title: 'Keberlanjutan Lingkungan',
    description: 'Berkomitmen pada pengelolaan sumber daya alam yang bertanggung jawab demi kelestarian ekosistem untuk generasi mendatang.',
  },
  {
    icon: '🤝',
    title: 'Partisipasi & Inklusivitas',
    description: 'Memastikan seluruh lapisan masyarakat, termasuk kelompok rentan, memiliki suara dan peran aktif dalam setiap program.',
  },
  {
    icon: '📋',
    title: 'Akuntabilitas & Transparansi',
    description: 'Menjalankan organisasi dengan standar tata kelola yang tinggi, terbuka dalam pelaporan, dan bertanggung jawab kepada seluruh pemangku kepentingan.',
  },
  {
    icon: '🔄',
    title: 'Kolaborasi & Pembelajaran',
    description: 'Membangun kemitraan strategis dan terus belajar dari setiap pengalaman untuk meningkatkan kualitas dan dampak program secara berkelanjutan.',
  },
];

export default function TentangPage() {
  const [officers, setOfficers] = useState<PengurusItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPengurus();
  }, []);

  const loadPengurus = async () => {
    setLoading(true);
    const data = await dataService.getPengurus();
    setOfficers(data);
    setLoading(false);
  };

  const pembina = officers.filter((o) => o.tier === 'pembina');
  const pengawas = officers.filter((o) => o.tier === 'pengawas');
  const pengurus = officers.filter((o) => o.tier === 'pengurus');
  const pelaksanaHarian = officers.filter((o) => o.tier === 'pelaksana');

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Header ── */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-emerald-500/30 text-emerald-100 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
            Profil Lembaga
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Yayasan Sahabat <span className="text-emerald-300">Nusantara</span>
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl leading-relaxed">
            Organisasi masyarakat sipil yang berkomitmen untuk mendorong keadilan sosial, peningkatan kualitas pendidikan, perlindungan lingkungan hidup, serta penguatan ketangguhan masyarakat terhadap bencana dan perubahan iklim.
          </p>
          <div className="mt-10 flex flex-wrap gap-8">
            {[
              { num: '2025', label: 'Berdiri Sejak' },
              { num: '4', label: 'Bidang Program' },
              { num: 'Bandung', label: 'Wilayah Pusat' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white">{s.num}</p>
                <p className="text-emerald-300 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visi & Misi ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 sm:p-12 text-white overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
              <div className="relative">
                <span className="inline-block text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4">VISI</span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
                  "Terwujudnya masyarakat yang adil, berdaya, berpengetahuan, dan tangguh secara sosial dan ekologis."
                </h2>
                <div className="w-16 h-1 bg-emerald-400 rounded-full" />
              </div>
            </div>

            {/* Misi */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-12">
              <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">MISI</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Langkah Nyata Kami</h2>
              <ol className="space-y-5">
                {[
                  'Memperkuat kapasitas masyarakat melalui pendidikan, pelatihan, dan pengorganisasian komunitas.',
                  'Mendorong perlindungan lingkungan hidup dan pengelolaan sumber daya alam berkelanjutan.',
                  'Mengembangkan kesiapsiagaan, respon darurat, dan pemulihan pascabencana berbasis komunitas.',
                  'Membangun kemitraan strategis dengan donor, pemerintah, akademisi, dan masyarakat sipil.',
                ].map((misi, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 font-medium leading-relaxed">{misi}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nilai Lembaga ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Prinsip Kerja</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Nilai-Nilai Utama Organisasi</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Prinsip dasar yang menuntun setiap langkah dan keputusan Yayasan Sahabat Nusantara.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Susunan Kepengurusan (DYNAMIC FROM DATA SERVICE) ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Struktur Organisasi</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Susunan Kepengurusan</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Individu-individu berdedikasi yang menggerakkan misi Yayasan Sahabat Nusantara.</p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-gray-500 text-sm font-medium">Memuat struktur organisasi...</p>
            </div>
          ) : (
            <div className="space-y-10">
              {/* Tier: Pembina */}
              {pembina.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase text-sm">Pembina</h3>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {pembina.map((p) => (
                      <div key={p.id} className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-4">
                        <p className="font-bold text-gray-900">{p.name}</p>
                        <p className="text-amber-700 text-sm font-medium mt-1">{p.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tier: Pengawas */}
              {pengawas.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase text-sm">Pengawas</h3>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {pengawas.map((p) => (
                      <div key={p.id} className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4">
                        <p className="font-bold text-gray-900">{p.name}</p>
                        <p className="text-blue-700 text-sm font-medium mt-1">{p.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tier: Pengurus */}
              {pengurus.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-3 h-3 rounded-full bg-emerald-600" />
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase text-sm">Pengurus</h3>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pengurus.map((p) => (
                      <div key={p.id} className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-4">
                        <p className="font-bold text-gray-900">{p.name}</p>
                        <p className="text-emerald-700 text-sm font-medium mt-1">{p.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tier: Pelaksana Harian */}
              {pelaksanaHarian.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-3 h-3 rounded-full bg-gray-500" />
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase text-sm">Pelaksana Harian</h3>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {pelaksanaHarian.map((p) => (
                      <div key={p.id} className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
                        <p className="font-bold text-gray-900">{p.name}</p>
                        <p className="text-gray-500 text-sm font-medium mt-1">{p.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Legalitas ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Kredensial</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Legalitas & Kelembagaan</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Landasan hukum resmi Yayasan Sahabat Nusantara dalam menjalankan operasinya.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Akta Notaris</p>
              <p className="font-bold text-gray-900 text-lg mb-2">No. 01 Tanggal 06 Januari 2025</p>
              <p className="text-gray-500 text-xs mt-auto">Notaris Dra. Hj. Tati Sunarti, S.H., M.Kn</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">SK Kemenkumham</p>
              <p className="font-bold text-gray-900 text-lg mb-2">AHU-0000732.AH.01.04.Tahun 2025</p>
              <p className="text-gray-500 text-xs mt-auto">Kementerian Hukum & HAM RI</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">NPWP & NIB</p>
              <p className="font-bold text-gray-900 text-base mb-1">NPWP: 10.000.000.0-429.000</p>
              <p className="text-gray-600 text-xs font-semibold mb-2">NIB: 1301250085449</p>
              <p className="text-gray-500 text-xs mt-auto">Direktorat Jenderal Pajak</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">Rekening Resmi</p>
              <p className="font-bold text-gray-900 text-base mb-1">Bank BJB 0147633719100</p>
              <p className="text-gray-500 text-xs mt-auto">a.n. Yayasan Sahabat Nusantara</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontak ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Hubungi Kami</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Kantor & Sekretariat</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Silakan hubungi kami untuk informasi, kemitraan, atau kolaborasi program.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <MapPin className="w-6 h-6 text-emerald-600 mb-3" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Alamat Kantor</p>
              <p className="text-gray-800 text-sm font-medium leading-relaxed">
                Jl. Cingised, Komp. Pertanian No. 15, RT 001 / RW 005, Kel. Cisaranten Endah, Kec. Arcamanik, Kota Bandung
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <Phone className="w-6 h-6 text-emerald-600 mb-3" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Telepon / WhatsApp</p>
              <p className="text-gray-800 text-sm font-bold mt-1">0852-1135-2636</p>
              <p className="text-gray-800 text-sm font-bold">0821-2795-0955</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <Mail className="w-6 h-6 text-emerald-600 mb-3" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email Resmi</p>
              <a href="mailto:yayasan.sn@gmail.com" className="text-emerald-700 hover:underline font-bold text-sm block mt-1">
                yayasan.sn@gmail.com
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <Instagram className="w-6 h-6 text-emerald-600 mb-3" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Media Sosial</p>
              <a
                href="https://instagram.com/sahabatnusantara.id"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:underline font-bold text-sm block mt-1"
              >
                @sahabatnusantara.id
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
