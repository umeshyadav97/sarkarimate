import type { DetailKeyInfo } from '@/components/job-detail/types';

interface KeyValueListProps {
  items: DetailKeyInfo[];
  columns?: 'one' | 'two';
}

const valueToneClasses = {
  blue: 'text-[#1D4ED8]',
  green: 'text-[#059669]',
  red: 'text-[#DC2626]',
  orange: 'text-[#F59E0B]',
  slate: 'text-slate-700',
};

export function KeyValueList({ items, columns = 'two' }: KeyValueListProps) {
  return (
    <dl className={`grid gap-x-8 gap-y-3 ${columns === 'two' ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <div
          key={`${item.label}-${item.value}`}
          className="flex min-w-0 items-center justify-between gap-4"
        >
          <dt className="min-w-0 truncate text-sm font-semibold text-slate-600">{item.label}</dt>
          <dd
            className={`shrink-0 whitespace-nowrap text-sm font-bold ${valueToneClasses[item.tone ?? 'slate']}`}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
