import Link from 'next/link';
import { Bookmark, ChevronDown, Languages, Search, ShieldCheck, Sun } from 'lucide-react';
import { Button } from '@repo/ui';
import { navigationItems } from '@/features/home/constants/homepage-data';

export function HomeHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="bg-[#073b82] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs font-semibold sm:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-amber-300" aria-hidden="true" />
            Welcome to SarkariMate - Your Trusted Government Jobs Partner
          </p>
          <div className="hidden items-center gap-5 md:flex">
            {/* <span className="flex items-center gap-1">
              <Sun className="h-4 w-4 text-amber-300" aria-hidden="true" />
              Light Mode
            </span> */}
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
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50 text-[#1D4ED8]">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-2xl font-extrabold leading-none text-red-600">
              Sarkari<span className="text-[#1D4ED8]">Mate</span>
            </span>
            <span className="text-xs font-medium text-slate-500">
              Sahi Jaankari, Sahi Samay Par
            </span>
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-bold text-[#111827] hover:bg-blue-50 hover:text-[#1D4ED8]"
              >
                {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                {item.label}
                {item.label === 'Schemes' ? (
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* <div className="ml-auto flex items-center gap-2">
          <button
            className="grid h-10 w-10 place-items-center rounded-md text-[#1D4ED8] hover:bg-blue-50"
            type="button"
            aria-label="Search"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <Button
            className="hidden border border-blue-200 bg-white text-[#1D4ED8] hover:bg-blue-50 sm:inline-flex"
            type="button"
          >
            Login
          </Button>
          <Button
            className="inline-flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#1E40AF]"
            type="button"
          >
            <Bookmark className="h-4 w-4" aria-hidden="true" />
            Get App
          </Button>
        </div> */}
      </div>
    </header>
  );
}
