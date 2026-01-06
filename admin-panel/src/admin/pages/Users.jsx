import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useUsers } from "../hooks/useUsers";

export function UsersPage() {
  const { items, loading, error, reload } = useUsers();
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Users</h2>
        <Button variant="outline" onClick={reload}>Reload</Button>
      </div>
      {loading && <p className="text-muted-foreground">Loading…</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">ID</th>
              <th className="p-2">Email</th>
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {items.map((u) => (
              <tr key={u.id} className="border-b">
                <td className="p-2">{u.id}</td>
                <td className="p-2">{u.email || '-'}</td>
                <td className="p-2">{u.name || '-'}</td>
                <td className="p-2">{u.role || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

