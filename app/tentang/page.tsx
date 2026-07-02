import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Instagram, Shield, FileText, Building2, CreditCard } from 'lucide-react';

export const metadata = {
  title: 'Tentang Kami | Yayasan Sahabat Nusantara',
  description: 'Pelajari tentang organisasi, visi, misi, nilai-nilai, dan susunan kepengurusan Yayasan Sahabat Nusantara.',
};

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

const pembina = [
  { name: 'Ir. Surjaman', role: 'Ketua Pembina' },
  { name: 'A. Cahya Hendra, S.T., M.T', role: 'Anggota Pembina' },
  { name: 'Toni Adrian, S.H', role: 'Anggota Pembina' },
];

const pengawas = [
  { name: 'Repa Maulana, S.Pd', role: 'Ketua Pengawas' },
  { name: 'Dr. Ir. H. Dede Zainal Arief, M.Sc', role: 'Anggota Pengawas' },
  { name: 'Andry Gumilar Ramadani, S.Ip., M.M', role: 'Anggota Pengawas' },
];

const pengurus = [
  { name: 'Djati Pranoto, S.Sos', role: 'Ketua' },
  { name: 'Arief Budi Wandoyo, S.Pd', role: 'Wakil Ketua' },
  { name: 'Edwar Julistina Ramdon, S.T, M.T', role: 'Sekretaris I' },
  { name: 'Ajeng Pangestu Ningsih, S.Pd', role: 'Sekretaris II' },
  { name: 'Sorta Mina, S.T', role: 'Bendahara I' },
  { name: 'Reni, S.Pd', role: 'Bendahara II' },
];

const pelaksanaHarian = [
  { name: 'Dadang Sudardja, S.H', role: 'Direktur' },
  { name: 'M Haikal Fahrurozi, S.H', role: 'Sekretaris' },
  { name: 'Salsabila Alifa, S.Ip', role: 'Keuangan' },
  { name: 'M. Taufik, S.Sn', role: 'Kadiv Lingkungan' },
  { name: 'Aan Kusdinar, S.E', role: 'Kadiv Sosial' },
  { name: 'Warsidi, S.T', role: 'Kadiv Diklat' },
  { name: 'Romadhoni Feby Indriani, S.H', role: 'Kadiv Fundraising' },
];

const legalitas = [
  {
    icon: FileText,
    label: 'Akta Notaris',
    value: 'No. 03',
    sub: '9 Oktober 2025',
  },
  {
    icon: Building2,
    label: 'NPWP',
    value: '1000000006769695',
    sub: 'Nomor Pokok Wajib Pajak',
  },
  {
    icon: Shield,
    label: 'NIB',
    value: '2612250021319',
    sub: 'Nomor Induk Berusaha',
  },
  {
    icon: CreditCard,
    label: 'No. Rekening',
    value: 'BJB 0157189336100',
    sub: 'Bank BJB',
  },
];

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-emerald-500/30 text-emerald-100 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
            Tentang Kami
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Yayasan Sahabat<br />
            <span className="text-emerald-300">Nusantara</span>
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl leading-relaxed">
            Organisasi masyarakat sipil yang berkomitmen untuk mendorong keadilan sosial, 
            peningkatan kualitas pendidikan, perlindungan lingkungan hidup, serta penguatan 
            ketangguhan masyarakat terhadap bencana dan perubahan iklim.
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
            <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 sm:p-12 text-white overflow-hidden">
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
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed pt-0.5">{misi}</p>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </div>
      </section>

      {/* ── Nilai-Nilai Lembaga ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Nilai-Nilai Lembaga</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Prinsip yang Memandu Kami</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {coreValues.map((val, i) => (
              <Card key={i} className="bg-white border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-4xl mb-4">{val.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bidang Program Prioritas ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-300 text-xs font-bold tracking-widest uppercase mb-3">Fokus Kerja</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Bidang Program Prioritas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: '01', title: 'Sosial & Pemberdayaan Komunitas', icon: '👥' },
              { num: '02', title: 'Pendidikan & Peningkatan Kapasitas', icon: '📚' },
              { num: '03', title: 'Lingkungan Hidup & Tata Kelola SDA', icon: '🌿' },
              { num: '04', title: 'Kebencanaan & Ketangguhan Iklim', icon: '🛡️' },
            ].map((b) => (
              <div key={b.num} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-3xl mb-4">{b.icon}</div>
                <p className="text-emerald-300 text-xs font-bold tracking-widest mb-2">{b.num}</p>
                <h3 className="text-white font-bold text-lg leading-snug">{b.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Susunan Kepengurusan ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Struktur Organisasi</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Susunan Kepengurusan</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Individu-individu berdedikasi yang menggerakkan misi Yayasan Sahabat Nusantara.</p>
          </div>

          <div className="space-y-10">

            {/* Tier: Pembina */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase text-sm">Pembina</h3>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pembina.map((p) => (
                  <div key={p.name} className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-4">
                    <p className="font-bold text-gray-900">{p.name}</p>
                    <p className="text-amber-700 text-sm font-medium mt-1">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier: Pengawas */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase text-sm">Pengawas</h3>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pengawas.map((p) => (
                  <div key={p.name} className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4">
                    <p className="font-bold text-gray-900">{p.name}</p>
                    <p className="text-blue-700 text-sm font-medium mt-1">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier: Pengurus */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-3 h-3 rounded-full bg-emerald-600" />
                <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase text-sm">Pengurus</h3>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pengurus.map((p) => (
                  <div key={p.name} className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-4">
                    <p className="font-bold text-gray-900">{p.name}</p>
                    <p className="text-emerald-700 text-sm font-medium mt-1">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier: Pelaksana Harian */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-3 h-3 rounded-full bg-gray-500" />
                <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase text-sm">Pelaksana Harian</h3>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {pelaksanaHarian.map((p) => (
                  <div key={p.name} className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
                    <p className="font-bold text-gray-900">{p.name}</p>
                    <p className="text-gray-500 text-sm font-medium mt-1">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Legalitas ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Legalitas</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Dokumen Resmi & Legalitas</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Terdaftar dan diakui secara resmi oleh pemerintah Republik Indonesia.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {legalitas.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-200 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">{item.label}</p>
                  <p className="text-xl font-bold text-gray-900 mb-1 break-all">{item.value}</p>
                  <p className="text-sm text-gray-500">{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Kontak ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Hubungi Kami</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Informasi Kontak</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <a href="https://maps.google.com?q=Kp.+Cipicung+Girang+479+Ciumbuleuit+Bandung" target="_blank" rel="noopener noreferrer"
              className="flex gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:bg-emerald-50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                <MapPin className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Alamat</p>
                <p className="text-gray-900 font-medium leading-relaxed text-sm">Kp. Cipicung Girang No. 479, Desa Ciumbuleuit, Kec. Cidadap, Kota Bandung, Jawa Barat 40142</p>
              </div>
            </a>

            <a href="tel:08562185269"
              className="flex gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:bg-emerald-50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                <Phone className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Telepon</p>
                <p className="text-gray-900 font-medium">0856 2185 269</p>
                <p className="text-gray-500 text-sm">0812 2362 3243</p>
              </div>
            </a>

            <a href="mailto:sahabatnusantara15@gmail.com"
              className="flex gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:bg-emerald-50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                <Mail className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Email</p>
                <p className="text-gray-900 font-medium">sahabatnusantara15@gmail.com</p>
              </div>
            </a>

            <a href="https://instagram.com/SahabatNusantara" target="_blank" rel="noopener noreferrer"
              className="flex gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:bg-emerald-50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                <Instagram className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Instagram</p>
                <p className="text-gray-900 font-medium">@SahabatNusantara</p>
              </div>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
