'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandShieldIcon } from '@/components/brand-shield-icon';
import { navigationItems, type NavigationItem } from '@/components/site-navigation';

export function MobileNavigationDrawer({ activePathname }: { activePathname: string }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <button
        type="button"
        className="ml-auto grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-[#111827] hover:bg-blue-50 hover:text-[#1D4ED8] lg:hidden"
        aria-label="Open menu"
        aria-controls="mobile-navigation"
        aria-expanded={isDrawerOpen}
        onClick={() => setIsDrawerOpen(true)}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      {isDrawerOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/40"
            aria-label="Close menu"
            onClick={closeDrawer}
          />
          <div
            id="mobile-navigation"
            className="absolute right-0 top-0 flex h-dvh w-full max-w-sm flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
              <Link href="/" className="flex items-center gap-3" onClick={closeDrawer}>
                <span className="grid h-10 w-10 place-items-center">
                  <BrandShieldIcon className="h-7 w-7" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xl font-bold leading-none text-red-600">
                    Sarkari<span className="text-[#1D4ED8]">Mate</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Sahi Jaankari, Sahi Samay Par
                  </span>
                </span>
              </Link>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-[#111827] hover:bg-slate-50"
                aria-label="Close menu"
                onClick={closeDrawer}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col gap-1 overflow-y-auto p-4"
              aria-label="Mobile primary"
            >
              {navigationItems.map((item) => (
                <MobileNavigationLink
                  key={item.label}
                  item={item}
                  pathname={activePathname}
                  onNavigate={closeDrawer}
                />
              ))}
            </nav>

            <div className="border-t border-slate-200 p-4 text-xs font-semibold text-slate-500">
              Welcome to SarkariMate - Your Trusted Government Jobs Partner
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function MobileNavigationLink({
  item,
  pathname,
  onNavigate,
}: {
  item: NavigationItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const Icon = item.icon;
  const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      className={`flex min-h-12 items-center gap-3 rounded-lg border px-4 text-sm font-bold ${
        isActive
          ? 'border-blue-200 bg-blue-50 text-[#1D4ED8]'
          : 'border-transparent text-[#111827] hover:border-slate-200 hover:bg-slate-50'
      }`}
      aria-current={isActive ? 'page' : undefined}
      onClick={onNavigate}
    >
      <Icon className="h-5 w-5" strokeWidth={2.4} aria-hidden="true" />
      {item.label}
    </Link>
  );
}
