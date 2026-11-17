import { endOtherSessions, fail, hashPassword, json, requireUser, route, tooManyAttempts, verifyPassword, weakPassword } from '../../../../lib/server/auth';
import { query } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

export const POST = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  if (tooManyAttempts(`password:${u.id}`, 5)) return fail('Demasiadas tentativas. Aguarde 15 minutos.', 429);
  const b = (await req.json().catch(() => ({}))) as { current?: string; next?: string };
  if (!(await verifyPassword(String(b.current ?? ''), u.password_hash))) return fail('A senha atual está errada.', 401);
  const next = String(b.next ?? '');
  if (weakPassword(next)) return fail('Senha fraca: 8+ caracteres com 3 de: minúscula, maiúscula, número, símbolo.');
  await query('UPDATE users SET password_hash = $1 WHERE id = $2', [await hashPassword(next), u.id]);
  await endOtherSessions(u.id);
  return json({ ok: true });
});
