import { Button } from "@/components/ui/button";
import { ExternalLink, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  return (
    <header className="h-14 border-b border-gray-200 bg-white px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-500">Admin Panel</span>
        <span className="text-gray-300">/</span>
        <span className="text-sm font-medium text-gray-900">Titik Visual Website</span>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="text-gray-500 gap-2">
          <ExternalLink className="w-4 h-4" />
          <span className="hidden sm:inline">Open Live Site</span>
        </Button>
        <Button variant="ghost" size="sm" className="text-red-500 gap-2 hover:text-red-600 hover:bg-red-50" onClick={handleLogout}>
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  );
}
