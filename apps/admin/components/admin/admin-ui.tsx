'use client';

import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

interface AdminCardProps {
  children: ReactNode;
  className?: string;
}

interface AdminSectionProps extends AdminCardProps {
  title: string;
  description?: string;
}

interface AdminButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

function fieldIdFromLabel(label: string) {
  return label.toLowerCase().replace(/\s+/g, '-');
}

export function AdminCard({ children, className = '' }: AdminCardProps) {
  return <section className={`admin-card p-5 ${className}`}>{children}</section>;
}

export function AdminSection({ title, description, children, className = '' }: AdminSectionProps) {
  return (
    <AdminCard className={className}>
      <header className="border-b border-[var(--border)] pb-4">
        <h2 className="text-base font-bold text-[var(--text-primary)]">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
        ) : null}
      </header>
      <div className="mt-5">{children}</div>
    </AdminCard>
  );
}

export function AdminRightPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <AdminCard className="p-4">
      <h2 className="text-base font-bold text-[var(--text-primary)]">{title}</h2>
      <div className="mt-4 grid gap-4">{children}</div>
    </AdminCard>
  );
}

export function AdminButton({
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: AdminButtonProps) {
  const variantClass = variant === 'primary' ? 'admin-button-primary' : 'admin-button-secondary';

  return (
    <button
      type={type}
      className={`admin-button disabled:cursor-not-allowed disabled:opacity-60 ${variantClass} ${className}`}
      {...props}
    />
  );
}

export function AdminInput({
  label,
  id,
  className = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const inputId = id ?? fieldIdFromLabel(label);

  return (
    <AdminFieldLabel htmlFor={inputId} label={label}>
      <input
        id={inputId}
        className={`admin-input px-3 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
        {...props}
      />
    </AdminFieldLabel>
  );
}

export function AdminTextarea({
  label,
  id,
  className = '',
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  const inputId = id ?? fieldIdFromLabel(label);

  return (
    <AdminFieldLabel htmlFor={inputId} label={label}>
      <textarea
        id={inputId}
        className={`admin-input min-h-32 px-3 py-3 leading-6 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
        {...props}
      />
    </AdminFieldLabel>
  );
}

export function AdminSelect({
  label,
  id,
  children,
  className = '',
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { label: string }) {
  const inputId = id ?? fieldIdFromLabel(label);

  return (
    <AdminFieldLabel htmlFor={inputId} label={label}>
      <select
        id={inputId}
        className={`admin-input px-3 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
        {...props}
      >
        {children}
      </select>
    </AdminFieldLabel>
  );
}

export function AdminToggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 rounded-lg border border-[var(--border)] bg-[var(--muted-bg)] p-3">
      <span>
        <span className="block text-sm font-bold text-[var(--text-primary)]">{label}</span>
        {description ? (
          <span className="mt-1 block text-sm leading-6 text-[var(--text-secondary)]">
            {description}
          </span>
        ) : null}
      </span>
      <input
        className="sr-only peer"
        type="checkbox"
        checked={checked}
        readOnly={!onChange}
        onChange={(event) => onChange?.(event.target.checked)}
      />
      <span className="relative mt-1 h-6 w-11 rounded-full bg-[var(--input-border)] p-0.5 transition-colors after:block after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow-sm after:transition-transform peer-checked:bg-[var(--primary)] peer-checked:after:translate-x-5" />
    </label>
  );
}

function AdminFieldLabel({
  htmlFor,
  label,
  children,
  className = '',
}: LabelHTMLAttributes<HTMLLabelElement> & { label: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className={`block ${className}`}>
      <span className="text-[13px] font-semibold text-[var(--text-primary)]">{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
