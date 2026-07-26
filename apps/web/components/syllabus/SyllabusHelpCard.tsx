import Link from 'next/link';
import { Bot, MessageCircleQuestion } from 'lucide-react';

export function SyllabusHelpCard() {
  return (
    <aside className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm">
      <h2 className="flex items-center gap-2 text-xl font-bold text-[#1D4ED8]">
        <MessageCircleQuestion className="h-5 w-5" aria-hidden="true" />
        Need Help Understanding?
      </h2>
      <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">
        Use our AI Assistant to get answers to your queries in simple language.
      </p>
      <Link
        href="#"
        className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#1D4ED8] bg-white px-4 text-sm font-bold text-[#1D4ED8]"
      >
        Ask AI Assistant
        <Bot className="h-4 w-4" aria-hidden="true" />
      </Link>
    </aside>
  );
}
