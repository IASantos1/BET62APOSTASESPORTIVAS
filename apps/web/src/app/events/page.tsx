'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Target,
  CircleDot,
  Search,
  ChevronRight,
  ArrowUpDown,
  Filter,
  Flame,
  Clock,
  Zap,
  SlidersHorizontal,
  Star,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Betslip, FloatingBetslipToggle } from '../../components/layout/Betslip';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';
import { Countdown } from '../../components/ui/Countdown';
import { cn, formatOdds } from '../../lib/utils';
import { useBetslipStore, type BetslipSelection } from '../../stores/betslip.store';

type SportId = 'football' | 'basketball' | 'tennis';

const SPORT_TABS: { id: SportId; label: string; icon: any; eventsCount: number }[] = [
  { id: 'football', label: 'Futebol', icon: CircleDot, eventsCount: 387 },
  { id: 'basketball', label: 'Basquete', icon: CircleDot, eventsCount: 142 },
  { id: 'tennis', label: 'Tênis', icon: Target, eventsCount: 91 },
];

const DATE_FILTERS = [
  { id: 'today', label: 'Hoje' },
  { id: 'tomorrow', label: 'Amanhã' },
  { id: 'week', label: 'Esta Semana' },
  { id: 'nextweek', label: 'Próxima Semana' },
  { id: 'custom', label: 'Personalizado' },
];

const SORTS = [
  { id: 'time', label: 'Horário' },
  { id: 'markets', label: '+ Mercados' },
  { id: 'popular', label: 'Popularidade' },
];

const FOOTBALL_LEAGUES: Record<string, { name: string; country: string; flag: string }> = {
  portugal: { name: 'Liga Portugal Bwin', country: 'Portugal', flag: '🇵🇹' },
  england: { name: 'Premier League', country: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  spain: { name: 'La Liga', country: 'Espanha', flag: '🇪🇸' },
  italy: { name: 'Serie A TIM', country: 'Itália', flag: '🇮🇹' },
  germany: { name: 'Bundesliga', country: 'Alemanha', flag: '🇩🇪' },
  france: { name: 'Ligue 1 Uber Eats', country: 'França', flag: '🇫🇷' },
  ucl: { name: 'UEFA Champions League', country: 'Europa', flag: '🏆' },
  uel: { name: 'UEFA Europa League', country: 'Europa', flag: '🥈' },
  brazil: { name: 'Brasileirão Série A', country: 'Brasil', flag: '🇧🇷' },
};

function makeMatches(offsetBase: number, league: keyof typeof FOOTBALL_LEAGUES, count: number) {
  const pairs: Array<[string, string]> =
    league === 'portugal'
      ? [
          ['Benfica', 'Sporting CP'],
          ['FC Porto', 'Boavista'],
          ['Braga', 'Vitória SC'],
          ['Casa Pia', 'Rio Ave'],
          ['Famalicense', 'Chaves'],
        ]
      : league === 'england'
        ? [
            ['Man City', 'Liverpool'],
            ['Arsenal', 'Chelsea'],
            ['Man United', 'Newcastle'],
            ['Tottenham', 'Aston Villa'],
            ['Brighton', 'West Ham'],
          ]
        : league === 'spain'
          ? [
              ['Real Madrid', 'Barcelona'],
              ['Atlético', 'Sevilla'],
              ['Real Sociedad', 'Villarreal'],
              ['Betis', 'Athletic Bilbao'],
            ]
          : league === 'italy'
            ? [
                ['Juventus', 'Inter'],
                ['Napoli', 'Milan'],
                ['Roma', 'Lazio'],
                ['Atalanta', 'Fiorentina'],
              ]
            : league === 'germany'
              ? [
                  ['Bayern', 'Dortmund'],
                  ['Leverkusen', 'Leipzig'],
                  ['Stuttgart', 'Union Berlin'],
                  ['Frankfurt', 'Wolfsburg'],
                ]
              : league === 'france'
                ? [
                    ['PSG', 'Lyon'],
                    ['Marseille', 'Monaco'],
                    ['Lille', 'Nice'],
                  ]
                : league === 'ucl'
                  ? [
                      ['Real Madrid', 'Man City'],
                      ['Bayern', 'PSG'],
                      ['Barcelona', 'Arsenal'],
                      ['Liverpool', 'Inter'],
                    ]
                  : league === 'uel'
                    ? [
                        ['Roma', 'Ajax'],
                        ['Porto', 'Napoli'],
                        ['Benfica', 'Feyenoord'],
                      ]
                    : [
                        ['Flamengo', 'Palmeiras'],
                        ['São Paulo', 'Corinthians'],
                        ['Atlético MG', 'Fluminense'],
                      ];

  return pairs.slice(0, count).map(([h, a], i) => {
    const seed = (offsetBase + i * 31) % 100;
    const hOdd = 1.35 + (seed % 22) / 10 + (i * 0.08);
    const dOdd = 3.0 + (seed % 22) / 18;
    const aOdd = 2.0 + ((100 - seed) % 30) / 10 + (i * 0.07);
    return {
      id: `${league}-${offsetBase}-${i}`,
      home: h,
      away: a,
      kickoffAt: new Date(Date.now() + (offsetBase * 3600 + i * 2 * 3600 + (i % 3) * 1800) * 1000).toISOString(),
      odds: { h: Number(hOdd.toFixed(2)), d: Number(dOdd.toFixed(2)), a: Number(aOdd.toFixed(2)) },
      marketsCount: 80 + ((seed * 3) % 120),
      hot: i === 0 || (seed % 4 === 0),
    };
  });
}

const BASKETBALL: Array<{ id: string; league: string; flag: string; home: string; away: string; kickoffAt: string; odds: [number, number]; marketsCount: number; hot?: boolean }> = [
  { id: 'b1', league: 'NBA', flag: '🇺🇸', home: 'Lakers', away: 'Celtics', kickoffAt: new Date(Date.now() + 5 * 3600 * 1000).toISOString(), odds: [1.92, 1.95], marketsCount: 135, hot: true },
  { id: 'b2', league: 'NBA', flag: '🇺🇸', home: 'Warriors', away: 'Bucks', kickoffAt: new Date(Date.now() + 8 * 3600 * 1000).toISOString(), odds: [2.15, 1.72], marketsCount: 120 },
  { id: 'b3', league: 'NBA', flag: '🇺🇸', home: 'Suns', away: 'Mavericks', kickoffAt: new Date(Date.now() + 10 * 3600 * 1000).toISOString(), odds: [1.8, 2.05], marketsCount: 130, hot: true },
  { id: 'b4', league: 'Euroleague', flag: '🇪🇺', home: 'Real Madrid', away: 'Olympiacos', kickoffAt: new Date(Date.now() + 26 * 3600 * 1000).toISOString(), odds: [1.55, 2.4], marketsCount: 98 },
  { id: 'b5', league: 'Euroleague', flag: '🇪🇺', home: 'FC Barcelona', away: 'Fenerbahçe', kickoffAt: new Date(Date.now() + 30 * 3600 * 1000).toISOString(), odds: [1.72, 2.15], marketsCount: 110 },
  { id: 'b6', league: 'Liga Endesa', flag: '🇪🇸', home: 'Joventut', away: 'Valencia', kickoffAt: new Date(Date.now() + 34 * 3600 * 1000).toISOString(), odds: [1.95, 1.88], marketsCount: 72 },
];

const TENNIS: Array<{ id: string; tour: string; flag: string; p1: string; p2: string; kickoffAt: string; odds: [number, number]; round: string; marketsCount: number }> = [
  { id: 't1', tour: 'ATP Finals', flag: '🇮🇹', p1: 'C. Alcaraz', p2: 'J. Sinner', kickoffAt: new Date(Date.now() + 3 * 3600 * 1000).toISOString(), odds: [1.65, 2.25], round: 'Final', marketsCount: 54 },
  { id: 't2', tour: 'ATP Finals', flag: '🇮🇹', p1: 'N. Djokovic', p2: 'D. Medvedev', kickoffAt: new Date(Date.now() + 7 * 3600 * 1000).toISOString(), odds: [1.8, 2.0], round: 'SF', marketsCount: 52 },
  { id: 't3', tour: 'WTA Finals', flag: '🇸🇦', p1: 'I. Swiatek', p2: 'A. Sabalenka', kickoffAt: new Date(Date.now() + 9 * 3600 * 1000).toISOString(), odds: [1.75, 2.1], round: 'Final', marketsCount: 50 },
  { id: 't4', tour: 'Challenger', flag: '🇦🇷', p1: 'F. Diaz Acosta', p2: 'S. Baez', kickoffAt: new Date(Date.now() + 28 * 3600 * 1000).toISOString(), odds: [2.0, 1.8], round: 'QF', marketsCount: 22 },
  { id: 't5', tour: 'Challenger', flag: '🇦🇺', p1: 'C. O\'Connell', p2: 'J. Thompson', kickoffAt: new Date(Date.now() + 40 * 3600 * 1000).toISOString(), odds: [1.9, 1.9], round: 'R16', marketsCount: 18 },
];

interface EventBase {
  id: string;
  home: string;
  away: string;
  league: string;
  flag?: string;
  kickoffAt: string;
  marketsCount: number;
  hot?: boolean;
}

export default function EventsPage() {
  const [betslipOpen, setBetslipOpen] = React.useState(false);
  const addSelection = useBetslipStore((s) => s.addSelection);
  const [sport, setSport] = React.useState<SportId>('football');
  const [dateFilter, setDateFilter] = React.useState('week');
  const [sort, setSort] = React.useState<(typeof SORTS)[number]['id']>('time');
  const [search, setSearch] = React.useState('');
  const [expandedLeagues, setExpandedLeagues] = React.useState<Set<string>>(new Set(['portugal', 'england', 'spain', 'ucl']));

  const footballByLeague = React.useMemo(() => {
    return Object.entries(FOOTBALL_LEAGUES).map(([key, meta]) => ({
      key,
      meta,
      matches: makeMatches(2 + Object.keys(FOOTBALL_LEAGUES).indexOf(key) * 4, key as keyof typeof FOOTBALL_LEAGUES, Object.keys(FOOTBALL_LEAGUES).indexOf(key) < 3 ? 5 : 3),
    }));
  }, []);

  const today = React.useMemo(() => new Date(), []);

  const applyDate = (iso: string): boolean => {
    const d = new Date(iso);
    const diffH = (d.getTime() - today.getTime()) / 3600000;
    switch (dateFilter) {
      case 'today':
        return d.toDateString() === today.toDateString() || diffH < 24;
      case 'tomorrow':
        return diffH >= 0 && diffH < 48;
      case 'week':
        return diffH < 7 * 24;
      case 'nextweek':
        return diffH >= 7 * 24 && diffH < 14 * 24;
      case 'custom':
      default:
        return true;
    }
  };

  const searchOk = (text: string) => !search || text.toLowerCase().includes(search.toLowerCase());

  const addOdd = (
    ev: EventBase & { odds: { h: number; d?: number; a: number } | [number, number] },
    sel: '1' | 'X' | '2' | 'P1' | 'P2',
    oddsV: number,
    marketName: string,
    marketType: string,
  ) => {
    const selectionName =
      sel === '1' || sel === 'P1'
        ? ev.home
        : sel === '2' || sel === 'P2'
          ? ev.away
          : 'Empate';
    const s: BetslipSelection = {
      id: `${ev.id}-${marketType}-${sel}`,
      eventId: ev.id,
      marketId: `${ev.id}-${marketType}`,
      selectionId: `${ev.id}-${marketType}-${sel}`,
      selectionName,
      marketName,
      eventName: `${ev.home} vs ${ev.away} · ${ev.league}`,
      kickoffAt: ev.kickoffAt,
      odds: oddsV,
      marketType: marketType as never,
      outcome: sel,
    };
    addSelection(s);
    setBetslipOpen(true);
  };

  const toggleLeague = (k: string) => {
    setExpandedLeagues((prev) => {
      const n = new Set(prev);
      if (n.has(k)) n.delete(k);
      else n.add(k);
      return n;
    });
  };

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="absolute inset-x-0 top-[64px] h-80 bg-gradient-to-b from-bet62-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative max-w-[1500px] mx-auto px-4 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-7"
            >
              <div className="flex items-end flex-wrap gap-4 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-white/60 mb-1.5">
                    <CalendarDays size={14} className="text-bet62-primary" />
                    Próximos eventos · Mercados definidos
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                    <span className="text-bet62-primary">Próximos</span> Jogos
                  </h1>
                  <p className="mt-1 text-white/65 max-w-xl">
                    Escolhe o teu desporto, filtra por data e liga, e aposta nas melhores odds.
                    Odds atualizadas em tempo real.
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="py-1 px-3">
                    <Filter size={12} /> Ordenar:
                  </Badge>
                  <div className="inline-flex rounded-xl border border-bet62-border overflow-hidden divide-x divide-bet62-border">
                    {SORTS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSort(s.id)}
                        className={cn(
                          'px-3 py-2 text-xs font-semibold inline-flex items-center gap-1.5 transition',
                          sort === s.id
                            ? 'bg-bet62-primary/15 text-bet62-primary'
                            : 'text-white/70 hover:bg-white/5',
                        )}
                      >
                        <ArrowUpDown size={12} />
                        {s.label}
                      </button>
                    ))}
                  </div>
                  <div className="lg:max-w-xs">
                    <Input leftIcon={<Search size={14} />} placeholder="Pesquisa..." value={search} onChange={(e) => setSearch(e.target.value)} />
                  </div>
                </div>
              </div>
            </motion.div>

            <Tabs value={sport} onValueChange={(v) => setSport(v as SportId)} className="mb-4">
              <TabsList className="max-w-full overflow-x-auto whitespace-nowrap justify-start">
                {SPORT_TABS.map((s) => (
                  <TabsTrigger key={s.id} value={s.id} className="!py-2 !px-4 shrink-0">
                    <span className="inline-flex items-center gap-2">
                      <s.icon size={16} />
                      {s.label}
                      <Badge variant="blue" className="py-0 px-2 text-[10px]">
                        {s.eventsCount}
                      </Badge>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="flex flex-wrap gap-2 mb-6">
              {DATE_FILTERS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDateFilter(d.id)}
                  className={cn(
                    'px-4 py-2 rounded-xl text-sm font-semibold border transition',
                    dateFilter === d.id
                      ? 'bg-bet62-primary text-bet62-bg border-transparent'
                      : 'border-bet62-border bg-bet62-surface/40 text-white/75 hover:border-bet62-primary/40 hover:text-white',
                  )}
                >
                  {d.label}
                </button>
              ))}
              <div className="ml-auto inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-bet62-border text-xs text-white/60">
                <SlidersHorizontal size={13} /> {dateFilter === 'custom' ? 'Intervalo personalizado' : `${listMatchesCount(sport, footballByLeague, BASKETBALL, TENNIS, applyDate, searchOk)} eventos`}
              </div>
            </div>

            <Tabs value={sport}>
              <TabsContent value="football">
                <div className="space-y-5">
                  {footballByLeague.map((lg) => {
                    const matches = lg.matches
                      .filter((m) => applyDate(m.kickoffAt))
                      .filter((m) => searchOk(`${m.home} ${m.away} ${lg.meta.name} ${lg.meta.country}`))
                      .slice()
                      .sort((a, b) => {
                        if (sort === 'markets') return b.marketsCount - a.marketsCount;
                        if (sort === 'popular') return Number(b.hot ?? 0) - Number(a.hot ?? 0);
                        return new Date(a.kickoffAt).getTime() - new Date(b.kickoffAt).getTime();
                      });
                    const open = expandedLeagues.has(lg.key);
                    return (
                      <Card key={lg.key} className="overflow-hidden">
                        <button
                          onClick={() => toggleLeague(lg.key)}
                          className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-white/[0.02] transition"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="text-2xl shrink-0">{lg.meta.flag}</span>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <p className="font-bold truncate">{lg.meta.name}</p>
                                <Badge variant="outline" className="py-0">{lg.meta.country}</Badge>
                                {matches.some((m) => m.hot) ? <Badge variant="pink" dot className="py-0">HOT</Badge> : null}
                              </div>
                              <p className="text-xs text-white/50 mt-0.5">{matches.length} eventos · {matches.reduce((s, m) => s + m.marketsCount, 0)} mercados no total</p>
                            </div>
                          </div>
                          <ChevronRight
                            size={18}
                            className={cn('text-white/60 transition-transform shrink-0', open ? 'rotate-90' : '')}
                          />
                        </button>
                        {open ? (
                          <div className="border-t border-bet62-border/70 divide-y divide-bet62-border/50">
                            {matches.map((m, idx) => (
                              <div key={m.id} className="p-4 md:px-5 md:py-4 grid grid-cols-1 lg:grid-cols-[1.1fr_minmax(0,2fr)] items-center gap-4">
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2 text-[11px] text-white/50 mb-2 flex-wrap">
                                    <Clock size={11} />
                                    <Countdown target={m.kickoffAt} size="sm" variant="minimal" />
                                    <span className="mx-1">·</span>
                                    <span className="inline-flex items-center gap-1">
                                      <Zap size={11} className="text-bet62-primary" />
                                      {m.marketsCount} mercados
                                    </span>
                                    {m.hot ? (
                                      <span className="ml-auto"><Badge variant="pink" dot className="py-0"><Flame size={10} /> Popular</Badge></span>
                                    ) : null}
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="min-w-0 flex-1 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                                      <div className="flex items-center gap-2 min-w-0">
                                        <TeamInitials color="primary" name={m.home} />
                                        <p className="font-semibold truncate">{m.home}</p>
                                      </div>
                                      <div className="text-[11px] font-mono text-white/40 px-2">VS</div>
                                      <div className="flex items-center gap-2 min-w-0 justify-end">
                                        <p className="font-semibold truncate text-right">{m.away}</p>
                                        <TeamInitials color="secondary" name={m.away} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 lg:max-w-md lg:ml-auto">
                                  {(['1', 'X', '2'] as const).map((k, i) => {
                                    const v = [m.odds.h, m.odds.d, m.odds.a][i]!;
                                    const selName = k === '1' ? m.home : k === 'X' ? 'Empate' : m.away;
                                    return (
                                      <button
                                        key={k}
                                        onClick={() => addOdd({ ...m, league: lg.meta.name, flag: lg.meta.flag, odds: m.odds }, k, v, 'Resultado (1X2)', '1X2')}
                                        className="group h-14 w-full flex flex-col items-center justify-center gap-0.5 px-1 rounded-xl border border-bet62-border hover:border-bet62-primary hover:bg-bet62-primary/8 transition-all text-center"
                                      >
                                        <p className="text-[9px] uppercase tracking-wider text-white/45 leading-none">{k} · {selName.length > 10 ? selName.slice(0, 9) + '…' : selName}</p>
                                        <p className="font-mono font-bold text-sm text-bet62-primary group-hover:bg-bet62-primary group-hover:text-bet62-bg inline-block px-2 mt-0.5 rounded-md transition-all leading-none">
                                          {formatOdds(v)}
                                        </p>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                            {matches.length === 0 ? (
                              <div className="p-8 text-center text-sm text-white/50">
                                Nenhum evento para os filtros selecionados.
                              </div>
                            ) : null}
                          </div>
                        ) : null}
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="basketball">
                <Card>
                  <div className="border-b border-bet62-border/60 p-4 flex items-center gap-3">
                    <Star size={16} className="text-bet62-accent" />
                    <p className="font-bold">Basquete · {BASKETBALL.filter((m) => applyDate(m.kickoffAt) && searchOk(`${m.home} ${m.away} ${m.league}`)).length} jogos</p>
                  </div>
                  <div className="divide-y divide-bet62-border/50">
                    {BASKETBALL
                      .filter((m) => applyDate(m.kickoffAt))
                      .filter((m) => searchOk(`${m.home} ${m.away} ${m.league}`))
                      .map((m, i) => (
                        <div key={m.id} className="p-4 grid grid-cols-1 lg:grid-cols-[1.2fr_minmax(0,2fr)] gap-4 items-center">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 text-[11px] text-white/50 mb-2 flex-wrap">
                              <span className="text-base">{m.flag}</span>
                              {m.league} ·
                              <Countdown target={m.kickoffAt} size="sm" variant="minimal" />
                              <span className="mx-1">·</span>
                              <Zap size={11} className="text-bet62-accent" /> {m.marketsCount} mercados
                              {m.hot ? (
                                <span className="ml-auto"><Badge variant="pink" dot className="py-0">HOT</Badge></span>
                              ) : null}
                            </div>
                            <div className="min-w-0 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                              <div className="flex items-center gap-2 min-w-0">
                                <TeamInitials color="accent" name={m.home} />
                                <p className="font-semibold truncate">{m.home}</p>
                              </div>
                              <div className="text-[11px] font-mono text-white/40 px-2">—</div>
                              <div className="flex items-center gap-2 min-w-0 justify-end">
                                <p className="font-semibold truncate text-right">{m.away}</p>
                                <TeamInitials color="secondary" name={m.away} />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 lg:max-w-sm lg:ml-auto">
                            {([
                              ['1', m.home, m.odds[0]],
                              ['2', m.away, m.odds[1]],
                            ] as const).map(([k, nm, v]) => (
                              <button
                                key={k}
                                onClick={() => addOdd({ id: m.id, home: m.home, away: m.away, league: m.league, flag: m.flag, kickoffAt: m.kickoffAt, marketsCount: m.marketsCount, odds: [m.odds[0], m.odds[1]] as [number, number], hot: m.hot },
                                  k as '1' | '2', v, 'Vencedor do Jogo', 'ML',
                                )}
                                className="group h-14 w-full flex flex-col items-center justify-center gap-0.5 px-1 rounded-xl border border-bet62-border hover:border-bet62-accent hover:bg-bet62-accent/8 transition-all text-center"
                              >
                                <p className="text-[9px] uppercase tracking-wider text-white/45 leading-none">{k} · {nm.length > 12 ? nm.slice(0, 10) + '…' : nm}</p>
                                <p className="font-mono font-bold text-sm text-bet62-accent leading-none mt-0.5">{formatOdds(v)}</p>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="tennis">
                <Card>
                  <div className="border-b border-bet62-border/60 p-4 flex items-center gap-3">
                    <Target size={16} className="text-bet62-secondary" />
                    <p className="font-bold">Ténis · {TENNIS.filter((m) => applyDate(m.kickoffAt) && searchOk(`${m.p1} ${m.p2} ${m.tour}`)).length} encontros</p>
                  </div>
                  <div className="divide-y divide-bet62-border/50">
                    {TENNIS
                      .filter((m) => applyDate(m.kickoffAt))
                      .filter((m) => searchOk(`${m.p1} ${m.p2} ${m.tour} ${m.round}`))
                      .map((m) => (
                        <div key={m.id} className="p-4 grid grid-cols-1 lg:grid-cols-[1.2fr_minmax(0,2fr)] gap-4 items-center">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 text-[11px] text-white/50 mb-2 flex-wrap">
                              <span className="text-base">{m.flag}</span>
                              <span className="font-semibold text-bet62-secondary">{m.tour}</span>
                              · <Badge variant="outline" className="py-0">{m.round}</Badge>
                              · <Countdown target={m.kickoffAt} size="sm" variant="minimal" />
                              <span className="mx-1">·</span>
                              {m.marketsCount} mercados
                            </div>
                            <div className="min-w-0 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                              <div className="flex items-center gap-2 min-w-0">
                                <TeamInitials color="primary" name={m.p1} />
                                <p className="font-semibold truncate">{m.p1}</p>
                              </div>
                              <div className="text-[11px] font-mono text-white/40 px-2">VS</div>
                              <div className="flex items-center gap-2 min-w-0 justify-end">
                                <p className="font-semibold truncate text-right">{m.p2}</p>
                                <TeamInitials color="secondary" name={m.p2} />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 lg:max-w-sm lg:ml-auto">
                            {([
                              ['P1', m.p1, m.odds[0]],
                              ['P2', m.p2, m.odds[1]],
                            ] as const).map(([k, nm, v]) => (
                              <button
                                key={k}
                                onClick={() =>
                                  addOdd(
                                    {
                                      id: m.id,
                                      home: m.p1,
                                      away: m.p2,
                                      league: `${m.tour} · ${m.round}`,
                                      flag: m.flag,
                                      kickoffAt: m.kickoffAt,
                                      marketsCount: m.marketsCount,
                                      odds: { h: m.odds[0], a: m.odds[1] },
                                    },
                                    k as 'P1' | 'P2', v, 'Vencedor do Encontro', 'ML',
                                  )
                                }
                                className="group h-14 w-full flex flex-col items-center justify-center gap-0.5 px-1 rounded-xl border border-bet62-border hover:border-bet62-secondary hover:bg-bet62-secondary/8 transition-all text-center"
                              >
                                <p className="text-[9px] uppercase tracking-wider text-white/45 leading-none">{k} · {nm.split(' ').slice(-1)[0]}</p>
                                <p className="font-mono font-bold text-sm text-bet62-secondary leading-none mt-0.5">{formatOdds(v)}</p>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <Footer />
        </main>
      </div>
      <Betslip open={betslipOpen} onClose={() => setBetslipOpen(false)} />
      <FloatingBetslipToggle onClick={() => setBetslipOpen(true)} open={betslipOpen} />
    </div>
  );
}

function TeamInitials({ color, name }: { color: 'primary' | 'secondary' | 'accent'; name: string }) {
  const map = {
    primary: 'from-bet62-primary/25 to-bet62-accent/25 border-bet62-primary/30 text-bet62-primary',
    secondary: 'from-bet62-secondary/25 to-bet62-accent/25 border-bet62-secondary/30 text-bet62-secondary',
    accent: 'from-bet62-accent/25 to-bet62-primary/25 border-bet62-accent/30 text-bet62-accent',
  } as const;
  const initials = name
    .split(/[\s-]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
  return (
    <div className={cn('h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br border inline-flex items-center justify-center font-black text-xs', map[color])}>
      {initials || '?'}
    </div>
  );
}

function listMatchesCount(
  sport: SportId,
  fb: ReturnType<typeof makeMatches> extends never ? unknown : { key: string; matches: Array<{ kickoffAt: string; home: string; away: string }> }[],
  bb: typeof BASKETBALL,
  te: typeof TENNIS,
  applyDate: (iso: string) => boolean,
  searchOk: (t: string) => boolean,
) {
  if (sport === 'football') {
    let c = 0;
    for (const l of fb) for (const m of l.matches) if (applyDate(m.kickoffAt) && searchOk(`${m.home} ${m.away}`)) c++;
    return c;
  }
  if (sport === 'basketball') {
    return bb.filter((m) => applyDate(m.kickoffAt) && searchOk(`${m.home} ${m.away} ${m.league}`)).length;
  }
  return te.filter((m) => applyDate(m.kickoffAt) && searchOk(`${m.p1} ${m.p2} ${m.tour}`)).length;
}
