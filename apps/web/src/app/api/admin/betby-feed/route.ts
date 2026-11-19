import { NextResponse } from 'next/server';
import { isAdminAuthorized } from '../../../../lib/admin-auth';
import { json, route } from '../../../../lib/server/auth';
import { betbyFeedDiag } from '../../../../lib/server/betby-feed-diag';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

/** Diagnóstico do feed BETBY a partir do servidor: ?q=nome de uma equipa&feed=live|prematch. */
export const GET = route(async (req: Request) => {
  if (!isAdminAuthorized()) return NextResponse.json({ error: 'Sem sessão de admin.' }, { status: 401 });
  const u = new URL(req.url);
  return json(await betbyFeedDiag((u.searchParams.get('q') ?? '').slice(0, 60), u.searchParams.get('feed') === 'prematch' ? 'prematch' : 'live'));
});
