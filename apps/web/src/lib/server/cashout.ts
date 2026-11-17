import type { PoolClient } from 'pg';
import { query } from './db';
import { moveBalance } from './wallet';

// Cash out (regras do repositório bet): o jogador fecha uma aposta em aberto pelo que vale agora.
//
//   justo = valor × (odds de todas as seleções) / (odds atuais das seleções ainda em aberto)
//   valor = justo × margem, nunca acima do retorno potencial
//
// As odds atuais vêm da BETBY pela página Liquidação do admin (o servidor não a consegue ler):
// sem um preço recente (90 s) o cash out fica suspenso — nunca se paga com preços velhos.
//  · não no criador de apostas; não com uma seleção perdida;
//  · só 30 s depois de apostar; ao vivo só 3 min depois, com margem maior (0,85) e no máximo 90%
//    do retorno potencial; fechado na reta final (85% do tempo regulamentar) e 90 s depois de golo;
//  · ao vivo o pedido espera 8 s e o valor é calculado de novo (se desceu, o jogador confirma).
export const CASHOUT = {
  factor: 0.95,
  liveFactor: 0.85,
  minAgeSeconds: 30,
  liveMinAgeSeconds: 180,
  liveDelaySeconds: 8,
  goalLockSeconds: 90,
  lateLockPct: 0.85,
  liveMaxPct: 0.9,
  minValue: 0.1,
  priceMaxAgeSeconds: 90,
};
const GAME_MINUTES: Record<string, number> = { futebol: 90, futsal: 40, andebol: 60, hoquei: 60, raguebi: 80 };

export interface BetForOffer {
  id: string;
  status: string;
  kind: string;
  stake_cents: string;
  potential_cents: string;
  created_at: Date | string;
  odds_check?: string;
}
export interface LegForOffer {
  bet_id: string;
  status: string;
  odds: string;
  event_id: string;
  market_id: string;
  variant: string;
  outcome_id: string;
  sport: string;
  start_time: Date | string | null;
}
interface Price { odds: string | null; active: boolean; at: Date }
interface Result { status: string; clock: string | null; score_at: Date | null }

export interface Offer {
  status: 'available' | 'suspended' | 'unavailable';
  valueCents?: number;
  fairCents?: number;
  live?: boolean;
  reason?: string;
}

const priceKey = (l: { event_id: string; market_id: string; variant: string; outcome_id: string }) => `${l.event_id}|${l.market_id}|${l.variant}|${l.outcome_id}`;
const minuteOf = (clock: string | null) => {
  const m = /^(\d{1,3}):\d{2}$/.exec(clock ?? '');
  return m ? Number(m[1]) : null;
};

export function computeOffer(bet: BetForOffer, legs: LegForOffer[], prices: Map<string, Price>, results: Map<string, Result>, now = Date.now()): Offer {
  if (bet.status !== 'open') return { status: 'unavailable', reason: 'Aposta resolvida' };
  if (bet.kind === 'builder') return { status: 'unavailable', reason: 'Indisponível no criador de apostas' };
  // A odd do bilhete ainda não foi confirmada com a BETBY: sem cash out até lá.
  if (bet.odds_check !== undefined && bet.odds_check !== 'ok') return { status: 'suspended', reason: 'Odds por confirmar' };
  if (!legs.length || legs.some((l) => l.status === 'lost' || l.status === 'half_lost')) return { status: 'unavailable', reason: 'Seleção perdida' };
  const age = (now - new Date(bet.created_at).getTime()) / 1000;
  if (age < CASHOUT.minAgeSeconds) return { status: 'suspended', reason: `Disponível ${Math.ceil(CASHOUT.minAgeSeconds - age)} s depois de apostar` };
  let taken = 1;
  let current = 1;
  let live = false;
  for (const l of legs) {
    if (l.status === 'void') continue;
    const k = Number(l.odds);
    if (l.status === 'won') {
      taken *= k;
      continue;
    }
    if (l.status === 'half_won') {
      taken *= (1 + k) / 2;
      continue;
    }
    taken *= k;
    const r = results.get(l.event_id);
    const started = l.start_time ? new Date(l.start_time).getTime() <= now : false;
    if (r && r.status !== 'live') return { status: 'suspended', reason: 'A aguardar resultado' };
    if (r?.status === 'live' || started) {
      if (!r) return { status: 'suspended', reason: 'Jogo a começar' };
      live = true;
      const len = GAME_MINUTES[l.sport];
      const min = minuteOf(r.clock);
      if (len && min !== null && min >= len * CASHOUT.lateLockPct) return { status: 'suspended', reason: 'Fechado na reta final do jogo' };
    }
    const p = prices.get(priceKey(l));
    if (!p || !p.active || !(Number(p.odds) > 1) || now - new Date(p.at).getTime() > CASHOUT.priceMaxAgeSeconds * 1000) {
      return { status: 'suspended', reason: 'Mercado suspenso' };
    }
    if (live && r?.score_at) {
      const scoreAt = new Date(r.score_at).getTime();
      if (new Date(p.at).getTime() <= scoreAt || now - scoreAt < CASHOUT.goalLockSeconds * 1000) return { status: 'suspended', reason: 'Lance em revisão' };
    }
    current *= Number(p.odds);
  }
  if (live && age < CASHOUT.liveMinAgeSeconds) return { status: 'suspended', reason: `Ao vivo, disponível ${Math.ceil((CASHOUT.liveMinAgeSeconds - age) / 60)} min depois de apostar` };
  const stake = Number(bet.stake_cents);
  const potential = Number(bet.potential_cents);
  const fair = Math.floor(stake * (taken / current));
  let value = Math.min(potential, Math.floor(fair * (live ? CASHOUT.liveFactor : CASHOUT.factor)));
  if (live) value = Math.min(value, Math.floor(potential * CASHOUT.liveMaxPct));
  if (value < Math.round(CASHOUT.minValue * 100)) return { status: 'unavailable', reason: 'Valor demasiado baixo' };
  return { status: 'available', valueCents: value, fairCents: fair, live };
}

/** Preços e resultados das seleções destes bilhetes (uma ida à base de dados). */
export async function offerContext(legs: LegForOffer[], c?: PoolClient) {
  const events = [...new Set(legs.map((l) => l.event_id))];
  const run = <T,>(sql: string, params: unknown[]) => (c ? c.query(sql, params).then((r) => r.rows as T[]) : query(sql, params) as Promise<T[]>);
  const priceRows = events.length
    ? await run<{ event_id: string; market_id: string; variant: string; outcome_id: string; odds: string | null; active: boolean; at: Date }>(
        'SELECT * FROM leg_prices WHERE event_id = ANY($1::text[])',
        [events],
      )
    : [];
  const resultRows = events.length
    ? await run<{ event_id: string; status: string; clock: string | null; score_at: Date | null }>('SELECT event_id, status, clock, score_at FROM event_results WHERE event_id = ANY($1::text[])', [events])
    : [];
  return {
    prices: new Map(priceRows.map((p) => [priceKey(p), { odds: p.odds, active: p.active, at: p.at }])),
    results: new Map(resultRows.map((r) => [r.event_id, { status: r.status, clock: r.clock, score_at: r.score_at }])),
  };
}

export class CashoutError extends Error {
  constructor(message: string, public offer?: Offer) {
    super(message);
  }
}

/** Paga o cash out (dentro de tx). `seenCents`: o valor que o jogador aceitou; se desceu, recusa. */
export async function cashOut(c: PoolClient, userId: string, betId: string, seenCents: number) {
  const bet = (await c.query<BetForOffer & { user_id: string }>('SELECT * FROM bets WHERE id = $1 AND user_id = $2 FOR UPDATE', [betId, userId])).rows[0];
  if (!bet) throw new CashoutError('Aposta não encontrada.');
  const legs = (await c.query<LegForOffer>('SELECT * FROM bet_legs WHERE bet_id = $1', [betId])).rows;
  const ctx = await offerContext(legs, c);
  const offer = computeOffer(bet, legs, ctx.prices, ctx.results);
  if (offer.status !== 'available') throw new CashoutError(`Cash out ${offer.status === 'suspended' ? 'suspenso' : 'indisponível'}: ${offer.reason}.`, offer);
  if (!Number.isFinite(seenCents) || seenCents <= 0 || offer.valueCents! < seenCents - 1) throw new CashoutError('O valor do cash out mudou. Confirme o novo valor.', offer);
  const pay = Math.min(seenCents, offer.valueCents!);
  await c.query("UPDATE bets SET status = 'cashout', payout_cents = $2, settled_at = now() WHERE id = $1", [betId, pay]);
  await c.query('INSERT INTO cashouts (bet_id, user_id, stake_cents, value_cents, fair_cents, seen_cents, live) VALUES ($1, $2, $3, $4, $5, $6, $7)', [
    betId,
    userId,
    bet.stake_cents,
    pay,
    offer.fairCents,
    seenCents,
    !!offer.live,
  ]);
  const balance = await moveBalance(c, userId, 'cashout', pay, { reference: `#${betId}`, note: 'Cash out' });
  await c.query('INSERT INTO settlements (bet_id, action, detail, source) VALUES ($1, $2, $3, $4)', [betId, 'bet_cashout', `pago ${(pay / 100).toFixed(2)} €`, 'player']);
  return { valueCents: pay, balance };
}
