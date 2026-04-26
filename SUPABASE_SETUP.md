# Supabase Integration Guide - Yayasan Sahabat Nusantara

Panduan lengkap untuk setup dan mengintegrasikan Supabase ke aplikasi.

## 🚀 Quick Start (5 Menit)

### Step 1: Setup Database Table

1. Buka **Supabase Dashboard**: https://app.supabase.com
2. Pilih project Yayasan Sahabat Nusantara
3. Klik **SQL Editor** (atau "SQL" di sidebar kiri)
4. Klik **New Query**
5. Copy-paste semua code dari file: `scripts/setup-members-table.sql`
6. Klik **Run** atau tekan `Ctrl+Enter`
7. Tunggu sampai selesai ✅

**Yang akan dibuat:**
- Enum types untuk `divisi_enum` dan `member_status_enum`
- Table `members` dengan 11 columns
- 3 indexes untuk performa query
- Row Level Security (RLS) policies
- 5 sample members untuk testing

### Step 2: Verify Database

1. Di sidebar, clik **Table Editor**
2. Kamu harus lihat table `members` di daftar
3. Click members table dan lihat data
4. Harus ada 5 sample members:
   - Budi Santoso
   - Siti Nurhaliza
   - Ahmad Wijaya
   - Ratna Dewi
   - Eka Pratama

✅ Selesai! Database ready.

### Step 3: Create Authentication User

Kalau mau pakai Supabase Auth (bukan demo password), add user:

1. Buka **Authentication** di sidebar
2. Klik tab **Users**
3. Klik **Add User**
4. Isi:
   - Email: `admin@sahabat-nusantara.org`
   - Password: `admin123`
   - Auto-confirm: ON
5. Klik **Save**

Sekarang user bisa login dengan Supabase Auth!

---

## 📋 Lengkap Setup Steps

### Prerequisites
- ✅ Supabase project sudah dibuat
- ✅ Environment variables sudah di-set:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

Semua sudah ada di Vercel project settings.

### Environment Variables

Kalo belum ada, add ke `.env.local`:

```bash
# Dari Supabase Project Settings > API
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

Cara dapetin:
1. Supabase Dashboard → Settings → API
2. Copy URL dan keys

---

## 🔐 Authentication Setup

### Option 1: Demo Mode (Recommended untuk Presentasi)

Pakai password biasa:
- Email: `admin@sahabat-nusantara.org`
- Password: `admin123`

Ini stored di localStorage, perfect untuk presentasi universitas.

### Option 2: Supabase Auth (Real Auth)

Lebih production-ready:

1. Create user di Supabase (lihat Step 3 di atas)
2. System akan auto-detect dan pakai Supabase Auth
3. Data disimpan di PostgreSQL, aman dan terenkripsi

---

## 📊 Database Schema

### Members Table

```sql
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nama VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  divisi divisi_enum NOT NULL,
  status member_status_enum NOT NULL DEFAULT 'Pending',
  nomor_hp VARCHAR(20),
  alamat TEXT,
  tanggal_bergabung TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  catatan TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Enum Types

**Divisi Options:**
- Operasional
- Pendidikan
- Pemasaran
- Keuangan
- Riset & Pengembangan
- Keberlanjutan

**Status Options:**
- Aktif
- Tidak Aktif
- Pending

---

## 🔌 Backend Integration

### Server Actions (lib/actions/members.ts)

Semua CRUD operations pakai Supabase:

```typescript
// Fetch all members
const { data, error } = await getAllMembers();

// Create member
const { data, error } = await createMember({
  nama: 'John Doe',
  email: 'john@example.com',
  divisi: 'Operasional',
  status: 'Aktif'
});

// Update member
const { data, error } = await updateMember(id, {
  status: 'Tidak Aktif'
});

// Delete member
const { data, error } = await deleteMember(id);
```

### Hooks & Context

**useAuth() hook** (lib/auth-context.tsx):

```typescript
const { isAuthenticated, userEmail, login, logout, isLoading, error } = useAuth();

// Login
const success = await login(email, password);

// Logout
await logout();
```

---

## 🧪 Testing & Verification

### Test CRUD Operations

1. Login ke admin panel: `/admin`
2. Demo: `admin123`
3. Navigate to members management
4. Try operations:
   - ✅ View all members
   - ✅ Add new member
   - ✅ Edit existing member
   - ✅ Delete member
   - ✅ Filter by divisi/status
   - ✅ Print/export list

### Check Supabase Data

1. Buka Supabase Dashboard
2. Table Editor → members
3. Lihat data realtime update ketika add/edit/delete dari app

### Check Logs

Di Supabase:
1. Menu **Logs** → **Database Logs**
2. Lihat SQL queries yang dijalankan

---

## 🛡️ Security Features

### Row Level Security (RLS)

Policies yang implemented:
- Read: Authenticated users dapat lihat semua members
- Insert: Authenticated users dapat add members
- Update: Authenticated users dapat update members
- Delete: Authenticated users dapat delete members

Perubahan di `scripts/setup-members-table.sql`.

### Password Security

- ✅ Supabase Auth: Password di-hash dengan bcrypt
- ✅ Demo mode: Password simple untuk presentasi

---

## 📁 Relevant Files

| File | Purpose |
|------|---------|
| `lib/supabase.ts` | Supabase client initialization |
| `lib/auth-context.tsx` | Authentication context & hooks |
| `lib/actions/members.ts` | Server actions untuk CRUD |
| `app/admin/login/page.tsx` | Login form |
| `app/admin/dashboard/page.tsx` | Admin dashboard |
| `app/admin/members/page.tsx` | Members management |
| `scripts/setup-members-table.sql` | Database schema SQL |

---

## ⚠️ Troubleshooting

### Database connection error?

```
Error: Failed to fetch members
```

**Solution:**
- Check env vars ada di `.env.local`
- Verify Supabase URL dan keys correct
- Restart dev server: `pnpm dev`

### Authentication tidak works?

```
Error: signInWithPassword failed
```

**Solution:**
- Check user exist di Supabase Authentication
- Verify email & password correct
- If menggunakan demo: gunakan credentials di Step 3

### Table tidak ada?

```
error: relation "public.members" does not exist
```

**Solution:**
- Run SQL migration (setup-members-table.sql)
- Cek di Table Editor apakah members table sudah ada
- Verify dalam SQL Editor sudah executed

---

## 🚀 Production Checklist

Sebelum deploy ke production:

- [ ] Database table sudah created
- [ ] RLS policies sudah setup
- [ ] Auth users sudah dibuat di Supabase
- [ ] Environment variables sudah set di Vercel
- [ ] Test all CRUD operations
- [ ] Test authentication flow
- [ ] Setup automatic backups
- [ ] Test data export/print feature

---

## 📚 Resources

- [Supabase Docs](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

---

## 💡 Next Steps

1. ✅ Database setup complete
2. ✅ Auth ready (demo or Supabase)
3. 🔄 Test locally dengan `pnpm dev`
4. 📤 Deploy ke Vercel
5. 🎉 Ready untuk presentasi!

---

Pertanyaan? Lihat dokumentasi lainnya atau check logs di Supabase dashboard.
