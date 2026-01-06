import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBookings } from "../hooks/useBookings.js";

export function BookingsPage() {
  const { items, loading, error, reload, approve, reject } = useBookings();
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Booking</h2>
        <Button variant="outline" onClick={reload}>Reload</Button>
      </div>
      {loading && <p className="text-muted-foreground">Loading…</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">ID</th>
              <th className="p-2">User</th>
              <th className="p-2">Companion</th>
              <th className="p-2">Tanggal</th>
              <th className="p-2">Status</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((b) => (
              <tr key={b.id} className="border-b">
                <td className="p-2">{b.id}</td>
                <td className="p-2">{b.user_id || '-'}</td>
                <td className="p-2">{b.companion_id || '-'}</td>
                <td className="p-2">{b.start_date ? `${b.start_date} → ${b.end_date || '-'}` : '-'}</td>
                <td className="p-2">{b.status || '-'}</td>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <Button size="sm" onClick={() => approve(b.id)} disabled={b.status === 'approved'}>Approve</Button>
                    <Button size="sm" variant="destructive" onClick={() => reject(b.id)} disabled={b.status === 'rejected'}>Reject</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
