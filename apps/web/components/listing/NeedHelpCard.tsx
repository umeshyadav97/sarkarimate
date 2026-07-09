import { CircleHelp } from 'lucide-react';
import type { ListingPageConfig } from '@/components/listing/types';

interface NeedHelpCardProps {
  config: ListingPageConfig;
}

export function NeedHelpCard({ config }: NeedHelpCardProps) {
  return (
    <section
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
      aria-labelledby="listing-help"
    >
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#1D4ED8]">
          <CircleHelp className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 id="listing-help" className="text-lg font-bold text-[#111827]">
            Need Help?
          </h2>
          <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
            {config.sidebar.helpText}
          </p>
        </div>
      </div>
      <a
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[#1D4ED8] px-4 text-sm font-bold text-[#1D4ED8] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
        href="/contact-us"
      >
        Contact
      </a>
    </section>
  );
}
