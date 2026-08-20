import { Bell, ChevronDown, Shield, UserCircle } from 'lucide-react';
import { AdminThemeToggle } from '@/components/admin/admin-theme-toggle';

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--navy)] text-white shadow-sm">
      <div className="flex min-h-12 items-center justify-between gap-4 px-4 text-sm font-semibold sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Shield className="h-6 w-6 shrink-0" strokeWidth={2.3} aria-hidden="true" />
          <p className="truncate">Welcome to SarkariMate Admin Panel</p>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <AdminThemeToggle />
          <button
            type="button"
            className="relative grid h-9 w-9 place-items-center rounded-md outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Open notifications"
            title="Notifications"
          >
            <Bell className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
            <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-[var(--danger)] text-[10px] font-bold">
              1
            </span>
          </button>

          <button
            type="button"
            className="flex min-h-9 items-center gap-2 rounded-md px-2 outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Open admin profile"
            title="Admin profile"
          >
            <UserCircle className="h-6 w-6" strokeWidth={2.3} aria-hidden="true" />
            <span className="hidden leading-tight sm:block">
              <span className="block text-left text-sm font-bold">Admin</span>
              <span className="block text-left text-xs font-medium text-white/75">Super Admin</span>
            </span>
            <ChevronDown className="hidden h-4 w-4 sm:block" strokeWidth={2.4} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
