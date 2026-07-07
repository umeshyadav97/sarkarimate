import { Card } from '@repo/ui';
import { categories, stats } from '@/features/home/constants/homepage-data';
import { SectionHeader } from '@/features/home/components/section-header';

const toneClasses = {
  blue: 'text-[#1D4ED8]',
  green: 'text-[#16A34A]',
  orange: 'text-[#F59E0B]',
  purple: 'text-violet-600',
};

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <Card className="rounded-lg p-4">
        <SectionHeader actionLabel="View All Categories" title="Job Categories" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <a
                key={category.title}
                href="#"
                className="rounded-lg border border-slate-200 p-4 text-center hover:border-blue-200 hover:bg-blue-50"
              >
                <Icon
                  className={`mx-auto h-9 w-9 ${toneClasses[category.tone]}`}
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-sm font-extrabold text-[#111827]">{category.title}</h3>
                <p className="mt-1 text-xs font-semibold text-slate-500">{category.count}</p>
                <span className="mt-4 inline-flex h-9 items-center justify-center rounded-md border border-blue-200 px-4 text-xs font-extrabold text-[#1D4ED8]">
                  {category.title === 'All Categories' ? 'Explore All' : 'View Jobs'}
                </span>
              </a>
            );
          })}
        </div>
      </Card>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 lg:grid-cols-4">
        {statsWithIcons.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex items-center gap-4 border-slate-200 lg:border-r lg:last:border-r-0"
            >
              <span className={`grid h-16 w-16 place-items-center rounded-lg ${stat.toneClass}`}>
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <div>
                <p className={`text-3xl font-extrabold ${stat.valueClass}`}>{stat.value}</p>
                <h3 className="mt-1 text-base font-extrabold text-[#111827]">{stat.label}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">{stat.helper}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const statsWithIcons = stats.map((stat) => ({
  ...stat,
  toneClass:
    stat.tone === 'green'
      ? 'bg-green-50 text-[#16A34A]'
      : stat.tone === 'purple'
        ? 'bg-violet-50 text-violet-600'
        : stat.tone === 'orange'
          ? 'bg-orange-50 text-[#F59E0B]'
          : 'bg-blue-50 text-[#1D4ED8]',
  valueClass:
    stat.tone === 'green'
      ? 'text-[#16A34A]'
      : stat.tone === 'purple'
        ? 'text-violet-600'
        : stat.tone === 'orange'
          ? 'text-orange-600'
          : 'text-[#1D4ED8]',
}));
