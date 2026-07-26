import { InfoBadge } from '@/components/job-detail/Common/InfoBadge';
import type { DetailPageData } from '@/components/job-detail/types';

interface StatusBadgeProps {
  status: DetailPageData['status'];
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return <InfoBadge label={status.label} tone={status.tone} />;
}
