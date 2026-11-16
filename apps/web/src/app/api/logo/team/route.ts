import { NextResponse } from 'next/server';
import { teamLogo } from '../../../../lib/server/apisports';

export const dynamic = 'force-dynamic';

// /api/logo/team?s=futebol&n=Benfica → redireciona para o emblema (API-Football), ou 404.
export async function GET(req: Request) {
  const u = new URL(req.url);
  const league = Number(u.searchParams.get('l')) || undefined;
  const logo = await teamLogo(u.searchParams.get('s') || '', (u.searchParams.get('n') || '').slice(0, 80), league).catch(() => null);
  if (!logo) return new NextResponse(null, { status: 404, headers: { 'cache-control': 'public, max-age=3600' } });
  return NextResponse.redirect(logo, { status: 302, headers: { 'cache-control': 'public, max-age=604800' } });
}
