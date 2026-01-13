import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminPanel from "./AdminPanel.jsx";
import Login from "./pages/Login.jsx";
import { AdminGuard } from "./admin/auth/AdminGuard.jsx";

export default function AdminCMSApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <AdminGuard>
              <AdminPanel />
            </AdminGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
