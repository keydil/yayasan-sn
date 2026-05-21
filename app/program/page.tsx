import { Navbar } from '@/components/navbar';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Program | Yayasan Sahabat Nusantara',
  description: 'Jelajahi program-program pelestarian lingkungan dan keberlanjutan yang kami jalankan di seluruh Indonesia.',
};

const programs = [
  {
    id: 1,
    icon: '🌲',
    title: 'Konservasi Hutan',
    description: 'Program penanaman pohon dan rehabilitasi hutan di daerah yang telah rusak.',
    stats: '50,000+ pohon ditanam',
  },
  {
    id: 2,
    icon: '🐠',
    title: 'Pelindung Laut',
    description: 'Konservasi ekosistem laut dan perlindungan terumbu karang Indonesia.',
    stats: '15 kawasan laut terlindungi',
  },
  {
    id: 3,
    icon: '🌾',
    title: 'Pertanian Hijau',
    description: 'Sosialisasi pertanian berkelanjutan dan organik untuk petani lokal.',
    stats: '200+ petani terlatih',
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Energi Terbarukan',
    description: 'Promosi penggunaan energi surya dan angin untuk komunitas pedesaan.',
    stats: '50 instalasi energi surya',
  },
  {
    id: 5,
    icon: '🎓',
    title: 'Pendidikan Lingkungan',
    description: 'Program edukasi lingkungan di sekolah-sekolah untuk generasi muda.',
    stats: '100 sekolah terlibat',
  },
  {
    id: 6,
    icon: '♻️',
    title: 'Ekonomi Sirkular',
    description: 'Pemberdayaan masyarakat melalui pengolahan limbah dan daur ulang.',
    stats: '30 kelompok usaha',
  },
];

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Program Kami
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
              <Card
                key={program.id}
                className="bg-white border-0 p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-emerald-600 font-semibold text-sm">
                    {program.stats}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Bagaimana Kami Bekerja
          </h2>

          <div className="space-y-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step}
                  </div>
                </div>
                <div className="flex-grow">
                  {step === 1 && (
                    <>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Riset & Analisis
                      </h3>
                      <p className="text-gray-600">
                        Kami melakukan penelitian mendalam untuk memahami tantangan lingkungan lokal dan nasional.
                      </p>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Perencanaan Program
                      </h3>
                      <p className="text-gray-600">
                        Merancang program yang disesuaikan dengan kebutuhan komunitas dan lingkungan setempat.
                      </p>
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Implementasi Aksi
                      </h3>
                      <p className="text-gray-600">
                        Menjalankan program dengan melibatkan komunitas lokal, pemerintah, dan mitra swasta.
                      </p>
                    </>
                  )}
                  {step === 4 && (
                    <>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Monitoring & Evaluasi
                      </h3>
                      <p className="text-gray-600">
                        Memantau dampak program dan terus melakukan perbaikan untuk hasil yang optimal.
                      </p>
                    </>
                  )}
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
