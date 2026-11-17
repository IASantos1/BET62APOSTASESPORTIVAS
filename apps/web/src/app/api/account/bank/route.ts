import { fail, json, publicUser, requireUser, route, type UserRow } from '../../../../lib/server/auth';
import { one } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

/** Verificação do IBAN (ISO 13616: mod 97 = 1). */
function validIban(iban: string) {
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(iban)) return false;
  const moved = iban.slice(4) + iban.slice(0, 4);
  const digits = moved.replace(/[A-Z]/g, (c) => String(c.charCodeAt(0) - 55));
  let r = 0;
  for (const d of digits) r = (r * 10 + Number(d)) % 97;
  return r === 1;
}

// Dados bancários para levantamentos (os pagamentos só vão para contas em nome do titular).
export const POST = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const b = (await req.json().catch(() => ({}))) as { iban?: string; ibanName?: string };
  const iban = String(b.iban ?? '').toUpperCase().replace(/\s+/g, '');
  const name = String(b.ibanName ?? '').trim().slice(0, 120);
  if (iban && !validIban(iban)) return fail('IBAN inválido.');
  if (iban && name.length < 3) return fail('Indique o titular da conta.');
  const next = await one<UserRow>('UPDATE users SET iban = $2, iban_name = $3 WHERE id = $1 RETURNING *', [u.id, iban || null, iban ? name : null]);
  return json({ user: publicUser(next!) });
});
