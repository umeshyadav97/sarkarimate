import * as React from 'react';

export function Card({
  className = '',
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
