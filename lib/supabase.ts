import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for members table
export type Divisi = 'Operasional' | 'Pendidikan' | 'Pemasaran' | 'Keuangan' | 'Riset & Pengembangan' | 'Keberlanjutan';
export type MemberStatus = 'Aktif' | 'Tidak Aktif' | 'Pending';

export interface Member {
  id: string;
  nama: string;
  email: string;
  divisi: Divisi;
  status: MemberStatus;
  nomor_hp?: string;
  alamat?: string;
  tanggal_bergabung: string;
  catatan?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateMemberInput {
  nama: string;
  email: string;
  divisi: Divisi;
  status?: MemberStatus;
  nomor_hp?: string;
  alamat?: string;
  catatan?: string;
}

export interface UpdateMemberInput extends Partial<CreateMemberInput> {}
