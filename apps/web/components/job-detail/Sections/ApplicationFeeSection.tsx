import { BadgeIndianRupeeIcon, CircleDollarSign } from 'lucide-react';
import { SectionCard } from '@/components/job-detail/Common/SectionCard';
import type { DetailKeyInfo } from '@/components/job-detail/types';

interface ApplicationFeeSectionProps {
  id: string;
  title: string;
  items: DetailKeyInfo[];
  note: string;
}

export function ApplicationFeeSection({ id, title, items, note }: ApplicationFeeSectionProps) {
  const primaryFee = items[0];

  return (
    <SectionCard id={id}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <BadgeIndianRupeeIcon
            className="h-5 w-5 text-[#1D4ED8]"
            strokeWidth={2.4}
            aria-hidden="true"
          />
          <h2 className="text-lg font-bold text-[#111827]">{title}</h2>
        </div>
      </div>
      {primaryFee ? (
        <dl className="mb-3 grid gap-3">
          <div className="flex min-w-0 items-center justify-between gap-4">
            <dt className="min-w-0 truncate text-sm font-semibold text-slate-600">
              {primaryFee.label}
            </dt>
            <dd className="shrink-0 whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-bold text-[#009A44] ring-1 ring-emerald-200">
              {primaryFee.value}
            </dd>
          </div>
        </dl>
      ) : null}
      <p className="text-sm font-medium leading-6 text-slate-700">{note}</p>
    </SectionCard>
  );
}
