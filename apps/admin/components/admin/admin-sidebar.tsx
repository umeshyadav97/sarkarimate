'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { LucideIcon } from 'lucide-react';
import {
  ChevronUp,
  ExternalLink,
  FileText,
  FolderOpen,
  LayoutDashboard,
  PlusCircle,
  Settings,
  ShieldCheck,
} from 'lucide-react';

interface AdminSidebarLink {
  label: string;
  href: string;
  active?: boolean;
}

const postLinks: AdminSidebarLink[] = [
  { label: 'All Posts', href: '/posts' },
  { label: 'Add New Post', href: '/posts/new' },
  { label: 'Categories', href: '/posts/categories' },
];

function AdminSidebarItem({
  href,
  label,
  active,
  icon: Icon,
}: AdminSidebarLink & { icon: LucideIcon }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
        active
          ? 'bg-[var(--selected)] text-[var(--primary)]'
          : 'text-[var(--text-primary)] hover:bg-[var(--selected)] hover:text-[var(--primary)]'
      }`}
    >
      <Icon className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
      {label}
    </Link>
  );
}

export function AdminSidebar() {
  const pathname = usePathname();
  const isPostsOpen = pathname.startsWith('/posts');

  return (
    <aside className="hidden h-[calc(100vh-48px)] w-64 shrink-0 border-r border-[var(--border)] bg-[var(--surface)] lg:sticky lg:top-12 lg:block">
      <div className="flex h-full flex-col">
        <Link
          href="/"
          className="flex items-center gap-3 border-b border-[var(--border)] px-6 py-5"
        >
          <ShieldCheck
            className="h-10 w-10 shrink-0 text-[var(--primary)]"
            strokeWidth={2.4}
            aria-hidden="true"
          />
          <span>
            <span className="block text-2xl font-bold leading-none text-[var(--danger)]">
              Sarkari<span className="text-[var(--primary)]">Mate</span>
            </span>
            <span className="text-xs font-semibold text-[var(--text-secondary)]">Admin Panel</span>
          </span>
        </Link>

        <nav aria-label="Admin sidebar" className="flex flex-1 flex-col gap-2 p-4">
          <AdminSidebarItem
            href="/"
            label="Dashboard"
            active={pathname === '/'}
            icon={LayoutDashboard}
          />

          <details className="group" open={isPostsOpen}>
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between rounded-lg bg-[var(--selected)] px-3 text-sm font-semibold text-[var(--primary)] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--primary)]">
              <span className="flex items-center gap-3">
                <FileText className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
                Posts
              </span>
              <ChevronUp
                className="h-4 w-4 transition-transform group-open:rotate-0"
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </summary>
            <div className="mt-2 grid gap-1 pl-8">
              {postLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium outline-none transition-colors hover:bg-[var(--selected)] hover:text-[var(--primary)] focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
                    pathname === item.href
                      ? 'bg-[var(--muted-bg)] text-[var(--primary)]'
                      : 'text-[var(--text-primary)]'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <FolderOpen className="h-3.5 w-3.5" strokeWidth={2.3} aria-hidden="true" />
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </details>

          <div className="mt-2 border-t border-[var(--border)] pt-3">
            <AdminSidebarItem href="/settings" label="Settings" icon={Settings} />
          </div>
        </nav>

        <section className="admin-card m-4 p-4">
          <p className="text-sm font-bold text-[var(--text-primary)]">Need Help?</p>
          <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">
            Check our documentation
          </p>
          <Link
            href="/docs"
            className="mt-4 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] text-sm font-semibold text-[var(--primary)] hover:bg-[var(--selected)]"
          >
            View Docs
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </aside>
  );
}

export function AdminMobileSidebar() {
  const pathname = usePathname();

  return (
    <details className="border-b border-[var(--border)] bg-[var(--surface)] lg:hidden">
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 text-sm font-bold text-[var(--text-primary)]">
        Admin Menu
        <PlusCircle
          className="h-4 w-4 text-[var(--primary)]"
          strokeWidth={2.4}
          aria-hidden="true"
        />
      </summary>
      <div className="grid gap-2 px-4 pb-4">
        <AdminSidebarItem
          href="/"
          label="Dashboard"
          active={pathname === '/'}
          icon={LayoutDashboard}
        />
        <div className="rounded-lg border border-[var(--border)] p-2">
          <p className="px-2 py-1 text-xs font-bold uppercase text-[var(--text-muted)]">Posts</p>
          {postLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-10 items-center rounded-md px-2 text-sm font-medium hover:bg-[var(--selected)] hover:text-[var(--primary)] ${
                pathname === item.href
                  ? 'bg-[var(--muted-bg)] text-[var(--primary)]'
                  : 'text-[var(--text-primary)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <AdminSidebarItem href="/settings" label="Settings" icon={Settings} />
      </div>
    </details>
  );
}
