import { CalendarCheck } from 'lucide-react';
import { KeyValueList } from '@/components/job-detail/Common/KeyValueList';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import { SectionHeading } from '@/components/job-detail/Common/SectionHeading';
import type { DetailKeyInfo } from '@/components/job-detail/types';

interface ImportantDatesSectionProps {
  id: string;
  title: string;
  items: DetailKeyInfo[];
}

export function ImportantDatesSection({ id, title, items }: ImportantDatesSectionProps) {
  return (
    <SectionCard id={id}>
      <SectionHeading title={title} icon={CalendarCheck} />
      <KeyValueList columns="one" items={items} />
    </SectionCard>
  );
}
