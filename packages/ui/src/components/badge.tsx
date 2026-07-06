import * as React from 'react';

export function Badge({
  className = '',
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span className={`rounded-full bg-slate-100 px-3 py-1 text-sm ${className}`}>{children}</span>
  );
}
