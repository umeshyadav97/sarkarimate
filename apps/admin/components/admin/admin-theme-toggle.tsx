'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type AdminTheme = 'light' | 'dark';

export function AdminThemeToggle() {
  const [theme, setTheme] = useState<AdminTheme>('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('admin-theme') as AdminTheme | null;
    const nextTheme = savedTheme === 'dark' ? 'dark' : 'light';

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('admin-theme', nextTheme);
  };

  const Icon = theme === 'light' ? Sun : Moon;

  return (
    <button
      type="button"
      className="hidden min-h-9 items-center gap-2 rounded-md px-2 outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50 md:inline-flex"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      onClick={toggleTheme}
    >
      <Icon
        className="h-4 w-4"
        style={{ color: theme === 'light' ? 'var(--warning)' : 'rgba(255,255,255,0.78)' }}
        strokeWidth={2.4}
        aria-hidden="true"
      />
      {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
