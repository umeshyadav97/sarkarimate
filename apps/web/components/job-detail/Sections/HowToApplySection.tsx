import { ClipboardCheck } from 'lucide-react';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import { SectionHeading } from '@/components/job-detail/Common/SectionHeading';

interface HowToApplySectionProps {
  id: string;
  title: string;
  items: string[];
}

export function HowToApplySection({ id, title, items }: HowToApplySectionProps) {
  return (
    <SectionCard id={id}>
      <SectionHeading title={title} icon={ClipboardCheck} />
      <ol className="grid gap-3">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm font-medium leading-6 text-slate-700">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-bold text-[#1D4ED8]">
              {index + 1}
            </span>
            {item}
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}
