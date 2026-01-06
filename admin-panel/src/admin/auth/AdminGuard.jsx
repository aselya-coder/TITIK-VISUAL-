import { useEffect, useState } from 'react';
import { getSupabase } from '../lib/supabaseClient.js';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function AdminGuard({ children }) {
  const [status, setStatus] = useState('checking');
  const [role, setRole] = useState('');

  useEffect(() => {
    const supabase = getSupabase();
    supabase.auth.getSession().then(async ({ data }) => {
      const session = data?.session || null;
      if (!session) {
        setStatus('unauth');
        return;
      }
      const uid = session.user.id;
      const { data: profile, error } = await supabase.from('profiles').select('role').eq('id', uid).single();
      if (error) {
        setStatus('error');
        return;
      }
      setRole(profile?.role || '');
      setStatus(profile?.role === 'admin' ? 'ok' : 'forbidden');
    });
  }, []);

  if (status === 'checking') {
    return <Card className="p-6"><p className="text-muted-foreground">Memeriksa sesi admin…</p></Card>;
  }
  if (status === 'unauth') {
    return (
      <Card className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Butuh Login</h2>
        <p className="text-muted-foreground">Silakan login terlebih dahulu untuk mengakses halaman admin.</p>
        <Button onClick={() => getSupabase().auth.signInWithOAuth({ provider: 'google' })}>Login dengan Google</Button>
      </Card>
    );
  }
  if (status === 'forbidden') {
    return (
      <Card className="p-6">
        <h2 className="text-xl font-semibold">Akses Ditolak</h2>
        <p className="text-muted-foreground">Role saat ini: {role || 'unknown'}. Hanya admin yang dapat mengakses halaman ini.</p>
      </Card>
    );
  }
  if (status === 'error') {
    return <Card className="p-6"><p className="text-red-600">Gagal memeriksa role admin.</p></Card>;
  }
  return children;
}
