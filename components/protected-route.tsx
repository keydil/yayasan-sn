'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !isRedirecting) {
      setIsRedirecting(true);
      // Small delay to prevent multiple redirects
      const timer = setTimeout(() => {
        router.push('/admin/login');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isLoading, router, isRedirecting]);

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <div className="inline-block w-8 h-8 border-4 border-gray-200 border-t-emerald-600 rounded-full animate-spin"></div>
          <p className="text-gray-600">Memuat...</p>
        </div>
      </div>
    );
  }

  // Show redirecting state
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <p className="text-gray-600">Mengalihkan ke halaman login...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
