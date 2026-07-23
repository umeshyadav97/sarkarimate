interface FormattedDetailValueProps {
  value: string;
  secondaryClassName?: string;
}

const leadingDatePattern =
  /^(\d{1,2}\s+(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{4})(?:\s*[-:]\s*|\s+)(.+)$/i;

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

function splitLeadingDateValue(value: string) {
  const match = value.trim().match(leadingDatePattern);

  if (!match) {
    return null;
  }

  const [, date, detail] = match;

  if (!detail.trim()) {
    return null;
  }

  return {
    date,
    detail: detail.trim(),
  };
}
