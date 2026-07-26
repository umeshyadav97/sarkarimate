import type { ReactNode } from 'react';

interface SyllabusSectionCardProps {
  id?: string;
  title: string;
  eyebrow?: string;
  index?: number;
  children: ReactNode;
}

export function SyllabusSectionCard({
  id,
  title,
  eyebrow,
  index,
  children,
}: SyllabusSectionCardProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
    >
      <div className="flex items-center gap-2">
        {index ? (
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-50 text-sm font-bold text-[#1D4ED8]">
            {index}
          </span>
        ) : null}
        <h2 className="text-xl font-bold leading-7 text-[#111827]">{title}</h2>
        {eyebrow ? <span className="text-xs font-bold text-slate-500">{eyebrow}</span> : null}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
