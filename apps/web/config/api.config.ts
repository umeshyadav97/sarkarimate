const defaultApiBaseUrl = 'https://api.sarkarimate.com';

export function getApiBaseUrl() {
  return (process.env.NEXT_PUBLIC_API_URL ?? defaultApiBaseUrl).replace(/\/$/, '');
}
