import { useEffect, useState } from 'react';
import { listBookings, approveBooking, rejectBooking } from '../services/bookingService.js';

export function useBookings() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await listBookings();
      setItems(data);
    } catch (e) {
      setError(e?.message || 'failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const approve = async (id) => {
    await approveBooking(id);
    await load();
  };
  const reject = async (id, reason) => {
    await rejectBooking(id, reason);
    await load();
  };

  return { items, loading, error, reload: load, approve, reject };
}
