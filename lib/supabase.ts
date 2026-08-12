import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Data types
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
}

export interface PengurusItem {
  id: string;
  name: string;
  role: string;
  tier: 'pembina' | 'pengawas' | 'pengurus' | 'pelaksana';
}

// Initial Data Seed (COMPRO PDF & Real Content)
const initialArticles: Article[] = [
  {
    id: '1',
    title: 'Program Penghijauan & Reboisasi Lahan Kritis di Jawa Barat 2025',
    excerpt: 'Yayasan Sahabat Nusantara memulai tahap awal pemetaan kawasan resapan air dan penanaman pohon endemik di wilayah rawan deforestasi.',
    content: 'Yayasan Sahabat Nusantara memulai tahap awal pemetaan kawasan resapan air dan penanaman pohon endemik di wilayah rawan deforestasi. Program ini melibatkan komunitas lokal, pemerintah desa, dan kader lingkungan yang telah dilatih.',
    category: 'Penghijauan',
    date: '10 Februari 2025',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
  },
  {
    id: '2',
    title: 'Pengembangan Bank Sampah & TPS3R Berbasis Komunitas',
    excerpt: 'Inisiatif pengolahan sampah organik dan pemilahan daur ulang untuk menciptakan sistem ekonomi sirkular desa.',
    content: 'Inisiatif pengolahan sampah organik dan pemilahan daur ulang untuk menciptakan sistem ekonomi sirkular desa. Edukasi pemilahan sampah dilakukan secara bertahap kepada warga setempat.',
    category: 'Pengelolaan Sampah',
    date: '28 Januari 2025',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
  },
  {
    id: '3',
    title: 'Pelatihan Kader Lingkungan & Edukasi Kesadaran Iklim Sekolah',
    excerpt: 'Penguatan kapasitas pemuda dan modul edukasi hijau di sekolah-sekolah untuk membangun generasi tangguh ekologis.',
    content: 'Penguatan kapasitas pemuda dan modul edukasi hijau di sekolah-sekolah untuk membangun generasi tangguh ekologis. Siswa diajak praktik langsung pembuatan kompos dan penanaman bibit.',
    category: 'Pendidikan',
    date: '15 Januari 2025',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
  },
];

const initialGallery: GalleryItem[] = [
  { id: '1', title: 'Penanaman Pohon di Lahan Kritis', category: 'Penghijauan', year: '2025', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80' },
  { id: '2', title: 'Workshop Edukasi Lingkungan Sekolah', category: 'Pendidikan', year: '2025', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80' },
  { id: '3', title: 'Pemetaan Daerah Resapan Air', category: 'Konservasi Air', year: '2025', image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80' },
  { id: '4', title: 'Pengolahan Sampah Organik Komunitas', category: 'Pengelolaan Sampah', year: '2024', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80' },
  { id: '5', title: 'Pelatihan Kader Lingkungan Desa', category: 'Pendidikan', year: '2024', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80' },
  { id: '6', title: 'Konservasi Mata Air & Hutan Desa', category: 'Konservasi Air', year: '2024', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80' },
];

const initialPengurus: PengurusItem[] = [
  // Pembina
  { id: '1', name: 'Ir. Surjaman', role: 'Ketua Pembina', tier: 'pembina' },
  { id: '2', name: 'A. Cahya Hendra, S.T., M.T', role: 'Anggota Pembina', tier: 'pembina' },
  { id: '3', name: 'Toni Adrian, S.H', role: 'Anggota Pembina', tier: 'pembina' },
  // Pengawas
  { id: '4', name: 'Repa Maulana, S.Pd', role: 'Ketua Pengawas', tier: 'pengawas' },
  { id: '5', name: 'Dr. Ir. H. Dede Zainal Arief, M.Sc', role: 'Anggota Pengawas', tier: 'pengawas' },
  { id: '6', name: 'Andry Gumilar Ramadani, S.Ip., M.M', role: 'Anggota Pengawas', tier: 'pengawas' },
  // Pengurus
  { id: '7', name: 'Djati Pranoto, S.Sos', role: 'Ketua', tier: 'pengurus' },
  { id: '8', name: 'Arief Budi Wandoyo, S.Pd', role: 'Wakil Ketua', tier: 'pengurus' },
  { id: '9', name: 'Edwar Julistina Ramdon, S.T, M.T', role: 'Sekretaris I', tier: 'pengurus' },
  { id: '10', name: 'Ajeng Pangestu Ningsih, S.Pd', role: 'Sekretaris II', tier: 'pengurus' },
  { id: '11', name: 'Sorta Mina, S.T', role: 'Bendahara I', tier: 'pengurus' },
  { id: '12', name: 'Reni, S.Pd', role: 'Bendahara II', tier: 'pengurus' },
  // Pelaksana Harian
  { id: '13', name: 'Dadang Sudardja, S.H', role: 'Direktur', tier: 'pelaksana' },
  { id: '14', name: 'M Haikal Fahrurozi, S.H', role: 'Sekretaris', tier: 'pelaksana' },
  { id: '15', name: 'Salsabila Alifa, S.Ip', role: 'Keuangan', tier: 'pelaksana' },
  { id: '16', name: 'M. Taufik, S.Sn', role: 'Kadiv Lingkungan', tier: 'pelaksana' },
  { id: '17', name: 'Aan Kusdinar, S.E', role: 'Kadiv Sosial', tier: 'pelaksana' },
  { id: '18', name: 'Warsidi, S.T', role: 'Kadiv Diklat', tier: 'pelaksana' },
  { id: '19', name: 'Romadhoni Feby Indriani, S.H', role: 'Kadiv Fundraising', tier: 'pelaksana' },
];

// Local Data Store Helpers
const STORAGE_KEYS = {
  ARTICLES: 'ysn_articles_store',
  GALLERY: 'ysn_gallery_store',
  PENGURUS: 'ysn_pengurus_store',
};

function getStore<T>(key: string, defaultVal: T): T {
  if (typeof window === 'undefined') return defaultVal;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultVal;
  } catch (e) {
    return defaultVal;
  }
}

function setStore<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage save error:', e);
  }
}

// Data Service API
export const dataService = {
  // --- ARTICLES ---
  getArticles: (): Article[] => {
    return getStore(STORAGE_KEYS.ARTICLES, initialArticles);
  },
  getArticleById: (id: string): Article | undefined => {
    const articles = dataService.getArticles();
    return articles.find((a) => a.id === id);
  },
  saveArticle: (article: Omit<Article, 'id'> & { id?: string }): Article => {
    const articles = dataService.getArticles();
    if (article.id) {
      const idx = articles.findIndex((a) => a.id === article.id);
      if (idx !== -1) {
        articles[idx] = { ...articles[idx], ...article };
        setStore(STORAGE_KEYS.ARTICLES, articles);
        return articles[idx];
      }
    }
    const newArticle: Article = {
      ...article,
      id: Date.now().toString(),
      date: article.date || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    };
    articles.unshift(newArticle);
    setStore(STORAGE_KEYS.ARTICLES, articles);
    return newArticle;
  },
  deleteArticle: (id: string): void => {
    const articles = dataService.getArticles().filter((a) => a.id !== id);
    setStore(STORAGE_KEYS.ARTICLES, articles);
  },

  // --- GALLERY ---
  getGallery: (): GalleryItem[] => {
    return getStore(STORAGE_KEYS.GALLERY, initialGallery);
  },
  saveGalleryItem: (item: Omit<GalleryItem, 'id'> & { id?: string }): GalleryItem => {
    const gallery = dataService.getGallery();
    if (item.id) {
      const idx = gallery.findIndex((g) => g.id === item.id);
      if (idx !== -1) {
        gallery[idx] = { ...gallery[idx], ...item };
        setStore(STORAGE_KEYS.GALLERY, gallery);
        return gallery[idx];
      }
    }
    const newItem: GalleryItem = {
      ...item,
      id: Date.now().toString(),
    };
    gallery.unshift(newItem);
    setStore(STORAGE_KEYS.GALLERY, gallery);
    return newItem;
  },
  deleteGalleryItem: (id: string): void => {
    const gallery = dataService.getGallery().filter((g) => g.id !== id);
    setStore(STORAGE_KEYS.GALLERY, gallery);
  },

  // --- PENGURUS ---
  getPengurus: (): PengurusItem[] => {
    return getStore(STORAGE_KEYS.PENGURUS, initialPengurus);
  },
  savePengurus: (item: Omit<PengurusItem, 'id'> & { id?: string }): PengurusItem => {
    const list = dataService.getPengurus();
    if (item.id) {
      const idx = list.findIndex((p) => p.id === item.id);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...item };
        setStore(STORAGE_KEYS.PENGURUS, list);
        return list[idx];
      }
    }
    const newItem: PengurusItem = {
      ...item,
      id: Date.now().toString(),
    };
    list.push(newItem);
    setStore(STORAGE_KEYS.PENGURUS, list);
    return newItem;
  },
  deletePengurus: (id: string): void => {
    const list = dataService.getPengurus().filter((p) => p.id !== id);
    setStore(STORAGE_KEYS.PENGURUS, list);
  },
};
