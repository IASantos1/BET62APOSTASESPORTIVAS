import { createHash } from 'node:crypto';

// Admin → BETBY → "Diagnóstico do feed": o servidor (que a BETBY aceita) lê o feed ao vivo duas
// vezes, com 15 s de intervalo, e mostra como as atualizações chegam: quantas versões há no índice
// (top / rest), se o índice traz jogos, se uma versão muda de conteúdo sem mudar de número, e, para
// os jogos procurados, o placar, o relógio e as odds 1X2 em cada versão (pela ordem do índice).

const base = () => (process.env.NEXT_PUBLIC_BETBY_BASE_URL || 'https://demoapi.betby.com').replace(/\/$/, '');
const brand = () => process.env.NEXT_PUBLIC_BETBY_BRAND_ID || '1653815133341880320';
const locale = () => process.env.NEXT_PUBLIC_BETBY_LOCALE || 'en-GB';

type Json = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

async function get(path: string) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 15_000);
  const started = Date.now();
  try {
    const r = await fetch(`${base()}${path}`, { headers: { accept: 'application/json' }, cache: 'no-store', signal: ctl.signal });
    const text = await r.text();
    let body: Json | null = null;
    try {
      body = JSON.parse(text);
    } catch {
      // não é JSON
    }
    return { status: r.status, ms: Date.now() - started, text, body, hash: createHash('sha1').update(text).digest('hex').slice(0, 12), cache: r.headers.get('x-cache'), age: r.headers.get('age') };
  } catch (e) {
    return { status: null, ms: Date.now() - started, text: '', body: null, hash: '', cache: null, age: null, error: (e as Error).message };
  } finally {
    clearTimeout(t);
  }
}

const strip = (s: unknown) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

async function snapshot(feed: 'live' | 'prematch') {
  const index = await get(`/api/v4/${feed}/brand/${brand()}/${locale()}/0`);
  const top = (Array.isArray(index.body?.top_events_versions) ? index.body!.top_events_versions : []).map(String);
  const rest = (Array.isArray(index.body?.rest_events_versions) ? index.body!.rest_events_versions : []).map(String);
  const versions = [...new Set([...top, ...rest])];
  const pages = new Map<string, Awaited<ReturnType<typeof get>>>();
  let i = 0;
  await Promise.all(
    Array.from({ length: 6 }, async () => {
      while (i < versions.length) {
        const v = versions[i++];
        pages.set(v, await get(`/api/v4/${feed}/brand/${brand()}/${locale()}/${v}`));
      }
    }),
  );
  return { index, top, rest, versions, pages };
}

/** O que um jogo diz numa resposta: placar, relógio, estado e o 1X2 (ou se o mercado foi removido). */
function view(ev: Json | null) {
  if (ev === null) return { removed: true };
  const m1 = ev.markets?.['1'];
  return {
    score: ev.score ? `${ev.score.home_score ?? '?'}-${ev.score.away_score ?? '?'}` : undefined,
    clock: ev.state?.clock?.match_time,
    stopped: ev.state?.clock?.stopped,
    status: ev.state?.status,
    matchStatus: ev.state?.match_status,
    markets: ev.markets ? Object.keys(ev.markets).length : undefined,
    '1x2': m1 === null ? 'removido' : m1?.[''] ? Object.fromEntries(Object.entries(m1['']).map(([o, x]) => [o, x === null ? null : `${(x as Json).k}${(x as Json).b === 1 ? ' (bloq.)' : ''}`])) : undefined,
    keys: Object.keys(ev),
  };
}

export async function betbyFeedDiag(q: string, feed: 'live' | 'prematch' = 'live') {
  const a = await snapshot(feed);
  await new Promise((r) => setTimeout(r, 15_000));
  const b = await snapshot(feed);
  const needle = strip(q).trim();
  // Jogos procurados: pelo nome das equipas (no índice ou nas versões).
  const names = new Map<string, string>();
  const scan = (body: Json | null) => {
    for (const [id, ev] of Object.entries((body?.events ?? {}) as Record<string, Json | null>)) {
      const comps = (ev?.desc?.competitors ?? []) as Json[];
      const title = comps.map((c) => c.name).join(' - ');
      if (title && (!needle || strip(title).includes(needle))) names.set(id, title);
    }
  };
  for (const s of [a, b]) {
    scan(s.index.body);
    for (const p of s.pages.values()) scan(p.body);
  }
  const ids = [...names.keys()].slice(0, needle ? 5 : 2);
  const timeline = (s: typeof a, label: string) =>
    ids.map((id) => ({
      id,
      match: names.get(id),
      sources: [
        ...(s.index.body?.events && id in s.index.body.events ? [{ source: `${label} índice`, ...view(s.index.body.events[id]) }] : []),
        ...s.versions
          .filter((v) => s.pages.get(v)?.body?.events && id in s.pages.get(v)!.body!.events)
          .map((v) => ({ source: `${label} versão ${v} (${s.top.includes(v) ? 'top' : 'rest'}, posição ${s.versions.indexOf(v) + 1})`, ...view(s.pages.get(v)!.body!.events[id]) })),
      ],
    }));
  const both = a.versions.filter((v) => b.versions.includes(v));
  const changed = both.filter((v) => a.pages.get(v)?.hash && a.pages.get(v)?.hash !== b.pages.get(v)?.hash);
  const numeric = a.versions.map(Number).filter(Number.isFinite);
  const ascending = numeric.every((n, k) => k === 0 || n >= numeric[k - 1]);
  return {
    at: new Date().toISOString(),
    feed,
    query: q,
    index: {
      status: a.index.status,
      ms: a.index.ms,
      keys: a.index.body ? Object.keys(a.index.body) : [],
      hasEvents: !!a.index.body?.events,
      eventsInIndex: a.index.body?.events ? Object.keys(a.index.body.events).length : 0,
      top: a.top.length,
      rest: a.rest.length,
      versionsFirst: a.versions.slice(0, 8),
      versionsLast: a.versions.slice(-4),
      ascending,
    },
    after15s: {
      added: b.versions.filter((v) => !a.versions.includes(v)).length,
      removed: a.versions.filter((v) => !b.versions.includes(v)).length,
      kept: both.length,
      keptButContentChanged: changed.length,
      changedSample: changed.slice(0, 5),
      cache: [...a.pages.values()].slice(0, 3).map((p) => `${p.cache ?? '—'} age ${p.age ?? '—'}`),
    },
    eventsPerVersion: a.versions.slice(0, 12).map((v) => ({ v, events: Object.keys(a.pages.get(v)?.body?.events ?? {}).length, bytes: a.pages.get(v)?.text.length ?? 0 })),
    matches: { before: timeline(a, '1.ª leitura'), after: timeline(b, '2.ª leitura (15 s depois)') },
  };
}
