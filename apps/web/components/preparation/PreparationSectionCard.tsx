import type { ReactNode } from 'react';

interface PreparationSectionCardProps {
  id?: string;
  title: string;
  eyebrow?: string;
  index?: number;
  children: ReactNode;
}

export function PreparationSectionCard({
  id,
  title,
  eyebrow,
  index,
  children,
}: PreparationSectionCardProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32 rounded-lg border border-slate-200 bg-white p-4 sm:p-5"
    >
      <div className="flex items-center gap-2">
        {index ? (
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#1D4ED8] text-xs font-bold text-white">
            {index}
          </span>
        ) : null}
        <h2 className="text-base font-bold leading-6 text-[#111827]">{title}</h2>
        {eyebrow ? <span className="text-xs font-bold text-slate-500">{eyebrow}</span> : null}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
