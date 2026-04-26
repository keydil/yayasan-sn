# 🌿 START HERE - Yayasan Sahabat Nusantara

Welcome! Panduan lengkap untuk setup dan run aplikasi.

## ⚡ 5 Minute Quick Start

### 1. Setup Database (Supabase Dashboard)

```
1. Buka: https://app.supabase.com
2. Pilih project Yayasan Sahabat Nusantara
3. Klik: SQL Editor → New Query
4. Copy-paste dari: scripts/setup-members-table.sql
5. Klik: RUN
```

✅ Database siap!

### 2. Run Aplikasi

```bash
pnpm dev
```

✅ Open: http://localhost:3000

### 3. Test Admin Panel

```
1. Click: "Daftar Anggota" di homepage
2. Login:
   - Email: admin@sahabat-nusantara.org
   - Password: admin123
3. Explore admin panel & manage members
```

✅ Done! Siap untuk presentasi!

---

## 📚 Documentation Index

Read these in order:

1. **👈 YOU ARE HERE** - `START_HERE.md` (this file)
2. **✅ NEXT**: `SETUP_CHECKLIST.md` - Step-by-step checklist
3. **🗄️ DATABASE**: `SUPABASE_SETUP.md` - Detailed Supabase guide
4. **⚙️ CONFIG**: `QUICKSTART.md` - Development setup
5. **📖 FEATURES**: `FEATURES_GUIDE.md` - Feature walkthrough
6. **🎓 PRESENTATION**: `PRESENTATION.md` - For university submission

---

## 🎯 What You Get

### 📱 Public Website (4 Pages)
- **Beranda** - Homepage with hero, impact stats, blog preview
- **Tentang** - About organization, team, values
- **Program** - 6 environmental programs
- **Berita** - News/blog section

### 🔐 Admin Panel (Password Protected)
- **Dashboard** - Statistics & overview
- **Members** - View, create, edit, delete members
- **Print/Export** - Generate reports

### 🗄️ Database (Supabase PostgreSQL)
- **Members Table** - 11 fields with proper schema
- **Enums** - Divisi & Status types
- **RLS** - Row Level Security policies
- **Sample Data** - 5 pre-filled members

### 🔧 Backend Ready
- **Server Actions** - CRUD operations
- **Auth System** - Supabase Auth ready
- **Type Safety** - Full TypeScript
- **Error Handling** - Comprehensive error handling

---

## 🚀 Project Structure

```
project/
├── app/
│   ├── page.tsx              # Homepage
│   ├── tentang/page.tsx      # About page
│   ├── program/page.tsx      # Programs page
│   ├── berita/page.tsx       # News page
│   ├── admin/
│   │   ├── login/page.tsx    # Login form
│   │   ├── dashboard/page.tsx # Admin dashboard
│   │   └── members/page.tsx  # Members management
│   └── layout.tsx            # Root layout
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── member-form.tsx       # Add/edit member form
│   ├── members-list.tsx      # Members table
│   └── protected-route.tsx   # Route protection
├── lib/
│   ├── supabase.ts           # Supabase client
│   ├── auth-context.tsx      # Auth context
│   └── actions/
│       └── members.ts        # Server actions (CRUD)
├── scripts/
│   └── setup-members-table.sql # Database schema
└── public/                   # Static assets
```

---

## 🔑 Default Login Credentials

For presentations and testing:

```
Email:    admin@sahabat-nusantara.org
Password: admin123
```

Both demo mode and Supabase Auth support these credentials.

---

## 🎨 Design System

**Colors:**
- Primary: Emerald Green (#10b981)
- Background: White (#ffffff)
- Text: Dark Gray (#1f2937)

**Typography:**
- Font: Geist (default Next.js font)
- Clean, professional, modern

**Responsive:**
- Mobile-first design
- Fully responsive all screen sizes

---

## ✨ Key Features

### Public Pages
- ✅ Responsive navbar with mobile menu
- ✅ Hero section with CTA button
- ✅ Impact statistics
- ✅ Blog preview grid
- ✅ Environmental focus content

### Admin Panel
- ✅ Password protected (mock + Supabase Auth ready)
- ✅ Dashboard with stats
- ✅ View all members (table with filtering/sorting)
- ✅ Add new member (form validation)
- ✅ Edit existing member
- ✅ Delete member (with confirmation)
- ✅ Filter by division and status
- ✅ Print/export member list as report

### Technical
- ✅ Next.js 16 (latest)
- ✅ TypeScript (fully typed)
- ✅ Tailwind CSS 4
- ✅ shadcn/ui components
- ✅ Supabase PostgreSQL
- ✅ Server Actions
- ✅ Environment variables
- ✅ Error handling
- ✅ Responsive design
- ✅ Indonesian language

---

## 📋 Installation Steps

### Local Development

1. **Open Terminal/CMD**
   ```bash
   cd /path/to/project
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   # or npm install (if prefer npm)
   ```

3. **Setup Database** (Supabase)
   - Follow Quick Start section above
   - Run SQL script

4. **Start Dev Server**
   ```bash
   pnpm dev
   ```

5. **Open in Browser**
   ```
   http://localhost:3000
   ```

### Environment Variables

File: `.env.local`

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

All variables should be in your Vercel project settings already.

---

## 🧪 Testing Checklist

After setup, test these:

### Navigation
- [ ] Homepage load correctly
- [ ] Navbar responsive (desktop & mobile)
- [ ] All nav links work
- [ ] CTA button navigates to login

### Public Pages
- [ ] Beranda page loads
- [ ] Tentang page loads
- [ ] Program page loads
- [ ] Berita page loads
- [ ] All pages responsive

### Admin Panel
- [ ] Can access `/admin`
- [ ] Login with demo credentials works
- [ ] Dashboard loads
- [ ] Can view members
- [ ] Can add new member
- [ ] Can edit member
- [ ] Can delete member
- [ ] Filters work
- [ ] Print feature works

### Database
- [ ] Can view data in Supabase
- [ ] New members appear in database
- [ ] Updates sync correctly
- [ ] Deletes work properly

---

## 🎓 For University Presentation

### What to Show
1. Homepage with hero section
2. Public pages (about, programs, news)
3. Login flow
4. Admin dashboard
5. Members table with CRUD
6. Print feature
7. Responsive design (mobile view)

### Technical Points to Mention
- Built with Next.js 16 (latest)
- Supabase for database & auth
- TypeScript for type safety
- Tailwind CSS for styling
- Full CRUD functionality
- Responsive design
- Production-ready code

### Demo Workflow
1. Open homepage
2. Click "Daftar Anggota" CTA
3. Login with admin@sahabat-nusantara.org / admin123
4. Show dashboard
5. Show members list
6. Add a new member (show form validation)
7. Edit a member
8. Show print feature
9. Delete a member (show confirmation)
10. Show responsive design (mobile)

---

## 🐛 Troubleshooting

### Issue: `Cannot find module '@supabase/supabase-js'`
**Solution:**
```bash
pnpm install @supabase/supabase-js
# or
npm install @supabase/supabase-js
```

### Issue: Database table not found
**Solution:**
- Go to Supabase Dashboard
- SQL Editor
- Run setup-members-table.sql script

### Issue: Login not working
**Solution:**
- Check credentials: admin@sahabat-nusantara.org / admin123
- Verify env vars are set
- Check Supabase database is setup

### Issue: Port already in use
**Solution:**
```bash
# Use different port
pnpm dev -- -p 3001
```

---

## 📞 Additional Resources

- **Detailed Supabase Setup**: See `SUPABASE_SETUP.md`
- **Database Schema**: See `DATABASE.md`
- **Feature Details**: See `FEATURES_GUIDE.md`
- **Presentation Tips**: See `PRESENTATION.md`
- **Setup Checklist**: See `SETUP_CHECKLIST.md`

---

## 🎉 Ready to Go!

Your application adalah:
- ✅ Fully functional
- ✅ Production-ready
- ✅ Well-documented
- ✅ Responsive & modern
- ✅ Database integrated
- ✅ Ready for presentation

**Next Step**: Follow `SETUP_CHECKLIST.md` untuk systematic setup.

---

**Questions?** Check the relevant documentation file or troubleshooting section above.

Happy coding! 🌿🚀
