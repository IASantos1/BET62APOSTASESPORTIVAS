import { NextResponse } from 'next/server';
import { isAdminAuthorized } from '../../../../lib/admin-auth';
import { fail, json, route } from '../../../../lib/server/auth';
import { hasDatabase, one, query } from '../../../../lib/server/db';
import { createWinHouseClient, envOptions } from '../../../../lib/server/winhouse/client';
import { feedSettings, runningFeed } from '../../../../lib/server/winhouse/feed';
import { detailOdds, eventsOf, groupMarkets } from '../../../../lib/server/winhouse/parse';
import { MODES, setMode, type OddsMode } from '../../../../lib/server/winhouse/mode';
import { eventView, type WhRow } from '../../../../lib/server/winhouse/view';

export const dynamic = 'force-dynamic';

const unauthorized = () => NextResponse.json({ error: 'Sem sessão de admin.' }, { status: 401 });

/** Estado do WinHouse: configuração, coletor (quem recolhe, rotas, fuso), jogos guardados e exemplos. */
export const GET = route(async () => {
  if (!isAdminAuthorized()) return unauthorized();
  const opts = envOptions();
  const client = createWinHouseClient(opts);
  const settings = feedSettings();
  const base = {
    configured: client.enabled,
    baseUrl: client.origin || null,
    lang: client.lang,
    routes: Object.fromEntries(
      (['live', 'prematchMain', 'prematchTop', 'prematch24h', 'prematchBySport', 'prematchEvent', 'liveEvent'] as const).map((k) => [k, client.pathOf(k, { gameId: '{id}', sportId: '{sport}' })]),
    ),
    settings,
    database: hasDatabase(),
    thisProcess: runningFeed() ? { running: true, leader: runningFeed()!.status.leader } : { running: false },
  };
  if (!hasDatabase()) return json(base);
  const mode = 'winhouse' as const;
  const state = await one<{ value: Record<string, unknown>; updated_at: Date }>(`SELECT value, updated_at FROM wh_state WHERE key = 'status'`);
  const lease = await one<{ owner: string; until: Date }>(`SELECT owner, until FROM wh_state WHERE key = 'lease'`);
  const counts = await query<{ status: string; sport: string; n: string; pages: string }>(
    `SELECT status, sport, COUNT(*) AS n, COUNT(*) FILTER (WHERE page_at IS NOT NULL AND page_odds <> '[]'::jsonb) AS pages FROM wh_events GROUP BY status, sport ORDER BY status, n DESC`,
  );
  const live = await query<WhRow>(`SELECT * FROM wh_events WHERE status = 'live' ORDER BY (page_at IS NOT NULL) DESC, start_time LIMIT 8`);
  const next = await query<WhRow>(`SELECT * FROM wh_events WHERE status = 'scheduled' AND start_time > now() ORDER BY (page_at IS NOT NULL) DESC, start_time LIMIT 8`);
  const ended = await query<{ id: string; home: string; away: string; sport: string; verdict: unknown; end_reason: string | null; ended_at: Date }>(
    `SELECT id, home, away, sport, verdict, end_reason, ended_at FROM wh_events WHERE status = 'ended' ORDER BY ended_at DESC LIMIT 10`,
  );
  return json({
    ...base,
    mode,
    collector: state ? { ...state.value, savedAt: new Date(state.updated_at).toISOString() } : null,
    lease: lease ? { owner: lease.owner, until: new Date(lease.until).toISOString(), active: new Date(lease.until).getTime() > Date.now() } : null,
    counts: counts.map((c) => ({ status: c.status, sport: c.sport, events: Number(c.n), withPage: Number(c.pages) })),
    samples: {
      live: live.map((r) => eventView(r)),
      next: next.map((r) => eventView(r)),
      ended: ended.map((r) => ({ ...r, ended_at: new Date(r.ended_at).toISOString() })),
    },
  });
});

/**
 * Testes do admin (leitura só):
 *  { action: 'health' }                    — chama cada rota a partir deste servidor
 *  { action: 'markets', gameId?, live? }   — todos os mercados da página de um jogo, agrupados
 *  { action: 'cycle' }                     — um ciclo completo do coletor agora (se este processo recolhe)
 */
export const POST = route(async (req: Request) => {
  if (!isAdminAuthorized()) return unauthorized();
  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  if (b.action === 'mode') {
    if (!MODES.includes(b.mode as OddsMode)) return fail('Modo inválido.');
    if (!hasDatabase()) return fail('Sem base de dados.');
    await setMode(b.mode as OddsMode);
    return json({ ok: true, mode: b.mode });
  }
  const client = createWinHouseClient(envOptions());
  if (!client.enabled) return fail('WinHouse desligado: defina WINHOUSE_BASE_URL (https://…) nas variáveis do serviço.');
  const gameId = typeof b.gameId === 'string' && /^\d{1,20}$/.test(b.gameId.trim()) ? b.gameId.trim() : null;
  if (b.action === 'health') return json(await client.health(gameId));
  if (b.action === 'markets') {
    const live = b.live === true;
    let id = gameId;
    if (!id) {
      const list = await (live ? client.live() : client.prematchMain());
      id = eventsOf(list.body).find((e) => e?.id !== undefined)?.id?.toString() ?? null;
      if (!id) return fail(live ? 'Nenhum jogo na lista ao vivo.' : 'Nenhum jogo na lista pré-jogo.');
    }
    let r = await (live ? client.liveEvent(id) : client.prematchEvent(id));
    let odds = r.ok ? detailOdds(r.body) : [];
    let route = live ? 'liveEvent' : 'prematchEvent';
    if (live && !odds.length) {
      const alt = await client.prematchEvent(id);
      const altOdds = alt.ok ? detailOdds(alt.body) : [];
      if (altOdds.length) [r, odds, route] = [alt, altOdds, 'prematchEvent'];
    }
    const markets = groupMarkets(odds, 'Casa', 'Fora');
    return json({
      at: new Date().toISOString(), gameId: id, route, status: r.status, ms: r.ms, bytes: r.bytes, json: r.body !== null,
      odds: odds.length, marketCount: markets.length,
      markets: markets.map((m) => ({ id: m.id, name: m.name, code: m.code, category: m.category, selections: m.selections.length, sample: m.selections.slice(0, 6).map((s) => `${s.label} @ ${s.price}`) })),
      bodyStart: odds.length ? undefined : (r.body === null ? r.text : JSON.stringify(r.body)).slice(0, 3000),
    });
  }
  if (b.action === 'cycle') {
    const feed = runningFeed();
    if (!feed) return fail('O coletor não está a correr neste processo (falta WINHOUSE_BASE_URL ou DATABASE_URL, ou WINHOUSE_FEED=off).');
    const started = Date.now();
    const liveR = await feed.syncLive();
    const pre = await feed.syncPrematch();
    const pagesLive = await feed.syncPages(true);
    const pagesPre = await feed.syncPages(false);
    return json({ ok: true, ms: Date.now() - started, live: liveR, prematch: pre, pages: { live: pagesLive.pages, prematch: pagesPre.pages }, leader: feed.status.leader });
  }
  return fail('Ação desconhecida.');
});
