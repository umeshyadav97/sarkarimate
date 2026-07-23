import { Card } from '@repo/ui';
import {
  categories as defaultCategories,
  stats as defaultStats,
  type CategoryItem,
  type StatItem,
} from '@/features/home/constants/homepage-data';
import { SectionHeader } from '@/features/home/components/section-header';

const toneClasses = {
  blue: 'text-[#1D4ED8]',
  green: 'text-[#16A34A]',
  orange: 'text-[#F59E0B]',
  purple: 'text-violet-600',
};

interface CategoriesSectionProps {
  categories?: CategoryItem[];
}

export function CategoriesSection({ categories = defaultCategories }: CategoriesSectionProps) {
  return (
    <section className="mx-auto max-w-full px-4 py-2 sm:px-6 lg:px-8">
      <Card className="rounded-lg p-4">
        <SectionHeader actionLabel="View All Categories" title="Job Categories" />
        <div className="grid md:gap-4 gap-2  grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <a
                key={category.title}
                href={category.href}
                className="rounded-lg border border-slate-200 md:p-4 p-2 text-center hover:border-blue-200 hover:bg-blue-50"
              >
                <Icon
                  className={`mx-auto md:h-9 md:w-9 h-6 w-6 ${toneClasses[category.tone]}`}
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <h3 className="mt-3 text-sm font-bold text-[#111827]">{category.title}</h3>
                <p className="mt-1 text-xs font-semibold text-slate-500">{category.count}</p>
                <span className="mt-4 inline-flex h-9 items-center justify-center rounded-md border border-blue-200 px-4 text-xs font-bold text-[#1D4ED8]">
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

interface StatsSectionProps {
  stats?: StatItem[];
}

export function StatsSection({ stats = defaultStats }: StatsSectionProps) {
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

  return (
    <section className="mx-auto max-w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 lg:grid-cols-4">
        {statsWithIcons.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex items-center gap-4 border-slate-200 lg:border-r lg:last:border-r-0"
            >
              <span
                className={`grid lg:h-12 lg:w-12 w-10 h-10 place-items-center rounded-lg ${stat.toneClass}`}
              >
                <Icon className="lg:h-7 lg:w-7 h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
              </span>
              <div>
                <p className={`lg:text-2xl text-md font-bold ${stat.valueClass}`}>{stat.value}</p>
                <h3 className="mt-1 lg:text-base text-sm font-bold text-[#111827]">{stat.label}</h3>
                <p className="mt-1 lg:text-sm text-xs font-semibold text-slate-500">
                  {stat.helper}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
