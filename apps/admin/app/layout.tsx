import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AdminLayout } from '@/components/admin/admin-layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'SarkariMate Admin',
  description: 'Admin application for SarkariMate.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}
