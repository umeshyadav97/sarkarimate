import { quickAccessItems } from '@/features/home/constants/homepage-data';

const toneClasses = {
  blue: 'bg-blue-50 text-[#1D4ED8]',
  green: 'bg-green-50 text-[#16A34A]',
  orange: 'bg-orange-50 text-[#F59E0B]',
  purple: 'bg-violet-50 text-violet-600',
};

export function QuickAccessSection() {
  return (
    <section className="mx-auto max-w-full px-2 sm:px-4 lg:px-6" aria-label="Quick access">
      <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_6px_22px_rgba(15,23,42,0.06)] grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
        {quickAccessItems.map((item, index) => {
          const Icon = item.icon;
          const hasColumnDivider = index % 3 !== 2;
          const hasDesktopDivider = index < quickAccessItems.length - 1;
          const hasRowDivider = index < 3;

          return (
            <a
              key={item.label}
              href="#"
              className={`relative flex min-h-34 flex-col items-center justify-center md:px-4 px-2 md:py-4 py-2 text-center transition-colors hover:bg-slate-50 ${
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
                className={`grid lg:h-16 lg:w-16 md:h-14 md:w-14 h-8 w-8 place-items-center rounded-xl ring-1 ring-inset ring-current/10 ${toneClasses[item.tone]}`}
              >
                <Icon
                  className="lg:h-9 lg:w-9 md:h-6 md:w-6 h-4 w-4"
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
            </a>
          );
        })}
      </div>
    </section>
  );
}
