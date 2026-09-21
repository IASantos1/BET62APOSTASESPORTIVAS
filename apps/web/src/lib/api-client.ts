import { z } from 'zod';

const ACCESS_KEY = 'bet62_access_token';
const REFRESH_KEY = 'bet62_refresh_token';

const runtimeEnv =
  typeof process !== 'undefined'
    ? (process as unknown as { env?: Record<string, string> }).env
    : undefined;

const baseUrl =
  runtimeEnv?.NEXT_PUBLIC_API_BASE_URL ||
  runtimeEnv?.NEXT_PUBLIC_API_URL ||
  (typeof window !== 'undefined'
    ? (window as unknown as { __NEXT_DATA__?: unknown }).__NEXT_DATA__
      ? ''
      : '/api'
    : '/api') || '/api';

type FetchOptions = RequestInit & {
  auth?: boolean;
  jsonBody?: unknown;
  params?: Record<string, string | number | boolean | Array<string | number | boolean> | undefined>;
  skipAuthError?: boolean;
};

export class ApiError extends Error {
  status: number;
  data: unknown;
  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(ACCESS_KEY);
  } catch {
    return null;
  }
}

export function setTokens(access: string | null, refresh?: string | null) {
  if (typeof window === 'undefined') return;
  if (access === null) {
    localStorage.removeItem(ACCESS_KEY);
  } else {
    localStorage.setItem(ACCESS_KEY, access);
  }
  if (refresh !== undefined) {
    if (refresh === null) localStorage.removeItem(REFRESH_KEY);
    else localStorage.setItem(REFRESH_KEY, refresh);
  }
}

export function clearTokens() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
}

function buildUrl(path: string, params?: FetchOptions['params']) {
  const cleanPath = path.startsWith('http') ? path : `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
  if (!params) return cleanPath;
  const url = new URL(cleanPath, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null) continue;
    if (Array.isArray(v)) {
      for (const item of v) {
        url.searchParams.append(k, String(item));
      }
      continue;
    }
    url.searchParams.append(k, String(v));
  }
  return url.toString();
}

async function parseResponse<T = unknown>(res: Response): Promise<T> {
  const text = await res.text();
  if (!text) return undefined as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    return text as unknown as T;
  }
}

export async function apiFetch<T = unknown>(
  path: string,
  opts: FetchOptions = {},
): Promise<T> {
  const { auth = true, jsonBody, params, headers: h, ...rest } = opts;

  const headers = new Headers(h as HeadersInit);
  if (jsonBody !== undefined) {
    headers.set('Content-Type', 'application/json');
  }
  headers.set('Accept', 'application/json');

  if (auth) {
    const token = getAccessToken();
    if (token) headers.set('Authorization', `Bearer ${token}`);
  }

  const res = await fetch(buildUrl(path, params), {
    method: jsonBody !== undefined && !rest.method ? 'POST' : rest.method ?? 'GET',
    headers,
    body: jsonBody !== undefined ? JSON.stringify(jsonBody) : (rest.body as BodyInit | undefined),
    credentials: 'include',
    ...rest,
  });

  const data = await parseResponse<T>(res);

  if (!res.ok) {
    const msg =
      (data && typeof data === 'object' && 'message' in data && typeof (data as { message?: unknown }).message === 'string'
        ? (data as { message: string }).message
        : undefined) || `HTTP ${res.status}`;
    throw new ApiError(msg, res.status, data);
  }

  return data;
}

export const apiClient = {
  get: <T = unknown>(path: string, opts?: Omit<FetchOptions, 'method' | 'body' | 'jsonBody'>) =>
    apiFetch<T>(path, { ...opts, method: 'GET' }),
  post: <T = unknown>(path: string, body?: unknown, opts?: Omit<FetchOptions, 'method' | 'jsonBody'>) =>
    apiFetch<T>(path, { ...opts, method: 'POST', jsonBody: body }),
  put: <T = unknown>(path: string, body?: unknown, opts?: Omit<FetchOptions, 'method' | 'jsonBody'>) =>
    apiFetch<T>(path, { ...opts, method: 'PUT', jsonBody: body }),
  patch: <T = unknown>(path: string, body?: unknown, opts?: Omit<FetchOptions, 'method' | 'jsonBody'>) =>
    apiFetch<T>(path, { ...opts, method: 'PATCH', jsonBody: body }),
  delete: <T = unknown>(path: string, opts?: Omit<FetchOptions, 'method' | 'body' | 'jsonBody'>) =>
    apiFetch<T>(path, { ...opts, method: 'DELETE' }),
};

export const zodFetch = async <T>(schema: z.Schema<T>, ...args: Parameters<typeof apiFetch>) => {
  const raw = await apiFetch<unknown>(...args);
  return schema.parse(raw);
};
