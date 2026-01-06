import { useEffect, useState } from 'react';
import { listUsers, updateUser } from '../services/userService.js';

export function useUsers() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await listUsers();
      setItems(data);
    } catch (e) {
      setError(e?.message || 'failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const save = async (id, patch) => {
    await updateUser(id, patch);
    await load();
  };

  return { items, loading, error, reload: load, save };
}
