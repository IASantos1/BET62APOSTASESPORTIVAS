import { query, tx } from './db';
import { setLeg, type LegRow, type LegStatus } from './settlement';

// Liquidação automática pela BETBY (conta demo). Cada seleção BETBY dos nossos bilhetes é enviada à
// BETBY como aposta simples (POST /api/v2/coupon/brand/{brand}/bet/place). Quando a BETBY a liquida
// (GET /api/v1/my_bets/list), as nossas seleções iguais (evento + mercado + especificadores +
// seleção) são liquidadas cá e os bilhetes pagos na nossa carteira.
//
// A BETBY não aceita pedidos de servidores: quem envia e lê é o navegador do admin (página
// Liquidação), com a chave da conta demo guardada aqui (só o admin a recebe).
// O nosso motor (resultados da BETBY) continua a correr: se o espelho falhar ou for recusado, a
// seleção é liquidada como antes.

export interface MirrorSettings {
  enabled: boolean;
  token: string | null;
  /** chaves anteriores (outras contas demo) guardadas até expirarem, para ler as apostas feitas nelas */
  oldTokens?: string[];
  /** valor de cada aposta na conta demo (€) */
  stake: number;
}

const DEFAULTS: MirrorSettings = { enabled: false, token: null, stake: 1 };

export async function getMirrorSettings(): Promise<MirrorSettings> {
  const r = (await query<{ value: Partial<MirrorSettings> }>(`SELECT value FROM app_settings WHERE key = 'betby_mirror'`))[0];
  return { ...DEFAULTS, ...(r?.value ?? {}) };
}

export async function saveMirrorSettings(patch: Partial<MirrorSettings>) {
  const prev = await getMirrorSettings();
  const next = { ...prev, ...patch };
  // Chave nova: a anterior fica guardada (até expirar) para continuar a ler as apostas dessa conta.
  if (patch.token !== undefined && prev.token && prev.token !== patch.token) {
    next.oldTokens = [prev.token, ...(prev.oldTokens ?? [])];
  }
  next.oldTokens = (next.oldTokens ?? []).filter((t) => t !== next.token && !tokenInfo(t)?.expired).slice(0, 10);
  await query(
    `INSERT INTO app_settings (key, value, updated_at) VALUES ('betby_mirror', $1, now())
     ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()`,
    [JSON.stringify(next)],
  );
  return next;
}

/** O que a chave (JWT) diz: validade, conta, marca, moeda. Sem verificar a assinatura (não é preciso). */
export function tokenInfo(token: string | null) {
  if (!token) return null;
  try {
    const part = token.split('.')[1];
    const json = JSON.parse(Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')) as Record<string, unknown>;
    const exp = Number(json.exp);
    return {
      sub: typeof json.sub === 'string' ? json.sub : null,
      expiresAt: Number.isFinite(exp) ? new Date(exp * 1000).toISOString() : null,
      expired: Number.isFinite(exp) ? exp * 1000 < Date.now() : false,
      account: typeof json.name === 'string' ? json.name : null,
      brand: typeof json.brand_id === 'string' ? json.brand_id : null,
      currency: typeof json.currency === 'string' ? json.currency : null,
    };
  } catch {
    return { sub: null, expiresAt: null, expired: false, account: null, brand: null, currency: null, invalid: true };
  }
}

export const legKey = (l: { event_id: string; market_id: string; variant: string; outcome_id: string }) => `${l.event_id}|${l.market_id}|${l.variant}|${l.outcome_id}`;

/** Põe na fila as seleções BETBY em aberto que ainda não foram enviadas (bilhetes das últimas 24 h). */
export async function queueOpenLegs() {
  await query(
    `INSERT INTO bb_mirror (leg_key, event_id, market_id, variant, outcome_id, odds, first_bet_at)
     SELECT DISTINCT ON (k) k, l.event_id, l.market_id, l.variant, l.outcome_id, l.odds, b.created_at
       FROM (SELECT l.*, l.event_id || '|' || l.market_id || '|' || l.variant || '|' || l.outcome_id AS k FROM bet_legs l) l
       JOIN bets b ON b.id = l.bet_id
      WHERE l.status = 'open' AND b.status IN ('open', 'review') AND l.event_id ~ '^[0-9]+$' AND l.market_id ~ '^[0-9]+$'
        AND b.created_at > now() - interval '24 hours'
      ORDER BY k, b.created_at
     ON CONFLICT (leg_key) DO NOTHING`,
  );
}

/** Seleções a enviar agora (pendentes; uma nova tentativa só passados 60 s). */
export async function toPlace(limit = 20) {
  return query<{ leg_key: string; event_id: string; market_id: string; variant: string; outcome_id: string; odds: string }>(
    `SELECT m.leg_key, m.event_id, m.market_id, m.variant, m.outcome_id, m.odds FROM bb_mirror m
      WHERE m.status = 'pending' AND (m.attempts = 0 OR m.updated_at < now() - interval '60 seconds')
        AND EXISTS (SELECT 1 FROM bet_legs l WHERE l.status = 'open'
                     AND l.event_id = m.event_id AND l.market_id = m.market_id AND l.variant = m.variant AND l.outcome_id = m.outcome_id)
      ORDER BY m.first_bet_at LIMIT $1`,
    [limit],
  );
}

/** Apostas BETBY em aberto por conta (sub da chave). */
export async function placedByAccount() {
  const rows = await query<{ account: string | null; n: string }>(`SELECT account, COUNT(*) AS n FROM bb_mirror WHERE status = 'placed' GROUP BY account`);
  return Object.fromEntries(rows.map((r) => [r.account ?? '', Number(r.n)]));
}

/** Resultado do envio: aceites (com o id da aposta BETBY) e recusados (com o motivo). */
export async function recordPlacement(accepted: { key: string; betId: string }[], rejected: { key: string; error: string }[], account: string | null) {
  for (const a of accepted) {
    await query(`UPDATE bb_mirror SET status = 'placed', betby_bet_id = $2, account = $3, placed_at = now(), error = NULL, updated_at = now() WHERE leg_key = $1`, [a.key, a.betId, account]);
  }
  for (const r of rejected) {
    // 3 recusas: desiste (a seleção é liquidada pelo nosso motor, como antes).
    await query(
      `UPDATE bb_mirror SET attempts = attempts + 1, error = $2, updated_at = now(),
              status = CASE WHEN attempts + 1 >= 3 THEN 'rejected' ELSE 'pending' END
        WHERE leg_key = $1 AND status = 'pending'`,
      [r.key, r.error.slice(0, 300)],
    );
  }
}

/** Estado de uma seleção na BETBY → o nosso (null = ainda em aberto / desconhecido). */
export function mapStatus(s: string): LegStatus | null {
  const v = s.toLowerCase().replace(/[\s-]+/g, '_');
  if (v === 'won' || v === 'win') return 'won';
  if (v === 'lost' || v === 'lose' || v === 'loss') return 'lost';
  if (v === 'half_won' || v === 'half_win') return 'half_won';
  if (v === 'half_lost' || v === 'half_lose') return 'half_lost';
  if (['refund', 'refunded', 'returned', 'return', 'void', 'voided', 'canceled', 'cancelled'].includes(v)) return 'void';
  return null;
}

export interface MyBet {
  id: string;
  status?: string;
  selections?: { event_id?: string; market_id?: string; specifiers?: string; outcome_id?: string; k?: string; status?: string }[];
}

/**
 * O que a BETBY diz das nossas apostas espelho (my_bets/list): odds aceites e, quando finalizadas,
 * as nossas seleções iguais são liquidadas e os bilhetes pagos. Devolve quantas seleções decidiu.
 */
export async function applyMyBets(list: MyBet[]) {
  const ids = list.map((b) => String(b.id)).filter((id) => /^\d{5,30}$/.test(id));
  if (!ids.length) return { decided: 0, confirmed: 0 };
  const mirrors = await query<{ leg_key: string; betby_bet_id: string; event_id: string; market_id: string; variant: string; outcome_id: string; status: string }>(
    `SELECT leg_key, betby_bet_id, event_id, market_id, variant, outcome_id, status FROM bb_mirror WHERE betby_bet_id = ANY($1)`,
    [ids],
  );
  const byBet = new Map(mirrors.map((m) => [m.betby_bet_id, m]));
  let decided = 0;
  for (const b of list) {
    const m = byBet.get(String(b.id));
    if (!m || m.status === 'settled') continue;
    const sel = (b.selections ?? []).find((s) => String(s.event_id) === m.event_id && String(s.market_id) === m.market_id && String(s.outcome_id) === m.outcome_id) ?? b.selections?.[0];
    const k = Number(sel?.k);
    if (Number.isFinite(k) && k > 1) await query(`UPDATE bb_mirror SET betby_k = $2, betby_status = $3, updated_at = now() WHERE leg_key = $1`, [m.leg_key, k, sel?.status ?? b.status ?? null]);
    const raw = String(sel?.status ?? b.status ?? '');
    if (/cash/i.test(String(b.status ?? ''))) {
      // Cash out feito na conta demo: a BETBY não vai dizer o resultado → fica para o nosso motor.
      await query(`UPDATE bb_mirror SET status = 'rejected', error = 'cash out feito na conta BETBY', updated_at = now() WHERE leg_key = $1`, [m.leg_key]);
      continue;
    }
    const st = mapStatus(raw);
    if (!st) continue;
    decided += await tx(async (c) => {
      const legs = (
        await c.query<LegRow>(
          `SELECT * FROM bet_legs WHERE status = 'open' AND event_id = $1 AND market_id = $2 AND variant = $3 AND outcome_id = $4 ORDER BY id FOR UPDATE`,
          [m.event_id, m.market_id, m.variant, m.outcome_id],
        )
      ).rows;
      let n = 0;
      for (const leg of legs) if (await setLeg(c, leg, st, 'betby', `Liquidada pela BETBY (${raw})`)) n += 1;
      await c.query(`UPDATE bb_mirror SET status = 'settled', betby_status = $2, settled_at = now(), updated_at = now() WHERE leg_key = $1`, [m.leg_key, raw]);
      return n;
    });
  }
  return { decided, confirmed: await confirmOdds() };
}

/**
 * Bilhetes com as odds por confirmar: a BETBY aceitou cada seleção (espelho enviado até 3 min
 * depois da aposta) a uma odd igual ou melhor → odds confirmadas (um bilhete ganho é pago sozinho).
 * Uma odd nossa acima da BETBY → o bilhete vai a análise, como na confirmação normal.
 */
async function confirmOdds() {
  const rows = await query<{ id: string; ok: boolean; bad: string | null; complete: boolean }>(
    `SELECT b.id,
            bool_and(m.betby_k IS NOT NULL AND l.odds <= m.betby_k * 1.02 + 0.005) AS ok,
            string_agg(CASE WHEN m.betby_k IS NOT NULL AND l.odds > m.betby_k * 1.02 + 0.005
                            THEN l.market_id || '/' || l.outcome_id || ': apostada ' || l.odds || ', BETBY ' || m.betby_k END, '; ') AS bad,
            bool_and(m.betby_k IS NOT NULL) AS complete
       FROM bets b JOIN bet_legs l ON l.bet_id = b.id
       LEFT JOIN bb_mirror m ON m.event_id = l.event_id AND m.market_id = l.market_id AND m.variant = l.variant AND m.outcome_id = l.outcome_id
                            AND m.placed_at < b.created_at + interval '3 minutes'
      WHERE b.odds_check = 'pending' AND b.status IN ('open', 'review') AND l.event_id ~ '^[0-9]+$'
        AND NOT EXISTS (SELECT 1 FROM bet_legs x WHERE x.bet_id = b.id AND x.event_id LIKE 'wh%')
      GROUP BY b.id`,
  );
  let n = 0;
  for (const r of rows) {
    if (r.bad) {
      await query(`UPDATE bets SET odds_check = 'mismatch', odds_check_note = $2 WHERE id = $1 AND odds_check = 'pending'`, [r.id, r.bad.slice(0, 300)]);
      await query(`UPDATE bets SET status = 'review', note = 'Odd acima da BETBY ao apostar' WHERE id = $1 AND status = 'open'`, [r.id]);
      await query('INSERT INTO settlements (bet_id, action, detail, source) VALUES ($1, $2, $3, $4)', [r.id, 'odds_mismatch', r.bad.slice(0, 300), 'betby']);
    } else if (r.complete && r.ok) {
      await query(`UPDATE bets SET odds_check = 'ok', odds_check_note = 'Confirmadas pela BETBY (aposta aceite)' WHERE id = $1 AND odds_check = 'pending'`, [r.id]);
      n += 1;
    }
  }
  return n;
}

/** Resumo para o admin. */
export async function mirrorSummary() {
  const counts = await query<{ status: string; n: string }>(`SELECT status, COUNT(*) AS n FROM bb_mirror GROUP BY status`);
  const recent = await query<Record<string, unknown>>(
    `SELECT leg_key, status, betby_bet_id, betby_k, betby_status, error, attempts, placed_at, settled_at, updated_at FROM bb_mirror ORDER BY updated_at DESC LIMIT 30`,
  );
  return { counts: Object.fromEntries(counts.map((c) => [c.status, Number(c.n)])), recent };
}
