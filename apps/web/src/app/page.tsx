'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  PlayCircle,
  TrendingUp,
  Users,
  Globe2,
  Activity,
  Trophy,
  Flame,
  Gift,
  ChevronRight,
  Clock,
  Zap,
  Star,
  CircleUser,
  ShieldCheck,
  Banknote,
  CalendarDays,
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Sidebar } from '../components/layout/Sidebar';
import { Betslip, FloatingBetslipToggle } from '../components/layout/Betslip';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Countdown } from '../components/ui/Countdown';
import { Progress } from '../components/ui/Progress';
import { formatCurrencyEUR, formatOdds, cn } from '../lib/utils';
import { useBetslipStore, type BetslipSelection } from '../stores/betslip.store';

const FEATURED = [
  { id: 'm1', home: 'Benfica', away: 'Sporting CP', league: 'Liga Portugal Bwin', kickoff: new Date(Date.now() + 2 * 3600 * 1000).toISOString(), odds: { h: 2.45, d: 3.15, a: 2.95 }, live: false, popular: true },
  { id: 'm2', home: 'Porto', away: 'Boavista', league: 'Liga Portugal Bwin', kickoff: new Date(Date.now() + 26 * 3600 * 1000).toISOString(), odds: { h: 1.42, d: 4.5, a: 7.5 }, live: false, popular: true },
  { id: 'm3', home: 'Real Madrid', away: 'Barcelona', league: 'La Liga', kickoff: new Date(Date.now() + 48 * 3600 * 1000).toISOString(), odds: { h: 2.1, d: 3.4, a: 3.35 }, live: false, popular: true },
  { id: 'm4', home: 'Man City', away: 'Liverpool', league: 'Premier League', kickoff: new Date(Date.now() + 72 * 3600 * 1000).toISOString(), odds: { h: 1.95, d: 3.6, a: 3.7 }, live: false, popular: true },
  { id: 'm5', home: 'Bayern', away: 'Dortmund', league: 'Bundesliga', kickoff: new Date(Date.now() + 96 * 3600 * 1000).toISOString(), odds: { h: 1.75, d: 4.0, a: 4.4 }, live: false, popular: false },
  { id: 'm6', home: 'Juventus', away: 'Inter', league: 'Serie A', kickoff: new Date(Date.now() + 120 * 3600 * 1000).toISOString(), odds: { h: 2.6, d: 3.1, a: 2.85 }, live: false, popular: false },
  { id: 'm7', home: 'PSG', away: 'Lyon', league: 'Ligue 1', kickoff: new Date(Date.now() + 144 * 3600 * 1000).toISOString(), odds: { h: 1.55, d: 4.2, a: 5.75 }, live: false, popular: false },
  { id: 'm8', home: 'Arsenal', away: 'Chelsea', league: 'Premier League', kickoff: new Date(Date.now() + 168 * 3600 * 1000).toISOString(), odds: { h: 2.15, d: 3.3, a: 3.35 }, live: false, popular: true },
  { id: 'm9', home: 'Braga', away: 'Guimarães', league: 'Liga Portugal Bwin', kickoff: new Date(Date.now() + 3.5 * 3600 * 1000).toISOString(), odds: { h: 1.9, d: 3.35, a: 4.0 }, live: false, popular: false },
  { id: 'm10', home: 'Napoli', away: 'Milan', league: 'Serie A', kickoff: new Date(Date.now() + 54 * 3600 * 1000).toISOString(), odds: { h: 2.25, d: 3.2, a: 3.25 }, live: false, popular: true },
];

const LIVE = [
  { id: 'l1', home: 'Brasil', away: 'Argentina', league: 'Copa América', score: [1, 0], minute: 67, possession: [54, 46], odds: { h: 1.8, d: 3.6, a: 4.2 } },
  { id: 'l2', home: 'Lakers', away: 'Celtics', league: 'NBA', score: [82, 79], minute: 3, possession: [51, 49], odds: { h: 1.92, d: undefined, a: 1.95 }, period: 'Q4' },
  { id: 'l3', home: 'Alcaraz', away: 'Sinner', league: 'ATP Finals', score: [2, 1], minute: 1, possession: undefined, odds: { h: 1.65, d: undefined, a: 2.25 }, period: 'Set 4' },
  { id: 'l4', home: 'Dortmund', away: 'Schalke', league: 'Bundesliga', score: [2, 2], minute: 78, possession: [48, 52], odds: { h: 2.6, d: 3.2, a: 2.7 } },
  { id: 'l5', home: 'Marseille', away: 'Monaco', league: 'Ligue 1', score: [0, 1], minute: 34, possession: [58, 42], odds: { h: 2.95, d: 3.25, a: 2.35 } },
];

const CASINO = [
  { name: 'Book of Dead', provider: "Play'n GO", rtp: '96.21%', hot: true, color: 'from-amber-400 to-orange-600' },
  { name: 'Sweet Bonanza', provider: 'Pragmatic', rtp: '96.51%', hot: true, color: 'from-pink-400 to-fuchsia-600' },
  { name: 'Gonzo\'s Quest', provider: 'NetEnt', rtp: '96.00%', hot: false, color: 'from-emerald-400 to-teal-600' },
  { name: 'Starburst', provider: 'NetEnt', rtp: '96.10%', hot: false, color: 'from-cyan-400 to-blue-600' },
  { name: 'Mega Moolah', provider: 'Microgaming', rtp: '88.12%', hot: true, color: 'from-bet62-primary to-bet62-accent', jackpot: true },
  { name: 'Rocket Crash', provider: 'Turbo', rtp: '97.00%', hot: true, color: 'from-bet62-secondary to-red-500', crash: true },
];

const PROMOS = [
  { title: 'Bónus de Boas-Vindas', subtitle: '100% até €300 + 250 Giros Grátis', cta: 'Aproveitar Agora', color: 'from-bet62-primary via-bet62-accent to-bet62-secondary', icon: Gift },
  { title: 'Cashback Semanal', subtitle: 'Até 15% de volta nas tuas perdas da semana', cta: 'Ver Detalhes', color: 'from-bet62-secondary via-purple-500 to-bet62-accent', icon: Banknote },
  { title: 'Aposta Grátis Diária', subtitle: 'Aposta grátis de €10 todos os dias em eventos selecionados', cta: 'Reivindicar', color: 'from-bet62-accent via-sky-500 to-bet62-primary', icon: Zap },
];

const STATS = [
  { label: 'Usuários Registados', value: '2.4M+', icon: Users, color: 'text-bet62-primary' },
  { label: 'Pagos este Mês', value: '€ 88M', icon: Banknote, color: 'text-bet62-secondary' },
  { label: 'Esportes + Mercados', value: '35+', icon: Trophy, color: 'text-bet62-accent' },
  { label: 'Uptime (30 dias)', value: '98.7%', icon: Activity, color: 'text-bet62-primary' },
];

const JACKPOT = 128459.22;

export default function HomePage() {
  const [betslipOpen, setBetslipOpen] = React.useState(false);
  const [jackpot, setJackpot] = React.useState(JACKPOT);
  const addSelection = useBetslipStore((s) => s.addSelection);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setJackpot((v) => v + Math.random() * 0.45);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  const addOdd = (match: typeof FEATURED[number], outcome: '1' | 'X' | '2', oddsValue: number) => {
    const map = { '1': match.home, X: 'Empate', '2': match.away };
    const sel: BetslipSelection = {
      id: `${match.id}-${outcome}`,
      eventId: match.id,
      marketId: `${match.id}-1x2`,
      selectionId: `${match.id}-${outcome}-sel`,
      selectionName: map[outcome],
      marketName: 'Resultado Final (1X2)',
      eventName: `${match.home} vs ${match.away}`,
      kickoffAt: match.kickoff,
      odds: oddsValue,
      marketType: '1X2',
      outcome,
    };
    addSelection(sel);
    setBetslipOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-10 w-[620px] h-[620px] bg-bet62-primary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-24 right-10 w-[620px] h-[620px] bg-bet62-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
            <div className="absolute top-60 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-bet62-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.4s' }} />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-8 space-y-14">
            <section className="pt-2">
              <div className="relative rounded-3xl overflow-hidden border border-bet62-border p-8 md:p-12 bg-gradient-to-br from-bet62-surface via-bet62-bg to-bet62-surface-2">
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-bet62-gradient opacity-20 blur-3xl animate-pulse-slow" />
                <div className="absolute inset-0 bg-bet62-gradient-soft opacity-40 pointer-events-none" />
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="min-w-0">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bet62-secondary/15 border border-bet62-secondary/30 text-bet62-secondary text-xs font-bold uppercase tracking-wider"
                    >
                      <Sparkles size={13} /> Novos usuários · Bónus exclusivo
                    </motion.div>
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.05 }}
                      className="mt-5 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
                    >
                      <span className="block">
                        <span className="text-bet62-primary">BEM-VINDO</span>
                      </span>
                      <span className="block">
                        <span className="text-bet62-secondary">
                          AO FUTURO DAS APOSTAS
                        </span>
                      </span>
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="mt-5 text-white/70 text-lg md:text-xl max-w-xl leading-relaxed"
                    >
                      Odds competitivas, mercado ao vivo em tempo real, cassino com dealers reais
                      e pagamentos instantâneos em EUR. Experimenta a plataforma que redefine o jogo.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mt-8 flex flex-wrap gap-3 items-center"
                    >
                      <Button size="xl" variant="glow" asChild>
                        <Link href="/registro">
                          Registe-se agora
                          <ArrowRight size={18} />
                        </Link>
                      </Button>
                      <Button size="xl" variant="outline" asChild>
                        <Link href="/live">
                          <PlayCircle size={18} />
                          Ver jogos ao vivo
                        </Link>
                      </Button>
                      <Badge variant="green" className="ml-2 px-3 py-1.5 text-xs font-bold">
                        <Gift size={12} /> 100% até €300 + 250 giros
                      </Badge>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="relative min-w-0"
                  >
                    <Card glow="primary" className="overflow-hidden">
                      <CardContent className="p-6 md:p-8 space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Trophy size={18} className="text-bet62-secondary" />
                            <p className="text-sm font-semibold text-bet62-secondary">JACKPOT PROGRESSIVO</p>
                          </div>
                          <Badge variant="pink" dot>HOT</Badge>
                        </div>
                        <div className="text-center">
                          <p className="text-white/60 text-xs uppercase tracking-widest">Prémio Acumulado</p>
                          <p className="mt-1 font-mono font-black text-2xl sm:text-3xl md:text-5xl text-bet62-primary">
                            {formatCurrencyEUR(jackpot)}
                          </p>
                          <Progress value={(jackpot / 200000) * 100} variant="primary" size="md" className="mt-5" />
                          <div className="flex justify-between mt-1 text-[10px] uppercase tracking-widest text-white/40 font-mono">
                            <span>Mini</span><span>Minor</span><span>Mega</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {CASINO.slice(0, 3).map((g) => (
                            <button key={g.name} className="group relative rounded-xl overflow-hidden h-24 border border-bet62-border hover:border-bet62-secondary/50 transition">
                              <div className={`absolute inset-0 bg-gradient-to-br ${g.color} opacity-70 group-hover:opacity-90 transition`} />
                              <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-[11px] font-bold truncate">{g.name}</p>
                                <p className="text-[10px] text-white/80">{g.provider}</p>
                              </div>
                              {g.jackpot ? <Star className="absolute top-2 right-2 text-yellow-300" size={14} fill="currentColor" /> : null}
                            </button>
                          ))}
                        </div>
                        <Button variant="secondary" className="w-full" asChild>
                          <Link href="/casino">Ir para Cassino <ChevronRight size={16} /></Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-end justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={18} className="text-bet62-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Jogos em Destaque</h2>
                  </div>
                  <p className="text-sm text-white/60 mt-1">Os eventos mais populares desta semana</p>
                </div>
                <Link href="/events" className="text-sm text-bet62-primary hover:underline underline-offset-4 inline-flex items-center gap-1">
                  Ver todos <ChevronRight size={14} />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {FEATURED.slice(0, 6).map((m, i) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.04 * i }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-center justify-between text-[11px]">
                          <Badge variant="outline" className="py-0">{m.league}</Badge>
                          <div className="inline-flex items-center gap-1 text-white/60">
                            <Clock size={12} />
                            <Countdown target={m.kickoff} size="sm" showDays={false} variant="minimal" />
                          </div>
                        </div>
                        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className={cn('h-9 w-9 rounded-full bg-gradient-to-br from-bet62-primary to-bet62-accent inline-flex items-center justify-center text-bet62-bg font-bold text-xs shrink-0')}>
                              {m.home.slice(0, 2).toUpperCase()}
                            </div>
                            <p className="font-semibold truncate">{m.home}</p>
                          </div>
                          <div className="px-2 text-xs font-mono text-white/50">VS</div>
                          <div className="flex items-center gap-2 min-w-0 justify-end">
                            <p className="font-semibold truncate text-right">{m.away}</p>
                            <div className={cn('h-9 w-9 rounded-full bg-gradient-to-br from-bet62-secondary to-bet62-accent inline-flex items-center justify-center text-bet62-bg font-bold text-xs shrink-0')}>
                              {m.away.slice(0, 2).toUpperCase()}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          {(['1', 'X', '2'] as const).map((k, idx) => {
                            const v = [m.odds.h, m.odds.d, m.odds.a][idx];
                            return (
                              <button
                                key={k}
                                onClick={() => addOdd(m, k, v)}
                                className="group h-14 w-full flex flex-col items-center justify-center gap-0.5 px-1 rounded-xl border border-bet62-border hover:border-bet62-primary hover:bg-bet62-primary/8 transition-all text-center"
                              >
                                <p className="text-[9px] uppercase tracking-wider text-white/50 leading-none">{k}</p>
                                <p className="font-mono font-bold text-sm text-bet62-primary group-hover:bg-bet62-primary group-hover:text-bet62-bg inline-block px-2 mt-0.5 rounded-md transition-all leading-none">
                                  {formatOdds(v)}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-end justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="green" dot className="text-xs">24 em jogo</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight inline-flex items-center gap-2">
                      <Flame className="text-bet62-primary animate-pulse-slow" size={20} /> A decorrer AGORA
                    </h2>
                  </div>
                  <p className="text-sm text-white/60 mt-1">Acompanha os resultados em tempo real</p>
                </div>
                <Link href="/live" className="text-sm text-bet62-primary hover:underline underline-offset-4 inline-flex items-center gap-1">
                  Ver todos ao vivo <ChevronRight size={14} />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
                {LIVE.map((m, i) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.04 * i }}
                  >
                    <Card className="h-full overflow-hidden" glow="none">
                      <div className="h-1 bg-bet62-primary" />
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-center justify-between text-[11px]">
                          <Badge variant="green" dot className="text-[10px] py-0 px-2">LIVE · {m.period || `${m.minute}'`}</Badge>
                          <span className="text-white/50 truncate">{m.league}</span>
                        </div>
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <CircleUser size={16} className="text-bet62-primary shrink-0" />
                              <p className="text-sm font-semibold truncate">{m.home}</p>
                            </div>
                            <span className="font-mono font-black text-2xl text-bet62-primary animate-pulse-slow">{m.score[0]}</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 mt-1.5">
                            <div className="flex items-center gap-2 min-w-0">
                              <CircleUser size={16} className="text-bet62-secondary shrink-0" />
                              <p className="text-sm font-semibold truncate">{m.away}</p>
                            </div>
                            <span className="font-mono font-black text-2xl text-bet62-secondary animate-pulse-slow">{m.score[1]}</span>
                          </div>
                        </div>
                        {m.possession ? (
                          <div>
                            <div className="flex justify-between text-[10px] text-white/50 font-mono mb-1">
                              <span>{m.possession[0]}%</span>
                              <span>Posse</span>
                              <span>{m.possession[1]}%</span>
                            </div>
                            <div className="flex h-1.5 rounded-full overflow-hidden bg-bet62-surface-3">
                              <div className="bg-bet62-primary" style={{ width: `${m.possession[0]}%` }} />
                              <div className="bg-bet62-secondary flex-1" />
                            </div>
                          </div>
                        ) : null}
                        <div className="grid grid-cols-3 gap-1.5 pt-1">
                          {(['1', 'X', '2'] as const).map((k, idx) => {
                            const v = [m.odds.h, m.odds.d, m.odds.a][idx];
                            if (!v) return <div key={k} className="h-14 opacity-30 rounded-xl border border-dashed border-bet62-border/50" />;
                            return (
                              <button
                                key={k}
                                onClick={() => {
                                  const sel: BetslipSelection = {
                                    id: `${m.id}-${k}`,
                                    eventId: m.id,
                                    marketId: `${m.id}-1x2-live`,
                                    selectionId: `${m.id}-${k}`,
                                    selectionName: k === '1' ? m.home : k === 'X' ? 'Empate' : m.away,
                                    marketName: 'Resultado (Ao Vivo)',
                                    eventName: `${m.home} vs ${m.away}`,
                                    kickoffAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
                                    odds: v,
                                    marketType: '1X2',
                                    outcome: k,
                                  };
                                  addSelection(sel);
                                  setBetslipOpen(true);
                                }}
                                className="group h-14 w-full flex flex-col items-center justify-center gap-0.5 px-1 rounded-lg border border-bet62-border hover:border-bet62-primary hover:bg-bet62-primary/8 transition-all text-center"
                              >
                                <p className="text-[9px] uppercase tracking-wider text-white/50 leading-none">{k}</p>
                                <p className="font-mono font-bold text-sm text-bet62-primary leading-none mt-0.5">{formatOdds(v)}</p>
                              </button>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-end justify-between mb-5">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight inline-flex items-center gap-2">
                    <CalendarDays size={20} className="text-bet62-accent" /> Próximos Eventos em Alta
                  </h2>
                  <p className="text-sm text-white/60 mt-1">Grandes jogos a chegar · Odds definidas</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {FEATURED.slice(3, 9).map((m, i) => (
                  <motion.div
                    key={`feat-${m.id}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline" className="py-0">{m.league}</Badge>
                          <Countdown target={m.kickoff} size="sm" />
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex-1 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-bet62-primary/20 to-bet62-accent/20 border border-bet62-primary/30 inline-flex items-center justify-center font-bold text-xs text-bet62-primary shrink-0">
                                {m.home.slice(0, 3).toUpperCase()}
                              </div>
                              <p className="font-semibold truncate">{m.home}</p>
                            </div>
                            <p className="text-xs font-mono text-white/40 px-2">—</p>
                            <div className="flex items-center gap-2 min-w-0 justify-end">
                              <p className="font-semibold truncate text-right">{m.away}</p>
                              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-bet62-secondary/20 to-bet62-accent/20 border border-bet62-secondary/30 inline-flex items-center justify-center font-bold text-xs text-bet62-secondary shrink-0">
                                {m.away.slice(0, 3).toUpperCase()}
                              </div>
                            </div>
                          </div>
                          <div className="hidden sm:grid grid-cols-3 gap-1.5 shrink-0 w-[180px]">
                            {([
                              ['1', m.odds.h],
                              ['X', m.odds.d],
                              ['2', m.odds.a],
                            ] as const).map(([k, v]) => (
                              <button
                                key={`${m.id}-big-${k}`}
                                onClick={() => addOdd(m, k, v)}
                                className="group h-14 w-full flex flex-col items-center justify-center gap-0.5 px-1 rounded-xl border border-bet62-border hover:border-bet62-primary hover:bg-bet62-primary/10 transition-all text-center"
                              >
                                <p className="text-[9px] uppercase tracking-wider text-white/50 leading-none">{k}</p>
                                <p className="font-mono font-bold text-sm text-bet62-primary leading-none mt-0.5">{formatOdds(v)}</p>
                              </button>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <div className="grid md:grid-cols-3 gap-4">
                {PROMOS.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                  >
                    <div className={`relative overflow-hidden rounded-3xl border border-bet62-border p-6 h-full bg-gradient-to-br ${p.color}`}>
                      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-pulse-slow" />
                      <div className="relative">
                        <div className="h-11 w-11 rounded-2xl bg-bet62-bg/50 backdrop-blur border border-white/15 inline-flex items-center justify-center text-white mb-3">
                          <p.icon size={20} />
                        </div>
                        <h3 className="text-2xl font-black text-bet62-bg">{p.title}</h3>
                        <p className="text-sm mt-1 text-bet62-bg/80 font-medium">{p.subtitle}</p>
                        <Button size="sm" variant="ghost" className="mt-4 !bg-bet62-bg/60 !text-white border border-white/15 hover:!bg-bet62-bg/80" asChild>
                          <Link href="/promocoes">
                            {p.cta} <ArrowRight size={14} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {STATS.map((s) => (
                      <div key={s.label} className="relative">
                        <s.icon size={22} className={cn('mb-3', s.color)} />
                        <p className="text-3xl md:text-4xl font-black tracking-tight text-white">
                          {s.value}
                        </p>
                        <p className="text-sm text-white/60 mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-bet62-border grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-start gap-3">
                      <ShieldCheck size={20} className="text-bet62-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Jogo Seguro e Licenciado</p>
                        <p className="text-white/60">Plataforma regulamentada · Dados encriptados SSL 256-bit</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe2 size={20} className="text-bet62-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Pagamentos Instantâneos</p>
                        <p className="text-white/60">Depósitos e levantamentos rápidos em EUR via múltiplos métodos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users size={20} className="text-bet62-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Suporte 24/7 em Português</p>
                        <p className="text-white/60">Chat ao vivo, e-mail e telefone · Equipa especializada</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
          <Footer />
        </main>
      </div>
      <Betslip open={betslipOpen} onClose={() => setBetslipOpen(false)} />
      <FloatingBetslipToggle onClick={() => setBetslipOpen(true)} open={betslipOpen} />
    </div>
  );
}
