import { createHash, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

// Sessão admin simples: o cookie guarda um hash da ADMIN_PASSWORD (nunca a senha em si).
// Trocar a ADMIN_PASSWORD no Railway invalida todas as sessões.
export const ADMIN_COOKIE = 'bet62_admin';

export function adminToken(password: string): string {
  return createHash('sha256').update(`bet62-admin:${password}`).digest('hex');
}

export function adminPasswordMatches(input: string): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return true;
  const a = Buffer.from(adminToken(input));
  const b = Buffer.from(adminToken(password));
  return a.length === b.length && timingSafeEqual(a, b);
}

export function isAdminAuthorized(): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return true;
  const cookie = cookies().get(ADMIN_COOKIE)?.value ?? '';
  const a = Buffer.from(cookie);
  const b = Buffer.from(adminToken(password));
  return a.length === b.length && timingSafeEqual(a, b);
}
