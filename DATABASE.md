# Database & API Documentation

Dokumentasi lengkap untuk database schema dan API endpoints.

## 🗄️ Database Schema

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

### Enums

**divisi_enum:**
- Operasional
- Pendidikan
- Pemasaran
- Keuangan
- Riset & Pengembangan
- Keberlanjutan

**member_status_enum:**
- Aktif
- Tidak Aktif
- Pending

### Indexes

- `idx_members_email` - Cepat lookup by email
- `idx_members_status` - Filter by status
- `idx_members_divisi` - Filter by divisi

## 📡 API Functions (Server Actions)

Semua API calls menggunakan Next.js Server Actions di `/lib/actions/members.ts`.

### 1. Get All Members

```typescript
const { data, error } = await getAllMembers();

// Returns
// {
//   data: Member[] | null,
//   error: string | null
// }
```

**Response:**
```json
[
  {
    "id": "uuid-1",
    "nama": "Budi Santoso",
    "email": "budi@sahabat-nusantara.org",
    "divisi": "Operasional",
    "status": "Aktif",
    "nomor_hp": "08123456789",
    "alamat": "Jakarta, Indonesia",
    "tanggal_bergabung": "2024-01-15T10:00:00Z",
    "catatan": "Anggota pendiri",
    "created_at": "2024-01-15T10:00:00Z",
    "updated_at": "2024-01-15T10:00:00Z"
  }
]
```

### 2. Get Member by ID

```typescript
const { data, error } = await getMemberById('uuid-1');

// Returns single Member object or null
```

### 3. Create Member

```typescript
const { data, error } = await createMember({
  nama: "Siti Nurhaliza",
  email: "siti@sahabat-nusantara.org",
  divisi: "Pendidikan",
  status: "Aktif", // optional, default: "Pending"
  nomor_hp: "08234567890", // optional
  alamat: "Surabaya, Indonesia", // optional
  catatan: "Catatan tambahan" // optional
});

// Returns newly created Member object
```

**Validations:**
- `nama`: Required, string
- `email`: Required, must be valid email format, must be unique
- `divisi`: Required, must be one of the enum values
- `status`: Optional, must be one of the enum values
- `nomor_hp`: Optional, string
- `alamat`: Optional, string
- `catatan`: Optional, string

### 4. Update Member

```typescript
const { data, error } = await updateMember('uuid-1', {
  nama: "Budi Santoso Wijaya",
  status: "Tidak Aktif",
  // Only include fields you want to update
});

// Returns updated Member object
```

**Notes:**
- Only include fields you want to update
- All fields are optional
- `updated_at` is automatically set to current timestamp

### 5. Delete Member

```typescript
const { error } = await deleteMember('uuid-1');

// Returns { error: string | null }
```

### 6. Get Members by Divisi

```typescript
const { data, error } = await getMembersByDivisi('Pendidikan');

// Returns Member[] filtered by divisi, sorted by nama
```

### 7. Get Members by Status

```typescript
const { data, error } = await getMembersByStatus('Aktif');

// Returns Member[] filtered by status, sorted by nama
```

## 🔄 Request/Response Flow

### Success Response

```typescript
{
  data: Member | Member[] | null,
  error: null
}
```

### Error Response

```typescript
{
  data: null,
  error: "Error message in Bahasa Indonesia"
}
```

## 🔐 Authentication & Authorization

### Current Implementation

Menggunakan mock authentication dengan React Context:
- Location: `/lib/auth-context.tsx`
- Demo password: `admin123`
- Stored in: `localStorage` (key: `yayasan_auth`)

### For Production (Supabase Auth)

Ganti dengan Supabase Auth:

```typescript
import { useSupabaseAuth } from '@supabase/auth-helpers-react';

const { session } = useSupabaseAuth();

// Gunakan session untuk authorization
if (!session) {
  redirect('/login');
}
```

## 🛡️ Row Level Security (RLS)

Database sudah dilengkapi dengan RLS policies:

```sql
-- Allow authenticated users to read, insert, update, delete
CREATE POLICY "Allow authenticated users to read members" ON members
  FOR SELECT
  USING (auth.role() = 'authenticated_user');
```

## 📊 Data Types

```typescript
interface Member {
  id: string;                    // UUID
  nama: string;                  // Required
  email: string;                 // Required, Unique
  divisi: Divisi;                // Required, Enum
  status: MemberStatus;          // Required, Enum
  nomor_hp?: string;             // Optional
  alamat?: string;               // Optional
  tanggal_bergabung: string;     // ISO 8601 datetime
  catatan?: string;              // Optional
  created_at: string;            // ISO 8601 datetime
  updated_at: string;            // ISO 8601 datetime
}

type Divisi = 
  | 'Operasional'
  | 'Pendidikan'
  | 'Pemasaran'
  | 'Keuangan'
  | 'Riset & Pengembangan'
  | 'Keberlanjutan';

type MemberStatus = 'Aktif' | 'Tidak Aktif' | 'Pending';

interface CreateMemberInput {
  nama: string;
  email: string;
  divisi: Divisi;
  status?: MemberStatus;
  nomor_hp?: string;
  alamat?: string;
  catatan?: string;
}

interface UpdateMemberInput extends Partial<CreateMemberInput> {}
```

## 🔗 Usage Examples

### Creating a Member

```typescript
import { createMember } from '@/lib/actions/members';

async function addNewMember() {
  const { data, error } = await createMember({
    nama: 'Ahmad Wijaya',
    email: 'ahmad@sahabat-nusantara.org',
    divisi: 'Pemasaran',
    status: 'Aktif',
    nomor_hp: '08345678901',
    alamat: 'Bandung, Indonesia',
  });

  if (error) {
    console.error('Error:', error);
    alert(`Gagal menambah anggota: ${error}`);
  } else {
    console.log('Success:', data);
    alert('Anggota berhasil ditambahkan');
  }
}
```

### Updating a Member

```typescript
async function updateMemberStatus(id: string, newStatus: MemberStatus) {
  const { data, error } = await updateMember(id, {
    status: newStatus,
  });

  if (error) {
    alert(`Gagal mengubah status: ${error}`);
  } else {
    alert('Status anggota berhasil diubah');
  }
}
```

### Filtering Members

```typescript
// Get only active members
const { data: activeMembers } = await getMembersByStatus('Aktif');

// Get members in Education division
const { data: eduMembers } = await getMembersByDivisi('Pendidikan');

// Get all members
const { data: allMembers } = await getAllMembers();
```

## 🐛 Error Handling

Semua error dikembalikan dalam Bahasa Indonesia:

```typescript
"Nama, email, dan divisi harus diisi"
"Format email tidak valid"
"Email sudah digunakan"
"Member tidak ditemukan"
"Gagal mengubah anggota: [error details]"
```

## 📈 Best Practices

1. **Always check for errors:**
   ```typescript
   const { data, error } = await getAllMembers();
   if (error) {
     // Handle error
   } else if (data) {
     // Use data
   }
   ```

2. **Validate before submitting:**
   - Form validation happens in component
   - Server-side validation happens in action
   - Database constraints enforce final validation

3. **Use proper TypeScript types:**
   ```typescript
   import { Member, Divisi, MemberStatus } from '@/lib/supabase';
   ```

4. **Handle loading states:**
   ```typescript
   const [isLoading, setIsLoading] = useState(false);
   setIsLoading(true);
   await createMember(data);
   setIsLoading(false);
   ```

5. **Provide user feedback:**
   - Show error messages
   - Show success messages
   - Show loading indicators

## 🚀 Migration from Mock to Supabase

1. Set up Supabase project
2. Add environment variables
3. Run SQL schema in Supabase
4. Remove mock data loading
5. Test all CRUD operations

Aplikasi sudah production-ready untuk Supabase integration!
