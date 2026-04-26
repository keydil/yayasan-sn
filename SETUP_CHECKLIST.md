# Setup Checklist - Yayasan Sahabat Nusantara

Ikuti checklist ini untuk setup project dengan benar.

## ✅ Step 1: Database Setup (5 menit)

- [ ] Buka Supabase Dashboard: https://app.supabase.com
- [ ] Pilih project
- [ ] Buka SQL Editor
- [ ] Copy-paste content dari `scripts/setup-members-table.sql`
- [ ] Click Run
- [ ] Verify di Table Editor → members table exist dengan 5 sample data

**Status**: ❌ Pending → ✅ Done

---

## ✅ Step 2: Authentication Setup (2 menit)

**Option A: Demo Mode (untuk presentasi)**
- [ ] Pakai demo credentials:
  - Email: `admin@sahabat-nusantara.org`
  - Password: `admin123`
- [ ] Tidak perlu setup di Supabase
- [ ] Langsung bisa test

**Option B: Supabase Auth (production-ready)**
- [ ] Go to Supabase Dashboard → Authentication → Users
- [ ] Click "Add User"
- [ ] Email: `admin@sahabat-nusantara.org`
- [ ] Password: `admin123`
- [ ] Auto confirm: ON
- [ ] Click Save

**Choose One**: ❌ Demo Mode / ❌ Supabase Auth

---

## ✅ Step 3: Environment Variables

- [ ] Verify env vars di project:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

**Cek di:** Vercel Project Settings → Environment Variables

**Status**: ❌ Pending → ✅ Verified

---

## ✅ Step 4: Run Locally

```bash
# Install dependencies (if needed)
pnpm install

# Start dev server
pnpm dev

# Open browser
http://localhost:3000
```

- [ ] Homepage load tanpa error
- [ ] Navigation working
- [ ] Click "Daftar Anggota" CTA button
- [ ] Login page muncul

**Status**: ❌ Pending → ✅ Done

---

## ✅ Step 5: Test Admin Panel

- [ ] Go to `/admin`
- [ ] Login dengan credentials:
  - Email: `admin@sahabat-nusantara.org`
  - Password: `admin123`
- [ ] Dashboard page load
- [ ] Click "Members" menu
- [ ] See members table dengan data
- [ ] Try filter (by Divisi, Status)

**Status**: ❌ Pending → ✅ Done

---

## ✅ Step 6: Test CRUD Operations

### Create (Add Member)
- [ ] Click "Tambah Anggota" button
- [ ] Fill form:
  - Nama: Test User
  - Email: test@example.com
  - Divisi: Pick any
  - Nomor HP: 08123456789
- [ ] Click "Simpan"
- [ ] Check data appear di table

### Read (View Members)
- [ ] Members table showing all members
- [ ] Can scroll horizontally
- [ ] Can filter & sort

### Update (Edit Member)
- [ ] Click "Edit" button on any member
- [ ] Change data (misal: status jadi "Tidak Aktif")
- [ ] Click "Update"
- [ ] Check changes reflected di table

### Delete (Remove Member)
- [ ] Click "Hapus" button
- [ ] Confirm delete
- [ ] Check member removed dari table

**Status**: ❌ Pending → ✅ All Work

---

## ✅ Step 7: Test Features

- [ ] **Print Feature**: Click "Cetak Laporan" button
  - [ ] Print dialog muncul
  - [ ] Preview showing table
  - [ ] Can print to PDF

- [ ] **Export Feature**: (Optional)
  - [ ] Data can be exported
  - [ ] Format correct

- [ ] **Responsive Design**:
  - [ ] Test di mobile view
  - [ ] Menu collapse correctly
  - [ ] Table responsive

- [ ] **Page Navigation**:
  - [ ] Beranda page works
  - [ ] Tentang page works
  - [ ] Program page works
  - [ ] Berita page works
  - [ ] All pages responsive

**Status**: ❌ Pending → ✅ All Features Work

---

## ✅ Step 8: Verify Supabase Integration

1. **Check Database**:
   - [ ] Buka Supabase Dashboard
   - [ ] Table Editor → members
   - [ ] Data dari app ada di table
   - [ ] Timestamps correct

2. **Check Logs**:
   - [ ] Buka Supabase → Logs
   - [ ] See SQL queries being executed
   - [ ] No errors

**Status**: ❌ Pending → ✅ Verified

---

## ✅ Step 9: Prepare for Presentation

- [ ] Create demo data di members table
- [ ] Test all features once more
- [ ] Clear console (no errors)
- [ ] Take screenshots for slides
- [ ] Prepare talking points:
  - Features
  - Architecture
  - Technology stack
  - Database design
  - Security (RLS)

**Status**: ❌ Pending → ✅ Ready to Present

---

## ✅ Step 10: Deploy to Vercel (Optional)

```bash
# Push to GitHub
git add .
git commit -m "Complete Yayasan Sahabat Nusantara website"
git push origin main

# Deploy via Vercel
# - Go to vercel.com
# - Connect your repo
# - Deploy automatically
```

- [ ] Connected to GitHub
- [ ] Deployed to Vercel
- [ ] Live URL working
- [ ] Production env vars set

**Status**: ❌ Pending → ✅ Live

---

## 📋 Project Files Overview

### Important Files

| File | Purpose | Status |
|------|---------|--------|
| `scripts/setup-members-table.sql` | Database schema | ✅ Ready |
| `lib/supabase.ts` | Supabase client | ✅ Ready |
| `lib/auth-context.tsx` | Auth system | ✅ Ready |
| `lib/actions/members.ts` | CRUD operations | ✅ Ready |
| `app/admin/login/page.tsx` | Login form | ✅ Ready |
| `app/admin/dashboard/page.tsx` | Dashboard | ✅ Ready |
| `app/admin/members/page.tsx` | Members mgmt | ✅ Ready |

### Documentation Files

- `README.md` - Project overview
- `SUPABASE_SETUP.md` - Detailed Supabase guide
- `QUICKSTART.md` - 5-minute setup
- `DATABASE.md` - Database reference
- `FEATURES_GUIDE.md` - Feature walkthrough
- `PRESENTATION.md` - Presentation tips

---

## 🚨 Troubleshooting

### Issue: Database table not found
```
Error: relation "public.members" does not exist
```
**Fix**: Run SQL script di Supabase SQL Editor

### Issue: Can't login
```
Error: signInWithPassword failed
```
**Fix**: 
- Check credentials: admin@sahabat-nusantara.org / admin123
- Or create user di Supabase Authentication

### Issue: Env vars not set
```
Missing SUPABASE_URL or SUPABASE_ANON_KEY
```
**Fix**: 
- Check Vercel Environment Variables
- Or add to `.env.local` locally

### Issue: Pages not loading
```
Connection refused
```
**Fix**: Restart dev server with `pnpm dev`

---

## ✨ You&apos;re Done!

Setelah semua steps selesai, kamu punya:

✅ **Complete website** dengan 4 public pages
✅ **Admin panel** dengan CRUD lengkap
✅ **Database integration** dengan Supabase
✅ **Authentication** ready
✅ **Print/Export** features
✅ **Production-ready** code
✅ **Full documentation**

**Ready untuk presentasi universitas!** 🎓

---

## 📞 Need Help?

Lihat:
- `SUPABASE_SETUP.md` - Detailed setup guide
- `QUICKSTART.md` - 5-minute quick start
- `DATABASE.md` - Database schema & API
- `FEATURES_GUIDE.md` - Feature details

---

**Last Updated**: April 2026
**Status**: ✅ Complete
