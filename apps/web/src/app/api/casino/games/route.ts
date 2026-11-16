import { NextResponse } from 'next/server';
import { casinoGames } from '../../../../lib/server/bigbang';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const games = await casinoGames();
    return NextResponse.json({ enabled: true, games }, { headers: { 'cache-control': 'public, max-age=300' } });
  } catch (e) {
    return NextResponse.json({ enabled: false, games: [], error: e instanceof Error ? e.message : String(e) });
  }
}
