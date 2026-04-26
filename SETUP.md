# Yayasan Sahabat Nusantara - Setup & Documentation

Panduan lengkap untuk setup dan deployment website Yayasan Sahabat Nusantara.

## 📋 Daftar Isi

1. [Fitur Utama](#fitur-utama)
2. [Tech Stack](#tech-stack)
3. [Setup Awal](#setup-awal)
4. [Konfigurasi Supabase](#konfigurasi-supabase)
5. [Fitur CRUD](#fitur-crud)
6. [Print & Export](#print--export)
7. [Struktur Proyek](#struktur-proyek)
8. [Demo Login](#demo-login)
9. [Deployment](#deployment)

## 🚀 Fitur Utama

### Public Pages
- **Beranda** - Landing page dengan hero section, impact stats, dan blog preview
- **Tentang** - Informasi tentang organisasi, misi, visi, dan tim
- **Program** - Daftar program dan inisiatif keberlanjutan
- **Berita** - Blog dan artikel terbaru tentang lingkungan

### Admin Module
- **Login** - Password-protected admin portal (demo password: admin123)
- **Dashboard** - Ringkasan dan kontrol admin
- **Kelola Anggota** - Tabel lengkap dengan filter dan search
- **Tambah Anggota** - Form untuk menambah anggota baru
- **Edit Anggota** - Update data anggota yang sudah terdaftar
- **Hapus Anggota** - Delete member dengan konfirmasi
- **Cetak Laporan** - Export data anggota ke format print-friendly

## 💻 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Mock auth dengan React Context
- **Language**: TypeScript
- **UI Components**: shadcn/ui

## 🔧 Setup Awal

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Variables

Buat file `.env.local` di root project:

```env
# Supabase (opsional - untuk production)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Jalankan Development Server

```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🗄️ Konfigurasi Supabase

### Database Setup

Sistem sudah dilengkapi dengan SQL schema untuk setup database di Supabase. File tersedia di:
- `/scripts/setup-members-table.sql`

**Untuk setup di Supabase:**

1. Login ke [Supabase Dashboard](https://app.supabase.com)
2. Pilih project Anda
3. Buka SQL Editor
4. Copy seluruh isi dari `setup-members-table.sql`
5. Jalankan query

**Tabel yang akan dibuat:**
- `members` - Tabel anggota dengan fields:
  - `id` (UUID, Primary Key)
  - `nama` (VARCHAR)
  - `email` (VARCHAR, Unique)
  - `divisi` (Enum: Operasional, Pendidikan, Pemasaran, Keuangan, Riset & Pengembangan, Keberlanjutan)
  - `status` (Enum: Aktif, Tidak Aktif, Pending)
  - `nomor_hp` (VARCHAR)
  - `alamat` (TEXT)
  - `tanggal_bergabung` (TIMESTAMP)
  - `catatan` (TEXT)
  - `created_at` (TIMESTAMP)
  - `updated_at` (TIMESTAMP)

### Row Level Security (RLS)

Database sudah dilengkapi dengan RLS policies untuk keamanan. Policies memungkinkan authenticated users untuk:
- Read all members
- Insert new members
- Update existing members
- Delete members

## 📊 Fitur CRUD

### Data Members

**File-file terkait:**
- `/lib/supabase.ts` - Supabase client & types
- `/lib/actions/members.ts` - Server actions untuk CRUD
- `/components/members-list.tsx` - List component dengan filter
- `/components/member-form.tsx` - Form component
- `/app/admin/members/page.tsx` - Members management page

### Server Actions (GET, POST, PUT, DELETE)

```typescript
// Get all members
const { data, error } = await getAllMembers();

// Get single member
const { data, error } = await getMemberById(id);

// Create member
const { data, error } = await createMember(input);

// Update member
const { data, error } = await updateMember(id, input);

// Delete member
const { error } = await deleteMember(id);

// Filter by divisi
const { data, error } = await getMembersByDivisi('Operasional');

// Filter by status
const { data, error } = await getMembersByStatus('Aktif');
```

## 🖨️ Print & Export

### Print Feature

- Button "Cetak Laporan" di halaman kelola anggota
- Optimized print styles di `/app/print.css`
- Supports browser's built-in print dialog (Ctrl+P / Cmd+P)
- Print format-friendly dengan styling yang baik

### Fitur Filter

Sebelum print, gunakan filter untuk:
- Filter berdasarkan Divisi
- Filter berdasarkan Status
- Kombinasi dari keduanya

## 📁 Struktur Proyek

```
.
├── app/
│   ├── page.tsx                 # Homepage/Beranda
│   ├── tentang/page.tsx         # About page
│   ├── program/page.tsx         # Programs page
│   ├── berita/page.tsx          # News/Blog page
│   ├── admin/
│   │   ├── page.tsx             # Redirect to login
│   │   ├── login/page.tsx       # Admin login
│   │   ├── dashboard/page.tsx   # Admin dashboard
│   │   └── members/page.tsx     # Manage members
│   ├── layout.tsx               # Root layout with AuthProvider
│   ├── globals.css              # Global styles + design tokens
│   └── print.css                # Print styles
├── components/
│   ├── navbar.tsx               # Navigation component
│   ├── protected-route.tsx      # Protected route wrapper
│   ├── members-list.tsx         # Members table component
│   ├── member-form.tsx          # Member form component
│   └── ui/                      # shadcn/ui components
├── lib/
│   ├── supabase.ts             # Supabase client & types
│   ├── auth-context.tsx         # Auth context provider
│   └── actions/
│       └── members.ts           # Server actions for CRUD
├── public/                      # Static assets
├── scripts/
│   └── setup-members-table.sql  # Database schema
└── SETUP.md                     # This file
```

## 🔐 Demo Login

**Akses Admin Portal:**
- URL: http://localhost:3000/admin/login
- Password: `admin123`

⚠️ **Catatan**: Password demo ini hanya untuk keperluan presentasi universitas. Untuk production, gunakan Supabase Auth atau sistem authentication yang lebih aman.

## 🎨 Design System

### Color Palette

- **Primary**: Emerald Green (#10b981) - Brand color
- **Background**: White (#ffffff)
- **Text**: Dark Gray (#111827)
- **Borders**: Light Gray (#e5e7eb)

### Typography

- **Headings**: Geist Font
- **Body**: Geist Font
- **Code**: Geist Mono

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Tailwind CSS utility classes

## 📝 Environment Variables

### Development

Tidak diperlukan environment variables untuk menjalankan demo. Aplikasi menggunakan mock data.

### Production (dengan Supabase)

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxx...
```

## 🚢 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Import repository di Vercel Dashboard
3. Vercel akan auto-detect Next.js
4. Set environment variables di Settings
5. Deploy!

### Deploy ke Platform Lain

Aplikasi ini dapat dideploy ke:
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku
- Atau any Node.js hosting

**Build command:**
```bash
pnpm build
```

**Start command:**
```bash
pnpm start
```

## 🔗 API Routes (Optional)

Jika ingin membuat API routes tambahan:

```
app/api/
├── members/
│   ├── route.ts         # GET /api/members, POST /api/members
│   └── [id]/route.ts    # GET, PUT, DELETE /api/members/[id]
```

## 🛠️ Development Tips

### Debugging

Gunakan console.log untuk debugging:
```typescript
console.log("[v0] Debug message:", data);
```

### Form Validation

Validasi dilakukan di:
- Form component (client-side)
- Server actions (server-side)

### Error Handling

Semua error ditampilkan dalam alert box yang user-friendly dengan pesan dalam Bahasa Indonesia.

## 📞 Support

Untuk pertanyaan atau masalah:
1. Check dokumentasi Supabase: https://supabase.com/docs
2. Check dokumentasi Next.js: https://nextjs.org/docs
3. Check Tailwind CSS: https://tailwindcss.com/docs
4. Check shadcn/ui: https://ui.shadcn.com

## 📄 License

Proyek ini dibuat untuk keperluan presentasi universitas.

---

**Dibuat dengan ❤️ untuk Yayasan Sahabat Nusantara**
