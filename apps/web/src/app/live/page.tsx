'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Radio,
  Target,
  CircleDot,
  Swords,
  Trophy,
  Flame,
  Search,
  ChevronRight,
  Zap,
  Timer,
  Activity,
  Star,
  CircleUser,
  Info,
  Server,
  KeyRound,
  ExternalLink,
  RefreshCw,
  AlertTriangle,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Betslip, FloatingBetslipToggle } from '../../components/layout/Betslip';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Input } from '../../components/ui/Input';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import { Button } from '../../components/ui/Button';
import { cn, formatOdds } from '../../lib/utils';
import { apiClient } from '../../lib/api-client';
import { useBetslipStore, type BetslipSelection } from '../../stores/betslip.store';

const SPORTS = [
  { label: 'Todos', icon: Star, id: 'all' },
  { label: 'Futebol', icon: CircleDot, id: 'FOOTBALL' },
  { label: 'Basquete', icon: CircleDot, id: 'BASKETBALL' },
  { label: 'Tênis', icon: Target, id: 'TENNIS' },
  { label: 'Voleibol', icon: CircleDot, id: 'VOLLEYBALL' },
  { label: 'Hóquei', icon: CircleDot, id: 'HOCKEY' },
  { label: 'MMA / UFC', icon: Swords, id: 'UFC' },
  { label: 'Dardos', icon: Trophy, id: 'DARTS' },
];

type LiveScore = { home?: number | null; away?: number | null; homeHalf?: number | null; awayHalf?: number | null };
type LiveClock = { minute?: number | null; injuryMinutes?: number | null; status?: string };
type LiveMarketSelection = { id: string; name: string; odds: number; outcome?: string; status?: string };
type LiveMarket = { id: string; type?: string; name: string; status?: string; selections: LiveMarketSelection[] };
type EventSources = { data: string; stats: string; odds: string; settlement: string };
type LiveEvent = {
  id: string;
  matchId?: string;
  providerEventId?: string;
  sportType: string;
  name: string;
  homeTeamName?: string;
  awayTeamName?: string;
  leagueId?: string;
  leagueName?: string;
  status: string;
  kickoffAt: string | Date;
  liveUpdatedAt?: string | Date;
  liveScoreJson?: LiveScore | null;
  liveClockJson?: LiveClock | null;
  liveStreamAvailable?: boolean;
  markets?: LiveMarket[];
  marketsCount?: number;
  sources?: EventSources;
};

function SkeletonMatchCard({ i }: { i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.03 * i }}
    >
      <Card className="overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] divide-y lg:divide-y-0 lg:divide-x divide-bet62-border/60">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-28 rounded-md bg-bet62-surface/40 animate-pulse" />
                <div className="h-4 w-20 rounded-full bg-bet62-surface/40 animate-pulse" />
              </div>
              <div className="h-4 w-32 rounded-md bg-bet62-surface/40 animate-pulse" />
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-bet62-surface/40 animate-pulse" />
                  <div className="h-5 w-40 rounded bg-bet62-surface/40 animate-pulse" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-bet62-surface/40 animate-pulse" />
                  <div className="h-5 w-40 rounded bg-bet62-surface/40 animate-pulse" />
                </div>
              </div>
              <div className="text-center shrink-0">
                <div className="inline-flex flex-col items-center px-4 py-2 rounded-2xl border border-bet62-border bg-bet62-bg/60">
                  <div className="h-12 w-32 rounded bg-bet62-surface/40 animate-pulse" />
                  <div className="h-3 w-20 rounded bg-bet62-surface/40 animate-pulse mt-2" />
                </div>
              </div>
            </div>
          </CardContent>
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[0, 1, 2, 3, 4, 5].map((k) => (
                <div key={k} className="h-10 rounded-full bg-bet62-surface/40 animate-pulse" />
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-3 w-40 rounded bg-bet62-surface/40 animate-pulse" />
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((k) => (
                  <div key={k} className="h-14 rounded-xl bg-bet62-surface/40 animate-pulse" />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[0, 1].map((k) => (
                  <div key={k} className="h-11 rounded-xl bg-bet62-surface/40 animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

interface QuickSelectPayload {
  market: string;
  sel: string;
  odds: number;
  selName: string;
  marketName: string;
}

function LiveEventCard({
  event,
  onOpenMarkets,
  onSelect,
}: {
  event: LiveEvent;
  onOpenMarkets: (e: LiveEvent) => void;
  onSelect: (event: LiveEvent, payload: QuickSelectPayload) => void;
}) {
  const score: LiveScore = event.liveScoreJson ?? ({} as LiveScore);
  const clock: LiveClock = event.liveClockJson ?? ({} as LiveClock);
  const homeName = event.homeTeamName ?? event.name.split(' vs ')[0] ?? 'Casa';
  const awayName = event.awayTeamName ?? event.name.split(' vs ')[1] ?? 'Fora';
  const min = typeof clock.minute === 'number' ? `${clock.minute}'` : event.status;
  const mainMarket: LiveMarket | undefined = event.markets?.[0];
  const selections: LiveMarketSelection[] = mainMarket?.selections ?? [];
  while (selections.length < 3) selections.push({ id: `f${selections.length}`, name: '-', odds: 0, status: 'suspended' });
  const sourceLabel =
    event.sportType === 'FOOTBALL'
      ? 'Goal API + PropLine'
      : event.sources?.odds === 'propline'
        ? 'PropLine'
        : event.sportType;

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card
        role="button"
        tabIndex={0}
        onClick={() => onOpenMarkets(event)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onOpenMarkets(event);
        }}
        className="overflow-hidden hover:border-bet62-primary/40 transition group cursor-pointer"
      >
        <div className="h-1 bg-bet62-primary/60 animate-pulse-slow" />
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] divide-y lg:divide-y-0 lg:divide-x divide-bet62-border/60">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="green" dot className="!py-1 text-xs">
                <Radio size={12} /> {event.leagueName ?? event.sportType}
              </Badge>
              <Badge variant="danger" dot className="!py-1 text-xs">
                <Timer size={12} /> {min}
              </Badge>
            </div>
            <p className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">
              Fontes: {sourceLabel}
            </p>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <div className="space-y-3 min-w-0">
                <div className="flex items-center gap-3">
                  <CircleUser size={30} className="shrink-0 text-bet62-surface-2" />
                  <p className="font-bold truncate">{homeName}</p>
                </div>
                <div className="flex items-center gap-3">
                  <CircleUser size={30} className="shrink-0 text-bet62-surface-2" />
                  <p className="font-bold truncate">{awayName}</p>
                </div>
              </div>
              <div className="text-center shrink-0">
                <div className="inline-flex flex-col items-center px-4 py-2 rounded-2xl border border-bet62-border bg-bet62-bg/60">
                  <p className="font-mono font-black text-3xl text-bet62-primary leading-none">
                    {score.home ?? 0} - {score.away ?? 0}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono mt-2">
                    Intervalo {score.homeHalf ?? 0}-{score.awayHalf ?? 0}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-3 gap-3">
              {selections.slice(0, 3).map((s) => (
                <Button
                  key={s.id}
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(event, {
                      market: mainMarket?.id ?? 'main',
                      sel: s.id,
                      odds: s.odds,
                      selName: s.name,
                      marketName: mainMarket?.name ?? 'Resultado Final',
                    });
                  }}
                  className="h-auto py-3 flex-col items-start text-left group/sel hover:!bg-bet62-primary/10 hover:!border-bet62-primary/40 border border-bet62-border rounded-2xl"
                  disabled={s.status === 'suspended' || !s.odds || s.odds < 1.01}
                >
                  <span className="text-[11px] uppercase tracking-wider text-white/50">{s.name}</span>
                  <span className={cn('font-mono text-xl font-black mt-1', s.odds >= 1.01 ? 'text-bet62-primary' : 'text-white/30')}>
                    {s.odds >= 1.01 ? formatOdds(s.odds) : '—'}
                  </span>
                </Button>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wider text-white/50 font-bold">Mercados</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenMarkets(event);
                  }}
                  className="!p-1 text-xs text-bet62-primary"
                >
                  Ver todos <ChevronRight size={14} />
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['1X2', 'Handicap', 'Total Gols'].map((m, idx) => (
                  <div
                    key={m}
                    className="rounded-xl border border-bet62-border/60 p-3 bg-bet62-bg/40 text-sm text-white/60 flex items-center justify-between"
                  >
                    <span>{m}</span>
                    <ChevronRight size={14} className="text-white/30 group-hover:text-bet62-primary transition" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-bet62-border/60 p-3 bg-bet62-bg/40 text-sm text-white/60 flex items-center justify-between">
                  <span>Estatísticas</span>
                  <Activity size={14} className="text-white/30 group-hover:text-bet62-primary transition" />
                </div>
                <div className="rounded-xl border border-bet62-border/60 p-3 bg-bet62-bg/40 text-sm text-white/60 flex items-center justify-between">
                  <span>Cashout disponível</span>
                  <Badge variant="blue" dot className="!py-0.5 text-[10px]">
                    LIVE
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

export default function LivePage() {
  const router = useRouter();
  void router;
  const [betslipOpen, setBetslipOpen] = React.useState(false);
  const addSelection = useBetslipStore((s) => s.addSelection);
  const [sport, setSport] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [events, setEvents] = React.useState<LiveEvent[]>([]);
  const [refetchAt, setRefetchAt] = React.useState<number>(Date.now());
  const lastSetEventsAt = React.useRef<number>(0);
  const lastSportRef = React.useRef<string>('all');

  React.useEffect(() => {
    const t = window.setInterval(() => setRefetchAt(Date.now()), 30_000);
    return () => window.clearInterval(t);
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    const firstRun = loading || lastSportRef.current !== sport;
    lastSportRef.current = sport;
    if (firstRun) setLoading(true);
    const run = async () => {
      try {
        const mainReq = apiClient.get<{ events: LiveEvent[]; total: number }>('/odds/events/live', {
          auth: false,
          params: sport !== 'all'
            ? { limit: 100, sports: [sport] }
            : { limit: 100 },
        });
        const footballLiveReq = sport !== 'all' && sport !== 'FOOTBALL'
          ? Promise.resolve({ events: [] as LiveEvent[], total: 0 })
          : (async () => {
              try {
                return await apiClient.get<{ events: LiveEvent[]; total: number }>('/odds/events/live?sports=FOOTBALL&limit=50', { auth: false });
              } catch {
                return { events: [] as LiveEvent[], total: 0 };
              }
            })();
        const footballPrematchReq = sport !== 'all' && sport !== 'FOOTBALL'
          ? Promise.resolve({ events: [] as LiveEvent[], total: 0 })
          : (async () => {
              try {
                return await apiClient.get<{ events: LiveEvent[]; total: number }>('/odds/events/prematch?sports=FOOTBALL&limit=30', { auth: false });
              } catch {
                return { events: [] as LiveEvent[], total: 0 };
              }
            })();
        const [res, footballLiveExtra, footballPrematchExtra] = await Promise.all([mainReq, footballLiveReq, footballPrematchReq]);
        if (cancelled) return;
        const now = Date.now();
        const isLiveStatus = (s: string) => s === 'LIVE' || s === 'HALF_TIME' || s === 'HT' || s === 'IN_PLAY';
        const k = (ev: LiveEvent) => { const t = new Date(ev.kickoffAt).getTime(); return Number.isFinite(t) ? t : now; };
        const hasMarkets = (ev: LiveEvent): boolean => {
          const m = (ev as unknown as { markets?: unknown[] }).markets;
          return Array.isArray(m) && m.length > 0;
        };
        const seen = new Set<string>();
        const merged: LiveEvent[] = [];
        for (const ev of [...(footballLiveExtra?.events ?? []), ...(footballPrematchExtra?.events ?? []), ...(res?.events ?? [])]) {
          if (!ev || !ev.id) continue;
          if (seen.has(ev.id)) {
            const prev = merged.find((m) => m.id === ev.id);
            if (prev && !hasMarkets(prev) && hasMarkets(ev)) {
              (prev as unknown as { markets: unknown[] }).markets = (ev as unknown as { markets: unknown[] }).markets;
            }
            continue;
          }
          seen.add(ev.id);
          merged.push(ev);
        }
        const liveOnly = merged.filter(ev => isLiveStatus(ev.status));
        const futureCutoffMs = now - 180 * 60 * 1000;
        const futureOrRecent = merged.filter(ev => {
          if (isLiveStatus(ev.status)) return false;
          const t = k(ev);
          return t >= futureCutoffMs;
        }).sort((a, b) => k(a) - k(b));
        const final = liveOnly.length > 0
          ? liveOnly
          : [...futureOrRecent].slice(0, 30);
        const count = final.length;
        const nowTs = Date.now();
        if (firstRun || count > 0 || nowTs - lastSetEventsAt.current > 60_000) {
          setEvents(final);
          lastSetEventsAt.current = nowTs;
        }
        if (typeof console !== 'undefined') {
          // eslint-disable-next-line no-console
          console.table({
            'Live fetch (200 OK)': firstRun ? '1ª carga OK' : 'Refresh OK',
            'Desporto selecionado': sport,
            'Ao vivo (status LIVE/HT)': liveOnly.length,
            'Futebol Goal API extra LIVE': footballLiveExtra?.events?.length ?? 0,
            'Futebol Goal API extra PRÉ-JOGO': footballPrematchExtra?.events?.length ?? 0,
            'Total unicos merge + odds cross-over': merged.length,
            'Total mostrados (fallback incluso)': count,
            'Total backend': res?.total ?? 'N/A',
            'API Keys?': count === 0 ? '⚠️  VERIFICAR RAILWAY PROPLINE_API_KEY + GOAL_API_KEY' : '✅ OK',
          });
        }
        if (!firstRun) setError(null);
      } catch (err) {
        if (cancelled) return;
        const msg = err instanceof Error ? err.message : 'Erro ao carregar jogos ao vivo';
        if (firstRun || events.length === 0) setError(msg);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, [sport, refetchAt]);

  const filtered = React.useMemo(() => {
    if (!search.trim()) return events;
    const s = search.toLowerCase();
    return events.filter((e) => {
      return (
        e.name.toLowerCase().includes(s) ||
        (e.homeTeamName ?? '').toLowerCase().includes(s) ||
        (e.awayTeamName ?? '').toLowerCase().includes(s) ||
        (e.leagueName ?? '').toLowerCase().includes(s)
      );
    });
  }, [events, search]);

  const liveCount = filtered.length;

  const handleOpenMarkets = React.useCallback(
    (event: LiveEvent) => {
      router.push(`/live/match/${encodeURIComponent(event.id)}`);
    },
    [router],
  );

  const handleSelect = (event: LiveEvent, payload: QuickSelectPayload) => {
    const homeName = event.homeTeamName ?? event.name.split(' vs ')[0] ?? 'Casa';
    const awayName = event.awayTeamName ?? event.name.split(' vs ')[1] ?? 'Fora';
    const sel: BetslipSelection = {
      id: `${event.id}-${payload.market}-${payload.sel}`,
      eventId: event.id,
      marketId: `${event.id}-${payload.market}`,
      selectionId: `${event.id}-${payload.market}-${payload.sel}`,
      selectionName: payload.selName,
      marketName: payload.marketName,
      eventName: `${homeName} vs ${awayName} · ${event.leagueName ?? event.sportType}`,
      kickoffAt: new Date(event.kickoffAt).toISOString(),
      odds: payload.odds,
      marketType: '1X2',
      outcome: payload.sel,
    };
    addSelection(sel);
    setBetslipOpen(true);
  };

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      {error ? (
        <div className="relative z-40 mx-4 mt-4 max-w-[1700px] lg:mx-auto lg:px-8">
          <Card className="border-red-500/40 bg-red-500/5 backdrop-blur-xl shadow-xl shadow-red-900/20">
            <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                  <AlertTriangle size={20} className="text-red-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-red-300 text-sm flex items-center gap-2">
                    <span className="uppercase tracking-widest text-[10px] px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20">Erro</span>
                    Não foi possível carregar jogos ao vivo
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-white/65 font-mono truncate max-w-full">
                    {error}
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/40">
                    Tentativa automática em 15s · Clica em "Tentar novamente"
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setRefetchAt(Date.now())}
                className="shrink-0 w-full sm:w-auto border-red-500/30 hover:!bg-red-500/10 hover:!border-red-500/60 transition"
              >
                <RefreshCw size={14} /> Tentar novamente
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : null}

      {!loading && !error && filtered.length === 0 ? (
        <div className="relative z-39 mx-4 mt-4 max-w-[1700px] lg:mx-auto lg:px-8">
          <Card className="border-amber-500/30 bg-amber-500/5 backdrop-blur-xl shadow-xl shadow-amber-900/10">
            <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mt-0.5">
                <Info size={20} className="text-amber-400" />
              </div>
              <div className="flex-1 min-w-0 space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="amber" className="uppercase tracking-widest text-[10px] px-2 py-0.5">
                    <Server size={10} className="mr-1" /> Sem eventos ao vivo
                  </Badge>
                  <span className="text-xs text-white/45 font-mono">
                    HTTP 200 · filtered.length=0 · sport="{sport}"
                  </span>
                </div>
                <p className="font-bold text-amber-200 text-sm">
                  Nenhum jogo ao vivo neste momento (HTTP 200, sem erro de rede)
                </p>
                <ol className="list-decimal pl-4 marker:text-amber-400 marker:font-bold space-y-1.5 text-xs text-white/70 leading-relaxed">
                  <li>
                    <span className="font-semibold text-white/85">Muda para o separador "Todos":</span> o filtro "{sport}" pode estar a excluir jogos. Clica em <Badge variant="outline" className="!py-0 text-[10px] px-1.5 mx-1 inline-flex align-middle">Todos</Badge> nas tabs acima.
                  </li>
                  <li>
                    <span className="font-semibold text-white/85">Aguarda sincronização inicial Railway:</span> a primeira carga (cold start) demora 60-120s. Clica em "Tentar novamente" ao fim de 2 minutos.
                  </li>
                  <li>
                    <span className="font-semibold text-white/85"><KeyRound size={12} className="inline mr-1" /> Variáveis Railway:</span> confirmar que <code className="font-mono text-[11px] bg-bet62-surface border border-bet62-border rounded px-1.5 py-0.5">PROPLINE_API_KEY</code> e <code className="font-mono text-[11px] bg-bet62-surface border border-bet62-border rounded px-1.5 py-0.5">GOAL_API_KEY</code> são reais, não placeholder.
                  </li>
                  <li>
                    <span className="font-semibold text-white/85">DevTools Console:</span> procura por <code className="font-mono text-[11px] bg-bet62-surface border border-bet62-border rounded px-1.5 py-0.5">console.table</code> (BET62) com contagens e sugestões.
                  </li>
                </ol>
                <div className="pt-1 flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { setSport('all'); setRefetchAt(Date.now()); }}
                    className="border-amber-500/30 hover:!bg-amber-500/10 hover:!border-amber-500/60 transition text-amber-100"
                  >
                    <RefreshCw size={14} /> Mostrar Todos + Re-sincronizar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}
      <main className="relative">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-bet62-primary/10 via-bet62-accent/5 to-transparent pointer-events-none" />
        <div className="relative max-w-[1700px] mx-auto px-4 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-bet62-border p-6 md:p-8 bg-bet62-glass backdrop-blur-xl mb-8 overflow-hidden relative"
          >
            <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-bet62-primary/20 blur-3xl animate-pulse-slow" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                  <Radio size={14} className={cn('text-bet62-primary', loading && 'animate-pulse')} />
                  MERCADO AO VIVO · {loading ? 'A sincronizar com provedores...' : 'Dados em tempo real (15s refresh)'}
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                  <span className="inline-flex items-center gap-3">
                    <span className="relative inline-flex">
                      <Flame size={36} className="text-bet62-primary animate-pulse-slow" />
                      <span className="absolute inset-0 blur-lg bg-bet62-primary/40 rounded-full -z-10" />
                    </span>
                    Apostas Ao Vivo
                  </span>
                </h1>
                <p className="mt-2 text-white/65 max-w-xl">
                  Aposta enquanto o jogo decorre. Odds atualizadas em segundos, estatísticas completas e cashout instantâneo.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="green" dot className="text-sm py-1 px-3">
                  <Timer size={14} /> JOGOS A DECORRER:{' '}
                  <span className="font-mono font-bold ml-1">{loading ? '...' : liveCount}</span>
                </Badge>
                <Badge variant="blue" className="text-sm py-1 px-3">
                  <Activity size={14} /> Cashout ativo
                </Badge>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-[1fr_auto] gap-3">
              <div className="md:max-w-md">
                <Input
                  leftIcon={<Search size={16} />}
                  placeholder="Pesquisar jogo, equipa, liga..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </motion.div>

          <Tabs defaultValue={sport} onValueChange={setSport} className="mb-6">
            <TabsList className="h-auto p-1.5 overflow-x-auto whitespace-nowrap w-full max-w-full justify-start">
              {SPORTS.map((s) => (
                <TabsTrigger key={s.id} value={s.id} className="!py-2 !px-3 shrink-0">
                  <span className="inline-flex items-center gap-2">
                    <s.icon size={14} />
                    <span>{s.label}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid gap-4">
            {loading ? [0, 1, 2].map((i) => <SkeletonMatchCard key={i} i={i} />) : null}
            {!loading && error ? (
              <Card>
                <CardContent className="py-10 text-center">
                  <Zap size={32} className="mx-auto text-red-500/60 mb-3" />
                  <p className="font-semibold">Erro ao carregar jogos ao vivo</p>
                  <p className="text-sm text-white/60 mt-1">{error}</p>
                </CardContent>
              </Card>
            ) : null}
            {!loading && !error && filtered.length === 0 ? (
              <Card>
                <CardContent className="py-14 text-center">
                  <Zap size={32} className="mx-auto text-bet62-primary/50 mb-3" />
                  <p className="font-semibold">Sem jogos ao vivo</p>
                  <p className="text-sm text-white/60 mt-1">
                    {sport !== 'all' ? `Não há jogos de ${sport} ao vivo neste momento.` : 'Os jogos ao vivo serão listados automaticamente assim que começarem, via PropLine / Goal API.'}
                  </p>
                </CardContent>
              </Card>
            ) : null}
            {!loading && !error && filtered.length > 0
              ? filtered.map((ev) => (
                  <LiveEventCard key={ev.id} event={ev} onOpenMarkets={handleOpenMarkets} onSelect={handleSelect} />
                ))
              : null}
          </div>
        </div>
        <Footer />
      </main>
      <Betslip open={betslipOpen} onClose={() => setBetslipOpen(false)} />
      <FloatingBetslipToggle onClick={() => setBetslipOpen(true)} open={betslipOpen} />
    </div>
  );
}
