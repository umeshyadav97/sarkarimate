'use client';

import { cn } from '@/lib/classnames';
import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  placeholder?: string;
  buttonText?: string;
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  className?: string;
}

export function SearchInput({
  value,
  placeholder = 'Search jobs, exams, departments...',
  buttonText = 'Search',
  loading,
  onChange,
  onSearch,
  className,
}: SearchInputProps) {
  return (
    <div
      className={cn(
        'flex h-11 w-full overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]',
        className,
      )}
    >
      <div className="flex flex-1 items-center px-4">
        <Search size={17} strokeWidth={2} className="mr-2.5 text-[#98A2B3]" />

        <input
          value={value}
          onChange={onChange}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          placeholder={placeholder}
          className="h-full w-full bg-transparent text-sm text-[#101828] placeholder:text-[#98A2B3] focus:outline-none"
        />
      </div>

      <button
        onClick={onSearch}
        disabled={loading}
        className="
          flex
          w-[96px]
          items-center
          justify-center
          bg-[#2563EB]
          text-sm
          font-medium
          text-white
          transition-all
          duration-200
          hover:bg-[#1D4ED8]
          active:scale-[0.98]
          disabled:opacity-60
        "
      >
        {loading ? '...' : buttonText}
      </button>
    </div>
  );
}
