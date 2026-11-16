import { NextResponse } from 'next/server';
import { isAdminAuthorized } from '../../../../lib/admin-auth';
import { apiCall, apiSportsStatus, logoCacheStatus, warmLeaguePacks } from '../../../../lib/server/apisports';
import { bigBangStatus, casinoGames } from '../../../../lib/server/bigbang';

export const dynamic = 'force-dynamic';

// Estado das integrações do servidor (chaves e um teste a cada uma). Só para o admin.
export async function GET(req: Request) {
  if (!isAdminAuthorized()) return NextResponse.json({ error: 'Sem sessão de admin.' }, { status: 401 });
  const test = new URL(req.url).searchParams.get('test') === '1';
  if (test) warmLeaguePacks();
  const apiFootball: Record<string, unknown> = { ...apiSportsStatus(), logos: logoCacheStatus() };
  const bigBang: Record<string, unknown> = { ...bigBangStatus() };
  if (test) {
    try {
      const r = (await apiCall<Record<string, unknown>>('football', 'status')) as unknown;
      apiFootball.test = { ok: true, account: r };
    } catch (e) {
      apiFootball.test = { ok: false, error: e instanceof Error ? e.message : String(e) };
    }
    try {
      const games = await casinoGames();
      bigBang.test = { ok: games.length > 0, games: games.length, providers: new Set(games.map((g) => g.provider)).size };
    } catch (e) {
      bigBang.test = { ok: false, error: e instanceof Error ? e.message : String(e) };
    }
  }
  return NextResponse.json({
    apiFootball,
    bigBang,
    env: {
      API_FOOTBALL_KEY: !!process.env.API_FOOTBALL_KEY,
      BIGBANG_API_KEY: !!process.env.BIGBANG_API_KEY,
      BIGBANG_API_URL: process.env.BIGBANG_API_URL || null,
      ADMIN_PASSWORD: !!process.env.ADMIN_PASSWORD,
      DATA_DIR: process.env.DATA_DIR || process.env.RAILWAY_VOLUME_MOUNT_PATH || '/tmp/bet62-data',
    },
  });
}
