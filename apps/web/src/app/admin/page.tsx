'use client';

import * as React from 'react';
import { RefreshCw, AlertTriangle, CheckCircle2, Lock, LogOut } from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { BetbyExplorer, IntegrationsCard } from './Explorer';
import { BETBY_CONFIG, eventTitle, feedUrl, useBetbyFeed, type BetbyFeed } from '../../lib/betby';

// Diagnóstico das URLs da BETBY, lidas no navegador de quem abre esta página.
function FeedCard({ feed }: { feed: BetbyFeed }) {
  const { events, dictionaries, loading, error, updatedAt, reload } = useBetbyFeed(feed);
  const withNames = events.filter((e) => e.desc?.competitors?.length).length;
  const withOdds = events.filter((e) => Object.keys(e.markets).length).length;
  const withScore = events.filter((e) => e.score).length;
  const sample = events.find((e) => e.desc?.competitors?.length && Object.keys(e.markets).length) ?? events[0];
  const ok = !error && events.length > 0;

  return (
    <Card glow={error ? 'primary' : 'none'}>
      <CardContent className="p-6 space-y-3 text-sm">
        <div className="flex items-center gap-2 flex-wrap">
          {ok ? <CheckCircle2 size={18} className="text-emerald-400" /> : <AlertTriangle size={18} className="text-bet62-danger" />}
          <span className="font-bold uppercase tracking-wide">{feed}</span>
          <Badge variant={error ? 'danger' : 'green'}>{loading ? 'a ler…' : error ? 'erro' : 'ok'}</Badge>
          <span className="text-white/50">{events.length} jogos</span>
          <Button variant="ghost" size="sm" className="ml-auto" onClick={() => void reload()} aria-label="Atualizar">
            <RefreshCw size={14} />
          </Button>
        </div>
        <p className="font-mono text-xs text-white/50 break-all">{feedUrl(feed, 0)}</p>
        {error && (
          <pre className="whitespace-pre-wrap rounded-xl border border-bet62-border bg-bet62-surface/50 p-3 text-xs text-white/70">{error}</pre>
        )}
        <p className="text-white/80">
          com nomes: <b>{withNames}</b> · com odds: {withOdds} · com placar: {withScore} · desportos:{' '}
          {Object.keys(dictionaries.sports).length} · torneios: {Object.keys(dictionaries.tournaments).length}
        </p>
        {sample && (
          <details>
            <summary className="cursor-pointer text-white/60">Exemplo: {eventTitle(sample)}</summary>
            <pre className="mt-2 max-h-64 overflow-auto whitespace-pre-wrap break-all font-mono text-xs text-white/60">
              {JSON.stringify(sample, null, 1).slice(0, 3000)}
            </pre>
          </details>
        )}
        <p className="text-xs text-white/40">Atualizado: {updatedAt ? updatedAt.toLocaleTimeString('pt-PT') : '—'}</p>
      </CardContent>
    </Card>
  );
}

export default function AdminPage() {
  const [authorized, setAuthorized] = React.useState<boolean | null>(null);
  const [password, setPassword] = React.useState('');
  const [loginError, setLoginError] = React.useState<string | null>(null);

  const check = React.useCallback(async () => {
    const res = await fetch('/api/admin/login', { cache: 'no-store' }).catch(() => null);
    setAuthorized(Boolean(res?.ok));
  }, []);

  React.useEffect(() => {
    void check();
  }, [check]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      setLoginError('Senha incorreta.');
      return;
    }
    setPassword('');
    await check();
  };

  const logout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    await check();
  };

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="max-w-5xl mx-auto px-4 lg:px-8 py-10 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Administração</h1>
            <p className="mt-2 text-white/60">Integrações, Explorador BETBY e diagnóstico das URLs.</p>
          </div>
          {authorized && (
            <Button variant="ghost" onClick={() => void logout()} aria-label="Sair">
              <LogOut size={16} />
            </Button>
          )}
        </div>

        {authorized === null ? (
          <Card>
            <CardContent className="p-8 text-white/60">A verificar...</CardContent>
          </Card>
        ) : !authorized ? (
          <Card className="max-w-md">
            <CardContent className="p-6">
              <form onSubmit={(e) => void login(e)} className="space-y-4">
                <div className="flex items-center gap-2 font-bold">
                  <Lock size={18} className="text-bet62-primary" />
                  Acesso restrito
                </div>
                <Input
                  type="password"
                  placeholder="Senha de administrador"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                />
                {loginError && <p className="text-sm text-bet62-danger">{loginError}</p>}
                <Button type="submit" variant="glow" className="w-full">
                  Entrar
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card>
              <CardContent className="p-4 font-mono text-xs text-white/70 break-all">
                base: {BETBY_CONFIG.baseUrl} · brand: {BETBY_CONFIG.brandId} · locale: {BETBY_CONFIG.locale}
              </CardContent>
            </Card>
            <IntegrationsCard />
            <BetbyExplorer />
            <FeedCard feed="live" />
            <FeedCard feed="prematch" />
          </>
        )}
      </main>
    </div>
  );
}
