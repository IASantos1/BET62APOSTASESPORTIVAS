'use client';

import * as React from 'react';
import { RefreshCw, Activity, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface FeedState {
  ok: boolean;
  count: number;
  url?: string;
  httpStatus?: number;
  blockReason?: string | null;
  bodyPreview?: string;
  checkedAt?: string;
  lastCapturedAt?: string;
  error?: string | null;
}

interface CollectorStatus {
  enabled: boolean;
  config?: { baseUrl: string; brandId: string; locale: string; intervalMs: number; paths: Record<string, string> };
  startedAt: string;
  lastRunAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
  feeds: Record<string, FeedState>;
}

interface ApiResult {
  reachable: boolean;
  problem?: string;
  latencyMs?: number;
  status?: CollectorStatus;
}

// Tradução dos sintomas mais comuns para uma pista do que fazer.
function hint(feed: FeedState): string | null {
  if (feed.ok) return null;
  const body = feed.bodyPreview ?? '';
  if (feed.httpStatus === 503 && body.includes('access blocked')) {
    return `A BETBY bloqueou o pedido na origem (bb-rsn: ${feed.blockReason ?? '—'}). O servidor do collector não está autorizado — normalmente é bloqueio por IP/país. É preciso pedir à BETBY a liberação do IP de saída do collector ou credenciais oficiais.`;
  }
  if (feed.httpStatus === 401 || feed.httpStatus === 403) return 'Acesso negado pela BETBY: falta autorização ou credenciais para este brand.';
  if (feed.httpStatus === 404) return 'Caminho não encontrado: confirma BETBY_BRAND_ID, BETBY_LOCALE e o cursor.';
  if (feed.error?.includes('timeout')) return 'A BETBY não respondeu a tempo. Verifica a rede do serviço ou aumenta BETBY_TIMEOUT_MS.';
  if (feed.error?.includes('ENOTFOUND')) return 'O domínio não resolve: confirma BETBY_BASE_URL.';
  if (feed.error?.includes('JSON')) return 'A resposta não é JSON — provavelmente uma página de erro ou o endereço errado.';
  return null;
}

function fmt(date?: string | null) {
  return date ? new Date(date).toLocaleString('pt-PT') : '—';
}

export default function AdminPage() {
  const [data, setData] = React.useState<ApiResult | null>(null);
  const [loading, setLoading] = React.useState(true);

  const load = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/betby-status', { cache: 'no-store' });
      setData((await res.json()) as ApiResult);
    } catch {
      setData({ reachable: false, problem: 'Falha ao contactar o servidor web.' });
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    void load();
  }, [load]);

  const status = data?.status;

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="max-w-5xl mx-auto px-4 lg:px-8 py-10 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Administração</h1>
            <p className="mt-2 text-white/60">Diagnóstico do BETBY Collector.</p>
          </div>
          <Button variant="outline" onClick={() => void load()} disabled={loading}>
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            Atualizar
          </Button>
        </div>

        {!data ? (
          <Card>
            <CardContent className="p-8 text-white/60">A verificar...</CardContent>
          </Card>
        ) : !status ? (
          <Card>
            <CardContent className="p-6 flex gap-3">
              <AlertTriangle className="text-bet62-danger shrink-0" size={20} />
              <div>
                <p className="font-bold">Collector indisponível</p>
                <p className="mt-1 text-sm text-white/70">{data.problem}</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card>
              <CardContent className="p-6 grid gap-4 sm:grid-cols-2 text-sm">
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-bet62-primary" />
                  <span className="font-bold">Collector</span>
                  <Badge variant={status.enabled ? 'green' : 'amber'}>{status.enabled ? 'ativo' : 'desligado'}</Badge>
                  {data.latencyMs !== undefined && <span className="text-white/40">{data.latencyMs} ms</span>}
                </div>
                <div className="text-white/60">Iniciado: {fmt(status.startedAt)}</div>
                <div className="text-white/60">Última execução: {fmt(status.lastRunAt)}</div>
                <div className="text-white/60">Último sucesso: {fmt(status.lastSuccessAt)}</div>
                {status.config && (
                  <div className="sm:col-span-2 rounded-xl border border-bet62-border bg-bet62-surface/50 p-3 font-mono text-xs text-white/70 break-all">
                    base: {status.config.baseUrl} · brand: {status.config.brandId} · locale: {status.config.locale} ·
                    intervalo: {status.config.intervalMs / 1000}s
                  </div>
                )}
              </CardContent>
            </Card>

            {Object.entries(status.feeds).map(([name, feed]) => {
              const tip = hint(feed);
              return (
                <Card key={name} glow={feed.ok ? 'none' : 'primary'}>
                  <CardContent className="p-6 space-y-3 text-sm">
                    <div className="flex items-center gap-2 flex-wrap">
                      {feed.ok ? (
                        <CheckCircle2 size={18} className="text-emerald-400" />
                      ) : (
                        <AlertTriangle size={18} className="text-bet62-danger" />
                      )}
                      <span className="font-bold uppercase tracking-wide">{name}</span>
                      <Badge variant={feed.ok ? 'green' : 'danger'}>
                        {feed.httpStatus ? `HTTP ${feed.httpStatus}` : feed.ok ? 'ok' : 'erro'}
                      </Badge>
                      {feed.blockReason && <Badge variant="amber">bb-rsn: {feed.blockReason}</Badge>}
                      <span className="text-white/50">{feed.count} eventos</span>
                    </div>
                    {feed.url && <p className="font-mono text-xs text-white/50 break-all">{feed.url}</p>}
                    {feed.error && (
                      <pre className="whitespace-pre-wrap rounded-xl border border-bet62-border bg-bet62-surface/50 p-3 text-xs text-white/70">
                        {feed.error}
                      </pre>
                    )}
                    {tip && <p className="text-white/80">{tip}</p>}
                    <p className="text-xs text-white/40">
                      Verificado: {fmt(feed.checkedAt)} · Última captura: {fmt(feed.lastCapturedAt)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </>
        )}
      </main>
    </div>
  );
}
