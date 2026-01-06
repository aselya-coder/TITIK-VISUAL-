import { createClient } from '@supabase/supabase-js';

let client = null;

export function getSupabase() {
  if (client) return client;
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error('Supabase env not configured: VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY');
  }
  client = createClient(url, key, {
    auth: { persistSession: true, autoRefreshToken: true }
  });
  return client;
}

