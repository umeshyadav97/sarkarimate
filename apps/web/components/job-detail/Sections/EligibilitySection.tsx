import { CheckCircle2 } from 'lucide-react';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import { SectionHeading } from '@/components/job-detail/Common/SectionHeading';

interface EligibilitySectionProps {
  id: string;
  title: string;
  items: string[];
}

export function EligibilitySection({ id, title, items }: EligibilitySectionProps) {
  return (
    <SectionCard id={id}>
      <SectionHeading title={title} icon={CheckCircle2} />
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm font-medium leading-6 text-slate-700">
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-[#009A44]"
              strokeWidth={2.6}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
