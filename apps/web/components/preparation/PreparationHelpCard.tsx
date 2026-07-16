import Link from 'next/link';
import { Bot, MessageCircleQuestion } from 'lucide-react';

export function PreparationHelpCard() {
  return (
    <aside className="rounded-lg border border-blue-200 bg-blue-50 p-4">
      <h2 className="flex items-center gap-2 text-base font-bold text-[#1D4ED8]">
        <MessageCircleQuestion className="h-5 w-5" aria-hidden="true" />
        Need Help Understanding?
      </h2>
      <p className="mt-3 text-xs font-semibold leading-5 text-slate-700">
        Use our AI Assistant to get answers to your queries in simple language.
      </p>
      <Link
        href="#"
        className="mt-4 flex min-h-10 items-center justify-center gap-2 rounded-md border border-[#1D4ED8] bg-white px-4 text-xs font-bold text-[#1D4ED8]"
      >
        Ask AI Assistant
        <Bot className="h-4 w-4" aria-hidden="true" />
      </Link>
    </aside>
  );
}
