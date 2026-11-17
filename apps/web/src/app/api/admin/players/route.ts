import { NextResponse } from 'next/server';
import { isAdminAuthorized } from '../../../../lib/admin-auth';
import { euros, fail, json, route } from '../../../../lib/server/auth';
import { hasDatabase, query, tx } from '../../../../lib/server/db';
import { InsufficientFunds, moveBalance } from '../../../../lib/server/wallet';

export const dynamic = 'force-dynamic';

const denied = () => NextResponse.json({ error: 'Sem sessão de admin.' }, { status: 401 });

/** Lista de jogadores (pesquisa por e-mail/nome). */
export const GET = route(async (req: Request) => {
  if (!isAdminAuthorized()) return denied();
  if (!hasDatabase()) return json({ players: [], accounts: false });
  const q = (new URL(req.url).searchParams.get('q') ?? '').trim().toLowerCase().slice(0, 100);
  const rows = await query<{ id: string; email: string; first_name: string; last_name: string; status: string; balance_cents: string; excluded_until: Date | null; created_at: Date; open_bets: string }>(
    `SELECT u.id, u.email, u.first_name, u.last_name, u.status, u.balance_cents, u.excluded_until, u.created_at,
            (SELECT COUNT(*) FROM bets b WHERE b.user_id = u.id AND b.status IN ('open', 'review')) AS open_bets
       FROM users u
      WHERE $1 = '' OR lower(u.email) LIKE '%' || $1 || '%' OR lower(u.first_name || ' ' || u.last_name) LIKE '%' || $1 || '%'
      ORDER BY u.id DESC LIMIT 50`,
    [q],
  );
  return json({
    accounts: true,
    players: rows.map((r) => ({
      id: String(r.id),
      email: r.email,
      name: `${r.first_name} ${r.last_name}`.trim(),
      status: r.status,
      balance: euros(r.balance_cents),
      openBets: Number(r.open_bets),
      excludedUntil: r.excluded_until ? new Date(r.excluded_until).toISOString() : null,
      createdAt: new Date(r.created_at).toISOString(),
    })),
  });
});

/** Ajuste manual de saldo pelo operador (crédito ou débito), sempre com nota. */
export const POST = route(async (req: Request) => {
  if (!isAdminAuthorized()) return denied();
  const b = (await req.json().catch(() => ({}))) as { userId?: string; amount?: number | string; note?: string };
  const cents = Math.round(Number(b.amount) * 100);
  const note = String(b.note ?? '').trim().slice(0, 200);
  if (!b.userId || !Number.isInteger(cents) || cents === 0 || Math.abs(cents) > 100_000_000) return fail('Valor inválido.');
  if (note.length < 3) return fail('Indique o motivo do ajuste.');
  try {
    const balance = await tx((c) => moveBalance(c, String(b.userId), cents > 0 ? 'admin_credit' : 'admin_debit', cents, { note }));
    return json({ balance: balance / 100 });
  } catch (e) {
    if (e instanceof InsufficientFunds) return fail(e.message);
    throw e;
  }
});
