export function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-IN');
}

export function getStoredValue(key: string) {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(key);
}

export function isNonEmpty(value: string) {
  return value.trim().length > 0;
}
