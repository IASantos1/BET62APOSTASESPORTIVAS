import { clientIp, createSession, fail, json, publicUser, route, tooManyAttempts, verifyPassword, withSessionCookie, type UserRow } from '../../../../lib/server/auth';
import { one } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

export const POST = route(async (req: Request) => {
  const b = (await req.json().catch(() => ({}))) as { email?: string; password?: string };
  const email = String(b.email ?? '').trim().toLowerCase().slice(0, 200);
  const password = String(b.password ?? '');
  if (tooManyAttempts(`login:${clientIp()}`) || tooManyAttempts(`login:${email}`)) {
    return fail('Demasiadas tentativas. Aguarde 15 minutos.', 429);
  }
  const user = await one<UserRow>('SELECT * FROM users WHERE email = $1', [email]);
  // Mesma mensagem para e-mail inexistente e senha errada.
  if (!user || !(await verifyPassword(password, user.password_hash))) return fail('E-mail ou senha incorretos.', 401);
  if (user.status !== 'active') return fail('Conta bloqueada. Contacte o apoio.', 403);
  // Autoexcluído pode entrar (ver saldo, levantar), mas não apostar nem depositar.
  const token = await createSession(user.id);
  return withSessionCookie(json({ user: publicUser(user) }), token);
});
