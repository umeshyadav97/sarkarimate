import { Sparkles } from 'lucide-react';
import { KeyInfoGrid } from '@/components/job-detail/Overview/KeyInfoGrid';
import type { DetailKeyInfo } from '@/components/job-detail/types';

interface AtGlanceCardProps {
  title: string;
  items: DetailKeyInfo[];
  alert?: string;
}

export function AtGlanceCard({ title, items, alert }: AtGlanceCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <h2 className="text-lg font-bold text-[#111827]">{title}</h2>
      <div className="mt-4 sm:mt-5">
        <KeyInfoGrid items={items} />
      </div>
      {alert ? (
        <p className="mt-4 flex items-start gap-2.5 rounded-lg bg-blue-50 p-3 text-sm font-semibold leading-6 text-[#0B2F6B] sm:mt-5 sm:gap-3 sm:p-4">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
          {alert}
        </p>
      ) : null}
    </section>
  );
}
