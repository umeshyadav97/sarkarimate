import { UserCheck } from 'lucide-react';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import { SectionHeading } from '@/components/job-detail/Common/SectionHeading';
import type { DetailKeyInfo } from '@/components/job-detail/types';

interface AgeLimitSectionProps {
  id: string;
  title: string;
  items: DetailKeyInfo[];
  note: string;
}

export function AgeLimitSection({ id, title, items, note }: AgeLimitSectionProps) {
  const visibleItems = items.slice(0, 2);
  const noteItem = items[2];

  return (
    <SectionCard id={id}>
      <SectionHeading title={title} icon={UserCheck} />
      <dl className="grid gap-3">
        {visibleItems.map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-4">
            <dt className="flex min-w-0 items-center gap-2 truncate text-sm font-medium text-slate-700">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#009A44]" aria-hidden="true" />
              {item.label}
            </dt>
            <dd className="shrink-0 whitespace-nowrap text-sm font-bold text-[#009A44]">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      {noteItem ? (
        <p className="mt-4 text-sm font-medium leading-6 text-slate-700">{note}</p>
      ) : null}
    </SectionCard>
  );
}
