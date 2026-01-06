import { useEffect, useState } from 'react';
import { listPayments, approvePayment, rejectPayment } from '../services/paymentService.js';

export function usePayments() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await listPayments();
      setItems(data);
    } catch (e) {
      setError(e?.message || 'failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const approve = async (id) => {
    await approvePayment(id);
    await load();
  };
  const reject = async (id, reason) => {
    await rejectPayment(id, reason);
    await load();
  };

  return { items, loading, error, reload: load, approve, reject };
}
