import { tx } from './db';
import { InsufficientFunds, moveBalance } from './wallet';
import type { UserRow } from './auth';
import { currentPrice } from './winhouse/view';
import { checkLeg, feedHealthy } from './betby-feed';

// Colocação de apostas. A odd vem do navegador (o servidor não consegue ler a BETBY), por isso:
// limites de valor e de ganho, e bilhetes acima dos limites de revisão ficam "Em análise" até o
// operador os aprovar na página Liquidação (onde o navegador do admin mostra a odd atual da BETBY).
/** Espera das apostas ao vivo antes de confirmar (lances perigosos suspendem as odds nesse tempo). */
export const LIVE_DELAY_MS = Number(process.env.LIVE_BET_DELAY_MS ?? 4000);

export const LIMITS = {
  minStake: 1,
  maxStake: 500,
  maxLegs: 20,
  maxPayout: 20_000,
  /** Acima disto (prémio possível), o bilhete fica em análise. */
  reviewPayout: 1_000,
  /** Uma seleção acima desta odd põe o bilhete em análise. */
  reviewLegOdds: 50,
};

export interface LegInput {
  eventId: string;
  eventName: string;
  sport: string;
  sportId?: string | null;
  startTime: number | null;
  marketId: string;
  variant: string;
  outcomeId: string;
  marketName: string;
  outcomeName: string;
  odds: number;
  /** O jogo no site (um jogo WinHouse com mercados BETBY tem dois ids de fornecedor). */
  gameId?: string;
}

export class BetError extends Error {}

/** Odds do WinHouse que mudaram (o servidor confirma-as ao apostar): o boletim mostra as novas. */
export class OddsChanged extends BetError {
  changed: { index: number; odds: number }[];
  constructor(changed: { index: number; odds: number }[]) {
    super('As odds mudaram. Confirme as novas odds e aposte de novo.');
    this.changed = changed;
  }
}

export const isWhEvent = (id: string) => id.startsWith('wh');

const BUILDER_FACTOR = 0.9;

const str = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);

export function cleanLeg(raw: Record<string, unknown>): LegInput {
  const leg: LegInput = {
    eventId: str(raw.eventId, 40),
    eventName: str(raw.eventName ?? raw.match, 200),
    sport: str(raw.sport, 30),
    sportId: raw.sportId == null ? null : str(raw.sportId, 10),
    startTime: Number.isFinite(Number(raw.startTime)) && raw.startTime !== null ? Number(raw.startTime) : null,
    marketId: str(raw.marketId, 20),
    variant: str(raw.variant, 120),
    outcomeId: str(raw.outcomeId, 60),
    marketName: str(raw.marketName, 200),
    outcomeName: str(raw.outcomeName ?? raw.label, 200),
    odds: Math.round(Number(raw.odds) * 1000) / 1000,
    gameId: raw.gameId == null ? undefined : str(raw.gameId, 40),
  };
  // Jogos BETBY: id numérico; jogos WinHouse: "wh" + id (mercados sem equivalente BETBY: "wh" + id).
  if (!/^(wh)?\d{3,30}$/.test(leg.eventId) || !/^(wh)?\d{1,10}$/.test(leg.marketId) || !leg.outcomeId) throw new BetError('Seleção inválida.');
  if (leg.gameId !== undefined && !/^(wh)?\d{3,30}$/.test(leg.gameId)) leg.gameId = undefined;
  if (!leg.eventName || !leg.marketName || !leg.outcomeName) throw new BetError('Seleção incompleta.');
  if (!(leg.odds > 1) || leg.odds > 1000) throw new BetError(`Odd inválida em ${leg.eventName}.`);
  return leg;
}

const cents = (euros: number) => Math.round(euros * 100);

export interface PlaceResult {
  ids: string[];
  review: boolean;
  balance: number;
}

/**
 * Cria os bilhetes e debita o saldo numa só transação.
 * single: um bilhete por seleção (o valor é por bilhete). multiple/builder: um bilhete com todas.
 */
export async function placeBets(user: UserRow, kind: 'single' | 'multiple' | 'builder', stake: number, legs: LegInput[]): Promise<PlaceResult> {
  if (user.excluded_until && new Date(user.excluded_until).getTime() > Date.now()) throw new BetError('Conta em autoexclusão: não é possível apostar.');
  if (!legs.length || legs.length > LIMITS.maxLegs) throw new BetError(`Entre 1 e ${LIMITS.maxLegs} seleções.`);
  if (!(stake >= LIMITS.minStake) || stake > LIMITS.maxStake) throw new BetError(`O valor por aposta tem de estar entre ${LIMITS.minStake} € e ${LIMITS.maxStake} €.`);
  const stakeCents = cents(stake);
  const now = Date.now();
  // Pré-jogo já começado (sem passar a ao vivo no boletim) ou datas absurdas: recusar.
  for (const l of legs) {
    if (l.startTime && l.startTime > now + 60 * 86400_000) throw new BetError('Data do jogo inválida.');
  }
  // Ao vivo, como nas casas de apostas: o servidor espera LIVE_DELAY_MS e só então confirma — uma
  // seleção que entretanto ficou suspensa (lance perigoso, VAR, golo) é recusada.
  if (legs.some((l) => l.startTime && l.startTime <= now) && (feedHealthy('live') || legs.some((l) => isWhEvent(l.eventId)))) {
    await new Promise((r) => setTimeout(r, LIVE_DELAY_MS));
  }
  // O servidor lê a odd atual (não confia na do navegador): WinHouse (o coletor) e BETBY (o feed
  // lido pelo servidor). Odd mais baixa agora → o boletim mostra a nova; mais alta → fica a que o
  // jogador viu. Suspensa / mercado fechado → recusa.
  const changed: { index: number; odds: number }[] = [];
  const confirmed = new Set<number>();
  for (const [index, l] of legs.entries()) {
    if (isWhEvent(l.eventId)) continue;
    const c = checkLeg(l.eventId, l.marketId, l.variant, l.outcomeId, !!l.startTime && l.startTime <= Date.now());
    if ('message' in c) throw new BetError(`${l.eventName}: ${l.outcomeName} — ${c.message}. Escolha de novo.`);
    if ('price' in c) {
      if (c.price < l.odds - 1e-9) changed.push({ index, odds: c.price });
      confirmed.add(index);
    }
  }
  for (const [index, l] of legs.entries()) {
    if (!isWhEvent(l.eventId)) continue;
    confirmed.add(index);
    const { row, price } = await currentPrice(l.eventId.slice(2), l.marketId, l.variant, l.outcomeId);
    if (!row || (row.status !== 'live' && row.status !== 'scheduled')) throw new BetError(`${l.eventName}: jogo terminado ou indisponível.`);
    if (row.status === 'scheduled' && new Date(row.start_time).getTime() < now - 2 * 60_000) throw new BetError(`${l.eventName}: o jogo está a começar. Aposte no ao vivo.`);
    if (price === null) throw new BetError(`${l.eventName}: ${l.outcomeName} está suspenso ou fechado.`);
    if (price < l.odds - 1e-9) changed.push({ index, odds: price });
    // Dados do jogo vindos do servidor (o jogo pode ter mudado de id ao passar a ao vivo).
    l.eventId = `wh${row.id}`;
    l.eventName = `${row.home} - ${row.away}`.slice(0, 200);
    l.sport = row.sport;
    l.startTime = new Date(row.start_time).getTime();
  }
  if (changed.length) throw new OddsChanged(changed);
  const confirmedLegs = new Set([...confirmed].map((i) => legs[i]));
  const keys = new Set(legs.map((l) => `${l.eventId}|${l.marketId}|${l.variant}|${l.outcomeId}`));
  if (keys.size !== legs.length) throw new BetError('Seleção repetida no boletim.');
  const game = (l: LegInput) => l.gameId ?? l.eventId;
  if (kind === 'multiple' && new Set(legs.map(game)).size !== legs.length) throw new BetError('Numa múltipla só pode haver uma seleção por jogo.');
  if (kind === 'builder' && new Set(legs.map(game)).size !== 1) throw new BetError('O criador de apostas usa seleções de um só jogo.');
  if (kind !== 'single' && legs.length < 2) kind = 'single';

  const tickets: LegInput[][] = kind === 'single' ? legs.map((l) => [l]) : [legs];
  const totalCents = stakeCents * tickets.length;

  return tx(async (c) => {
    const ids: string[] = [];
    let review = false;
    let balance = 0;
    try {
      balance = await moveBalance(c, user.id, 'bet', -totalCents, { note: tickets.length > 1 ? `${tickets.length} apostas simples` : null });
    } catch (e) {
      if (e instanceof InsufficientFunds) throw new BetError('Saldo insuficiente.');
      throw e;
    }
    for (const t of tickets) {
      // Criador de apostas: o mesmo preço do site (lib/board.tsx, drawBuilders): produto das odds,
      // a dupla hipótese que cobre o resultado conta 1.00, × 0.9 pela correlação.
      const odds =
        kind === 'builder' && t.length > 1
          ? Math.round(t.reduce((p, l) => p * (l.marketId === '10' ? 1 : l.odds), 1) * BUILDER_FACTOR * 100) / 100
          : Math.round(t.reduce((p, l) => p * l.odds, 1) * 1000) / 1000;
      const potential = Math.floor(stakeCents * odds);
      if (potential > LIMITS.maxPayout * 100) throw new BetError(`O ganho máximo por bilhete é ${LIMITS.maxPayout.toLocaleString('pt-PT')} €.`);
      const needsReview = potential > LIMITS.reviewPayout * 100 || t.some((l) => l.odds > LIMITS.reviewLegOdds);
      review ||= needsReview;
      const bet = (
        await c.query<{ id: string }>(
          `INSERT INTO bets (user_id, kind, stake_cents, odds, potential_cents, status, note, odds_check, odds_check_note) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`,
          [
            user.id, t.length > 1 ? kind : 'single', stakeCents, odds, potential, needsReview ? 'review' : 'open', needsReview ? 'Acima do limite de revisão' : null,
            // Todas as seleções confirmadas pelo servidor (WinHouse / feed BETBY) → odds confirmadas.
            t.every((l) => confirmedLegs.has(l)) ? 'ok' : 'pending',
            t.every((l) => confirmedLegs.has(l)) ? 'Confirmadas pelo servidor ao apostar' : null,
          ],
        )
      ).rows[0];
      for (const l of t) {
        const live = !!l.startTime && l.startTime <= now;
        await c.query(
          `INSERT INTO bet_legs (bet_id, event_id, event_name, sport, sport_id, start_time, live, market_id, variant, outcome_id, market_name, outcome_name, odds)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
          [bet.id, l.eventId, l.eventName, l.sport || 'outro', l.sportId ?? null, l.startTime ? new Date(l.startTime) : null, live, l.marketId, l.variant, l.outcomeId, l.marketName, l.outcomeName, l.odds],
        );
      }
      ids.push(String(bet.id));
    }
    // A referência da aposta no movimento da carteira.
    await c.query(`UPDATE transactions SET reference = $2 WHERE id = (SELECT MAX(id) FROM transactions WHERE user_id = $1)`, [user.id, ids.map((i) => `#${i}`).join(' ')]);
    return { ids, review, balance: balance / 100 };
  });
}
