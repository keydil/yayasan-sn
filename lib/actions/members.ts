'use server';

import { supabase, Member, CreateMemberInput, UpdateMemberInput } from '@/lib/supabase';

/**
 * Fetch all members from the database
 */
export async function getAllMembers(): Promise<{ data: Member[] | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data: data as Member[], error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch members';
    return { data: null, error: message };
  }
}

/**
 * Fetch a single member by ID
 */
export async function getMemberById(id: string): Promise<{ data: Member | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return { data: data as Member, error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch member';
    return { data: null, error: message };
  }
}

/**
 * Create a new member
 */
export async function createMember(
  input: CreateMemberInput
): Promise<{ data: Member | null; error: string | null }> {
  try {
    // Validate required fields
    if (!input.nama || !input.email || !input.divisi) {
      return { data: null, error: 'Nama, email, dan divisi harus diisi' };
    }

    // Basic email validation
    if (!input.email.includes('@')) {
      return { data: null, error: 'Format email tidak valid' };
    }

    const { data, error } = await supabase
      .from('members')
      .insert([
        {
          nama: input.nama,
          email: input.email,
          divisi: input.divisi,
          status: input.status || 'Pending',
          nomor_hp: input.nomor_hp || null,
          alamat: input.alamat || null,
          catatan: input.catatan || null,
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return { data: data as Member, error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to create member';
    return { data: null, error: message };
  }
}

/**
 * Update an existing member
 */
export async function updateMember(
  id: string,
  input: UpdateMemberInput
): Promise<{ data: Member | null; error: string | null }> {
  try {
    // Build update object, only including provided fields
    const updateData: Record<string, any> = {
      updated_at: new Date().toISOString(),
    };

    if (input.nama) updateData.nama = input.nama;
    if (input.email) updateData.email = input.email;
    if (input.divisi) updateData.divisi = input.divisi;
    if (input.status) updateData.status = input.status;
    if (input.nomor_hp !== undefined) updateData.nomor_hp = input.nomor_hp || null;
    if (input.alamat !== undefined) updateData.alamat = input.alamat || null;
    if (input.catatan !== undefined) updateData.catatan = input.catatan || null;

    const { data, error } = await supabase
      .from('members')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data: data as Member, error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to update member';
    return { data: null, error: message };
  }
}

/**
 * Delete a member
 */
export async function deleteMember(id: string): Promise<{ error: string | null }> {
  try {
    const { error } = await supabase
      .from('members')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to delete member';
    return { error: message };
  }
}

/**
 * Get members filtered by divisi
 */
export async function getMembersByDivisi(divisi: string): Promise<{ data: Member[] | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('divisi', divisi)
      .order('nama', { ascending: true });

    if (error) throw error;
    return { data: data as Member[], error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch members';
    return { data: null, error: message };
  }
}

/**
 * Get members filtered by status
 */
export async function getMembersByStatus(status: string): Promise<{ data: Member[] | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('status', status)
      .order('nama', { ascending: true });

    if (error) throw error;
    return { data: data as Member[], error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch members';
    return { data: null, error: message };
  }
}
