import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCompanions } from "../hooks/useCompanions";

export function CompanionsPage() {
  const { items, loading, error, reload } = useCompanions();
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Teman Sewa</h2>
        <Button variant="outline" onClick={reload}>Reload</Button>
      </div>
      {loading && <p className="text-muted-foreground">Loading…</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">ID</th>
              <th className="p-2">Nama</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((c) => (
              <tr key={c.id} className="border-b">
                <td className="p-2">{c.id}</td>
                <td className="p-2">{c.name || '-'}</td>
                <td className="p-2">{c.status || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

