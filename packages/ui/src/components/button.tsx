import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
  const base = variant === 'primary' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-900';
  return <button className={`rounded-md px-4 py-2 font-medium ${base} ${className}`} {...props} />;
}
