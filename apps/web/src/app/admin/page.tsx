'use client';

// Painel de administração no modelo do Bet62Novo (só o modelo; as cores são as do BET62):
// entrada com escudo e logótipo; menu lateral (Operações / Avançado) no PC, gaveta e menu inferior
// no telemóvel; barra de topo com o título da secção e "Atualizar"; Visão Geral com cartões,
// volume dos últimos 7 dias e distribuição das apostas.
import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  DollarSign,
  Eye,
  EyeOff,
  Gavel,
  LayoutDashboard,
  ListChecks,
  Loader2,
  LogOut,
  Menu,
  Plug,
  Radar,
  Server,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Trophy,
  TrendingUp,
  Users,
  Wallet,
  X,
  XCircle,
} from 'lucide-react';
import { BetbyExplorer, IntegrationsCard } from './Explorer';
import { TrackerSizeCard } from './TrackerSizeCard';
import { PlayersCard } from './PlayersCard';
import { SettlementCard } from './SettlementCard';
import { MirrorCard } from './MirrorCard';
import { FeedDiagCard } from './FeedDiagCard';
import { WinHouseCard } from './WinHouseCard';
import { BETBY_CONFIG, eventTitle, feedUrl, useBetbyFeed, type BetbyFeed } from '../../lib/betby';
import { cn, formatCurrencyEUR as eur } from '../../lib/utils';

type TabId = 'dashboard' | 'users' | 'bets' | 'settlement' | 'integrations' | 'winhouse' | 'tracker' | 'betby';

const ADMIN_VERSION = 'v2.1';
const panel = 'rounded-xl border border-bet62-border bg-bet62-surface';

// ---------- peças do modelo ----------

function StatCard({ icon, label, value, sub, color = 'red', alert }: { icon: React.ReactNode; label: string; value: string | number; sub?: string; color?: 'red' | 'green' | 'blue' | 'yellow' | 'purple'; alert?: boolean }) {
  const colors = { red: 'text-bet62-primary', green: 'text-emerald-500', blue: 'text-sky-400', yellow: 'text-amber-400', purple: 'text-violet-400' };
  return (
    <div className={cn(panel, 'p-5', alert && 'border-amber-500/40')}>
      <div className="mb-3 flex items-start justify-between">
        <span className={colors[color]}>{icon}</span>
        {alert && <AlertCircle size={14} className="text-amber-400" />}
      </div>
      <div className="mb-1 font-mono text-2xl font-black">{value}</div>
      <div className="text-sm text-white/60">{label}</div>
      {sub && <div className="mt-1 text-xs text-white/40">{sub}</div>}
    </div>
  );
}

interface Stats {
  accounts: boolean;
  users: { total: number; today: number; balance: number };
  bets: { total: number; open: number; review: number; won: number; lost: number; cashout: number; void: number };
  financial: { staked: number; paid: number; inPlay: number; deposited: number; withdrawn: number; margin: number };
  chart: { day: string; bets: number; volume: number }[];
}

function Dashboard({ stats, onGo }: { stats: Stats | null; onGo: (t: TabId) => void }) {
  if (!stats) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-bet62-primary" size={32} /></div>;
  if (!stats.accounts) return <p className={cn(panel, 'p-5 text-sm text-amber-300')}>Base de dados não configurada (DATABASE_URL): sem contas nem apostas.</p>;
  const maxVol = Math.max(0, ...stats.chart.map((r) => r.volume));
  return (
    <div className="space-y-6">
      {stats.bets.review > 0 && (
        <button onClick={() => onGo('settlement')} className="flex w-full items-center gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-left hover:bg-amber-500/15">
          <AlertCircle size={18} className="shrink-0 text-amber-400" />
          <span className="text-sm font-medium text-amber-300">{stats.bets.review} bilhete(s) em análise a aguardar decisão na Liquidação</span>
          <ChevronRight size={16} className="ml-auto shrink-0 text-amber-400" />
        </button>
      )}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={<Users size={20} />} label="Utilizadores" value={stats.users.total} sub={`${stats.users.today} nas últimas 24 h`} color="blue" />
        <StatCard icon={<ListChecks size={20} />} label="Total de Apostas" value={stats.bets.total} sub={`${stats.bets.open} em aberto`} color="yellow" />
        <StatCard icon={<DollarSign size={20} />} label="Volume Apostado" value={eur(stats.financial.staked)} color="green" />
        <StatCard icon={<TrendingUp size={20} />} label="Margem da Casa" value={`${stats.financial.margin}%`} sub="sobre apostas resolvidas" color="red" />
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={<Wallet size={20} />} label="Créditos / Depósitos" value={eur(stats.financial.deposited)} color="purple" />
        <StatCard icon={<CheckCircle2 size={20} />} label="Apostas Ganhas" value={stats.bets.won} sub={`${eur(stats.financial.paid)} pagos`} color="green" />
        <StatCard icon={<XCircle size={20} />} label="Apostas Perdidas" value={stats.bets.lost} color="red" />
        <StatCard icon={<Activity size={20} />} label="Saldo Total Utilizadores" value={eur(stats.users.balance)} sub={`${eur(stats.financial.inPlay)} em jogo`} color="blue" alert={stats.bets.review > 0} />
      </div>
      <div className={cn(panel, 'p-5')}>
        <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-white/80"><Activity size={16} className="text-bet62-primary" /> Volume nos últimos 7 dias</h3>
        <div className="space-y-2">
          {stats.chart.map((row) => (
            <div key={row.day} className="flex items-center gap-2 text-sm">
              <span className="w-14 shrink-0 text-xs text-white/50">{row.day}</span>
              <div className="h-5 min-w-0 flex-1 overflow-hidden rounded bg-bet62-surface-2">
                <motion.div initial={{ width: 0 }} animate={{ width: `${maxVol > 0 ? (row.volume / maxVol) * 100 : 0}%` }} transition={{ duration: 0.8, delay: 0.1 }} className="h-full rounded bg-gradient-to-r from-bet62-accent to-bet62-primary" />
              </div>
              <span className="shrink-0 text-right text-xs text-white/60">
                <span className="hidden sm:inline">{row.bets} apostas • </span>
                {eur(row.volume)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={cn(panel, 'p-5')}>
        <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-white/80"><Trophy size={16} className="text-bet62-primary" /> Distribuição de Apostas</h3>
        <div className="space-y-3">
          {[
            ['Em aberto', stats.bets.open + stats.bets.review, 'bg-white/40'],
            ['Ganhas', stats.bets.won, 'bg-emerald-600'],
            ['Perdidas', stats.bets.lost, 'bg-bet62-primary'],
            ['Cash Out', stats.bets.cashout, 'bg-amber-500'],
            ['Anuladas', stats.bets.void, 'bg-white/20'],
          ].map(([label, value, cls]) => (
            <div key={String(label)} className="flex items-center gap-3 text-sm">
              <span className="w-20 shrink-0 text-xs text-white/60">{label}</span>
              <div className="h-3 flex-1 overflow-hidden rounded bg-bet62-surface-2">
                <motion.div initial={{ width: 0 }} animate={{ width: `${stats.bets.total > 0 ? (Number(value) / stats.bets.total) * 100 : 0}%` }} transition={{ duration: 0.8 }} className={cn('h-full rounded', String(cls))} />
              </div>
              <span className="w-12 text-right text-xs text-white/60">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const BET_STATUS: Record<string, [string, string]> = {
  open: ['Em aberto', 'bg-sky-500/15 text-sky-300'],
  review: ['Em análise', 'bg-amber-500/15 text-amber-300'],
  won: ['Ganha', 'bg-emerald-500/15 text-emerald-400'],
  lost: ['Perdida', 'bg-rose-500/15 text-rose-400'],
  cashout: ['Cash Out', 'bg-yellow-500/15 text-yellow-400'],
  void: ['Anulada', 'bg-white/10 text-white/60'],
  rejected: ['Recusada', 'bg-white/10 text-white/60'],
};

interface AdminBet { id: string; ref: string; kind: string; status: string; email: string; stake: number; odds: number; potential: number; payout: number; oddsCheck: string; legs: string | null; createdAt: string }

function BetsTab({ reloadKey }: { reloadKey: number }) {
  const [status, setStatus] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [bets, setBets] = React.useState<AdminBet[] | null>(null);
  const load = React.useCallback(async (query = q) => {
    setBets(null);
    const r = await fetch(`/api/admin/bets?status=${status}&q=${encodeURIComponent(query)}`, { cache: 'no-store' });
    const j = await r.json().catch(() => ({}));
    setBets(j.bets ?? []);
  }, [status, q]);
  React.useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, reloadKey]);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {[['all', 'Todas'], ['open', 'Em aberto'], ['won', 'Ganhas'], ['lost', 'Perdidas'], ['cashout', 'Cash Out'], ['void', 'Anuladas']].map(([k, l]) => (
          <button key={k} onClick={() => setStatus(k)} className={cn('rounded-lg border px-3 py-1.5 text-xs font-bold', status === k ? 'border-bet62-primary/40 bg-bet62-primary/15 text-bet62-primary' : 'border-bet62-border text-white/60 hover:text-white')}>
            {l}
          </button>
        ))}
        <form onSubmit={(e) => { e.preventDefault(); void load(); }} className="ml-auto flex items-center gap-2">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="E-mail ou B62-…" className="w-44 rounded-lg border border-bet62-border bg-bet62-bg px-2.5 py-1.5 text-sm outline-none focus:border-bet62-primary" />
          <button className="rounded-lg border border-bet62-border p-2" aria-label="Pesquisar"><Search size={14} /></button>
        </form>
      </div>
      <div className={cn(panel, 'overflow-x-auto')}>
        {bets === null ? (
          <div className="flex justify-center py-12"><Loader2 className="animate-spin text-bet62-primary" /></div>
        ) : !bets.length ? (
          <p className="p-6 text-center text-sm text-white/50">Sem apostas.</p>
        ) : (
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="border-b border-bet62-border text-left text-xs text-white/50">
                <th className="p-3">Ref</th><th className="p-3">Jogador</th><th className="p-3">Seleções</th><th className="p-3 text-right">Aposta</th><th className="p-3 text-right">Odd</th><th className="p-3 text-right">Retorno</th><th className="p-3">Estado</th><th className="p-3">Data</th>
              </tr>
            </thead>
            <tbody>
              {bets.map((b) => {
                const [label, cls] = BET_STATUS[b.status] ?? [b.status, 'bg-white/10'];
                return (
                  <tr key={b.id} className="border-b border-bet62-border/50 last:border-0 hover:bg-bet62-surface-2/60">
                    <td className="p-3 font-mono text-xs">{b.ref}</td>
                    <td className="max-w-[160px] truncate p-3 text-xs">{b.email}</td>
                    <td className="max-w-[260px] truncate p-3 text-xs text-white/70" title={b.legs ?? ''}>{b.kind === 'single' ? '' : `${b.kind === 'builder' ? 'Criador' : 'Múltipla'} · `}{b.legs}</td>
                    <td className="p-3 text-right font-mono">{eur(b.stake)}</td>
                    <td className="p-3 text-right font-mono">{b.odds.toFixed(2)}</td>
                    <td className="p-3 text-right font-mono">{eur(b.status === 'open' || b.status === 'review' ? b.potential : b.payout)}</td>
                    <td className="p-3">
                      <span className={cn('inline-flex rounded px-2 py-0.5 text-xs font-medium', cls)}>{label}</span>
                      {b.oddsCheck === 'mismatch' && <span className="ml-1 text-[10px] text-rose-400">odd ≠ BETBY</span>}
                    </td>
                    <td className="whitespace-nowrap p-3 text-xs text-white/50">{new Date(b.createdAt).toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// Diagnóstico das URLs da BETBY, lidas no navegador de quem abre esta página.
function FeedCard({ feed }: { feed: BetbyFeed }) {
  const { events, dictionaries, loading, error, updatedAt, reload } = useBetbyFeed(feed);
  const withNames = events.filter((e) => e.desc?.competitors?.length).length;
  const withOdds = events.filter((e) => Object.keys(e.markets).length).length;
  const withScore = events.filter((e) => e.score).length;
  const sample = events.find((e) => e.desc?.competitors?.length && Object.keys(e.markets).length) ?? events[0];
  const ok = !error && events.length > 0;
  return (
    <div className={cn(panel, 'space-y-3 p-5 text-sm', error && 'border-bet62-primary/50')}>
      <div className="flex flex-wrap items-center gap-2">
        {ok ? <CheckCircle2 size={18} className="text-emerald-400" /> : <AlertTriangle size={18} className="text-bet62-primary" />}
        <span className="font-bold uppercase tracking-wide">{feed}</span>
        <span className={cn('rounded px-2 py-0.5 text-xs font-medium', error ? 'bg-rose-500/15 text-rose-400' : 'bg-emerald-500/15 text-emerald-400')}>{loading ? 'a ler…' : error ? 'erro' : 'ok'}</span>
        <span className="text-white/50">{events.length} jogos</span>
        <button className="ml-auto rounded-lg p-1.5 text-white/60 hover:text-white" onClick={() => void reload()} aria-label="Atualizar"><RefreshCw size={14} /></button>
      </div>
      <p className="break-all font-mono text-xs text-white/50">{feedUrl(feed, 0)}</p>
      {error && <pre className="whitespace-pre-wrap rounded-xl border border-bet62-border bg-bet62-bg p-3 text-xs text-white/70">{error}</pre>}
      <p className="text-white/80">
        com nomes: <b>{withNames}</b> · com odds: {withOdds} · com placar: {withScore} · desportos: {Object.keys(dictionaries.sports).length} · torneios: {Object.keys(dictionaries.tournaments).length}
      </p>
      {sample && (
        <details>
          <summary className="cursor-pointer text-white/60">Exemplo: {eventTitle(sample)}</summary>
          <pre className="mt-2 max-h-64 overflow-auto whitespace-pre-wrap break-all font-mono text-xs text-white/60">{JSON.stringify(sample, null, 1).slice(0, 3000)}</pre>
        </details>
      )}
      <p className="text-xs text-white/40">Atualizado: {updatedAt ? updatedAt.toLocaleTimeString('pt-PT') : '—'}</p>
    </div>
  );
}

// ---------- entrada ----------

function Login({ onDone }: { onDone: () => void }) {
  const [password, setPassword] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) }).catch(() => null);
    setBusy(false);
    if (!res?.ok) return setError(res?.status === 429 ? 'Demasiadas tentativas. Aguarde um minuto.' : 'Senha incorreta.');
    setPassword('');
    onDone();
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-bet62-bg p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-bet62-primary/30 bg-bet62-primary/20">
            <ShieldCheck className="text-bet62-primary" size={28} />
          </div>
          <div className="mb-1 text-3xl font-black italic tracking-tighter"><span>BET</span><span className="text-bet62-primary">62</span></div>
          <p className="text-sm text-white/50">Painel Administrativo</p>
        </div>
        <form onSubmit={(e) => void submit(e)} className={cn(panel, 'space-y-4 rounded-2xl p-6')}>
          <label className="block space-y-2">
            <span className="text-sm text-white/60">Senha</span>
            <span className="relative block">
              <input type={show ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required autoFocus autoComplete="current-password"
                className="h-11 w-full rounded-lg border border-bet62-border bg-bet62-bg px-3 pr-10 outline-none focus:border-bet62-primary" />
              <button type="button" onClick={() => setShow((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white" aria-label={show ? 'Esconder senha' : 'Mostrar senha'}>
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </span>
          </label>
          {error && <p className="text-sm text-rose-400">{error}</p>}
          <button type="submit" disabled={busy} className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-bet62-primary font-bold text-onbrand hover:brightness-110 disabled:opacity-60">
            {busy ? <Loader2 className="animate-spin" size={16} /> : <ShieldCheck size={16} />} ENTRAR NO PAINEL
          </button>
        </form>
      </motion.div>
    </div>
  );
}

// ---------- página ----------

export default function AdminPage() {
  const [authorized, setAuthorized] = React.useState<boolean | null>(null);
  const [tab, setTab] = React.useState<TabId>('dashboard');
  const [drawer, setDrawer] = React.useState(false);
  const [stats, setStats] = React.useState<Stats | null>(null);
  const [reloadKey, setReloadKey] = React.useState(0);

  const check = React.useCallback(async () => {
    const res = await fetch('/api/admin/login', { cache: 'no-store' }).catch(() => null);
    setAuthorized(Boolean(res?.ok));
  }, []);
  React.useEffect(() => void check(), [check]);

  const [statsError, setStatsError] = React.useState<string | null>(null);
  const loadStats = React.useCallback(async () => {
    // Sem resposta em 15 s: mostra o erro em vez de ficar a carregar para sempre.
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 15_000);
    try {
      const r = await fetch('/api/admin/stats', { cache: 'no-store', signal: ctl.signal });
      if (r.ok) {
        setStats(await r.json());
        setStatsError(null);
      } else setStatsError(`O servidor respondeu HTTP ${r.status}${r.status === 401 ? ' (sessão de admin expirada: entre de novo)' : ''}.`);
    } catch (e) {
      setStatsError((e as Error).name === 'AbortError' ? 'O servidor não respondeu em 15 s (pode estar sobrecarregado).' : `Sem ligação ao servidor: ${(e as Error).message}`);
    } finally {
      clearTimeout(t);
    }
  }, []);
  React.useEffect(() => {
    if (!authorized) return;
    void loadStats();
    const t = setInterval(() => void loadStats(), 60_000);
    return () => clearInterval(t);
  }, [authorized, loadStats]);

  if (authorized === null) return <div className="flex min-h-screen items-center justify-center bg-bet62-bg"><Loader2 className="animate-spin text-bet62-primary" size={28} /></div>;
  if (!authorized) return <Login onDone={() => void check()} />;

  const tabs: { id: TabId; icon: React.ReactNode; label: string; title: string; badge?: number | null; section: 'core' | 'pro' }[] = [
    { id: 'dashboard', icon: <LayoutDashboard size={18} />, label: 'Dashboard', title: 'Visão Geral', section: 'core' },
    { id: 'users', icon: <Users size={18} />, label: 'Utilizadores', title: 'Utilizadores', section: 'core' },
    { id: 'bets', icon: <ListChecks size={18} />, label: 'Apostas', title: 'Apostas', section: 'core' },
    { id: 'settlement', icon: <Gavel size={18} />, label: 'Liquidação', title: 'Liquidação', badge: stats?.bets?.review || null, section: 'core' },
    { id: 'integrations', icon: <Plug size={18} />, label: 'Integrações', title: 'Integrações do servidor', section: 'pro' },
    { id: 'winhouse', icon: <Server size={18} />, label: 'WinHouse', title: 'WinHouse (dados do servidor)', section: 'pro' },
    { id: 'tracker', icon: <Settings size={18} />, label: 'Minicampo', title: 'Minicampo', section: 'pro' },
    { id: 'betby', icon: <Radar size={18} />, label: 'BETBY', title: 'Explorador BETBY', section: 'pro' },
  ];
  const current = tabs.find((t) => t.id === tab)!;
  const go = (t: TabId) => {
    setTab(t);
    setDrawer(false);
  };
  const refresh = () => {
    void loadStats();
    setReloadKey((k) => k + 1);
  };
  const logout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    await check();
  };

  const Sidebar = () => (
    <>
      <div className="flex items-center justify-between border-b border-bet62-border p-4">
        <div className="text-xl font-black italic tracking-tighter">
          <span>BET</span>
          <span className="text-bet62-primary">62</span>
          <span className="ml-2 text-xs font-normal not-italic text-white/50">Admin</span>
          <span className="ml-1 rounded bg-bet62-primary/20 px-1 text-[10px] font-bold not-italic text-bet62-primary">{ADMIN_VERSION}</span>
        </div>
        <button onClick={() => setDrawer(false)} className="p-1 text-white/50 hover:text-white md:hidden" aria-label="Fechar"><X size={18} /></button>
      </div>
      <nav className="flex-1 space-y-0.5 overflow-y-auto p-2">
        {(['core', 'pro'] as const).map((sec) => (
          <React.Fragment key={sec}>
            <div className={cn('px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-white/40', sec === 'core' ? 'pt-2' : 'mt-1 border-t border-bet62-border/60 pt-3')}>
              {sec === 'core' ? 'Operações' : 'Avançado'}
            </div>
            {tabs.filter((t) => t.section === sec).map((t) => (
              <button
                key={t.id}
                onClick={() => go(t.id)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors',
                  tab === t.id ? 'border-bet62-primary/30 bg-bet62-primary/20 text-bet62-primary' : 'border-transparent text-white/60 hover:bg-bet62-surface-2 hover:text-white',
                )}
              >
                {t.icon}
                <span className="flex-1 text-left">{t.label}</span>
                {t.badge ? <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-bet62-primary px-1 text-xs font-bold text-onbrand">{t.badge}</span> : null}
              </button>
            ))}
          </React.Fragment>
        ))}
      </nav>
      <div className="border-t border-bet62-border p-3">
        <div className="mb-2 truncate px-2 font-mono text-[11px] text-white/40">{BETBY_CONFIG.brandId}</div>
        <button onClick={() => void logout()} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/50 transition-colors hover:bg-bet62-primary/10 hover:text-bet62-primary">
          <LogOut size={18} /> <span>Sair</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-bet62-bg">
      {/* Telemóvel: gaveta */}
      <AnimatePresence>
        {drawer && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/70 md:hidden" onClick={() => setDrawer(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {drawer && (
          <motion.aside initial={{ x: -256 }} animate={{ x: 0 }} exit={{ x: -256 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 top-0 z-50 flex w-64 flex-col border-r border-bet62-border bg-bet62-surface md:hidden" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
            <Sidebar />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* PC: menu lateral */}
      <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col overflow-y-auto border-r border-bet62-border bg-bet62-surface md:flex">
        <Sidebar />
      </aside>

      <main className="min-w-0 flex-1 pb-20 md:pb-0">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-bet62-border bg-bet62-bg/90 px-3 py-3 backdrop-blur sm:px-6 sm:py-4" style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}>
          <div className="flex min-w-0 items-center gap-3">
            <button onClick={() => setDrawer(true)} className="-ml-1 p-1 text-white/60 hover:text-white md:hidden" aria-label="Menu"><Menu size={20} /></button>
            <h1 className="truncate text-base font-bold sm:text-lg">{current.title}</h1>
          </div>
          <button onClick={refresh} className="flex shrink-0 items-center gap-2 text-xs text-white/50 transition-colors hover:text-white">
            <RefreshCw size={14} /> <span className="hidden sm:block">Atualizar</span>
          </button>
        </div>

        <div className="flex flex-col gap-6 p-3 sm:p-6">
          {tab === 'dashboard' && statsError && !stats && (
            <div className={cn(panel, 'space-y-3 p-5 text-sm')}>
              <p className="flex items-center gap-2 font-semibold text-amber-400"><AlertTriangle size={16} /> Não foi possível carregar a visão geral</p>
              <p className="text-white/60">{statsError}</p>
              <div className="flex gap-2">
                <button onClick={() => void loadStats()} className="rounded-lg bg-bet62-primary px-3 py-2 text-xs font-bold text-onbrand">Tentar de novo</button>
                <a href="/api/health" target="_blank" rel="noreferrer" className="rounded-lg border border-bet62-border px-3 py-2 text-xs font-bold">Ver saúde do servidor</a>
              </div>
            </div>
          )}
          {tab === 'dashboard' && !(statsError && !stats) && <Dashboard stats={stats} onGo={go} />}
          {tab === 'users' && <PlayersCard key={reloadKey} />}
          {tab === 'bets' && <BetsTab reloadKey={reloadKey} />}
          {/* A Liquidação fica sempre montada (escondida nas outras secções): é ela que lê a BETBY
              e envia resultados e odds ao servidor enquanto o painel está aberto. */}
          <div className={tab === 'settlement' ? 'space-y-6' : 'hidden'}>
            <MirrorCard />
            <SettlementCard />
          </div>
          {tab === 'integrations' && (
            <>
              <div className={cn(panel, 'break-all p-4 font-mono text-xs text-white/70')}>
                base: {BETBY_CONFIG.baseUrl} · brand: {BETBY_CONFIG.brandId} · locale: {BETBY_CONFIG.locale}
              </div>
              <IntegrationsCard key={reloadKey} />
            </>
          )}
          {tab === 'winhouse' && <WinHouseCard key={reloadKey} />}
          {tab === 'tracker' && <TrackerSizeCard key={reloadKey} />}
          {tab === 'betby' && (
            <>
              <FeedDiagCard />
              <BetbyExplorer />
              <FeedCard feed="live" />
              <FeedCard feed="prematch" />
            </>
          )}
        </div>
      </main>

      {/* Telemóvel: menu inferior */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 flex border-t border-bet62-border bg-bet62-surface md:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {([
          ['dashboard', <LayoutDashboard key="d" size={20} />, 'Início'],
          ['users', <Users key="u" size={20} />, 'Users'],
          ['bets', <ListChecks key="b" size={20} />, 'Apostas'],
          ['settlement', <Gavel key="s" size={20} />, 'Liquidação'],
        ] as const).map(([id, icon, label]) => (
          <button key={id} onClick={() => go(id)} className={cn('relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-medium transition-colors', tab === id ? 'text-bet62-primary' : 'text-white/50')}>
            {id === 'settlement' && stats?.bets?.review ? (
              <span className="absolute right-[calc(50%-14px)] top-1.5 flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-bet62-primary px-0.5 text-[9px] font-bold text-onbrand">{stats.bets.review}</span>
            ) : null}
            {icon}
            <span>{label}</span>
          </button>
        ))}
        <button onClick={() => setDrawer(true)} className="flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-medium text-white/50">
          <Settings size={20} />
          <span>Mais</span>
        </button>
      </nav>
    </div>
  );
}
