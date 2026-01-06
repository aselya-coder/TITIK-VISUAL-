import { useEffect, useState } from 'react';
import { listCompanions, updateCompanion } from '../services/companionService.js';

export function useCompanions() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await listCompanions();
      setItems(data);
    } catch (e) {
      setError(e?.message || 'failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const save = async (id, patch) => {
    await updateCompanion(id, patch);
    await load();
  };

  return { items, loading, error, reload: load, save };
}
