import { euros } from './auth';
import { query } from './db';
import { computeOffer, offerContext, type BetForOffer, type LegForOffer } from './cashout';

// O bilhete como o navegador o mostra (Minhas apostas e link partilhado): seleções com o estado do
// jogo (hora, ao vivo com minuto e resultado, terminado), resumo e a oferta de cash out.
interface BetRow extends BetForOffer {
  odds: string;
  payout_cents: string;
  settled_at: Date | null;
  user_id: string;
}
interface LegRow extends LegForOffer {
  id: string;
  event_name: string;
  live: boolean;
  market_name: string;
  outcome_name: string;
}

export const ticketRef = (id: string | number) => `B62-${String(id).padStart(6, '0')}`;

export async function ticketsView(bets: BetRow[], { withCashout = true }: { withCashout?: boolean } = {}) {
  if (!bets.length) return [];
  const legs = await query<LegRow>('SELECT * FROM bet_legs WHERE bet_id = ANY($1::bigint[]) ORDER BY id', [bets.map((b) => b.id)]);
  const events = [...new Set(legs.map((l) => l.event_id))];
  const results = events.length
    ? await query<{ event_id: string; status: string; home_score: number | null; away_score: number | null; clock: string | null }>(
        'SELECT event_id, status, home_score, away_score, clock FROM event_results WHERE event_id = ANY($1::text[])',
        [events],
      )
    : [];
  const byEvent = new Map(results.map((r) => [r.event_id, r]));
  const ctx = withCashout ? await offerContext(legs) : null;
  return bets.map((b) => {
    const mine = legs.filter((l) => String(l.bet_id) === String(b.id));
    const offer = ctx && b.status === 'open' ? computeOffer(b, mine, ctx.prices, ctx.results) : null;
    return {
      id: String(b.id),
      ref: ticketRef(b.id),
      kind: b.kind,
      status: b.status,
      stake: euros(b.stake_cents),
      odds: Number(b.odds),
      potential: euros(b.potential_cents),
      payout: euros(b.payout_cents),
      createdAt: new Date(b.created_at).toISOString(),
      settledAt: b.settled_at ? new Date(b.settled_at).toISOString() : null,
      cashout: offer ? { status: offer.status, value: offer.valueCents ? offer.valueCents / 100 : null, reason: offer.reason ?? null, live: !!offer.live } : null,
      legs: mine.map((l) => {
        const r = byEvent.get(l.event_id);
        return {
          eventId: l.event_id,
          event: l.event_name,
          sport: l.sport,
          startTime: l.start_time ? new Date(l.start_time).toISOString() : null,
          live: l.live,
          marketId: l.market_id,
          variant: l.variant,
          outcomeId: l.outcome_id,
          market: l.market_name,
          outcome: l.outcome_name,
          odds: Number(l.odds),
          status: l.status,
          eventStatus: r?.status ?? (l.start_time && new Date(l.start_time).getTime() <= Date.now() ? 'live' : 'scheduled'),
          score: r && r.home_score !== null && r.away_score !== null ? `${r.home_score}-${r.away_score}` : null,
          clock: r?.clock ?? null,
        };
      }),
    };
  });
}
