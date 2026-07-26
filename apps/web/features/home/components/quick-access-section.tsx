import Link from 'next/link';
import {
  quickAccessItems as defaultQuickAccessItems,
  type QuickAccessItem,
} from '@/features/home/constants/homepage-data';

const toneClasses = {
  blue: 'bg-blue-50 text-[#1D4ED8]',
  green: 'bg-green-50 text-[#15803D]',
  orange: 'bg-orange-50 text-[#F59E0B]',
  purple: 'bg-violet-50 text-violet-600',
};

interface QuickAccessSectionProps {
  items?: QuickAccessItem[];
}

export function QuickAccessSection({ items = defaultQuickAccessItems }: QuickAccessSectionProps) {
  const mobileItemsPerRow = 3;
  const lastMobileRowStart = items.length - (items.length % mobileItemsPerRow || mobileItemsPerRow);

  return (
    <section className="mx-auto max-w-full px-2 sm:px-4 lg:px-6" aria-label="Quick access">
      <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_6px_22px_rgba(15,23,42,0.06)] grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          const hasColumnDivider = index % 3 !== 2;
          const hasDesktopDivider = index < items.length - 1;
          const hasRowDivider = index < lastMobileRowStart;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex min-h-34 flex-col items-center justify-center md:px-4 px-2 md:py-4  text-center transition-colors hover:bg-slate-50 ${
                hasRowDivider ? 'border-b border-slate-200 lg:border-b-0' : ''
              }`}
            >
              {hasColumnDivider || hasDesktopDivider ? (
                <span
                  className={`absolute right-0 top-1/2 h-20 w-px -translate-y-1/2 bg-slate-200 ${
                    hasColumnDivider ? 'block' : 'hidden'
                  } ${hasDesktopDivider ? 'lg:block' : 'lg:hidden'}`}
                />
              ) : null}
              <span
                className={`grid lg:h-12 lg:w-12 md:h-10 md:w-10 h-8 w-8 place-items-center rounded-xl ring-1 ring-inset ring-current/10 ${toneClasses[item.tone]}`}
              >
                <Icon
                  className="lg:h-7 lg:w-7 md:h-5 md:w-5 h-4 w-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
              <span>
                <span className="mt-4 block md:text-base text-sm font-bold text-[#111827]">
                  {item.label}
                </span>
                <span className="mt-1 block md:text-sm text-xs font-semibold text-slate-500">
                  {item.description}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
