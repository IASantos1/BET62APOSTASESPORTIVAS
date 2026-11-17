import { euros, fail, json, requireUser, route } from '../../../lib/server/auth';
import { BetError, cleanLeg, placeBets } from '../../../lib/server/betting';
import { query } from '../../../lib/server/db';

export const dynamic = 'force-dynamic';

/** Bilhetes do jogador: ?status=open (em aberto) ou settled (liquidados). */
export const GET = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const which = new URL(req.url).searchParams.get('status') === 'settled' ? 'settled' : 'open';
  const bets = await query<{ id: string; kind: string; stake_cents: string; odds: string; potential_cents: string; status: string; payout_cents: string; created_at: Date; settled_at: Date | null }>(
    `SELECT * FROM bets WHERE user_id = $1 AND status ${which === 'open' ? "IN ('open', 'review')" : "NOT IN ('open', 'review')"}
     ORDER BY id DESC LIMIT 100`,
    [u.id],
  );
  const legs = bets.length
    ? await query<{ bet_id: string; event_id: string; event_name: string; sport: string; start_time: Date | null; live: boolean; market_name: string; outcome_name: string; odds: string; status: string }>(
        'SELECT * FROM bet_legs WHERE bet_id = ANY($1::bigint[]) ORDER BY id',
        [bets.map((b) => b.id)],
      )
    : [];
  return json({
    bets: bets.map((b) => ({
      id: String(b.id),
      kind: b.kind,
      stake: euros(b.stake_cents),
      odds: Number(b.odds),
      potential: euros(b.potential_cents),
      status: b.status,
      payout: euros(b.payout_cents),
      createdAt: new Date(b.created_at).toISOString(),
      settledAt: b.settled_at ? new Date(b.settled_at).toISOString() : null,
      legs: legs
        .filter((l) => String(l.bet_id) === String(b.id))
        .map((l) => ({
          eventId: l.event_id,
          event: l.event_name,
          sport: l.sport,
          startTime: l.start_time ? new Date(l.start_time).toISOString() : null,
          live: l.live,
          market: l.market_name,
          outcome: l.outcome_name,
          odds: Number(l.odds),
          status: l.status,
        })),
    })),
  });
});

/** Fazer apostas: { kind: single|multiple|builder, stake (€ por bilhete), legs: [...] }. */
export const POST = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const b = (await req.json().catch(() => ({}))) as { kind?: string; stake?: number; legs?: Record<string, unknown>[] };
  const kind = b.kind === 'multiple' || b.kind === 'builder' ? b.kind : 'single';
  try {
    const legs = (Array.isArray(b.legs) ? b.legs : []).map(cleanLeg);
    const r = await placeBets(u, kind, Number(b.stake), legs);
    return json(r, 201);
  } catch (e) {
    if (e instanceof BetError) return fail(e.message);
    throw e;
  }
});
