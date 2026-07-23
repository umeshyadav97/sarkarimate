import Link from 'next/link';
import { ArrowRight, Download, ExternalLink, FileText, Globe2, Send } from 'lucide-react';
import type { SyllabusAction } from '@/types/syllabus';

interface QuickActionsProps {
  actions?: SyllabusAction[];
}

export function QuickActions({ actions }: QuickActionsProps) {
  if (!actions?.length) {
    return null;
  }

  const orderedActions = [...actions].sort(
    (first, second) => actionPriority(first.type) - actionPriority(second.type),
  );
  const [primaryAction, ...secondaryActions] = orderedActions;

  return (
    <aside className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm lg:sticky lg:top-24">
      <h2 className="flex items-center gap-2 text-xl font-bold text-[#1D4ED8]">
        <ExternalLink className="h-5 w-5" aria-hidden="true" />
        Quick Actions
      </h2>
      {primaryAction ? (
        <Link
          href={primaryAction.href}
          target={isExternalHref(primaryAction.href) ? '_blank' : undefined}
          rel={isExternalHref(primaryAction.href) ? 'noopener noreferrer' : undefined}
          className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-4 text-sm font-bold text-white shadow-sm outline-none hover:bg-[#1E40AF] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
        >
          <ActionIcon type={primaryAction.type} />
          {primaryAction.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : null}
      <div className="mt-3 grid gap-3">
        {secondaryActions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            target={isExternalHref(action.href) ? '_blank' : undefined}
            rel={isExternalHref(action.href) ? 'noopener noreferrer' : undefined}
            className="flex min-h-11 items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 outline-none hover:border-[#1D4ED8] hover:text-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
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

function ActionIcon({ type }: { type: SyllabusAction['type'] }) {
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

function actionPriority(type: SyllabusAction['type']) {
  if (type === 'apply') return 0;
  if (type === 'download') return 1;
  if (type === 'notification') return 2;
  if (type === 'official') return 3;
  return 4;
}

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}
