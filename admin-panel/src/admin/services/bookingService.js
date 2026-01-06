import { getSupabase } from '../lib/supabaseClient';

export async function listBookings() {
  const supabase = getSupabase();
  const { data, error } = await supabase.from('bookings').select('*').order('created_at', { ascending: false }).limit(200);
  if (error) throw new Error(error.message);
  return data || [];
}

export async function approveBooking(id) {
  const supabase = getSupabase();
  const { data, error } = await supabase.from('bookings').update({ status: 'approved' }).eq('id', id).select('*').single();
  if (error) throw new Error(error.message);
  return data;
}

export async function rejectBooking(id, reason) {
  const supabase = getSupabase();
  const patch = { status: 'rejected' };
  if (reason) patch.reject_reason = reason;
  const { data, error } = await supabase.from('bookings').update(patch).eq('id', id).select('*').single();
  if (error) throw new Error(error.message);
  return data;
}

