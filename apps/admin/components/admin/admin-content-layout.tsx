import type { ReactNode } from 'react';

interface AdminContentLayoutProps {
  children: ReactNode;
  rightPanel?: ReactNode;
}

export function AdminContentLayout({ children, rightPanel }: AdminContentLayoutProps) {
  return (
    <div className="grid max-w-full gap-4 p-4 sm:p-5 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="min-w-0">{children}</div>
      {rightPanel ? (
        <aside className="min-w-0 xl:sticky xl:top-16 xl:self-start">{rightPanel}</aside>
      ) : null}
    </div>
  );
}
