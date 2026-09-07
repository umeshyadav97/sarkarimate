import type { ReactNode } from 'react';
import { AdminHeader } from '@/components/admin/admin-header';
import { AdminMobileSidebar, AdminSidebar } from '@/components/admin/admin-sidebar';

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <AdminHeader />
      <AdminMobileSidebar />
      <div className="flex min-h-[calc(100vh-48px)]">
        <AdminSidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
