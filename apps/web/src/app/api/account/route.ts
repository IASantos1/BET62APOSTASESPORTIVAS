import { fail, json, publicUser, requireUser, route, type UserRow } from '../../../lib/server/auth';
import { one } from '../../../lib/server/db';

export const dynamic = 'force-dynamic';

// Dados pessoais. Nome, data de nascimento, NIF e e-mail ficam fixos depois do registo
// (verificação de identidade); o jogador só muda o telemóvel. O resto, pelo apoio.
export const PATCH = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const b = (await req.json().catch(() => ({}))) as { phone?: string };
  const phone = String(b.phone ?? '').trim().replace(/[^\d+ ]/g, '').slice(0, 30) || null;
  if (phone && phone.replace(/\D/g, '').length < 9) return fail('Telemóvel inválido.');
  const next = await one<UserRow>('UPDATE users SET phone = $1 WHERE id = $2 RETURNING *', [phone, u.id]);
  return json({ user: publicUser(next!) });
});
