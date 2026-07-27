'use client';

import { cn } from '@/lib/classnames';
import { ChevronDown } from 'lucide-react';
import type { ChangeEvent } from 'react';

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectInputProps {
  id: string;
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  name?: string;
  className?: string;
  labelClassName?: string;
  selectClassName?: string;
  hideLabel?: boolean;
  disabled?: boolean;
  required?: boolean;
}

export function SelectInput({
  id,
  label,
  value,
  options,
  onChange,
  name,
  className,
  labelClassName,
  selectClassName,
  hideLabel = false,
  disabled,
  required,
}: SelectInputProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cn('w-full', className)}>
      <label
        className={cn(hideLabel ? 'sr-only' : 'text-sm font-bold text-[#111827]', labelClassName)}
        htmlFor={id}
      >
        {label}
      </label>
      <div className={cn('relative', hideLabel ? '' : 'mt-2')}>
        <select
          id={id}
          name={name}
          aria-label={hideLabel ? label : undefined}
          className={cn(
            'min-h-11 w-full appearance-none rounded-lg border border-slate-300 bg-white px-3 pr-9 text-sm font-medium text-[#111827] outline-none transition focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60',
            selectClassName,
          )}
          disabled={disabled}
          required={required}
          suppressHydrationWarning
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
