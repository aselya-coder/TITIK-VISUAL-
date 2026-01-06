import { AdminLayout } from "./components/layout/AdminLayout";
import { ModuleEditor } from "./components/module/ModuleEditor";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { AdminGuard } from "./admin/auth/AdminGuard.jsx";
import { UsersPage } from "./admin/pages/Users.jsx";
import { CompanionsPage } from "./admin/pages/Companions.jsx";
import { BookingsPage } from "./admin/pages/Bookings.jsx";
import { PaymentsPage } from "./admin/pages/Payments.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <div className="mb-4 flex items-center gap-2 text-sm">
          <Link to="/admin/users" className="px-3 py-1 rounded-lg hover:bg-gray-100">Users</Link>
          <Link to="/admin/companions" className="px-3 py-1 rounded-lg hover:bg-gray-100">Teman Sewa</Link>
          <Link to="/admin/bookings" className="px-3 py-1 rounded-lg hover:bg-gray-100">Booking</Link>
          <Link to="/admin/payments" className="px-3 py-1 rounded-lg hover:bg-gray-100">Pembayaran</Link>
          <Link to="/content" className="ml-auto px-3 py-1 rounded-lg hover:bg-gray-100">Content Editor</Link>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/users" replace />} />
          <Route
            path="/admin/users"
            element={
              <AdminGuard>
                <UsersPage />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/companions"
            element={
              <AdminGuard>
                <CompanionsPage />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/bookings"
            element={
              <AdminGuard>
                <BookingsPage />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/payments"
            element={
              <AdminGuard>
                <PaymentsPage />
              </AdminGuard>
            }
          />
          <Route path="/content" element={<ModuleEditor />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
}
