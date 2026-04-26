# Quick Start Guide - Yayasan Sahabat Nusantara

Panduan cepat untuk mulai menggunakan website Yayasan Sahabat Nusantara.

## ⚡ 5 Menit Setup

### 1. Install & Run

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open http://localhost:3000 - Done!

### 2. Access Admin Portal

- URL: http://localhost:3000/admin
- Password: **admin123**
- Click "Daftar Anggota" or "Kelola Anggota" button to access

## 🎯 Main Features

### Public Website
- **Beranda** (Homepage) - Impact stats dan blog preview
- **Tentang** - Organization info, mission, vision, team
- **Program** - List of all environmental programs
- **Berita** - News and blog articles

### Admin Dashboard
- **Login** - Password-protected portal
- **Overview** - Stats dan informasi ringkas
- **Kelola Anggota** - View, edit, delete members
- **Tambah Anggota** - Add new members
- **Cetak Laporan** - Print member list

## 📝 Test the Features

### Add a Member

1. Go to http://localhost:3000/admin
2. Enter password: `admin123`
3. Click "Tambah Anggota" tab or button
4. Fill the form:
   - Nama: Nama Lengkap
   - Email: nama@contoh.com
   - Divisi: Pilih salah satu
   - Status: Pilih salah satu
5. Click "Tambah Anggota"

### Edit a Member

1. Go to http://localhost:3000/admin/members
2. Click "Edit" button next to member
3. Update fields
4. Click "Simpan Perubahan"

### Delete a Member

1. Go to http://localhost:3000/admin/members
2. Click "Hapus" button
3. Confirm deletion

### Filter & Print

1. Use filter dropdowns for Divisi and Status
2. Click "Cetak Laporan" to print filtered data
3. Use browser print dialog (Ctrl+P / Cmd+P)

## 🗄️ Setup Supabase (Production)

### Step 1: Create Supabase Project

1. Go to https://app.supabase.com
2. Create new project
3. Note: `SUPABASE_URL` and `SUPABASE_ANON_KEY`

### Step 2: Run Database Schema

1. Open SQL Editor in Supabase
2. Copy content from `/scripts/setup-members-table.sql`
3. Run the query

### Step 3: Add Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### Step 4: Restart Dev Server

```bash
pnpm dev
```

Now your app will use Supabase instead of mock data!

## 📁 Project Files

### Key Files to Know

```
├── app/page.tsx                 # Homepage
├── app/admin/login/page.tsx     # Login page
├── app/admin/members/page.tsx   # Members management
├── components/members-list.tsx   # Members table
├── lib/actions/members.ts       # CRUD functions
├── lib/auth-context.tsx         # Auth system
└── SETUP.md                     # Full documentation
```

### Important Folders

- `/app` - Page files and routing
- `/components` - React components
- `/lib` - Utilities, helpers, actions
- `/scripts` - Database SQL scripts
- `/public` - Static files

## 🎨 Customize

### Change Logo/Branding

Edit `/components/navbar.tsx` and `/app/page.tsx`:
```typescript
<span className="text-xl font-bold">Your Organization Name</span>
```

### Change Colors

Edit `/app/globals.css`:
```css
--primary: oklch(0.52 0.18 145); /* Change emerald green */
```

### Change Demo Password

Edit `/lib/auth-context.tsx`:
```typescript
const DEMO_PASSWORD = 'your_new_password';
```

### Update Footer

Edit `/app/page.tsx` and `/app/tentang/page.tsx` footer section.

## 📊 Data Structure

### Member Object

```typescript
{
  id: "uuid",
  nama: "Nama Lengkap",
  email: "email@domain.com",
  divisi: "Operasional|Pendidikan|Pemasaran|Keuangan|Riset & Pengembangan|Keberlanjutan",
  status: "Aktif|Tidak Aktif|Pending",
  nomor_hp: "08123456789",
  alamat: "Alamat Lengkap",
  tanggal_bergabung: "2024-01-15T10:00:00Z",
  catatan: "Catatan tambahan",
  created_at: "2024-01-15T10:00:00Z",
  updated_at: "2024-01-15T10:00:00Z"
}
```

## 🐛 Troubleshooting

### "Port 3000 already in use"
```bash
lsof -i :3000          # Find process
kill -9 <PID>          # Kill process
# Or use different port:
pnpm dev -- -p 3001
```

### "Cannot find module"
```bash
rm -rf node_modules .next
pnpm install
pnpm dev
```

### "Supabase connection failed"
- Check environment variables in `.env.local`
- Verify SUPABASE_URL and SUPABASE_ANON_KEY
- App will use mock data if Supabase not connected

### "Form validation errors"
- Ensure email format is correct
- Check that required fields are filled
- All error messages are in Bahasa Indonesia

## 🚀 Deploy to Vercel

### Option 1: GitHub + Vercel (Easiest)

1. Push to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Add environment variables
5. Deploy!

### Option 2: Direct Upload

1. Build: `pnpm build`
2. Upload to Vercel / Netlify / DigitalOcean

## 📚 Learn More

- **Next.js**: https://nextjs.org/docs
- **Supabase**: https://supabase.com/docs
- **Tailwind**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com

## 💡 Tips for University Presentation

### Prepare Demo Data

```typescript
// Add sample members in /lib/auth-context.tsx or mock data
```

### Print Report Demo

1. Filter members by division or status
2. Click "Cetak Laporan"
3. Shows professional formatted print view

### Show Responsiveness

1. Open DevTools (F12)
2. Toggle device toolbar
3. View on mobile/tablet/desktop

### Demo Features

1. **Public Pages**: Scroll through all pages
2. **Login**: Show authentication with password
3. **Add Member**: Create new member with form
4. **Edit Member**: Modify existing member
5. **Delete Member**: Remove with confirmation
6. **Filter & Print**: Use filters then print

## 📞 Need Help?

- Check `/SETUP.md` for detailed setup
- Check `/DATABASE.md` for API documentation
- Check console (F12) for errors
- Read comments in the code

## ✅ Checklist for Submission

- [ ] Dependencies installed: `pnpm install`
- [ ] Dev server running: `pnpm dev`
- [ ] Homepage loads at http://localhost:3000
- [ ] Can access /admin/login with password
- [ ] Can add/edit/delete members
- [ ] Can print member list
- [ ] Responsive on mobile
- [ ] All pages have content
- [ ] No console errors

## 🎉 You're Ready!

Your Next.js website for Yayasan Sahabat Nusantara is ready for:
- ✅ University presentation
- ✅ Production deployment (with Supabase)
- ✅ Team collaboration
- ✅ Future enhancements

Good luck with your presentation!

---

For detailed documentation, see `/SETUP.md` and `/DATABASE.md`
