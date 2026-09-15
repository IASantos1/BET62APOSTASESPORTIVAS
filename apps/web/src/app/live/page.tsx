'use client';

import * as React from 'react';
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
  CircleDot as Circle,
  ArrowRightLeft,
  Swords as SwordsIcon,
  Shield,
  Star,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Betslip, FloatingBetslipToggle } from '../../components/layout/Betslip';
import { EventMarketsModal } from '../../components/layout/EventMarketsModal';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Progress } from '../../components/ui/Progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';
import { cn, formatOdds, formatCurrencyEUR } from '../../lib/utils';
import { useBetslipStore, type BetslipSelection } from '../../stores/betslip.store';

const SPORTS = [
  { label: 'Todos', icon: Star, live: 24, id: 'all' },
  { label: 'Futebol', icon: CircleDot, live: 12, id: 'football' },
  { label: 'Basquete', icon: CircleDot, live: 5, id: 'basketball' },
  { label: 'Tênis', icon: Target, live: 3, id: 'tennis' },
  { label: 'Voleibol', icon: CircleDot, live: 2, id: 'volleyball' },
  { label: 'Hóquei', icon: CircleDot, live: 2, id: 'hockey' },
  { label: 'MMA / UFC', icon: Swords, live: 1, id: 'mma' },
  { label: 'Dardos', icon: Trophy, live: 1, id: 'darts' },
];

interface LiveMatch {
  id: string;
  sport: string;
  home: string;
  away: string;
  league: string;
  score: [number, number];
  minute: number;
  period?: string;
  possession?: [number, number];
  attacks?: [number, number];
  dangerous?: [number, number];
  shotsOnTarget?: [number, number];
  corners?: [number, number];
  cards?: [number, number];
  odds: { o1?: number; oX?: number; o2?: number; ou?: [number, number]; btts?: [number, number]; dc?: [number, number, number] };
  lastGoals?: { team: 'h' | 'a'; minute: number; player?: string }[];
}

const MATCHES: LiveMatch[] = [
  {
    id: 'm1', sport: 'football', league: 'Brasileirão Série A',
    home: 'Flamengo', away: 'Palmeiras', score: [1, 0], minute: 67, period: '2ºT',
    possession: [54, 46], attacks: [110, 87], dangerous: [42, 28], shotsOnTarget: [7, 4], corners: [6, 3], cards: [2, 3],
    odds: { o1: 1.8, oX: 3.6, o2: 4.2, ou: [1.72, 2.15], btts: [1.95, 1.85], dc: [1.35, 3.1, 2.05] },
    lastGoals: [{ team: 'h', minute: 31, player: 'Pedro' }],
  },
  {
    id: 'm2', sport: 'football', league: 'Premier League',
    home: 'Liverpool', away: 'Man United', score: [2, 1], minute: 52, period: '2ºT',
    possession: [58, 42], attacks: [98, 74], dangerous: [38, 22], shotsOnTarget: [8, 5], corners: [5, 4], cards: [1, 4],
    odds: { o1: 1.62, oX: 4.0, o2: 5.5, ou: [1.6, 2.35], btts: [1.55, 2.4], dc: [1.22, 3.5, 2.4] },
    lastGoals: [{ team: 'a', minute: 12 }, { team: 'h', minute: 28 }, { team: 'h', minute: 44 }],
  },
  {
    id: 'm3', sport: 'basketball', league: 'NBA',
    home: 'Lakers', away: 'Celtics', score: [82, 79], minute: 3, period: 'Q4 03:12',
    possession: [51, 49],
    odds: { o1: 1.92, o2: 1.95 },
  },
  {
    id: 'm4', sport: 'football', league: 'La Liga',
    home: 'Atlético Madrid', away: 'Sevilla', score: [0, 0], minute: 22, period: '1ºT',
    possession: [61, 39], attacks: [52, 30], dangerous: [15, 8], shotsOnTarget: [3, 1], corners: [2, 1], cards: [1, 0],
    odds: { o1: 1.48, oX: 4.5, o2: 7.0, ou: [2.0, 1.8], btts: [2.05, 1.75] },
  },
  {
    id: 'm5', sport: 'tennis', league: 'ATP Masters 1000',
    home: 'Alcaraz', away: 'Sinner', score: [2, 1], minute: 1, period: 'Set 4 · 3-2',
    odds: { o1: 1.65, o2: 2.25 },
  },
  {
    id: 'm6', sport: 'football', league: 'Bundesliga',
    home: 'Dortmund', away: 'Schalke 04', score: [2, 2], minute: 78, period: '2ºT',
    possession: [48, 52], attacks: [130, 118], dangerous: [55, 51], shotsOnTarget: [10, 9], corners: [7, 8], cards: [3, 2],
    odds: { o1: 2.6, oX: 3.2, o2: 2.7, ou: [1.45, 2.7], btts: [1.4, 2.9] },
    lastGoals: [{ team: 'h', minute: 9 }, { team: 'a', minute: 34 }, { team: 'a', minute: 59 }, { team: 'h', minute: 71 }],
  },
  {
    id: 'm7', sport: 'football', league: 'Serie A',
    home: 'Napoli', away: 'Roma', score: [1, 1], minute: 41, period: '1ºT',
    possession: [52, 48], attacks: [71, 64], dangerous: [22, 19], shotsOnTarget: [4, 3], corners: [3, 2], cards: [2, 2],
    odds: { o1: 2.15, oX: 3.3, o2: 3.4, ou: [1.8, 2.0], btts: [1.72, 2.1] },
  },
  {
    id: 'm8', sport: 'mma', league: 'UFC Fight Night',
    home: 'I. Adesanya', away: 'D. du Plessis', score: [1, 0], minute: 2, period: 'Round 2',
    odds: { o1: 1.9, o2: 1.92 },
  },
];

const STATS_META: Array<{ key: 'possession' | 'attacks' | 'dangerous' | 'shotsOnTarget' | 'corners' | 'cards'; label: string; variant: 'primary' | 'secondary' | 'warning' | 'danger' }> = [
  { key: 'possession', label: 'Posse (%)', variant: 'primary' },
  { key: 'attacks', label: 'Ataques', variant: 'accent' as never },
  { key: 'dangerous', label: 'Ataques Perigosos', variant: 'secondary' },
  { key: 'shotsOnTarget', label: 'Remates Certos', variant: 'primary' },
  { key: 'corners', label: 'Cantos', variant: 'warning' },
  { key: 'cards', label: 'Cartões', variant: 'danger' },
];

export default function LivePage() {
  const [betslipOpen, setBetslipOpen] = React.useState(false);
  const [marketsMatch, setMarketsMatch] = React.useState<LiveMatch | null>(null);
  const [sport, setSport] = React.useState('all');
  const [scores, setScores] = React.useState(() => Object.fromEntries(MATCHES.map((m) => [m.id, [...m.score]])) as Record<string, [number, number]>);
  const addSelection = useBetslipStore((s) => s.addSelection);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setScores((prev) => {
        const next = { ...prev };
        if (Math.random() < 0.12) {
          const idx = Math.floor(Math.random() * MATCHES.length);
          const match = MATCHES[idx];
          if (match.sport === 'football') {
            const team: 0 | 1 = Math.random() > 0.5 ? 0 : 1;
            next[match.id] = [(next[match.id]?.[0] ?? match.score[0]) + (team === 0 ? 1 : 0), (next[match.id]?.[1] ?? match.score[1]) + (team === 1 ? 1 : 0)];
          }
        }
        return next;
      });
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  const list = MATCHES.filter((m) => (sport === 'all' ? true : m.sport === sport))
    .filter((m) => !search || `${m.home} ${m.away} ${m.league}`.toLowerCase().includes(search.toLowerCase()));

  const addOdd = (match: LiveMatch, market: string, sel: string, odds: number, selName: string, marketName: string) => {
    const s: BetslipSelection = {
      id: `${match.id}-${market}-${sel}`,
      eventId: match.id,
      marketId: `${match.id}-${market}`,
      selectionId: `${match.id}-${market}-${sel}`,
      selectionName: selName,
      marketName,
      eventName: `${match.home} vs ${match.away} · ${match.league}`,
      kickoffAt: new Date(Date.now() - 60 * match.minute * 1000).toISOString(),
      odds,
      marketType: '1X2',
      outcome: sel,
    };
    addSelection(s);
    setBetslipOpen(true);
  };

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
                  <Radio size={14} className="text-bet62-primary animate-pulse" />
                  MERCADO AO VIVO · Atualizado em tempo real
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
                  <Timer size={14} /> JOGOS A DECORRER: <span className="font-mono font-bold ml-1">{list.length}</span>
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
                    <Badge variant="green" dot className="py-0 px-1.5 text-[10px]">
                      {s.live}
                    </Badge>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid gap-4">
            {list.map((match, i) => {
              const sc = scores[match.id] ?? match.score;
              return (
                <motion.article
                  key={match.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.03 * i }}
                >
                  <Card className="overflow-hidden">
                    <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] divide-y lg:divide-y-0 lg:divide-x divide-bet62-border/60">
                      <CardContent className="p-5 space-y-4">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="py-0">{match.league}</Badge>
                            <Badge variant="green" dot className="py-0 px-2">
                              LIVE · {match.period || `${match.minute}'`}
                            </Badge>
                          </div>
                          <button
                            type="button"
                            onClick={() => setMarketsMatch(match)}
                            className="inline-flex items-center gap-1 text-bet62-primary hover:underline underline-offset-2"
                          >
                            Ver todos mercados <ChevronRight size={12} />
                          </button>
                        </div>
                        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                          <div className="space-y-2 min-w-0">
                            <div className="flex items-center gap-2">
                              <div className="h-10 w-10 rounded-xl bg-bet62-primary/15 border border-bet62-primary/30 inline-flex items-center justify-center font-black text-sm text-bet62-primary shrink-0">
                                {match.home.slice(0, 3).toUpperCase()}
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold truncate">{match.home}</p>
                                {match.lastGoals?.filter((g) => g.team === 'h').map((g, idx) => (
                                  <div key={idx} className="flex items-center gap-1 text-[10px] text-bet62-primary/90 mt-0.5">
                                    <Circle size={8} fill="currentColor" /> Golo · {g.minute}'{g.player ? ` · ${g.player}` : ''}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-10 w-10 rounded-xl bg-bet62-secondary/15 border border-bet62-secondary/30 inline-flex items-center justify-center font-black text-sm text-bet62-secondary shrink-0">
                                {match.away.slice(0, 3).toUpperCase()}
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold truncate">{match.away}</p>
                                {match.lastGoals?.filter((g) => g.team === 'a').map((g, idx) => (
                                  <div key={idx} className="flex items-center gap-1 text-[10px] text-bet62-secondary/90 mt-0.5">
                                    <Circle size={8} fill="currentColor" /> Golo · {g.minute}'{g.player ? ` · ${g.player}` : ''}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-center shrink-0">
                            <div className="inline-flex flex-col items-center px-4 py-2 rounded-2xl border border-bet62-border bg-bet62-bg/60">
                              <p className="font-mono font-black text-4xl md:text-5xl tabular-nums leading-none">
                                <span className="text-bet62-primary animate-pulse-slow">{sc[0]}</span>
                                <span className="text-white/30 mx-1 md:mx-2">–</span>
                                <span className="text-bet62-secondary animate-pulse-slow">{sc[1]}</span>
                              </p>
                              <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">
                                {match.minute ? `${match.minute}'` : ''} · {match.period ?? ''}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>

                      <div className="p-5 space-y-5">
                        {match.sport === 'football' ? (
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {STATS_META.map((s) => {
                              const arr = match[s.key] as [number, number] | undefined;
                              if (!arr) return null;
                              const total = arr[0] + arr[1] || 1;
                              const pctH = Math.round((arr[0] / total) * 100);
                              const pctA = 100 - pctH;
                              return (
                                <div key={s.key}>
                                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-white/50 mb-1">
                                    <span className="font-mono text-bet62-primary">{arr[0]}</span>
                                    <span>{s.label}</span>
                                    <span className="font-mono text-bet62-secondary">{arr[1]}</span>
                                  </div>
                                  <div className="flex h-2 rounded-full overflow-hidden bg-bet62-surface-3">
                                    <div
                                      className={cn(
                                        s.key === 'cards'
                                          ? 'bg-gradient-to-r from-yellow-400 to-red-500'
                                          : s.key === 'corners'
                                            ? 'bg-gradient-to-r from-amber-400 to-amber-500'
                                            : 'bg-gradient-to-r from-bet62-primary to-bet62-accent',
                                      )}
                                      style={{ width: `${pctH}%` }}
                                    />
                                    <div
                                      className={cn(
                                        s.key === 'cards'
                                          ? 'bg-gradient-to-r from-red-500 to-rose-600'
                                          : s.key === 'corners'
                                            ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                                            : 'bg-gradient-to-r from-bet62-accent to-bet62-secondary',
                                      )}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : null}

                        <div className="space-y-2">
                          <p className="text-xs uppercase tracking-wider text-white/50 font-semibold">Mercados principais</p>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { label: '1', v: match.odds.o1, sel: match.home, market: '1x2', key: '1' },
                              { label: 'X', v: match.odds.oX, sel: 'Empate', market: '1x2', key: 'X' },
                              { label: '2', v: match.odds.o2, sel: match.away, market: '1x2', key: '2' },
                            ].map((m) =>
                              m.v === undefined ? (
                                <div key={m.key} />
                              ) : (
                                <button
                                  key={m.key}
                                  onClick={() => addOdd(match, m.market, m.key, m.v!, m.sel, 'Resultado Final')}
                                  className="rounded-xl py-3 border border-bet62-border hover:border-bet62-primary hover:bg-bet62-primary/8 transition-all group"
                                >
                                  <p className="text-[10px] uppercase text-white/50">{m.label}</p>
                                  <p className="font-mono font-bold text-bet62-primary group-hover:bg-bet62-primary group-hover:text-bet62-bg inline-block px-2 rounded-md mt-0.5 transition-all">
                                    {formatOdds(m.v)}
                                  </p>
                                </button>
                              ),
                            )}
                          </div>
                          {match.odds.ou ? (
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                onClick={() => addOdd(match, 'ou', 'over', match.odds.ou![0], 'Mais de 2.5', 'Mais/Menos 2.5 Golos')}
                                className="rounded-xl py-2.5 border border-bet62-border hover:border-bet62-accent hover:bg-bet62-accent/8 transition text-sm"
                              >
                                <span className="text-white/60 text-xs">+2.5 </span>
                                <span className="font-mono font-bold text-bet62-accent">{formatOdds(match.odds.ou[0])}</span>
                              </button>
                              <button
                                onClick={() => addOdd(match, 'ou', 'under', match.odds.ou![1], 'Menos de 2.5', 'Mais/Menos 2.5 Golos')}
                                className="rounded-xl py-2.5 border border-bet62-border hover:border-bet62-accent hover:bg-bet62-accent/8 transition text-sm"
                              >
                                <span className="text-white/60 text-xs">-2.5 </span>
                                <span className="font-mono font-bold text-bet62-accent">{formatOdds(match.odds.ou[1])}</span>
                              </button>
                            </div>
                          ) : null}
                          {match.odds.btts ? (
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                onClick={() => addOdd(match, 'btts', 'yes', match.odds.btts![0], 'Sim', 'Ambas Marcam')}
                                className="rounded-xl py-2.5 border border-bet62-border hover:border-bet62-secondary hover:bg-bet62-secondary/8 transition text-sm flex items-center justify-center gap-2"
                              >
                                <ArrowRightLeft size={13} className="text-bet62-secondary" />
                                <span className="font-mono font-bold text-bet62-secondary">Sim {formatOdds(match.odds.btts[0])}</span>
                              </button>
                              <button
                                onClick={() => addOdd(match, 'btts', 'no', match.odds.btts![1], 'Não', 'Ambas Marcam')}
                                className="rounded-xl py-2.5 border border-bet62-border hover:border-bet62-secondary hover:bg-bet62-secondary/8 transition text-sm flex items-center justify-center gap-2"
                              >
                                <Shield size={13} className="text-white/60" />
                                <span className="font-mono font-bold text-white/75">Não {formatOdds(match.odds.btts[1])}</span>
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.article>
              );
            })}
            {list.length === 0 ? (
              <Card>
                <CardContent className="py-14 text-center">
                  <Zap size={32} className="mx-auto text-bet62-primary/50 mb-3" />
                  <p className="font-semibold">Nenhum jogo ao vivo encontrado</p>
                  <p className="text-sm text-white/60 mt-1">Tenta outra modalidade ou limpa a pesquisa.</p>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>
        <Footer />
      </main>
      <Betslip open={betslipOpen} onClose={() => setBetslipOpen(false)} />
      <FloatingBetslipToggle onClick={() => setBetslipOpen(true)} open={betslipOpen} />
      <EventMarketsModal
        event={
          marketsMatch
            ? { id: marketsMatch.id, home: marketsMatch.home, away: marketsMatch.away, league: marketsMatch.league, minute: marketsMatch.minute, period: marketsMatch.period, live: true, odds: marketsMatch.odds }
            : null
        }
        score={marketsMatch ? scores[marketsMatch.id] ?? marketsMatch.score : undefined}
        onClose={() => setMarketsMatch(null)}
        onSelect={({ market, sel, odds, selName, marketName }) => {
          if (marketsMatch) addOdd(marketsMatch, market, sel, odds, selName, marketName);
          setMarketsMatch(null);
        }}
      />
    </div>
  );
}
