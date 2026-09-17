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
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Betslip, FloatingBetslipToggle } from '../../components/layout/Betslip';
import { EventMarketsModal } from '../../components/layout/EventMarketsModal';
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
  { label: 'Futebol', icon: CircleDot, id: 'football' },
  { label: 'Basquete', icon: CircleDot, id: 'basketball' },
  { label: 'Tênis', icon: Target, id: 'tennis' },
  { label: 'Voleibol', icon: CircleDot, id: 'volleyball' },
  { label: 'Hóquei', icon: CircleDot, id: 'hockey' },
  { label: 'MMA / UFC', icon: Swords, id: 'mma' },
  { label: 'Dardos', icon: Trophy, id: 'darts' },
];

type LiveScore = { home?: number | null; away?: number | null; homeHalf?: number | null; awayHalf?: number | null };
type LiveClock = { minute?: number | null; injuryMinutes?: number | null; status?: string };
type LiveMarketSelection = { id: string; name: string; odds: number; outcome?: string; status?: string };
type LiveMarket = { id: string; type?: string; name: string; status?: string; selections: LiveMarketSelection[] };
type LiveEvent = {
  id: string;
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

interface MarketSelectPayload {
  marketId: string;
  marketName: string;
  selectionId: string;
  selectionName: string;
  odds: number;
}

function LiveEventCard({
  event,
  onOpenMarkets,
  onSelect,
}: {
  event: LiveEvent;
  onOpenMarkets: (e: LiveEvent) => void;
  onSelect: (event: LiveEvent, payload: MarketSelectPayload) => void;
}) {
  const score: LiveScore = event.liveScoreJson ?? ({} as LiveScore);
  const clock: LiveClock = event.liveClockJson ?? ({} as LiveClock);
  const homeName = event.homeTeamName ?? event.name.split(' vs ')[0] ?? 'Casa';
  const awayName = event.awayTeamName ?? event.name.split(' vs ')[1] ?? 'Fora';
  const min = typeof clock.minute === 'number' ? `${clock.minute}'` : event.status;
  const mainMarket: LiveMarket | undefined = event.markets?.[0];
  const selections: LiveMarketSelection[] = mainMarket?.selections ?? [];
  while (selections.length < 3) selections.push({ id: `f${selections.length}`, name: '-', odds: 0, status: 'suspended' });

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="overflow-hidden hover:border-bet62-primary/40 transition group">
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
                  onClick={() =>
                    onSelect(event, {
                      marketId: mainMarket?.id ?? 'main',
                      marketName: mainMarket?.name ?? 'Resultado Final',
                      selectionId: s.id,
                      selectionName: s.name,
                      odds: s.odds,
                    })
                  }
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
                  onClick={() => onOpenMarkets(event)}
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
  const [selectedEvent, setSelectedEvent] = React.useState<LiveEvent | null>(null);
  const [refetchAt, setRefetchAt] = React.useState<number>(Date.now());

  React.useEffect(() => {
    const t = window.setInterval(() => setRefetchAt(Date.now()), 15_000);
    return () => window.clearInterval(t);
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    const searchParams: Record<string, string> = { limit: '100' };
    if (sport !== 'all') searchParams.sports = `["${sport.toUpperCase()}"]`;
    const q = new URLSearchParams(searchParams).toString();
    apiClient
      .get<{ events: LiveEvent[]; total: number }>(`/odds/events/live${q ? `?${q}` : ''}`, { auth: false })
      .then((res) => {
        if (cancelled) return;
        setEvents(res?.events ?? []);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : 'Erro ao carregar jogos ao vivo');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
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

  const handleSelect = (event: LiveEvent, payload: MarketSelectPayload) => {
    const homeName = event.homeTeamName ?? event.name.split(' vs ')[0] ?? 'Casa';
    const awayName = event.awayTeamName ?? event.name.split(' vs ')[1] ?? 'Fora';
    const sel: BetslipSelection = {
      id: `${event.id}-${payload.marketId}-${payload.selectionId}`,
      eventId: event.id,
      marketId: `${event.id}-${payload.marketId}`,
      selectionId: `${event.id}-${payload.marketId}-${payload.selectionId}`,
      selectionName: payload.selectionName,
      marketName: payload.marketName,
      eventName: `${homeName} vs ${awayName} · ${event.leagueName ?? event.sportType}`,
      kickoffAt: new Date(event.kickoffAt).toISOString(),
      odds: payload.odds,
      marketType: '1X2',
      outcome: payload.selectionId,
    };
    addSelection(sel);
    setBetslipOpen(true);
  };

  const selectedMarketsEvent = selectedEvent
    ? {
        id: selectedEvent.id,
        home: selectedEvent.homeTeamName ?? selectedEvent.name.split(' vs ')[0] ?? 'Casa',
        away: selectedEvent.awayTeamName ?? selectedEvent.name.split(' vs ')[1] ?? 'Fora',
        league: selectedEvent.leagueName ?? selectedEvent.sportType,
        minute: selectedEvent.liveClockJson?.minute ?? undefined,
        live: true,
        markets: (selectedEvent.markets ?? []).map((m) => ({
          id: m.id,
          name: m.name,
          type: m.type,
          status: m.status,
          selections: m.selections,
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
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
                  <LiveEventCard key={ev.id} event={ev} onOpenMarkets={setSelectedEvent} onSelect={handleSelect} />
                ))
              : null}
          </div>
        </div>
        <Footer />
      </main>
      <Betslip open={betslipOpen} onClose={() => setBetslipOpen(false)} />
      <FloatingBetslipToggle onClick={() => setBetslipOpen(true)} open={betslipOpen} />
      <EventMarketsModal
        event={selectedMarketsEvent}
        score={selectedEvent ? [selectedEvent.liveScoreJson?.home, selectedEvent.liveScoreJson?.away] : undefined}
        onClose={() => setSelectedEvent(null)}
        onSelect={(payload) => {
          if (selectedEvent) handleSelect(selectedEvent, payload);
          setSelectedEvent(null);
        }}
      />
    </div>
  );
}
