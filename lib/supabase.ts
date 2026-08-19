import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const uploadImageToSupabase = async (file: File, folder = 'uploads'): Promise<string> => {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase URL or Key missing');
    }

    const fileExt = file.name.split('.').pop() || 'jpg';
    const fileName = `${folder}/${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('ysn-media')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.warn('Supabase Storage Bucket upload error:', error);
      throw error;
    }

    const { data: publicUrlData } = supabase.storage
      .from('ysn-media')
      .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
  } catch (err) {
    console.error('Storage upload failed:', err);
    throw err;
  }
};

// Data types
export interface Article {
  id: string;
  slug?: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  images?: string[];
  videoUrl?: string;
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 80);
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  images?: string[];
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
  { id: '1', name: 'Ir. Surjaman', role: 'Ketua Pembina', tier: 'pembina' },
  { id: '2', name: 'A. Cahya Hendra, S.T., M.T', role: 'Anggota Pembina', tier: 'pembina' },
  { id: '3', name: 'Toni Adrian, S.H', role: 'Anggota Pembina', tier: 'pembina' },
  { id: '4', name: 'Repa Maulana, S.Pd', role: 'Ketua Pengawas', tier: 'pengawas' },
  { id: '5', name: 'Dr. Ir. H. Dede Zainal Arief, M.Sc', role: 'Anggota Pengawas', tier: 'pengawas' },
  { id: '6', name: 'Andry Gumilar Ramadani, S.Ip., M.M', role: 'Anggota Pengawas', tier: 'pengawas' },
  { id: '7', name: 'Djati Pranoto, S.Sos', role: 'Ketua', tier: 'pengurus' },
  { id: '8', name: 'Arief Budi Wandoyo, S.Pd', role: 'Wakil Ketua', tier: 'pengurus' },
  { id: '9', name: 'Edwar Julistina Ramdon, S.T, M.T', role: 'Sekretaris I', tier: 'pengurus' },
  { id: '10', name: 'Ajeng Pangestu Ningsih, S.Pd', role: 'Sekretaris II', tier: 'pengurus' },
  { id: '11', name: 'Sorta Mina, S.T', role: 'Bendahara I', tier: 'pengurus' },
  { id: '12', name: 'Reni, S.Pd', role: 'Bendahara II', tier: 'pengurus' },
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

// Data Service API (Dual-Engine: Supabase Cloud DB Primary with Smart Auto-Upload & Fallback)
export const dataService = {
  getArticles: async (): Promise<Article[]> => {
    const localArticles = getStore(STORAGE_KEYS.ARTICLES, initialArticles);

    try {
      if (supabaseUrl && supabaseAnonKey) {
        let { data, error } = await supabase.from('articles').select('*').order('created_at', { ascending: false });
        if (error) {
          const res = await supabase.from('articles').select('*');
          data = res.data;
          error = res.error;
        }

        if (!error && data && data.length > 0) {
          const mapped: Article[] = data.map((item: any) => ({
            id: String(item.id),
            slug: item.slug || generateSlug(item.title),
            title: item.title,
            excerpt: item.excerpt,
            content: item.content || '',
            category: item.category,
            date: item.date,
            image: item.image,
            images: Array.isArray(item.images) ? item.images : (typeof item.images === 'string' && item.images.startsWith('[') ? JSON.parse(item.images) : []),
            videoUrl: item.videoUrl || item.video_url || '',
          }));
          setStore(STORAGE_KEYS.ARTICLES, mapped);
          return mapped;
        }
      }
    } catch (err) {
      console.warn('Supabase fetch articles fallback to local storage:', err);
    }
    return localArticles;
  },

  getArticleById: async (idOrSlug: string): Promise<Article | undefined> => {
    const mapRow = (data: any): Article => ({
      id: String(data.id),
      slug: data.slug || generateSlug(data.title),
      title: data.title,
      excerpt: data.excerpt,
      content: data.content || '',
      category: data.category,
      date: data.date,
      image: data.image,
      images: Array.isArray(data.images) ? data.images : (typeof data.images === 'string' && data.images.startsWith('[') ? JSON.parse(data.images) : []),
      videoUrl: data.videoUrl || data.video_url || '',
    });
    try {
      if (supabaseUrl && supabaseAnonKey) {
        // Try by UUID id first
        const byId = await supabase.from('articles').select('*').eq('id', idOrSlug).maybeSingle();
        if (!byId.error && byId.data) return mapRow(byId.data);
        // Then try by slug
        const bySlug = await supabase.from('articles').select('*').eq('slug', idOrSlug).maybeSingle();
        if (!bySlug.error && bySlug.data) return mapRow(bySlug.data);
      }
    } catch (err) {
      console.warn('Supabase fetch article by id/slug fallback:', err);
    }
    const articles = await dataService.getArticles();
    return articles.find((a) => a.id === idOrSlug || a.slug === idOrSlug);
  },

  saveArticle: async (article: Omit<Article, 'id'> & { id?: string }): Promise<Article> => {
    const formattedDate = article.date || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    let savedItem: Article = {
      id: article.id || Date.now().toString(),
      title: article.title,
      excerpt: article.excerpt,
      content: article.content || '',
      category: article.category,
      date: formattedDate,
      image: article.image,
      images: article.images || [],
      videoUrl: article.videoUrl || '',
    };

    try {
      if (supabaseUrl && supabaseAnonKey) {
        const slug = (article as any).slug || generateSlug(article.title);
        savedItem.slug = slug;

        const basePayload: any = {
          title: article.title,
          excerpt: article.excerpt,
          content: article.content,
          category: article.category,
          date: formattedDate,
          image: article.image,
          slug,
        };

        const fullPayload: any = {
          ...basePayload,
          images: JSON.stringify(article.images || []),
          video_url: article.videoUrl || '',
        };

        if (article.id) {
          // UPDATE existing row — works for both UUID and integer IDs
          let { error } = await supabase.from('articles').update(fullPayload).eq('id', article.id);
          if (error) {
            console.warn('Full payload update failed, retrying base payload:', error.message);
            const res = await supabase.from('articles').update(basePayload).eq('id', article.id);
            if (res.error) console.error('[Supabase] Update articles error:', res.error);
          }
        } else {
          // Insert new DB row
          let res = await supabase.from('articles').insert([fullPayload]).select().single();
          if (res.error) {
            console.warn('Full payload insert failed, retrying base payload:', res.error.message);
            res = await supabase.from('articles').insert([basePayload]).select().single();
          }

          if (res.error) {
            console.error('Supabase insert error:', res.error);
          } else if (res.data) {
            savedItem.id = String(res.data.id);
            console.log('Successfully saved article to Supabase Cloud DB! ID:', res.data.id);
          }
        }
      }
    } catch (err) {
      console.error('Supabase save article exception:', err);
    }

    // Sync to local storage
    const articles = getStore(STORAGE_KEYS.ARTICLES, initialArticles);
    if (article.id) {
      const idx = articles.findIndex((a) => a.id === article.id);
      if (idx !== -1) {
        articles[idx] = savedItem;
      } else {
        articles.unshift(savedItem);
      }
    } else {
      articles.unshift(savedItem);
    }
    setStore(STORAGE_KEYS.ARTICLES, articles);

    return savedItem;
  },

  deleteArticle: async (id: string): Promise<void> => {
    try {
      if (supabaseUrl && supabaseAnonKey) {
        await supabase.from('articles').delete().eq('id', id);
      }
    } catch (err) {
      console.warn('Supabase delete article fallback:', err);
    }
    const articles = getStore(STORAGE_KEYS.ARTICLES, initialArticles).filter((a) => a.id !== id);
    setStore(STORAGE_KEYS.ARTICLES, articles);
  },

  getGallery: async (): Promise<GalleryItem[]> => {
    const localGallery = getStore(STORAGE_KEYS.GALLERY, initialGallery);
    try {
      if (supabaseUrl && supabaseAnonKey) {
        let { data, error } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
        if (error) {
          const res = await supabase.from('gallery').select('*');
          data = res.data;
          error = res.error;
        }

        if (!error && data && data.length > 0) {
          const mapped: GalleryItem[] = data.map((item: any) => ({
            id: String(item.id),
            title: item.title,
            category: item.category,
            year: item.year,
            image: item.image,
            images: Array.isArray(item.images) ? item.images : (typeof item.images === 'string' && item.images.startsWith('[') ? JSON.parse(item.images) : []),
          }));
          setStore(STORAGE_KEYS.GALLERY, mapped);
          return mapped;
        }
      }
    } catch (err) {
      console.warn('Supabase fetch gallery fallback:', err);
    }
    return localGallery;
  },

  saveGalleryItem: async (item: Omit<GalleryItem, 'id'> & { id?: string }): Promise<GalleryItem> => {
    let savedItem: GalleryItem = {
      id: item.id || Date.now().toString(),
      title: item.title,
      category: item.category,
      year: item.year,
      image: item.image,
      images: item.images || [],
    };

    try {
      if (supabaseUrl && supabaseAnonKey) {
        const fullPayload = {
          title: item.title,
          category: item.category,
          year: item.year,
          image: item.image,
          images: JSON.stringify(item.images || []),
        };
        const basePayload = {
          title: item.title,
          category: item.category,
          year: item.year,
          image: item.image,
        };

        if (item.id) {
          let { error } = await supabase.from('gallery').update(fullPayload).eq('id', item.id);
          if (error) {
            console.warn('[Supabase] Full gallery update failed, retrying base:', error.message);
            const res = await supabase.from('gallery').update(basePayload).eq('id', item.id);
            if (res.error) console.error('[Supabase] Update gallery error:', res.error.message);
          }
        } else {
          let res = await supabase.from('gallery').insert([fullPayload]).select().single();
          if (res.error) {
            console.warn('[Supabase] Full gallery insert failed, retrying base:', res.error.message);
            res = await supabase.from('gallery').insert([basePayload]).select().single();
          }
          if (res.error) console.error('[Supabase] Insert gallery error:', res.error.message);
          if (!res.error && res.data) savedItem.id = String(res.data.id);
        }
      }
    } catch (err) {
      console.error('[Supabase] saveGallery exception:', err);
    }

    const gallery = getStore(STORAGE_KEYS.GALLERY, initialGallery);
    if (item.id) {
      const idx = gallery.findIndex((g) => g.id === item.id);
      if (idx !== -1) { gallery[idx] = savedItem; } else { gallery.unshift(savedItem); }
    } else {
      gallery.unshift(savedItem);
    }
    setStore(STORAGE_KEYS.GALLERY, gallery);

    return savedItem;
  },

  deleteGalleryItem: async (id: string): Promise<void> => {
    try {
      if (supabaseUrl && supabaseAnonKey) {
        await supabase.from('gallery').delete().eq('id', id);
      }
    } catch (err) {
      console.warn('Supabase delete gallery fallback:', err);
    }
    const gallery = getStore(STORAGE_KEYS.GALLERY, initialGallery).filter((g) => g.id !== id);
    setStore(STORAGE_KEYS.GALLERY, gallery);
  },

  getPengurus: async (): Promise<PengurusItem[]> => {
    const TIER_ORDER: Record<string, number> = { pembina: 0, pengawas: 1, pengurus: 2, pelaksana: 3 };
    const localList = getStore(STORAGE_KEYS.PENGURUS, initialPengurus);
    try {
      if (supabaseUrl && supabaseAnonKey) {
        let { data, error } = await supabase.from('pengurus').select('*');
        if (error) {
          console.error('[Supabase] getPengurus select failed:', error.message);
        } else if (data) {
          if (data.length === 0) {
            // Seed without IDs so Supabase generates UUIDs
            const seedPayload = initialPengurus.map(({ id, ...rest }) => rest);
            const { error: seedErr } = await supabase.from('pengurus').insert(seedPayload);
            if (seedErr) console.error('[Supabase] pengurus seed failed:', seedErr.message);
            const { data: seeded } = await supabase.from('pengurus').select('*');
            if (seeded && seeded.length > 0) {
              const mapped: PengurusItem[] = seeded
                .map((item: any) => ({ id: String(item.id), name: item.name, role: item.role, tier: item.tier as any }))
                .sort((a: PengurusItem, b: PengurusItem) => (TIER_ORDER[a.tier] ?? 99) - (TIER_ORDER[b.tier] ?? 99));
              setStore(STORAGE_KEYS.PENGURUS, mapped);
              return mapped;
            }
            return initialPengurus;
          }
          const mapped: PengurusItem[] = data
            .map((item: any) => ({ id: String(item.id), name: item.name, role: item.role, tier: item.tier as any }))
            .sort((a: PengurusItem, b: PengurusItem) => (TIER_ORDER[a.tier] ?? 99) - (TIER_ORDER[b.tier] ?? 99));
          setStore(STORAGE_KEYS.PENGURUS, mapped);
          return mapped;
        }
      }
    } catch (err) {
      console.error('[Supabase] getPengurus exception:', err);
    }
    return localList;
  },

  savePengurus: async (item: Omit<PengurusItem, 'id'> & { id?: string }): Promise<PengurusItem> => {
    let savedItem: PengurusItem = {
      id: item.id || Date.now().toString(),
      name: item.name,
      role: item.role,
      tier: item.tier,
    };

    try {
      if (supabaseUrl && supabaseAnonKey) {
        if (item.id) {
          // UPDATE existing row — works for both UUID and integer IDs
          const { error } = await supabase.from('pengurus').update({
            name: item.name,
            role: item.role,
            tier: item.tier,
          }).eq('id', item.id);
          if (error) console.error('[Supabase] Update pengurus error:', error.message);
        } else {
          // INSERT new row
          const { data, error } = await supabase.from('pengurus').insert([{
            name: item.name,
            role: item.role,
            tier: item.tier,
          }]).select().single();
          if (error) console.error('[Supabase] Insert pengurus error:', error.message);
          if (!error && data) savedItem.id = String(data.id);
        }
      }
    } catch (err) {
      console.error('[Supabase] savePengurus exception:', err);
    }

    const list = getStore(STORAGE_KEYS.PENGURUS, initialPengurus);
    if (item.id) {
      const idx = list.findIndex((p) => p.id === item.id);
      if (idx !== -1) {
        list[idx] = savedItem;
      } else {
        list.push(savedItem);
      }
    } else {
      list.push(savedItem);
    }
    setStore(STORAGE_KEYS.PENGURUS, list);

    return savedItem;
  },

  deletePengurus: async (id: string): Promise<void> => {
    try {
      if (supabaseUrl && supabaseAnonKey) {
        await supabase.from('pengurus').delete().eq('id', id);
      }
    } catch (err) {
      console.warn('Supabase delete pengurus fallback:', err);
    }
    const list = getStore(STORAGE_KEYS.PENGURUS, initialPengurus).filter((p) => p.id !== id);
    setStore(STORAGE_KEYS.PENGURUS, list);
  },
};
