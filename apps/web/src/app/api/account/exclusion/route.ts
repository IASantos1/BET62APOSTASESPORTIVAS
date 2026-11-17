import { fail, json, requireUser, route, withSessionCookie } from '../../../../lib/server/auth';
import { query } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

// Autoexclusão: o jogador bloqueia a própria conta por um período. Não se pode encurtar; todas
// as sessões terminam e o login fica recusado até à data.
const PERIODS: Record<string, number> = { '1': 1, '7': 7, '30': 30, '90': 90, '180': 180, '365': 365, perm: 36500 };

export const POST = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const b = (await req.json().catch(() => ({}))) as { period?: string; confirm?: boolean };
  const days = PERIODS[String(b.period ?? '')];
  if (!days) return fail('Escolha um período válido.');
  if (b.confirm !== true) return fail('Confirme a autoexclusão.');
  await query(
    `UPDATE users SET excluded_until = GREATEST(COALESCE(excluded_until, now()), now() + make_interval(days => $2)) WHERE id = $1`,
    [u.id, days],
  );
  await query('DELETE FROM sessions WHERE user_id = $1', [u.id]);
  return withSessionCookie(json({ ok: true }), null);
});
