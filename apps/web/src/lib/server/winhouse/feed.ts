import { randomUUID } from 'node:crypto';
import { hasDatabase, one, query } from '../db';
import { createWinHouseClient, envOptions, type WhResponse, type WinHouseClient } from './client';
import { settleWinHouse } from './settle';
import { detailOdds, estimateOffset, eventsOf, finishVerdict, listedButOver, normalizeItem, sameGame, type WhItem } from './parse';

// WinHouse — coletor. Corre no servidor (arranca em instrumentation.ts quando WINHOUSE_BASE_URL
// existe) e guarda no PostgreSQL os jogos, o placar, o relógio e as cotações:
//
//  • lista ao vivo a cada WINHOUSE_LIVE_SECONDS (15 s): placar, relógio, 2–3 mercados; um jogo que
//    sai da lista (confirmado WINHOUSE_FINISH_CONFIRM_SECONDS depois) acaba com um veredito
//    (placar final, ou "para o operador" quando não é claro que acabou);
//  • listas pré-jogo a cada WINHOUSE_PREMATCH_SECONDS (60 s);
//  • páginas dos jogos (200–400 mercados): ao vivo a cada ~30 s (os que alguém tem abertos primeiro),
//    pré-jogo a cada 30 min nas próximas 48 h (futebol) / 12 h (resto).
//
// Só uma instância recolhe de cada vez (contrato na tabela wh_state), por isso o Railway pode ter
// réplicas. Cada leitura fica registada (saúde das rotas na página admin → WinHouse).

const num = (v: string | undefined, d: number, min: number, max: number) => {
  const n = Number(v);
  return Number.isFinite(n) && v !== '' && v !== undefined ? Math.min(max, Math.max(min, n)) : d;
};

export function feedSettings(env: NodeJS.ProcessEnv = process.env) {
  const tz = env.WINHOUSE_TZ_OFFSET_MINUTES;
  return {
    liveSeconds: num(env.WINHOUSE_LIVE_SECONDS, 15, 5, 300),
    prematchSeconds: num(env.WINHOUSE_PREMATCH_SECONDS, 60, 20, 3600),
    bySportMinutes: num(env.WINHOUSE_BY_SPORT_MINUTES, 10, 2, 720),
    bySport: (env.WINHOUSE_BY_SPORT ?? '1,2,5').split(',').map((s) => Number(s.trim())).filter((n) => Number.isInteger(n) && n > 0),
    finishConfirmSeconds: num(env.WINHOUSE_FINISH_CONFIRM_SECONDS, 180, 0, 3600),
    liveDetailSeconds: num(env.WINHOUSE_LIVE_DETAIL_SECONDS, 30, 5, 600),
    liveDetailPerCycle: num(env.WINHOUSE_LIVE_DETAIL_PER_CYCLE, 10, 0, 100),
    detailPerCycle: num(env.WINHOUSE_DETAIL_PER_CYCLE, 20, 0, 200),
    detailRefreshMinutes: num(env.WINHOUSE_DETAIL_REFRESH_MINUTES, 30, 2, 720),
    footballDetailHours: num(env.WINHOUSE_FOOTBALL_DETAIL_HOURS, 48, 1, 24 * 14),
    detailHours: num(env.WINHOUSE_DETAIL_HOURS, 12, 1, 24 * 14),
    tzOffsetMinutes: tz !== undefined && tz !== '' && Number.isFinite(Number(tz)) ? Number(tz) : null,
    enabled: (env.WINHOUSE_FEED ?? 'on').toLowerCase() !== 'off',
  };
}
export type FeedSettings = ReturnType<typeof feedSettings>;

/** Leitura de uma rota, como fica no estado (página admin). */
interface RouteRead {
  at: string;
  ok: boolean;
  status?: number;
  ms?: number;
  events?: number;
  error?: string;
}

interface FeedStatus {
  startedAt: string;
  owner: string;
  leader: boolean;
  offset: number | null;
  offsetSource: string | null;
  routes: Record<string, RouteRead>;
  /** últimas leituras da lista ao vivo (true = respondeu), para a disponibilidade */
  liveRing: boolean[];
  cycles: { live: number; prematch: number; pages: number };
  lastError: { at: string; message: string } | null;
  livePageRoute: 'live' | 'pre' | null;
  /** última leitura boa da lista ao vivo (o site usa a BETBY se for antiga) */
  lastLiveOkAt: string | null;
  counts?: Record<string, number>;
}

/** Pequeno conjunto de tarefas em paralelo (no máximo `n` de cada vez). */
async function pool<T>(items: T[], n: number, fn: (x: T) => Promise<void>) {
  let i = 0;
  const run = async () => {
    while (i < items.length) {
      const x = items[i++];
      await fn(x).catch(() => undefined);
    }
  };
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, run));
}

const TWIN_WINDOW_MS = 3 * 3_600_000;

export function createWinHouseFeed({ client, settings, now = () => Date.now(), log = (m: string) => console.log(m) }: {
  client: WinHouseClient;
  settings: FeedSettings;
  now?: () => number;
  log?: (m: string) => void;
}) {
  const owner = randomUUID();
  const status: FeedStatus = {
    startedAt: new Date(now()).toISOString(),
    owner,
    leader: false,
    offset: settings.tzOffsetMinutes,
    offsetSource: settings.tzOffsetMinutes !== null ? 'WINHOUSE_TZ_OFFSET_MINUTES' : null,
    routes: {},
    liveRing: [],
    cycles: { live: 0, prematch: 0, pages: 0 },
    lastError: null,
    livePageRoute: null,
    lastLiveOkAt: null,
  };
  const offset = () => status.offset ?? 0;
  let emptyLiveStreak = 0;
  let lastLiveCount = 0;
  let lastPrematchOkAt = 0;
  let lastBySportAt = 0;

  function note(route: string, r: WhResponse | null, events: number | undefined, err?: unknown) {
    const at = new Date(now()).toISOString();
    status.routes[route] = err
      ? { at, ok: false, error: (err as Error).message ?? String(err) }
      : { at, ok: !!r?.ok, status: r?.status, ms: r?.ms, events };
    if (err || !r?.ok) status.lastError = { at, message: `${route}: ${err ? (err as Error).message : `HTTP ${r?.status}`}` };
  }

  async function read(route: string, call: () => Promise<WhResponse>) {
    try {
      const r = await call();
      const events = r.ok ? eventsOf(r.body) : [];
      note(route, r, events.length);
      return r.ok && r.body !== null ? { r, events } : null;
    } catch (e) {
      note(route, null, undefined, e);
      return null;
    }
  }

  /** Grava (insere/atualiza) itens das listas de uma vez. live=true: placar, relógio, ao vivo. */
  async function upsert(items: WhItem[], live: boolean) {
    if (!items.length) return;
    const rows = items.map((x) => ({
      id: x.id, sport: x.sport, sport_id: x.sportId, competition: x.competition, country: x.country, home: x.home, away: x.away,
      home_logo: x.homeLogo, away_logo: x.awayLogo, start_time: x.startTime, home_score: x.homeScore, away_score: x.awayScore,
      minutes: x.minutes, clock_raw: x.clockRaw, list_odds: x.odds,
    }));
    if (live) {
      await query(
        `INSERT INTO wh_events AS e (id, sport, sport_id, competition, country, home, away, home_logo, away_logo, start_time, status,
                                     home_score, away_score, minutes, clock_raw, clock_since, score_since, live_since, list_odds, list_at, seen_at)
         SELECT r.id, r.sport, r.sport_id, r.competition, r.country, r.home, r.away, r.home_logo, r.away_logo, r.start_time, 'live',
                COALESCE(r.home_score, 0), COALESCE(r.away_score, 0), r.minutes, r.clock_raw, now(), now(), now(), COALESCE(r.list_odds, '[]'::jsonb), now(), now()
           FROM jsonb_to_recordset($1::jsonb) AS r(id text, sport text, sport_id int, competition text, country text, home text, away text,
                home_logo text, away_logo text, start_time timestamptz, home_score int, away_score int, minutes numeric, clock_raw text, list_odds jsonb)
         ON CONFLICT (id) DO UPDATE SET
           sport = EXCLUDED.sport, sport_id = EXCLUDED.sport_id, competition = EXCLUDED.competition, country = COALESCE(EXCLUDED.country, e.country),
           home = EXCLUDED.home, away = EXCLUDED.away,
           home_logo = COALESCE(EXCLUDED.home_logo, e.home_logo), away_logo = COALESCE(EXCLUDED.away_logo, e.away_logo),
           start_time = EXCLUDED.start_time,
           -- Um jogo dado por acabado só por ter saído da lista volta ao vivo se reaparece.
           status = CASE WHEN e.status = 'merged' OR (e.status = 'ended' AND e.end_reason IS DISTINCT FROM 'missing') THEN e.status ELSE 'live' END,
           verdict = CASE WHEN e.status = 'ended' AND e.end_reason = 'missing' THEN NULL ELSE e.verdict END,
           ended_at = CASE WHEN e.status = 'ended' AND e.end_reason = 'missing' THEN NULL ELSE e.ended_at END,
           end_reason = CASE WHEN e.status = 'ended' AND e.end_reason = 'missing' THEN NULL ELSE e.end_reason END,
           score_since = CASE WHEN e.home_score IS DISTINCT FROM EXCLUDED.home_score OR e.away_score IS DISTINCT FROM EXCLUDED.away_score THEN now() ELSE e.score_since END,
           clock_since = CASE WHEN e.minutes IS DISTINCT FROM EXCLUDED.minutes THEN now() ELSE e.clock_since END,
           home_score = EXCLUDED.home_score, away_score = EXCLUDED.away_score, minutes = EXCLUDED.minutes, clock_raw = EXCLUDED.clock_raw,
           live_since = COALESCE(e.live_since, now()), missing_since = NULL,
           list_odds = EXCLUDED.list_odds, list_at = now(), seen_at = now(), updated_at = now()`,
        [JSON.stringify(rows)],
      );
    } else {
      // Pré-jogo: não mexe em jogos já ao vivo/acabados; atualiza equipas, hora e cotações da lista.
      await query(
        `INSERT INTO wh_events AS e (id, sport, sport_id, competition, country, home, away, home_logo, away_logo, start_time, status, list_odds, list_at, seen_at)
         SELECT r.id, r.sport, r.sport_id, r.competition, r.country, r.home, r.away, r.home_logo, r.away_logo, r.start_time, 'scheduled',
                COALESCE(r.list_odds, '[]'::jsonb), now(), now()
           FROM jsonb_to_recordset($1::jsonb) AS r(id text, sport text, sport_id int, competition text, country text, home text, away text,
                home_logo text, away_logo text, start_time timestamptz, list_odds jsonb)
         ON CONFLICT (id) DO UPDATE SET
           competition = EXCLUDED.competition, country = COALESCE(EXCLUDED.country, e.country), home = EXCLUDED.home, away = EXCLUDED.away,
           home_logo = COALESCE(EXCLUDED.home_logo, e.home_logo), away_logo = COALESCE(EXCLUDED.away_logo, e.away_logo),
           start_time = CASE WHEN e.status = 'scheduled' THEN EXCLUDED.start_time ELSE e.start_time END,
           status = CASE WHEN e.status = 'gone' THEN 'scheduled' ELSE e.status END,
           list_odds = CASE WHEN e.status IN ('scheduled', 'gone') THEN EXCLUDED.list_odds ELSE e.list_odds END,
           list_at = CASE WHEN e.status IN ('scheduled', 'gone') THEN now() ELSE e.list_at END,
           seen_at = now(), updated_at = now()`,
        [JSON.stringify(rows)],
      );
    }
  }

  /**
   * Um jogo que o WinHouse lista ao vivo com outro id (não o do pré-jogo): a linha pré-jogo com as
   * mesmas equipas e a mesma hora passa a apontar para a nova (merged_into), para o jogo aparecer uma vez.
   */
  async function adoptTwins(items: WhItem[]) {
    const ids = items.map((x) => x.id);
    if (!ids.length) return;
    const known = new Set((await query<{ id: string }>('SELECT id FROM wh_events WHERE id = ANY($1)', [ids])).map((r) => r.id));
    const fresh = items.filter((x) => !known.has(x.id));
    if (!fresh.length) return;
    const t = now();
    const cands = await query<{ id: string; sport: string; home: string; away: string; start_time: Date }>(
      `SELECT id, sport, home, away, start_time FROM wh_events WHERE status = 'scheduled' AND start_time BETWEEN $1 AND $2`,
      [new Date(t - TWIN_WINDOW_MS - 6 * 3_600_000).toISOString(), new Date(t + TWIN_WINDOW_MS).toISOString()],
    );
    for (const x of fresh) {
      const st = Date.parse(x.startTime);
      const twins = cands.filter((c) => c.sport === x.sport && Math.abs(new Date(c.start_time).getTime() - st) <= TWIN_WINDOW_MS && sameGame(c, x));
      if (twins.length !== 1) continue;
      await query(`UPDATE wh_events SET status = 'merged', merged_into = $2, updated_at = now() WHERE id = $1 AND status = 'scheduled'`, [twins[0].id, x.id]);
      // O jogo ao vivo herda a página de mercados e a ligação à BETBY do pré-jogo.
      await query(
        `UPDATE wh_events n SET betby_id = COALESCE(n.betby_id, o.betby_id), link_status = COALESCE(n.link_status, o.link_status)
           FROM wh_events o WHERE o.id = $1 AND n.id = $2`,
        [twins[0].id, x.id],
      ).catch(() => undefined);
      log(`WinHouse: ${x.home} - ${x.away} ao vivo com o id ${x.id} (pré-jogo ${twins[0].id})`);
    }
  }

  async function syncLive() {
    status.cycles.live += 1;
    const res = await read('live', () => client.live());
    status.liveRing = [...status.liveRing.slice(-199), !!res];
    if (!res) return { ok: false };
    status.lastLiveOkAt = new Date(now()).toISOString();
    if (settings.tzOffsetMinutes === null) {
      const est = estimateOffset(res.events, now());
      if (est !== null && est !== status.offset) {
        status.offset = est;
        status.offsetSource = 'estimado (jogos ao vivo)';
        log(`WinHouse: fuso estimado UTC${est >= 0 ? '+' : ''}${est / 60}`);
      }
    }
    const items = res.events.map((e) => normalizeItem(e, offset())).filter((x): x is WhItem => !!x);
    // Uma lista vazia de repente (quando havia vários jogos) é uma falha do WinHouse até se repetir 3 vezes.
    if (!items.length && lastLiveCount >= 5 && ++emptyLiveStreak < 3) return { ok: true, live: 0, suspicious: true };
    emptyLiveStreak = 0;
    lastLiveCount = items.length;
    await adoptTwins(items);
    await upsert(items, true);
    const ids = items.map((x) => x.id);
    // Jogos ao vivo que já não estão na lista: marcados; confirmado o tempo de espera, acabam.
    await query(`UPDATE wh_events SET missing_since = now(), updated_at = now() WHERE status = 'live' AND missing_since IS NULL AND NOT (id = ANY($1))`, [ids]);
    const gone = await query<Row>(
      `SELECT * FROM wh_events WHERE status = 'live' AND missing_since IS NOT NULL AND missing_since <= now() - make_interval(secs => $1::double precision)`,
      [settings.finishConfirmSeconds],
    );
    for (const r of gone) await end(r, 'missing');
    // Jogos que o WinHouse ainda lista mas que já acabaram (sets ganhos, relógio parado depois do fim…).
    const listed = await query<Row>(`SELECT * FROM wh_events WHERE status = 'live' AND id = ANY($1)`, [ids]);
    for (const r of listed) {
      const why = listedButOver(stateOf(r), {
        clockSince: r.clock_since ? new Date(r.clock_since).getTime() : null,
        clockMinute: r.minutes === null ? null : Number(r.minutes),
        scoreSince: r.score_since ? new Date(r.score_since).getTime() : null,
        scoreValue: `${r.home_score}-${r.away_score}`,
        liveSince: r.live_since ? new Date(r.live_since).getTime() : null,
        now: now(),
      });
      if (why) await end(r, why);
    }
    return { ok: true, live: items.length, ended: gone.length };
  }

  type Row = {
    id: string; sport: string; competition: string; home: string; away: string; start_time: Date; home_score: number | null; away_score: number | null;
    minutes: string | null; clock_since: Date | null; score_since: Date | null; live_since: Date | null;
  };
  const stateOf = (r: Row) => ({
    sport: r.sport, competition: r.competition, home: r.home, away: r.away, homeScore: r.home_score, awayScore: r.away_score,
    minutes: r.minutes === null ? null : Number(r.minutes), startTime: new Date(r.start_time).toISOString(),
  });

  async function end(r: Row, reason: string) {
    const verdict = finishVerdict(stateOf(r), now());
    await query(
      `UPDATE wh_events SET status = 'ended', verdict = $2, end_reason = $3, ended_at = now(), updated_at = now() WHERE id = $1 AND status = 'live'`,
      [r.id, JSON.stringify(verdict), reason],
    );
    log(`WinHouse: fim de ${r.home} - ${r.away} (${reason}) → ${'review' in verdict ? `operador: ${verdict.review}` : `${verdict.home}-${verdict.away}`}`);
  }

  async function syncPrematch() {
    status.cycles.prematch += 1;
    const lists = await Promise.all([
      read('prematchMain', () => client.prematchMain()),
      read('prematchTop', () => client.prematchTop()),
      read('prematch24h', () => client.prematch24h()),
    ]);
    const t = now();
    if (settings.bySport.length && t - lastBySportAt >= settings.bySportMinutes * 60_000) {
      lastBySportAt = t;
      for (const sid of settings.bySport) lists.push(await read(`prematchBySport:${sid}`, () => client.prematchBySport(sid)));
    }
    const byId = new Map<string, WhItem>();
    for (const l of lists) for (const e of l?.events ?? []) {
      const x = normalizeItem(e, offset());
      // Cotações de duas listas do mesmo jogo: fica a com mais.
      if (x && (!byId.has(x.id) || byId.get(x.id)!.odds.length < x.odds.length)) byId.set(x.id, x);
    }
    await upsert([...byId.values()], false);
    if (lists.slice(0, 3).every(Boolean)) lastPrematchOkAt = t;
    // Pré-jogo que nenhuma lista dá há 30 min (com as listas a responder): fora do site.
    if (t - lastPrematchOkAt < 5 * 60_000) {
      await query(`UPDATE wh_events SET status = 'gone', updated_at = now() WHERE status = 'scheduled' AND seen_at < now() - interval '30 minutes'`);
    }
    // Limpeza: jogos acabados/fora há mais de 10 dias saem da base.
    await query(`DELETE FROM wh_events WHERE status IN ('gone', 'merged', 'ended') AND updated_at < now() - interval '10 days' AND betby_id IS NULL`);
    return { ok: lists.some(Boolean), events: byId.size };
  }

  /** A página de um jogo ao vivo: a rota ao vivo ou, se não existe (404), a página pré-jogo do mesmo jogo. */
  async function livePage(id: string) {
    if (status.livePageRoute !== 'pre') {
      const r = await client.liveEvent(id);
      const odds = r.ok ? detailOdds(r.body) : [];
      if (odds.length) {
        status.livePageRoute = 'live';
        return { status: r.status, odds };
      }
      if (r.status !== 404) return { status: r.ok ? 204 : r.status, odds: [] };
    }
    const r = await client.prematchEvent(id);
    const odds = r.ok ? detailOdds(r.body) : [];
    if (odds.length) status.livePageRoute = 'pre';
    return { status: odds.length ? r.status : r.ok ? 204 : r.status, odds };
  }

  async function savePage(id: string, st: number, odds: ReturnType<typeof detailOdds>) {
    // Uma página vazia (jogo suspenso, erro) não apaga a última boa: só marca a leitura.
    if (odds.length) await query(`UPDATE wh_events SET page_odds = $2, page_at = now(), page_status = $3 WHERE id = $1`, [id, JSON.stringify(odds), st]);
    else await query(`UPDATE wh_events SET page_status = $2, page_at = CASE WHEN page_odds = '[]'::jsonb THEN now() ELSE page_at END WHERE id = $1`, [id, st]);
  }

  async function syncPages(live: boolean) {
    status.cycles.pages += 1;
    const rows = live
      ? await query<{ id: string }>(
          `SELECT id FROM wh_events WHERE status = 'live' AND missing_since IS NULL
              AND (page_at IS NULL OR page_at < now() - make_interval(secs => CASE WHEN watched_at > now() - interval '2 minutes' THEN LEAST($1::double precision, 12) ELSE $1::double precision END))
            ORDER BY (watched_at > now() - interval '2 minutes') DESC NULLS LAST, page_at NULLS FIRST LIMIT $2::int`,
          [settings.liveDetailSeconds, settings.liveDetailPerCycle],
        )
      : await query<{ id: string }>(
          `SELECT id FROM wh_events WHERE status = 'scheduled'
              AND start_time > now() - interval '10 minutes'
              AND start_time < now() + make_interval(hours => CASE WHEN sport = 'futebol' THEN $1::int ELSE $2::int END)
              AND (page_at IS NULL OR page_at < now() - make_interval(mins => CASE WHEN watched_at > now() - interval '10 minutes' THEN 3 ELSE $3::int END))
            ORDER BY (watched_at > now() - interval '10 minutes') DESC NULLS LAST, page_at NULLS FIRST, start_time LIMIT $4::int`,
          [settings.footballDetailHours, settings.detailHours, settings.detailRefreshMinutes, settings.detailPerCycle],
        );
    let read = 0;
    await pool(rows, 4, async ({ id }) => {
      try {
        if (live) {
          const p = await livePage(id);
          await savePage(id, p.status, p.odds);
        } else {
          const r = await client.prematchEvent(id);
          await savePage(id, r.status, r.ok ? detailOdds(r.body) : []);
        }
        read += 1;
        status.routes[live ? 'liveEvent' : 'prematchEvent'] = { at: new Date(now()).toISOString(), ok: true, events: read };
      } catch (e) {
        note(live ? 'liveEvent' : 'prematchEvent', null, undefined, e);
      }
    });
    return { pages: read };
  }

  // ---------- quem recolhe (uma instância) e estado partilhado ----------

  async function lease() {
    const r = await one<{ owner: string }>(
      `INSERT INTO wh_state (key, owner, until) VALUES ('lease', $1, now() + interval '35 seconds')
       ON CONFLICT (key) DO UPDATE SET owner = $1, until = now() + interval '35 seconds', updated_at = now()
         WHERE wh_state.owner = $1 OR wh_state.until IS NULL OR wh_state.until < now()
       RETURNING owner`,
      [owner],
    );
    status.leader = r?.owner === owner;
    return status.leader;
  }

  async function saveStatus() {
    const counts = await query<{ status: string; n: string }>(`SELECT status, COUNT(*) AS n FROM wh_events GROUP BY status`);
    status.counts = Object.fromEntries(counts.map((c) => [c.status, Number(c.n)]));
    await query(
      `INSERT INTO wh_state (key, value, updated_at) VALUES ('status', $1, now()) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()`,
      [JSON.stringify(status)],
    );
  }

  async function loadOffset() {
    if (settings.tzOffsetMinutes !== null) return;
    const r = await one<{ value: { offset?: number | null; offsetSource?: string | null } }>(`SELECT value FROM wh_state WHERE key = 'status'`).catch(() => null);
    if (Number.isFinite(r?.value?.offset)) {
      status.offset = r!.value.offset!;
      status.offsetSource = r!.value.offsetSource ?? 'guardado';
    }
  }

  // ---------- ciclo ----------

  let timer: ReturnType<typeof setTimeout> | null = null;
  let stopped = false;
  let lastPrematch = 0;
  let lastPrePages = 0;

  async function tick() {
    if (!(await lease())) return;
    const t = now();
    await syncLive();
    // Bilhetes em jogos WinHouse: placar/fim → liquidação; odds → cash out.
    await settleWinHouse(log).catch((e) => {
      status.lastError = { at: new Date(now()).toISOString(), message: `liquidação: ${(e as Error).message}` };
    });
    await syncPages(true);
    if (t - lastPrematch >= settings.prematchSeconds * 1000) {
      lastPrematch = t;
      await syncPrematch();
    }
    if (t - lastPrePages >= 60_000) {
      lastPrePages = t;
      await syncPages(false);
    }
    await saveStatus();
  }

  function schedule(ms: number) {
    if (stopped) return;
    timer = setTimeout(async () => {
      const started = now();
      try {
        await tick();
      } catch (e) {
        status.lastError = { at: new Date(now()).toISOString(), message: (e as Error).message };
        log(`WinHouse: ciclo falhou: ${(e as Error).message}`);
      }
      schedule(Math.max(1000, settings.liveSeconds * 1000 - (now() - started)));
    }, ms);
    timer.unref?.();
  }

  return {
    status,
    syncLive,
    syncPrematch,
    syncPages,
    tick,
    async start() {
      await loadOffset();
      schedule(2000);
      // Deploy (o Railway envia SIGTERM): larga o contrato já, para a nova instância recolher logo.
      process.once('SIGTERM', () => {
        stopped = true;
        if (timer) clearTimeout(timer);
        void query(`UPDATE wh_state SET until = now() WHERE key = 'lease' AND owner = $1`, [owner]).catch(() => undefined);
      });
      log(`WinHouse: coletor ligado (${client.origin}, ao vivo a cada ${settings.liveSeconds} s)`);
    },
    stop() {
      stopped = true;
      if (timer) clearTimeout(timer);
    },
  };
}

export type WinHouseFeed = ReturnType<typeof createWinHouseFeed>;

const g = globalThis as unknown as { __whFeed?: WinHouseFeed | null };

/** Arranca o coletor uma vez por processo (instrumentation.ts). Sem WINHOUSE_BASE_URL ou sem base de dados, não faz nada. */
export function startWinHouseFeed() {
  if (g.__whFeed !== undefined) return g.__whFeed;
  const settings = feedSettings();
  const client = createWinHouseClient(envOptions());
  if (!client.enabled || !settings.enabled || !hasDatabase()) {
    g.__whFeed = null;
    return null;
  }
  g.__whFeed = createWinHouseFeed({ client, settings });
  g.__whFeed.start().catch((e) => console.error('WinHouse: não arrancou', e));
  return g.__whFeed;
}

export const runningFeed = () => g.__whFeed ?? null;
