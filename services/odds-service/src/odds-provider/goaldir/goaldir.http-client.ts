import { Logger } from '@nestjs/common';

export type GoaldirHttpMethod = 'GET' | 'POST';

export interface GoaldirHttpClientConfig {
  baseUrl: string;
  apiKey: string;
  timeoutMs?: number;
  maxRetries429?: number;
}

export interface GoaldirRequestOptions {
  params?: Record<string, string | number | boolean | undefined | null>;
  timeoutMs?: number;
  skipRetry429?: boolean;
}

export class GoaldirUnauthorizedError extends Error {
  constructor(message = 'Goaldir token invalido (401)') {
    super(message);
    this.name = 'GoaldirUnauthorizedError';
  }
}

export class GoaldirPaymentRequiredError extends Error {
  public readonly sportCode?: string;
  constructor(message = 'Goaldir Sports Addon required (402)', sportCode?: string) {
    super(message);
    this.name = 'GoaldirPaymentRequiredError';
    this.sportCode = sportCode;
  }
}

export class GoaldirForbiddenError extends Error {
  constructor(message = 'Goaldir endpoint not entitled (403)') {
    super(message);
    this.name = 'GoaldirForbiddenError';
  }
}

export class GoaldirRateLimitError extends Error {
  public readonly retryAfterSeconds?: number;
  constructor(message = 'Goaldir rate limited (429)', retryAfterSeconds?: number) {
    super(message);
    this.name = 'GoaldirRateLimitError';
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

const DEFAULT_TIMEOUT_MS = 15_000;
const DEFAULT_MAX_RETRIES_429 = 5;
const BACKOFF_BASE_SECONDS = 10;

export class GoaldirHttpClient {
  private readonly logger = new Logger(GoaldirHttpClient.name);
  private readonly config: Required<Omit<GoaldirHttpClientConfig, 'apiKey'>> & { apiKey: string };
  private last402BySport = new Set<string>();

  constructor(config: GoaldirHttpClientConfig) {
    this.config = {
      baseUrl: config.baseUrl.replace(/\/$/, ''),
      apiKey: config.apiKey,
      timeoutMs: config.timeoutMs ?? DEFAULT_TIMEOUT_MS,
      maxRetries429: config.maxRetries429 ?? DEFAULT_MAX_RETRIES_429,
    };
  }

  private buildUrl(path: string, params?: Record<string, string | number | boolean | undefined | null>): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const url = new URL(`${this.config.baseUrl}${cleanPath}`);
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        if (v === undefined || v === null) continue;
        url.searchParams.append(k, String(v));
      }
    }
    return url.toString();
  }

  private buildHeaders(): Record<string, string> {
    return {
      Accept: 'application/json',
      Authorization: `Token ${this.config.apiKey}`,
      'User-Agent': 'BET62-OddsService/1.0 (+https://bet62.pt)',
    };
  }

  private async sleep(seconds: number): Promise<void> {
    await new Promise((r) => setTimeout(r, seconds * 1000));
  }

  private async requestInternal<T>(
    method: GoaldirHttpMethod,
    path: string,
    options: GoaldirRequestOptions = {},
    attempt = 1,
  ): Promise<T> {
    const { params, timeoutMs } = options;
    const url = this.buildUrl(path, params);
    const effectiveTimeout = timeoutMs ?? this.config.timeoutMs;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), effectiveTimeout);

    try {
      const res = await fetch(url, {
        method,
        headers: this.buildHeaders(),
        signal: controller.signal,
        redirect: 'follow',
      });

      if (res.status === 204 || res.status === 202) {
        return undefined as unknown as T;
      }

      if (res.ok) {
        const contentType = res.headers.get('content-type') ?? '';
        if (contentType.includes('application/json')) {
          return (await res.json()) as T;
        }
        return (await res.text()) as unknown as T;
      }

      if (res.status === 401) {
        throw new GoaldirUnauthorizedError();
      }
      if (res.status === 402) {
        throw new GoaldirPaymentRequiredError();
      }
      if (res.status === 403) {
        throw new GoaldirForbiddenError();
      }
      if (res.status === 429) {
        const retryAfter = Number(res.headers.get('retry-after')) || undefined;
        throw new GoaldirRateLimitError(undefined, retryAfter);
      }

      const bodyText = await res.text().catch(() => '');
      const err = new Error(`Goaldir HTTP ${res.status} ${res.statusText} for ${method} ${path}${bodyText ? `: ${bodyText.slice(0, 300)}` : ''}`);
      err.name = 'GoaldirHttpError';
      throw err;
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        const timeoutErr = new Error(`Goaldir request timeout after ${effectiveTimeout}ms: ${method} ${path}`);
        timeoutErr.name = 'GoaldirTimeoutError';
        throw timeoutErr;
      }
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  public async get<T>(path: string, options: GoaldirRequestOptions = {}): Promise<T> {
    const maxAttempts = options.skipRetry429 ? 1 : this.config.maxRetries429;
    let attempt = 1;
    while (true) {
      try {
        return await this.requestInternal<T>('GET', path, options, attempt);
      } catch (err) {
        const isRateLimit = err instanceof GoaldirRateLimitError;
        if (isRateLimit && attempt < maxAttempts) {
          const retryAfter = (err as GoaldirRateLimitError).retryAfterSeconds;
          const backoff = retryAfter ?? BACKOFF_BASE_SECONDS * Math.pow(2, attempt - 1);
          this.logger.warn(`Goaldir 429 rate limited (attempt ${attempt}/${maxAttempts}). Aguardar ${backoff}s antes de retry. Path: ${path}`);
          await this.sleep(backoff);
          attempt++;
          continue;
        }
        if (err instanceof GoaldirPaymentRequiredError) {
          const sportMatch = path.match(/^\/?(tennis|basketball|hockey|football)\//i);
          const sport = sportMatch ? sportMatch[1].toUpperCase() : undefined;
          if (sport && !this.last402BySport.has(sport)) {
            this.last402BySport.add(sport);
            this.logger.warn(`Goaldir 402 Addon Required para desporto ${sport}. Endpoint sera degradado (nao sera feito log de novo nesta sessao). Path: ${path}`);
          } else if (!sport) {
            this.logger.verbose(`Goaldir 402 Addon Required path: ${path}`);
          }
        }
        if (err instanceof GoaldirUnauthorizedError) {
          this.logger.error(`Goaldir 401 Unauthorized. Verificar ODDS_PROVIDER_API_KEY no dashboard goaldir.com/dashboard. Path: ${path}`);
        }
        throw err;
      }
    }
  }

  public getConfig(): Readonly<{ baseUrl: string; hasApiKey: boolean; timeoutMs: number }> {
    return {
      baseUrl: this.config.baseUrl,
      hasApiKey: Boolean(this.config.apiKey && this.config.apiKey.length > 0),
      timeoutMs: this.config.timeoutMs,
    };
  }

  public reset402Warnings(): void {
    this.last402BySport.clear();
  }
}
