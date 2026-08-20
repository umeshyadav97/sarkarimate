import type { ReactNode } from 'react';

interface AdminPageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: string[];
  icon?: ReactNode;
  actions?: ReactNode;
}

export function AdminPageHeader({
  title,
  description,
  breadcrumbs,
  icon,
  actions,
}: AdminPageHeaderProps) {
  return (
    <header className="flex min-h-22 flex-col justify-between gap-4 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-4 sm:px-5 lg:flex-row lg:items-center">
      <div className="min-w-0">
        <div className="flex items-center gap-4">
          {/* {icon ? (
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[var(--selected)] text-[var(--text-primary)]">
              {icon}
            </span>
          ) : null} */}
          <h1 className="text-2xl font-semibold leading-tight text-[var(--text-primary)]">
            {title}
          </h1>
        </div>
        {breadcrumbs ? (
          <nav
            className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-[var(--text-secondary)]"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-2">
                {index > 0 ? <span className="text-[var(--text-muted)]">/</span> : null}
                <span className={index === breadcrumbs.length - 1 ? 'text-[var(--primary)]' : ''}>
                  {item}
                </span>
              </span>
            ))}
          </nav>
        ) : null}
        {description ? (
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--text-secondary)]">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap gap-3">{actions}</div> : null}
    </header>
  );
}
