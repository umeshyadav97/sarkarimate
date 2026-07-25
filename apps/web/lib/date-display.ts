const leadingDatePattern =
  /^(\d{1,2}\s+(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{4})(?:\s*[-:]\s*|\s+)(.+)$/i;

export function splitLeadingDateValue(value: string) {
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

export function extractLeadingDate(value?: string | null) {
  if (!value) {
    return null;
  }

  return splitLeadingDateValue(value)?.date ?? null;
}
