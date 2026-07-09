'use client';

import { cn } from '@/lib/classnames';
import { Search } from 'lucide-react';
import type { ChangeEvent, KeyboardEvent } from 'react';

interface SearchInputProps {
  value: string;
  id?: string;
  name?: string;
  type?: 'search' | 'text';
  ariaLabel?: string;
  placeholder?: string;
  buttonText?: string;
  showButton?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  className?: string;
  inputClassName?: string;
}

export function SearchInput({
  value,
  id,
  name,
  type = 'search',
  ariaLabel = 'Search',
  placeholder = 'Search jobs, exams, departments...',
  buttonText = 'Search',
  showButton = true,
  loading,
  disabled,
  onChange,
  onSearch,
  className,
  inputClassName,
}: SearchInputProps) {
  const handleSearch = () => {
    onSearch?.();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

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
          id={id}
          name={name}
          type={type}
          aria-label={ariaLabel}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            'h-full w-full bg-transparent text-sm text-[#101828] placeholder:text-[#98A2B3] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60',
            inputClassName,
          )}
        />
      </div>

      {showButton ? (
        <button
          onClick={handleSearch}
          disabled={loading || disabled}
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
          type="button"
        >
          {loading ? '...' : buttonText}
        </button>
      ) : null}
    </div>
  );
}
