import { FormattedDetailValue } from '@/components/job-detail/Common/FormattedDetailValue';
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
      {items.map((item, index) => (
        <div
          key={`${index}-${item.label}`}
          className="grid min-w-0 gap-1 sm:flex sm:items-center sm:justify-between sm:gap-4"
        >
          <dt className="min-w-0 text-sm font-semibold text-slate-600 sm:truncate">{item.label}</dt>
          <dd
            className={`min-w-0 whitespace-normal break-words text-sm font-bold sm:shrink-0 sm:whitespace-nowrap ${valueToneClasses[item.tone ?? 'slate']}`}
          >
            <FormattedDetailValue value={item.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
