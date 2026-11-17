import { fail, json, publicUser, requireUser, route, type UserRow } from '../../../../lib/server/auth';
import { one } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

// Autoexclusão / pausa: durante o período o jogador não pode apostar nem depositar (os
// levantamentos continuam). É imediata e não se pode encurtar.
const PERIODS: Record<string, number> = { '1': 1, '3': 3, '7': 7, '30': 30, '90': 90, '180': 180, '365': 365, perm: 36500 };

export const POST = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const b = (await req.json().catch(() => ({}))) as { period?: string; confirm?: boolean };
  const days = PERIODS[String(b.period ?? '')];
  if (!days) return fail('Escolha um período válido.');
  if (b.confirm !== true) return fail('Confirme a autoexclusão.');
  const next = await one<UserRow>(
    `UPDATE users SET excluded_until = GREATEST(COALESCE(excluded_until, now()), now() + make_interval(days => $2)) WHERE id = $1 RETURNING *`,
    [u.id, days],
  );
  return json({ user: publicUser(next!) });
});
