import * as React from 'react';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function EmptyState({ className = '', title, description, ...props }: EmptyStateProps) {
  return (
    <div className={`rounded-md border border-slate-200 p-6 text-center ${className}`} {...props}>
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      {description ? <p className="mt-2 text-sm text-slate-600">{description}</p> : null}
    </div>
  );
}
