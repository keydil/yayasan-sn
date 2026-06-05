import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

// Hardcoded articles data to match the main page
const articles = [
  {
    id: 1,
    title: 'Teknologi Energi Terbarukan di Indonesia: Peluang dan Tantangan',
    excerpt: 'Indonesia memiliki potensi besar dalam pengembangan energi terbarukan. Artikel ini mengeksplorasi peluang dan tantangan implementasi energi surya dan angin di kepulauan Indonesia.',
    category: 'Energi',
    date: '15 April 2024',
    image: 'https://images.unsplash.com/photo-1509391366360-12001c361405?w=1200&q=80',
    content: 'Indonesia, sebagai negara kepulauan tropis, memiliki kelimpahan sumber daya alam yang tak ternilai, termasuk potensi energi terbarukan yang sangat besar. Mulai dari tenaga surya yang menyinari sepanjang tahun, angin kencang di pesisir, hingga potensi panas bumi (geothermal) yang merupakan salah satu yang terbesar di dunia. Namun, transisi menuju energi bersih bukan tanpa tantangan.\n\nDalam beberapa tahun terakhir, pemerintah bersama berbagai lembaga non-profit seperti Yayasan Sahabat Nusantara telah menginisiasi pemasangan panel surya di daerah-daerah terpencil yang belum terjangkau jaringan listrik nasional (off-grid). Inisiatif ini tidak hanya memberikan penerangan, tetapi juga membuka akses pendidikan dan ekonomi bagi masyarakat pedesaan.\n\nNamun, tantangan infrastruktur, tingginya biaya investasi awal, dan kebutuhan akan regulasi yang lebih mendukung masih menjadi hambatan utama. Oleh karena itu, kolaborasi antara pemerintah, sektor swasta, dan masyarakat sangat krusial untuk memastikan Indonesia bisa mencapai target emisi nol bersih pada tahun 2060.',
  },
  {
    id: 2,
    title: 'Konservasi Laut: Melindungi Ekosistem Terumbu Karang',
    excerpt: 'Terumbu karang adalah ekosistem yang sangat penting namun terus terancam. Kami melakukan upaya konservasi laut yang inovatif untuk menjaga kelestarian terumbu karang Indonesia.',
    category: 'Konservasi',
    date: '12 April 2024',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1200&q=80',
    content: 'Terumbu karang sering disebut sebagai "hutan hujan di laut" karena keanekaragaman hayatinya yang luar biasa. Sayangnya, pemanasan global, penangkapan ikan yang merusak (seperti penggunaan bom dan racun), serta polusi plastik telah menyebabkan pemutihan karang (coral bleaching) dan kerusakan masif pada ekosistem laut kita.\n\nYayasan Sahabat Nusantara baru saja menyelesaikan program restorasi terumbu karang di perairan Sulawesi, menggunakan metode bioref (struktur beton ramah lingkungan tempat bibit karang ditanam). Hasilnya sangat menggembirakan; dalam waktu kurang dari satu tahun, tingkat kehidupan bibit karang mencapai 85%, dan populasi ikan karang di area tersebut meningkat tajam.\n\nKami percaya bahwa konservasi sejati tidak bisa dilakukan tanpa melibatkan masyarakat setempat. Oleh karena itu, nelayan lokal kini diberdayakan sebagai "penjaga laut" dan pengelola ekowisata, memberikan mereka insentif ekonomi untuk menjaga laut tetap lestari.',
  },
  {
    id: 3,
    title: 'Pertanian Berkelanjutan: Masa Depan Petani Indonesia',
    excerpt: 'Pertanian berkelanjutan adalah kunci untuk meningkatkan kesejahteraan petani dan menjaga kelestarian lingkungan. Kami mendorong praktik pertanian yang ramah lingkungan dan menguntungkan ekonomi lokal.',
    category: 'Pertanian',
    date: '10 April 2024',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    content: 'Praktik pertanian konvensional yang sangat bergantung pada pupuk kimia dan pestisida telah menurunkan kualitas tanah dari waktu ke waktu. Hal ini tidak hanya merugikan lingkungan tetapi juga mengancam ketahanan pangan jangka panjang.\n\nMelalui program Pertanian Hijau, kami telah melatih lebih dari 200 petani di Jawa dan Sumatera untuk beralih ke pertanian organik. Para petani diajarkan cara membuat pupuk kompos dari limbah organik, menggunakan pestisida alami berbahan dasar tumbuhan, dan menerapkan sistem rotasi tanaman.\n\nHasil panen pertama dari lahan percontohan menunjukkan bahwa kualitas hasil bumi meningkat secara signifikan. Selain itu, sayuran organik memiliki nilai jual yang lebih tinggi di pasar, sehingga pendapatan petani pun bertambah. Ini membuktikan bahwa menjaga lingkungan dan meningkatkan kesejahteraan ekonomi bisa berjalan seiring.',
  },
  {
    id: 4,
    title: 'Pendidikan Lingkungan: Membangun Generasi Sadar Lingkungan',
    excerpt: 'Pendidikan lingkungan memainkan peran krusial dalam membentuk kesadaran generasi muda tentang pentingnya pelestarian lingkungan.',
    category: 'Pendidikan',
    date: '8 April 2024',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80',
    content: 'Membangun kesadaran lingkungan harus dimulai sejak dini. Itulah mengapa program Pendidikan Lingkungan kami difokuskan pada sekolah-sekolah di berbagai jenjang. \n\nKami merancang modul pembelajaran yang interaktif dan menyenangkan, seperti praktek langsung membuat daur ulang kertas, membuat kebun mini di halaman sekolah, hingga eksperimen sederhana tentang penjernihan air. \n\nAntusiasme anak-anak sangat luar biasa. Mereka tidak hanya belajar teorinya, tetapi langsung mempraktikkannya. Kami berharap, benih-benih kepedulian yang kami tanamkan hari ini akan tumbuh menjadi generasi masa depan yang bertanggung jawab penuh terhadap kelestarian bumi.',
  },
  {
    id: 5,
    title: 'Ekonomi Sirkular: Mengubah Limbah Menjadi Aset',
    excerpt: 'Ekonomi sirkular adalah model ekonomi yang meminimalkan limbah dan memaksimalkan penggunaan sumber daya secara efisien.',
    category: 'Ekonomi',
    date: '5 April 2024',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80',
    content: 'Konsep "buang" tidak seharusnya ada. Dalam alam, tidak ada yang namanya sampah; sisa dari suatu proses adalah bahan baku untuk proses lainnya. Inilah prinsip dasar dari Ekonomi Sirkular.\n\nDi beberapa komunitas binaan kami, ibu-ibu rumah tangga kini berhasil mengubah limbah plastik kemasan menjadi kerajinan tangan bernilai jual seperti tas, dompet, dan tikar. Limbah organik dari dapur dan pasar juga dikumpulkan untuk diolah menjadi kompos dan pakan maggot yang kaya protein.\n\nDengan menerapkan ekonomi sirkular, kita tidak hanya memecahkan masalah penumpukan sampah di TPA, tetapi juga menciptakan sirkulasi ekonomi baru di akar rumput.',
  },
  {
    id: 6,
    title: 'Dampak Perubahan Iklim terhadap Biodiversitas Indonesia',
    excerpt: 'Perubahan iklim global memiliki dampak signifikan terhadap biodiversitas Indonesia. Artikel ini membahas strategi adaptasi dan mitigasi yang diperlukan.',
    category: 'Iklim',
    date: '2 April 2024',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
    content: 'Indonesia adalah salah satu dari 17 negara megabiodiversitas di dunia. Namun, kekayaan alam ini sedang menghadapi ancaman serius dari perubahan iklim. Pergeseran musim yang tidak menentu, kenaikan suhu rata-rata, dan cuaca ekstrem telah mengganggu siklus hidup banyak spesies flora dan fauna endemik.\n\nSebagai contoh, beberapa jenis burung yang bermigrasi mulai kehilangan orientasi navigasinya, dan siklus berbunga beberapa pohon hutan hujan tropis menjadi terganggu, yang pada akhirnya mempengaruhi ketersediaan pakan bagi satwa di dalamnya.\n\nLangkah mitigasi berupa perlindungan habitat alami yang tersisa secara ketat, serta upaya perluasan ruang terbuka hijau harus terus dilakukan secara kolektif oleh semua pihak.',
  },
];

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ id: article.id.toString() }));
}

export default async function BeritaDetailPage({ params }: Props) {
  const { id } = await params;
  const article = articles.find((a) => a.id.toString() === id);

  if (!article) {
    notFound();
  }

  const otherArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Header */}
      <section className="bg-emerald-50/50 py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/berita" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Berita
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              <Tag className="w-3.5 h-3.5 mr-1.5" />
              {article.category}
            </span>
            <span className="inline-flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1.5" />
              {article.date}
            </span>
            <span className="inline-flex items-center text-sm text-gray-500">
              <User className="w-4 h-4 mr-1.5" />
              Tim Redaksi YSN
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-balance">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-md">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <article className="prose prose-lg prose-emerald max-w-none">
            <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8 border-l-4 border-emerald-500 pl-6">
              {article.excerpt}
            </p>
            
            <div className="text-gray-700 leading-relaxed space-y-6">
              {article.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </article>

          {/* Share / Tags section could go here */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm">Bagikan artikel ini untuk menyebarkan kepedulian terhadap lingkungan.</p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Baca Artikel Lainnya</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherArticles.map((item) => (
              <Link key={item.id} href={`/berita/${item.id}`} className="group block bg-white rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full">
                <div className="h-48 bg-gray-200 relative overflow-hidden shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="text-emerald-600 text-sm font-semibold flex items-center gap-1 mt-auto">
                    Selengkapnya
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
