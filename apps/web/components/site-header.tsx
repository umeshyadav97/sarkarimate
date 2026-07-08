'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Languages } from 'lucide-react';
import { BrandShieldIcon } from '@/components/brand-shield-icon';
import { MobileNavigationDrawer } from '@/components/mobile-navigation-drawer';
import { navigationItems } from '@/components/site-navigation';

export function SiteHeader() {
  const pathname = usePathname();
  const [activePathname, setActivePathname] = useState('');

  useEffect(() => {
    setActivePathname(pathname);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="bg-[#073b82] text-white">
        <div className="mx-auto flex max-w-full items-center justify-between px-4 py-2 text-xs font-semibold sm:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <BrandShieldIcon className="h-4 w-4" aria-hidden="true" />
            Welcome to SarkariMate - Your Trusted Government Jobs Partner
          </p>
          <div className="hidden items-center gap-5 md:flex">
            <span className="flex items-center gap-1">
              <Languages className="h-4 w-4" aria-hidden="true" />
              Hindi
            </span>
            <span aria-label="Text size controls">A- A A+</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-full items-center gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-fit items-center gap-3" aria-label="SarkariMate home">
          <span className="grid h-11 w-11 place-items-center flex items-center justify-center rounded-lg bg-blue-50 text-[#1D4ED8]">
            <BrandShieldIcon className="h-12 w-12" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-2xl font-bold leading-none text-red-600">
              Sarkari<span className="text-[#1D4ED8]">Mate</span>
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Sahi Jaankari, Sahi Samay Par
            </span>
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-6 lg:flex"
          aria-label="Primary"
        >
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === '/' ? activePathname === '/' : activePathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex min-h-12 items-center gap-1.5 px-1 text-sm font-bold transition-colors hover:text-[#1D4ED8] ${
                  isActive ? 'text-[#1D4ED8]' : 'text-[#111827]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#1D4ED8]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <MobileNavigationDrawer activePathname={activePathname} />
      </div>
    </header>
  );
}
