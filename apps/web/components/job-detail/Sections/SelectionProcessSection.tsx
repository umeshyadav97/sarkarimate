import { ListChecks } from 'lucide-react';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import { SectionHeading } from '@/components/job-detail/Common/SectionHeading';
import type { DetailTimelineItem } from '@/components/job-detail/types';

interface SelectionProcessSectionProps {
  id: string;
  title: string;
  items: DetailTimelineItem[];
}

export function SelectionProcessSection({ id, title, items }: SelectionProcessSectionProps) {
  return (
    <SectionCard id={id}>
      <SectionHeading title={title} icon={ListChecks} />
      <ol className="grid gap-3">
        {items.map((item, index) => (
          <ProcessStep
            key={`${index}-${item.status}`}
            index={index}
            isLast={index === items.length - 1}
            item={item}
          />
        ))}
      </ol>
    </SectionCard>
  );
}

function ProcessStep({
  item,
  index,
  isLast,
}: {
  item: DetailTimelineItem;
  index: number;
  isLast: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex shrink-0 flex-col items-center">
        <span className="grid h-7 w-7 place-items-center rounded-full border border-[#1D4ED8] bg-blue-50 text-xs font-bold text-[#1D4ED8]">
          {index + 1}
        </span>
        {isLast ? null : <span className="mt-1 h-5 w-px bg-slate-200" aria-hidden="true" />}
      </span>
      <span className="min-w-0 pb-1">
        <span className="block text-sm font-bold leading-5 text-[#111827]">{item.title}</span>
        <span className="mt-0.5 block text-sm font-medium leading-5 text-slate-600">
          {item.date}
        </span>
      </span>
    </li>
  );
}
