import { detailOdds, eventsOf, parseOdds } from './parse';
import { normalizeWinHouseStats } from './tracker';

// WinHouse — cliente HTTP (só no servidor). Todos os endereços vêm do ambiente (WINHOUSE_*):
// uma mudança de rota do lado do WinHouse é uma variável, não código. Nenhuma chave vai ao navegador.

export const ROUTES = {
  live: '/ajax/livegames?lang={lang}',
  prematchMain: '/ajax/prematchgamesmainleague?lang={lang}',
  prematchTop: '/ajax/toptenprematchgames?lang={lang}',
  prematch24h: '/ajax/prematchgames24hour?lang={lang}',
  prematchBySport: '/ajax/prematchgamesbysport/{sportId}?lang={lang}',
  prematchEvent: '/ajax/prematchgame/{gameId}?lang={lang}',
  liveEvent: '/ajax/livegame/{gameId}?lang={lang}',
  widget: '/ajax/widget?event_id={gameId}&bg=transparent',
  widgetData: '/widget-data?event_id={eid}&api_key={akey}',
  tracker: '/ajax/tracker/{gameId}?lang={lang}',
} as const;
export type RouteKey = keyof typeof ROUTES;

/** Variável de ambiente que muda cada rota. */
const ROUTE_ENV: Record<RouteKey, string> = {
  live: 'WINHOUSE_LIVE',
  prematchMain: 'WINHOUSE_PREMATCH_MAIN',
  prematchTop: 'WINHOUSE_PREMATCH_TOP',
  prematch24h: 'WINHOUSE_PREMATCH_24H',
  prematchBySport: 'WINHOUSE_PREMATCH_BY_SPORT',
  prematchEvent: 'WINHOUSE_PREMATCH_EVENT',
  liveEvent: 'WINHOUSE_LIVE_EVENT',
  widget: 'WINHOUSE_WIDGET',
  widgetData: 'WINHOUSE_WIDGET_DATA',
  tracker: 'WINHOUSE_TRACKER_ROUTE',
};

export interface WhResponse {
  status: number;
  ok: boolean;
  ms: number;
  bytes: number;
  contentType: string | null;
  body: unknown;
  text: string;
}

export interface WhClientOptions {
  baseUrl?: string;
  lang?: string;
  routes?: Partial<Record<RouteKey, string>>;
  timeoutMs?: number;
  fetchImpl?: typeof fetch;
}

/** Endereço base válido? Só https (o WinHouse serve tudo em https). */
const httpsBase = (v: string) => /^https:\/\/[^\s/]+/.test(v);

export function envOptions(env: NodeJS.ProcessEnv = process.env): WhClientOptions {
  const routes: Partial<Record<RouteKey, string>> = {};
  for (const [k, name] of Object.entries(ROUTE_ENV) as [RouteKey, string][]) {
    const v = (env[name] || '').trim();
    if (v.startsWith('/')) routes[k] = v;
  }
  return {
    baseUrl: (env.WINHOUSE_BASE_URL || '').trim(),
    lang: (env.WINHOUSE_LANG || 'pt').trim() || 'pt',
    routes,
    timeoutMs: Math.min(60_000, Math.max(3_000, Number(env.WINHOUSE_TIMEOUT_MS) || 15_000)),
  };
}

export function createWinHouseClient({ baseUrl = '', lang = 'pt', routes = {}, timeoutMs = 15_000, fetchImpl = globalThis.fetch }: WhClientOptions = {}) {
  const base = String(baseUrl || '').replace(/\/+$/, '');
  const paths: Record<RouteKey, string> = { ...ROUTES, ...Object.fromEntries(Object.entries(routes).filter(([, v]) => v)) } as Record<RouteKey, string>;
  const enabled = httpsBase(base);
  const pathOf = (key: RouteKey, vars: { gameId?: string | number; sportId?: string | number; eid?: string; akey?: string } = {}) =>
    paths[key]
      .replace('{lang}', encodeURIComponent(lang))
      .replace('{gameId}', encodeURIComponent(String(vars.gameId ?? '')))
      .replace('{sportId}', encodeURIComponent(String(vars.sportId ?? '')))
      .replace('{eid}', encodeURIComponent(String(vars.eid ?? '')))
      .replace('{akey}', encodeURIComponent(String(vars.akey ?? '')));

  async function request(key: RouteKey, vars: { gameId?: string | number; sportId?: string | number; eid?: string; akey?: string } = {}): Promise<WhResponse> {
    if (!enabled) throw new Error('WinHouse desligado: defina WINHOUSE_BASE_URL (https://…) no servidor.');
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), timeoutMs);
    const started = Date.now();
    try {
      const res = await fetchImpl(base + pathOf(key, vars), {
        headers: { Accept: 'application/json', 'User-Agent': 'BET62-Data-Service/1.0', Referer: `${base}/` },
        signal: ctl.signal,
        cache: 'no-store',
      });
      const text = await res.text();
      let body: unknown = null;
      try {
        body = JSON.parse(text);
      } catch {
        // não é JSON (página de erro, login…)
      }
      return { status: res.status, ok: res.ok, ms: Date.now() - started, bytes: text.length, contentType: res.headers?.get?.('content-type') ?? null, body, text };
    } catch (err) {
      const e = err as Error;
      throw new Error(e.name === 'AbortError' ? `sem resposta em ${timeoutMs / 1000} s` : `rede: ${e.message}`);
    } finally {
      clearTimeout(timer);
    }
  }

  /** O formato do primeiro item (nomes dos campos e valores curtos), para mapear respostas novas. */
  const shape = (v: unknown, depth = 0): unknown => {
    if (Array.isArray(v)) return depth > 1 ? `array(${v.length})` : [`array(${v.length})`, v.length ? shape(v[0], depth + 1) : null];
    if (v && typeof v === 'object') return depth > 1 ? 'object' : Object.fromEntries(Object.entries(v).slice(0, 40).map(([k, x]) => [k, shape(x, depth + 1)]));
    if (typeof v === 'string') return v.length > 120 ? `${v.slice(0, 120)}…` : v;
    return v;
  };

  /**
   * Teste do admin: chama cada rota a partir deste servidor e diz o que voltou (estado HTTP, tempo,
   * tamanho, JSON?, eventos, cotações lidas). As páginas de jogo usam o 1.º jogo das listas.
   */
  async function health(gameId: string | null = null) {
    const out: Record<string, unknown>[] = [];
    let preId: string | null = gameId;
    let liveId: string | null = null;
    for (const key of ['live', 'liveEvent', 'tracker', 'prematchMain', 'prematchTop', 'prematch24h', 'prematchEvent'] as RouteKey[]) {
      const page = key === 'prematchEvent' || key === 'liveEvent' || key === 'tracker';
      const id = key === 'liveEvent' || key === 'tracker' ? liveId : preId;
      if (page && !id) {
        out.push({ route: key, skipped: key === 'liveEvent' || key === 'tracker' ? 'nenhum jogo na lista ao vivo' : 'nenhum jogo nas listas pré-jogo' });
        continue;
      }
      try {
        const r = await request(key, { gameId: id ?? '' });
        const events = page ? [] : eventsOf(r.body);
        const firstId = events.find((e) => e?.id !== undefined)?.id;
        if (key === 'live') liveId = firstId !== undefined ? String(firstId) : null;
        else if (!preId && !page && firstId !== undefined) preId = String(firstId);
        const pageOdds = key === 'tracker' ? [] : page ? detailOdds(r.body) : [];
        const first = events[0];
        const odds = key === 'tracker' ? [] : page ? pageOdds : first ? parseOdds(first.odd ?? first.odds) : [];
        out.push({
          route: key,
          path: pathOf(key, { gameId: id ?? '' }),
          status: r.status,
          ok: r.ok,
          ms: r.ms,
          bytes: r.bytes,
          json: r.body !== null,
          contentType: r.contentType,
          events: page ? undefined : events.length,
          odds: odds.length,
          markets: new Set(odds.map((o) => o.m)).size,
          stats: key === 'tracker' ? Object.keys(normalizeWinHouseStats(r.body) ?? {}).length : undefined,
          firstItem: first && !page ? shape(first) : undefined,
          bodyStart: r.body === null ? r.text.slice(0, 300) : undefined,
        });
      } catch (err) {
        out.push({ route: key, path: pathOf(key, { gameId: id ?? '' }), error: (err as Error).message });
      }
    }
    return { at: new Date().toISOString(), baseUrl: base, lang, routes: out };
  }

  return {
    enabled,
    origin: base,
    lang,
    pathOf,
    request,
    health,
    live: () => request('live'),
    prematchMain: () => request('prematchMain'),
    prematchTop: () => request('prematchTop'),
    prematch24h: () => request('prematch24h'),
    prematchBySport: (sportId: number) => request('prematchBySport', { sportId }),
    prematchEvent: (gameId: string) => request('prematchEvent', { gameId }),
    liveEvent: (gameId: string) => request('liveEvent', { gameId }),
    tracker: (gameId: string) => request('tracker', { gameId }),
    widget: (gameId: string) => request('widget', { gameId }),
    widgetData: (eid: string, akey: string) => request('widgetData', { eid, akey }),
  };
}

export type WinHouseClient = ReturnType<typeof createWinHouseClient>;
