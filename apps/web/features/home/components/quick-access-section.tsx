import { quickAccessItems } from '@/features/home/constants/homepage-data';

const toneClasses = {
  blue: 'bg-blue-50 text-[#1D4ED8]',
  green: 'bg-green-50 text-[#16A34A]',
  orange: 'bg-orange-50 text-[#F59E0B]',
  purple: 'bg-violet-50 text-violet-600',
};

export function QuickAccessSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Quick access">
      <div className="grid gap-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-7">
        {quickAccessItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href="#"
              className="flex min-h-32 flex-col items-center justify-center gap-3 border-b border-slate-200 p-5 text-center hover:bg-slate-50 sm:border-r lg:border-b-0"
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-lg ${toneClasses[item.tone]}`}
              >
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-base font-extrabold text-[#111827]">{item.label}</span>
                <span className="mt-1 block text-sm font-semibold text-slate-500">
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
