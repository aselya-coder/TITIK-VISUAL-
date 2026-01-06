import { getSupabase } from '../lib/supabaseClient';

export async function listPayments() {
  const supabase = getSupabase();
  const { data, error } = await supabase.from('payments').select('*').order('created_at', { ascending: false }).limit(200);
  if (error) throw new Error(error.message);
  return data || [];
}

export async function approvePayment(id) {
  const supabase = getSupabase();
  const { data, error } = await supabase.from('payments').update({ status: 'approved' }).eq('id', id).select('*').single();
  if (error) throw new Error(error.message);
  return data;
}

export async function rejectPayment(id, reason) {
  const supabase = getSupabase();
  const patch = { status: 'rejected' };
  if (reason) patch.reject_reason = reason;
  const { data, error } = await supabase.from('payments').update(patch).eq('id', id).select('*').single();
  if (error) throw new Error(error.message);
  return data;
}

