import type { ReactNode } from 'react';

interface SectionCardProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function SectionCard({ id, children, className = '' }: SectionCardProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-36 rounded-xl border border-slate-200 bg-white p-5 shadow-sm ${className} `}
    >
      {children}
    </section>
  );
}
