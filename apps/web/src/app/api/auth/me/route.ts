import { currentUser, json, publicUser, route } from '../../../../lib/server/auth';
import { hasDatabase } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

/** Sessão atual: { user } ou { user: null }. `accounts` diz se as contas estão disponíveis. */
export const GET = route(async () => {
  if (!hasDatabase()) return json({ user: null, accounts: false });
  const u = await currentUser();
  return json({ user: u ? publicUser(u) : null, accounts: true });
});
