import { fail, json, requireUser, route } from '../../../../lib/server/auth';
import { one, query } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

// Limites de depósito (jogo responsável). Baixar ou criar um limite vale de imediato; subir ou
// tirar um limite só vale 24 h depois (fica "pendente" até lá).
type Key = 'day' | 'week' | 'month';
const KEYS: Key[] = ['day', 'week', 'month'];
const COL: Record<Key, string> = { day: 'deposit_day', week: 'deposit_week', month: 'deposit_month' };
const COOL_OFF_MS = 24 * 3600_000;

interface Row {
  deposit_day: string | null;
  deposit_week: string | null;
  deposit_month: string | null;
  pending: Partial<Record<Key, number | null>> | null;
  pending_at: string | Date | null;
}

const toEuros = (c: string | null) => (c === null ? null : Number(c) / 100);

async function load(userId: string) {
  let r = await one<Row>('SELECT * FROM user_limits WHERE user_id = $1', [userId]);
  // Aplica o pedido pendente quando passaram 24 h.
  if (r?.pending && r.pending_at && Date.now() - new Date(r.pending_at).getTime() >= COOL_OFF_MS) {
    const sets = Object.keys(r.pending).filter((k): k is Key => KEYS.includes(k as Key));
    const vals = sets.map((k) => r!.pending![k]);
    if (sets.length) {
      await query(
        `UPDATE user_limits SET ${sets.map((k, i) => `${COL[k]} = $${i + 2}`).join(', ')}, pending = NULL, pending_at = NULL, updated_at = now() WHERE user_id = $1`,
        [userId, ...vals],
      );
    }
    r = await one<Row>('SELECT * FROM user_limits WHERE user_id = $1', [userId]);
  }
  return {
    day: toEuros(r?.deposit_day ?? null),
    week: toEuros(r?.deposit_week ?? null),
    month: toEuros(r?.deposit_month ?? null),
    pending: r?.pending
      ? {
          values: Object.fromEntries(Object.entries(r.pending).map(([k, v]) => [k, v === null ? null : Number(v) / 100])),
          appliesAt: r.pending_at ? new Date(new Date(r.pending_at).getTime() + COOL_OFF_MS).toISOString() : null,
        }
      : null,
  };
}

export const GET = route(async () => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  return json({ limits: await load(u.id) });
});

export const POST = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const b = (await req.json().catch(() => ({}))) as Partial<Record<Key, number | string | null>>;
  const wanted: Partial<Record<Key, number | null>> = {};
  for (const k of KEYS) {
    if (!(k in b)) continue;
    const v = b[k];
    if (v === null || v === '') wanted[k] = null;
    else {
      const n = Math.round(Number(v) * 100);
      if (!Number.isFinite(n) || n < 100 || n > 100_000_000) return fail('Cada limite tem de estar entre 1 € e 1 000 000 €.');
      wanted[k] = n;
    }
  }
  await query('INSERT INTO user_limits (user_id) VALUES ($1) ON CONFLICT (user_id) DO NOTHING', [u.id]);
  const cur = await one<Row>('SELECT * FROM user_limits WHERE user_id = $1', [u.id]);
  const now: Partial<Record<Key, number | null>> = {};
  const later: Partial<Record<Key, number | null>> = { ...(cur?.pending ?? {}) };
  for (const k of KEYS) {
    if (!(k in wanted)) continue;
    const old = cur?.[COL[k] as keyof Row] as string | null;
    const next = wanted[k]!;
    const stricter = next !== null && (old === null || next <= Number(old));
    if (stricter) {
      now[k] = next;
      delete later[k];
    } else if (next !== (old === null ? null : Number(old))) later[k] = next;
  }
  const sets = Object.keys(now) as Key[];
  const hasLater = Object.keys(later).length > 0;
  await query(
    `UPDATE user_limits SET ${sets.map((k, i) => `${COL[k]} = $${i + 2}, `).join('')}pending = $${sets.length + 2}::jsonb,
       pending_at = CASE WHEN $${sets.length + 2}::jsonb IS NULL THEN NULL ELSE COALESCE(pending_at, now()) END, updated_at = now()
     WHERE user_id = $1`,
    [u.id, ...sets.map((k) => now[k]), hasLater ? JSON.stringify(later) : null],
  );
  return json({ limits: await load(u.id) });
});
