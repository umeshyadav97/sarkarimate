import { splitLeadingDateValue } from '@/lib/date-display';

interface FormattedDetailValueProps {
  value: string;
  secondaryClassName?: string;
}

export function FormattedDetailValue({
  value,
  secondaryClassName = 'mt-0.5 text-xs font-semibold leading-5 text-slate-600',
}: FormattedDetailValueProps) {
  const formattedValue = splitLeadingDateValue(value);

  if (!formattedValue) {
    return value;
  }

  return (
    <>
      <span className="block">{formattedValue.date}</span>
      <span className={`block ${secondaryClassName}`}>{formattedValue.detail}</span>
    </>
  );
}
