import { Navbar } from '@/components/navbar';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Tentang Kami | Yayasan Sahabat Nusantara',
  description: 'Pelajari tentang misi, visi, dan nilai-nilai Yayasan Sahabat Nusantara dalam pelestarian lingkungan Indonesia.',
};

const values = [
  {
    icon: '🌍',
    title: 'Keberlanjutan',
    description: 'Mempromosikan praktik ramah lingkungan untuk generasi mendatang.',
  },
  {
    icon: '🤝',
    title: 'Kolaborasi',
    description: 'Bekerja sama dengan masyarakat, pemerintah, dan sektor swasta.',
  },
  {
    icon: '🌱',
    title: 'Inovasi',
    description: 'Mencari solusi kreatif untuk tantangan lingkungan modern.',
  },
  {
    icon: '❤️',
    title: 'Kepedulian',
    description: 'Berdedikasi untuk kesejahteraan lingkungan dan masyarakat.',
  },
];

const team = [
  {
    name: 'Dr. Bambang Sutrisno',
    role: 'Ketua Yayasan',
    bio: 'Pakar lingkungan dengan 20 tahun pengalaman dalam konservasi alam.',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Direktur Operasional',
    bio: 'Spesialis manajemen proyek keberlanjutan dan pemberdayaan masyarakat.',
  },
  {
    name: 'Ahmad Wijaya',
    role: 'Kepala Divisi Pendidikan',
    bio: 'Ahli pendidikan lingkungan dengan fokus pada literasi hijau.',
  },
  {
    name: 'Ratna Dewi',
    role: 'Kepala Keuangan',
    bio: 'Profesional keuangan berpengalaman dalam manajemen dana sosial.',
  },
];

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Tentang Yayasan Sahabat Nusantara
          </h1>

          <p className="text-lg text-gray-600 text-balance">
            Kami adalah organisasi nirlaba yang didedikasikan untuk pelestarian lingkungan dan keberlanjutan Indonesia melalui
            inovasi, edukasi, dan aksi nyata.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <Card className="bg-gradient-to-br from-emerald-50 to-white border-emerald-200 p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Misi Kami</h2>
              <p className="text-gray-700 leading-relaxed text-balance">
                Melindungi dan mempulihkan ekosistem alami Indonesia melalui penelitian, advokasi kebijakan, pendidikan lingkungan,
                dan pemberdayaan masyarakat lokal untuk menciptakan masa depan yang berkelanjutan dan sejahtera bagi semua.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-white border-emerald-200 p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Visi Kami</h2>
              <p className="text-gray-700 leading-relaxed text-balance">
                Indonesia yang hijau, berkelanjutan, dan sejahtera dengan ekosistem alami yang terjaga, masyarakat yang sadar
                lingkungan, dan ekonomi yang ramah lingkungan untuk generasi mendatang.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nilai-Nilai Inti Kami
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-balance">
            Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-0 p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Team Pengurus
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-balance">
            Profesional berpengalaman yang memimpin misi pelestarian lingkungan kami
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-emerald-50 to-white border-emerald-100 p-6 sm:p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Struktur Organisasi
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-balance">
            Susunan kepengurusan Yayasan Sahabat Nusantara yang berkolaborasi untuk mewujudkan visi dan misi lingkungan berkelanjutan.
          </p>

          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-gray-100 mx-auto">
            <div className="aspect-video w-full relative bg-gray-100 rounded-xl overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
              <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              <p className="text-gray-500 font-medium">Bagan Struktur Organisasi (Format JPG)</p>
              <p className="text-gray-400 text-sm mt-2">Placeholder gambar akan diganti dengan desain struktur aktual</p>
            </div>
            
            <div className="mt-8 text-left text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p>
                Struktur organisasi kami dirancang untuk memastikan transparansi, efisiensi, dan kolaborasi optimal di setiap tingkat operasional. Mulai dari dewan pembina hingga divisi-divisi eksekusi program di lapangan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
