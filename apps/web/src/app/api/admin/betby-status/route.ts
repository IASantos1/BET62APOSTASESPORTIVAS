import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Lê o /status do serviço betby-collector no servidor, para o token não chegar ao navegador.
// BETBY_COLLECTOR_URL: URL do serviço collector no Railway (ex.: https://betby-collector.up.railway.app)
// BETBY_STATUS_TOKEN: o mesmo valor configurado no serviço collector
export async function GET() {
  const baseUrl = process.env.BETBY_COLLECTOR_URL?.replace(/\/$/, '');
  if (!baseUrl) {
    return NextResponse.json(
      { reachable: false, problem: 'BETBY_COLLECTOR_URL não está definida no serviço web.' },
      { status: 200 },
    );
  }

  const token = process.env.BETBY_STATUS_TOKEN;
  const started = Date.now();
  try {
    const res = await fetch(`${baseUrl}/status`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
    });
    const text = await res.text();
    if (!res.ok) {
      const problem =
        res.status === 401
          ? 'O collector recusou o token (401). Confirma que BETBY_STATUS_TOKEN é igual nos dois serviços.'
          : `O collector respondeu HTTP ${res.status}.`;
      return NextResponse.json({ reachable: true, problem, httpStatus: res.status, body: text.slice(0, 300) });
    }
    return NextResponse.json({ reachable: true, latencyMs: Date.now() - started, status: JSON.parse(text) });
  } catch (err) {
    const e = err as Error & { cause?: { code?: string; message?: string } };
    const cause = e.cause?.code || e.cause?.message || e.message;
    return NextResponse.json({
      reachable: false,
      problem: `Não foi possível contactar o collector em ${baseUrl} (${cause}).`,
    });
  }
}
