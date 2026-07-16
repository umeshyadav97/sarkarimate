import Link from 'next/link';
import { ArrowRight, Download, FileText, Globe2, Send } from 'lucide-react';
import type { PreparationAction } from '@/types/preparation';

interface QuickActionsProps {
  actions?: PreparationAction[];
}

export function QuickActions({ actions }: QuickActionsProps) {
  if (!actions?.length) {
    return null;
  }

  return (
    <aside className="rounded-lg border border-blue-200 bg-blue-50 p-4 lg:sticky lg:top-24">
      <h2 className="text-base font-bold text-[#1D4ED8]">Quick Actions</h2>
      <div className="mt-4 grid gap-3">
        {actions.map((action, index) => (
          <Link
            key={action.label}
            href={action.href}
            className={`flex min-h-11 items-center justify-between gap-3 rounded-md px-4 text-xs font-bold outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
              index === 0
                ? 'bg-[#1D4ED8] text-white hover:bg-[#1E40AF]'
                : 'border border-slate-200 bg-white text-slate-800 hover:border-[#1D4ED8] hover:text-[#1D4ED8]'
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <ActionIcon type={action.type} />
              {action.label}
            </span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </aside>
  );
}

function ActionIcon({ type }: { type: PreparationAction['type'] }) {
  if (type === 'download') {
    return <Download className="h-4 w-4" aria-hidden="true" />;
  }

  if (type === 'official') {
    return <Globe2 className="h-4 w-4" aria-hidden="true" />;
  }

  if (type === 'apply') {
    return <Send className="h-4 w-4" aria-hidden="true" />;
  }

  return <FileText className="h-4 w-4" aria-hidden="true" />;
}
