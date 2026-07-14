import { CalendarClock } from 'lucide-react';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import { SectionHeading } from '@/components/job-detail/Common/SectionHeading';
import { Timeline } from '@/components/job-detail/Common/Timeline';
import type { DetailTimelineItem } from '@/components/job-detail/types';

interface TimelineSectionProps {
  id: string;
  title: string;
  items: DetailTimelineItem[];
}

export function TimelineSection({ id, title, items }: TimelineSectionProps) {
  return (
    <SectionCard id={id}>
      <SectionHeading title={title} icon={CalendarClock} />
      <Timeline items={items} variant="responsive" />
    </SectionCard>
  );
}
