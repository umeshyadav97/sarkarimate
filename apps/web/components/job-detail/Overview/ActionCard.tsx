import Link from 'next/link';
import { ArrowRight, ExternalLink, FileText, Globe2 } from 'lucide-react';
import type { DetailAction } from '@/components/job-detail/types';

interface ActionCardProps {
  title: string;
  description: string;
  actions: DetailAction[];
}

export function ActionCard({ title, description, actions }: ActionCardProps) {
  const [primaryAction, ...secondaryActions] = actions;

  return (
    <aside className="rounded-xl border border-[#9FE6BF] bg-[#F4FCF8] p-5 shadow-sm">
      <h2 className="flex items-center gap-2 text-xl font-bold text-[#067A3D]">
        <ExternalLink className="h-5 w-5" aria-hidden="true" />
        {title}
      </h2>
      <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{description}</p>
      {primaryAction ? (
        <Link
          href={primaryAction.href}
          className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#009A44] px-4 text-sm font-bold text-white shadow-sm outline-none hover:bg-[#087A39] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
        >
          {primaryAction.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : null}
      <div className="mt-3 grid gap-3">
        {secondaryActions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 outline-none hover:border-[#1D4ED8] hover:text-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <ActionIcon label={action.label} />
            {action.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}

function ActionIcon({ label }: { label: string }) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes('website')) {
    return <Globe2 className="h-4 w-4" aria-hidden="true" />;
  }

  return <FileText className="h-4 w-4" aria-hidden="true" />;
}
