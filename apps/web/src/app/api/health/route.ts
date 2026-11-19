import { NextResponse } from 'next/server';
import { hasDatabase, one } from '../../../lib/server/db';
import { feedStatus } from '../../../lib/server/betby-feed';

export const dynamic = 'force-dynamic';

// Saúde do servidor (sem dados privados): quanto o processador está atrasado, memória, base de
// dados e o feed da BETBY no servidor. Serve para ver porque é que uma página está lenta.
export async function GET() {
  const t0 = Date.now();
  // Atraso do event loop: um setImmediate que demora muito = servidor ocupado.
  const lag = await new Promise<number>((r) => {
    const s = Date.now();
    setImmediate(() => r(Date.now() - s));
  });
  let db: { ok: boolean; ms?: number; error?: string } = { ok: false };
  if (hasDatabase()) {
    const s = Date.now();
    try {
      await one('SELECT 1 AS ok');
      db = { ok: true, ms: Date.now() - s };
    } catch (e) {
      db = { ok: false, error: (e as Error).message };
    }
  }
  const m = process.memoryUsage();
  const mb = (n: number) => Math.round(n / 1048576);
  return NextResponse.json({
    ok: lag < 500 && (db.ok || !hasDatabase()),
    at: new Date().toISOString(),
    uptimeMin: Math.round(process.uptime() / 60),
    eventLoopLagMs: lag,
    memoryMb: { rss: mb(m.rss), heapUsed: mb(m.heapUsed), heapTotal: mb(m.heapTotal) },
    database: db,
    betbyFeeds: feedStatus(),
    ms: Date.now() - t0,
  }, { headers: { 'cache-control': 'no-store' } });
}
