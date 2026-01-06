import { getSupabase } from '../lib/supabaseClient';

export async function listUsers() {
  const supabase = getSupabase();
  const { data, error } = await supabase.from('users').select('*').limit(200);
  if (error) throw new Error(error.message);
  return data || [];
}

export async function getUserById(id) {
  const supabase = getSupabase();
  const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
  if (error) throw new Error(error.message);
  return data;
}

export async function updateUser(id, patch) {
  const supabase = getSupabase();
  const { data, error } = await supabase.from('users').update(patch).eq('id', id).select('*').single();
  if (error) throw new Error(error.message);
  return data;
}

