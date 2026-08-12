-- SQL Schema untuk Yayasan Sahabat Nusantara (Supabase Setup)
-- Copy-paste seluruh query di bawah ini ke SQL Editor di Supabase Dashboard

-- 1. Tabel Berita / Artikel
CREATE TABLE IF NOT EXISTS public.articles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT,
    category TEXT NOT NULL DEFAULT 'Penghijauan',
    date TEXT NOT NULL,
    image TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabel Galeri Foto
CREATE TABLE IF NOT EXISTS public.gallery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Penghijauan',
    year TEXT NOT NULL,
    image TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabel Susunan Pengurus
CREATE TABLE IF NOT EXISTS public.pengurus (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    tier TEXT NOT NULL CHECK (tier IN ('pembina', 'pengawas', 'pengurus', 'pelaksana')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Read Public, Write Authorized)
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pengurus ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on articles" ON public.articles FOR SELECT USING (true);
CREATE POLICY "Allow public read access on gallery" ON public.gallery FOR SELECT USING (true);
CREATE POLICY "Allow public read access on pengurus" ON public.pengurus FOR SELECT USING (true);

CREATE POLICY "Allow full access for authenticated users on articles" ON public.articles FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow full access for authenticated users on gallery" ON public.gallery FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow full access for authenticated users on pengurus" ON public.pengurus FOR ALL USING (auth.role() = 'authenticated');
