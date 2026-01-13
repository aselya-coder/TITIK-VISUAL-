import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';

export function AdminGuard({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = checking

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    // Here we could verify the token with the backend if we wanted to be more secure
    // For now, simple existence check + expiration check (JWT decode) would be better but let's stick to existence as requested "simple"
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    return <Card className="p-6"><p className="text-muted-foreground">Checking authentication...</p></Card>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
