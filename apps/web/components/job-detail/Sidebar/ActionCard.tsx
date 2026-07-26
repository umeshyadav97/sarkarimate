import { ActionCard as BaseActionCard } from '@/components/job-detail/Overview/ActionCard';
import type { DetailAction } from '@/components/job-detail/types';

interface SidebarActionCardProps {
  title: string;
  description: string;
  actions: DetailAction[];
}

export function ActionCard({ title, description, actions }: SidebarActionCardProps) {
  return <BaseActionCard title={title} description={description} actions={actions} />;
}
