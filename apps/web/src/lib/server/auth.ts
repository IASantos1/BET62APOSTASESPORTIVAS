import { createHash, randomBytes, scrypt as scryptCb, timingSafeEqual } from 'node:crypto';
import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { DatabaseMissing, one, query } from './db';

// Contas dos jogadores: senha com scrypt (sal próprio), sessão num cookie httpOnly com um token
// aleatório — na base de dados só fica o hash do token.
export const SESSION_COOKIE = 'bet62_session';
const SESSION_DAYS = 30;

function scrypt(password: string, salt: Buffer, len: number) {
  return new Promise<Buffer>((resolve, reject) =>
    scryptCb(password, salt, len, (err, key) => (err ? reject(err) : resolve(key))),
  );
}

export async function hashPassword(password: string) {
  const salt = randomBytes(16);
  const key = await scrypt(password, salt, 64);
  return `scrypt$${salt.toString('base64')}$${key.toString('base64')}`;
}

export async function verifyPassword(password: string, stored: string) {
  const [alg, salt, key] = stored.split('$');
  if (alg !== 'scrypt' || !salt || !key) return false;
  const expected = Buffer.from(key, 'base64');
  const got = await scrypt(password, Buffer.from(salt, 'base64'), expected.length);
  return got.length === expected.length && timingSafeEqual(got, expected);
}

const sha = (t: string) => createHash('sha256').update(t).digest('hex');

export interface UserRow {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  birthdate: string | Date;
  phone: string | null;
  nif: string | null;
  country: string;
  password_hash: string;
  role: 'user' | 'admin';
  status: 'active' | 'blocked';
  balance_cents: string;
  excluded_until: string | Date | null;
  created_at: string | Date;
}

const isoDay = (d: string | Date) => {
  if (d instanceof Date) {
    // DATE do PostgreSQL chega como meia-noite local: usar os campos locais.
    const p = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }
  return String(d).slice(0, 10);
};

/** O que o navegador recebe sobre o jogador (sem hash de senha). */
export function publicUser(u: UserRow) {
  return {
    id: String(u.id),
    email: u.email,
    firstName: u.first_name,
    lastName: u.last_name,
    birthdate: isoDay(u.birthdate),
    phone: u.phone,
    nif: u.nif,
    country: u.country,
    roles: [u.role.toUpperCase()],
    balance: Number(u.balance_cents) / 100,
    excludedUntil: u.excluded_until ? new Date(u.excluded_until).toISOString() : null,
    createdAt: new Date(u.created_at).toISOString(),
    twoFactorEnabled: false,
  };
}

export function clientIp() {
  const h = headers();
  return (h.get('x-forwarded-for')?.split(',')[0] ?? h.get('x-real-ip') ?? '').trim() || null;
}

export async function createSession(userId: string) {
  const token = randomBytes(32).toString('base64url');
  await query(
    `INSERT INTO sessions (token_hash, user_id, expires_at, user_agent, ip)
     VALUES ($1, $2, now() + make_interval(days => $3), $4, $5)`,
    [sha(token), userId, SESSION_DAYS, headers().get('user-agent')?.slice(0, 300) ?? null, clientIp()],
  );
  return token;
}

export function withSessionCookie(res: NextResponse, token: string | null) {
  if (token === null) res.cookies.delete(SESSION_COOKIE);
  else
    res.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: SESSION_DAYS * 86400,
    });
  return res;
}

/** O jogador da sessão atual, ou null. */
export async function currentUser(): Promise<UserRow | null> {
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return one<UserRow>(
    `SELECT u.* FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = $1 AND s.expires_at > now()`,
    [sha(token)],
  );
}

export async function endSession() {
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (token) await query('DELETE FROM sessions WHERE token_hash = $1', [sha(token)]);
}

/** Termina as outras sessões do jogador (ex.: depois de mudar a senha). */
export async function endOtherSessions(userId: string) {
  const token = cookies().get(SESSION_COOKIE)?.value ?? '';
  await query('DELETE FROM sessions WHERE user_id = $1 AND token_hash <> $2', [userId, sha(token)]);
}

// Limite simples de tentativas por chave (memória do processo).
const attempts = new Map<string, { n: number; until: number }>();
export function tooManyAttempts(key: string, max = 10, windowMs = 15 * 60_000) {
  const now = Date.now();
  const a = attempts.get(key);
  if (!a || a.until < now) {
    attempts.set(key, { n: 1, until: now + windowMs });
    return false;
  }
  a.n += 1;
  return a.n > max;
}

export const json = (data: unknown, status = 200) => NextResponse.json(data, { status });
export const fail = (error: string, status = 400) => NextResponse.json({ error }, { status });

/** Envolve uma rota: base de dados em falta ou erros inesperados viram respostas JSON. */
export function route<A extends unknown[]>(fn: (...args: A) => Promise<Response>) {
  return async (...args: A) => {
    try {
      return await fn(...args);
    } catch (e) {
      if (e instanceof DatabaseMissing) return fail('Contas indisponíveis: a base de dados não está configurada.', 503);
      console.error('[api]', e);
      return fail('Erro interno. Tente novamente.', 500);
    }
  };
}

/** Exige sessão ativa; devolve o jogador ou uma resposta de erro. */
export async function requireUser(): Promise<UserRow | Response> {
  const u = await currentUser();
  if (!u) return fail('Sessão terminada. Inicie sessão.', 401);
  if (u.status !== 'active') return fail('Conta bloqueada. Contacte o apoio.', 403);
  return u;
}

export const euros = (cents: string | number) => Number(cents) / 100;

/** Senha fraca: menos de 8 caracteres ou menos de 3 de: minúscula, maiúscula, número, símbolo. */
export function weakPassword(pw: string) {
  if (pw.length < 8 || pw.length > 128) return true;
  return [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter((r) => r.test(pw)).length < 3;
}
