import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePayments } from "../hooks/usePayments";

export function PaymentsPage() {
  const { items, loading, error, reload, approve, reject } = usePayments();
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Pembayaran</h2>
        <Button variant="outline" onClick={reload}>Reload</Button>
      </div>
      {loading && <p className="text-muted-foreground">Loading…</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">ID</th>
              <th className="p-2">Booking</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-2">{p.id}</td>
                <td className="p-2">{p.booking_id || '-'}</td>
                <td className="p-2">{p.amount || '-'}</td>
                <td className="p-2">{p.status || '-'}</td>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <Button size="sm" onClick={() => approve(p.id)} disabled={p.status === 'approved'}>Approve</Button>
                    <Button size="sm" variant="destructive" onClick={() => reject(p.id)} disabled={p.status === 'rejected'}>Reject</Button>
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

