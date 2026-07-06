import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input className={`rounded-md border border-slate-300 px-3 py-2 ${className}`} {...props} />
  );
}
