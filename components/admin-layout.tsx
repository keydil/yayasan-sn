'use client';

import { AdminSidebar } from './admin-sidebar';
import { ProtectedRoute } from './protected-route';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 ml-64 overflow-auto">
          <div className="max-w-7xl mx-auto p-8">
            {children}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
