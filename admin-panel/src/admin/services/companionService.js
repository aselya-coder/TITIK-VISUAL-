import { getSupabase } from '../lib/supabaseClient';

export async function listCompanions() {
  const supabase = getSupabase();
  const { data, error } = await supabase.from('companions').select('*').limit(200);
  if (error) throw new Error(error.message);
  return data || [];
}

export async function updateCompanion(id, patch) {
  const supabase = getSupabase();
  const { data, error } = await supabase.from('companions').update(patch).eq('id', id).select('*').single();
  if (error) throw new Error(error.message);
  return data;
}

