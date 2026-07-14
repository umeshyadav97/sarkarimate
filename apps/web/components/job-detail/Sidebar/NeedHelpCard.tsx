import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

interface NeedHelpCardProps {
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

export function NeedHelpCard({ title, description, href, buttonText }: NeedHelpCardProps) {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="flex items-center gap-2 text-lg font-bold text-[#111827]">
        <HelpCircle className="h-5 w-5 text-[#1D4ED8]" aria-hidden="true" />
        {title}
      </h2>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-4 flex min-h-11 items-center justify-center rounded-lg border border-slate-300 px-4 text-sm font-bold text-slate-800 outline-none hover:border-[#1D4ED8] hover:text-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
      >
        {buttonText}
      </Link>
    </aside>
  );
}
