import { NextResponse } from 'next/server';
import { isAdminAuthorized } from '../../../../lib/admin-auth';
import { euros, fail, json, route } from '../../../../lib/server/auth';
import { hasDatabase, query } from '../../../../lib/server/db';
import { ingestResult, voidStale, type Period } from '../../../../lib/server/settlement';

export const dynamic = 'force-dynamic';

const denied = () => NextResponse.json({ error: 'Sem sessão de admin.' }, { status: 401 });

/**
 * O que a página Liquidação precisa: jogos com seleções em aberto (para o navegador do admin ir
 * buscar o resultado à BETBY), bilhetes em análise, seleções à espera de decisão manual e o registo.
 */
export const GET = route(async () => {
  if (!isAdminAuthorized()) return denied();
  if (!hasDatabase()) return json({ accounts: false });
  const voided = await voidStale('engine');
  const events = await query<Record<string, unknown>>(
    `SELECT l.event_id, MIN(l.event_name) AS event_name, MIN(l.sport) AS sport, MIN(l.sport_id) AS sport_id, MIN(l.start_time) AS start_time,
            COUNT(*) AS legs, COUNT(DISTINCT l.bet_id) AS bets, SUM(b.stake_cents) AS stake,
            r.status AS r_status, r.match_status, r.home_score, r.away_score, r.periods, r.clock, r.updated_at AS r_updated
       FROM bet_legs l JOIN bets b ON b.id = l.bet_id LEFT JOIN event_results r ON r.event_id = l.event_id
      WHERE l.status = 'open' AND b.status IN ('open', 'review')
      GROUP BY l.event_id, r.status, r.match_status, r.home_score, r.away_score, r.periods, r.clock, r.updated_at
      ORDER BY MIN(l.start_time) NULLS LAST LIMIT 300`,
  );
  const review = await query<Record<string, unknown>>(
    `SELECT b.id, b.kind, b.stake_cents, b.odds, b.potential_cents, b.created_at, u.email,
            json_agg(json_build_object('eventId', l.event_id, 'event', l.event_name, 'marketId', l.market_id, 'variant', l.variant,
              'outcomeId', l.outcome_id, 'market', l.market_name, 'outcome', l.outcome_name, 'odds', l.odds) ORDER BY l.id) AS legs
       FROM bets b JOIN users u ON u.id = b.user_id JOIN bet_legs l ON l.bet_id = b.id
      WHERE b.status = 'review' GROUP BY b.id, u.email ORDER BY b.id LIMIT 100`,
  );
  const manual = await query<Record<string, unknown>>(
    `SELECT l.id, l.bet_id, l.event_id, l.event_name, l.market_name, l.outcome_name, l.odds, r.home_score, r.away_score, r.status AS r_status
       FROM bet_legs l JOIN event_results r ON r.event_id = l.event_id
      WHERE l.status = 'open' AND r.status = 'finished' ORDER BY l.id LIMIT 200`,
  );
  const log = await query<Record<string, unknown>>('SELECT bet_id, leg_id, event_id, action, detail, source, created_at FROM settlements ORDER BY id DESC LIMIT 40');
  return json({
    accounts: true,
    voided,
    events: events.map((e) => ({
      eventId: e.event_id,
      event: e.event_name,
      sport: e.sport,
      sportId: e.sport_id,
      startTime: e.start_time ? new Date(e.start_time as string).toISOString() : null,
      legs: Number(e.legs),
      bets: Number(e.bets),
      stake: euros(e.stake as string),
      result: e.r_status
        ? { status: e.r_status, matchStatus: e.match_status, home: e.home_score, away: e.away_score, periods: e.periods, clock: e.clock, updatedAt: e.r_updated }
        : null,
    })),
    review: review.map((b) => ({
      id: String(b.id),
      kind: b.kind,
      email: b.email,
      stake: euros(b.stake_cents as string),
      odds: Number(b.odds),
      potential: euros(b.potential_cents as string),
      createdAt: b.created_at,
      legs: b.legs,
    })),
    manual: manual.map((l) => ({
      id: String(l.id),
      betId: String(l.bet_id),
      eventId: l.event_id,
      event: l.event_name,
      market: l.market_name,
      outcome: l.outcome_name,
      odds: Number(l.odds),
      score: `${l.home_score ?? '?'}-${l.away_score ?? '?'}`,
    })),
    log,
  });
});

const int = (v: unknown) => (v === null || v === undefined || v === '' ? null : Number.isInteger(Number(v)) ? Number(v) : null);

/** Resultados lidos da BETBY pelo navegador do admin: { results: [{ eventId, status, matchStatus, home, away, periods, clock, sport }] }. */
export const POST = route(async (req: Request) => {
  if (!isAdminAuthorized()) return denied();
  const b = (await req.json().catch(() => ({}))) as { results?: Record<string, unknown>[] };
  const list = Array.isArray(b.results) ? b.results.slice(0, 300) : [];
  let decided = 0;
  for (const r of list) {
    const eventId = String(r.eventId ?? '');
    const status = r.status === 'finished' || r.status === 'cancelled' ? r.status : r.status === 'live' ? 'live' : null;
    if (!/^\d{3,30}$/.test(eventId) || !status) return fail('Resultado inválido.');
    const periods: Period[] = (Array.isArray(r.periods) ? r.periods : [])
      .map((p) => p as Record<string, unknown>)
      .map((p) => ({ number: Number(p.number), home: Number(p.home), away: Number(p.away) }))
      .filter((p) => [p.number, p.home, p.away].every(Number.isInteger));
    decided += await ingestResult(
      {
        eventId,
        sport: r.sport ? String(r.sport).slice(0, 30) : null,
        status,
        matchStatus: int(r.matchStatus),
        home: int(r.home),
        away: int(r.away),
        periods,
        clock: r.clock ? String(r.clock).slice(0, 20) : null,
      },
      'betby-admin',
    );
  }
  return json({ ok: true, decided });
});
