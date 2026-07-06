import * as React from 'react';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function Loading({ className = '', label = 'Loading', ...props }: LoadingProps) {
  return (
    <div
      aria-live="polite"
      aria-busy="true"
      className={`flex items-center gap-2 text-sm text-slate-600 ${className}`}
      {...props}
    >
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
      <span>{label}</span>
    </div>
  );
}
