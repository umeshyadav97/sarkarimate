import * as React from 'react';

export function StatusChip({ children }: React.PropsWithChildren) {
  return (
    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
      {children}
    </span>
  );
}
