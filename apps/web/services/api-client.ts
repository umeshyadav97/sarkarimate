const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class ApiRequestError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = 'ApiRequestError';
  }
}

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
}

type ApiParams = RequestOptions['params'];
type ApiBody = Record<string, unknown> | unknown[] | FormData | null;

export async function apiRequest<TData>(
  path: string,
  options: RequestOptions = {},
): Promise<TData> {
  if (!API_BASE_URL) {
    throw new Error('NEXT_PUBLIC_API_URL is not configured.');
  }

  const { params, ...init } = options;
  const url = new URL(path, API_BASE_URL);

  Object.entries(params ?? {}).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      url.searchParams.append(key, String(value));
    }
  });

  try {
    const response = await fetch(url.toString(), {
      cache: 'no-store',
      ...init,
      headers: {
        ...(init.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
        ...init.headers,
      },
    });

    console.log('Status:', response.status);

    const result = await response.json().catch(() => null);

    console.log('Response:', result);

    if (!response.ok) {
      throw new ApiRequestError(result?.message || 'Something went wrong', response.status);
    }

    return (result?.data ?? result?.message ?? result) as TData;
  } catch (err) {
    console.error('Fetch Error:', err);
    throw err;
  }
}

function createBody(body?: ApiBody) {
  if (body === undefined || body instanceof FormData) {
    return body;
  }

  return JSON.stringify(body);
}

export const api = {
  get: <TData>(path: string, params?: ApiParams, options?: RequestInit) =>
    apiRequest<TData>(path, { ...options, params, method: 'GET' }),

  post: <TData>(path: string, body?: ApiBody, options?: RequestInit) =>
    apiRequest<TData>(path, { ...options, body: createBody(body), method: 'POST' }),

  put: <TData>(path: string, body?: ApiBody, options?: RequestInit) =>
    apiRequest<TData>(path, { ...options, body: createBody(body), method: 'PUT' }),

  patch: <TData>(path: string, body?: ApiBody, options?: RequestInit) =>
    apiRequest<TData>(path, { ...options, body: createBody(body), method: 'PATCH' }),

  delete: <TData>(path: string, params?: ApiParams, options?: RequestInit) =>
    apiRequest<TData>(path, { ...options, params, method: 'DELETE' }),
};
