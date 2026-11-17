import { createSession, clientIp, fail, hashPassword, json, publicUser, route, tooManyAttempts, weakPassword, withSessionCookie, type UserRow } from '../../../../lib/server/auth';
import { one } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function age(birth: string) {
  const b = new Date(`${birth}T00:00:00Z`);
  const now = new Date();
  let a = now.getUTCFullYear() - b.getUTCFullYear();
  const m = now.getUTCMonth() - b.getUTCMonth();
  if (m < 0 || (m === 0 && now.getUTCDate() < b.getUTCDate())) a -= 1;
  return a;
}

export const POST = route(async (req: Request) => {
  if (tooManyAttempts(`register:${clientIp()}`, 5, 60 * 60_000)) return fail('Demasiados registos. Tente mais tarde.', 429);
  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const s = (k: string, max = 100) => String(b[k] ?? '').trim().slice(0, max);
  const email = s('email', 200).toLowerCase();
  const firstName = s('firstName');
  const lastName = s('lastName');
  const birthdate = s('birthdate', 10);
  const phone = s('phone', 30).replace(/[^\d+ ]/g, '') || null;
  const nif = s('nif', 20).replace(/\D/g, '') || null;
  const country = s('country', 2).toUpperCase() || 'PT';
  const password = String(b.password ?? '');

  if (!EMAIL.test(email)) return fail('E-mail inválido.');
  if (firstName.length < 2 || lastName.length < 2) return fail('Indique o nome e o apelido.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdate) || Number.isNaN(Date.parse(birthdate))) return fail('Data de nascimento inválida.');
  if (age(birthdate) < 18) return fail('Tem de ter 18 anos ou mais para criar conta.');
  if (age(birthdate) > 120) return fail('Data de nascimento inválida.');
  if (nif && !/^\d{9}$/.test(nif)) return fail('O NIF tem 9 dígitos.');
  if (weakPassword(password)) return fail('Senha fraca: 8+ caracteres com 3 de: minúscula, maiúscula, número, símbolo.');

  if (await one('SELECT 1 FROM users WHERE email = $1', [email])) return fail('Já existe uma conta com este e-mail.', 409);
  const user = await one<UserRow>(
    `INSERT INTO users (email, first_name, last_name, birthdate, phone, nif, country, password_hash)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [email, firstName, lastName, birthdate, phone, nif, country, await hashPassword(password)],
  );
  if (!user) return fail('Não foi possível criar a conta.', 500);
  const token = await createSession(user.id);
  return withSessionCookie(json({ user: publicUser(user) }, 201), token);
});
