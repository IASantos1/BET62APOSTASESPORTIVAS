'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Dices,
  Sparkles,
  Search,
  Heart,
  PlayCircle,
  Flame,
  Crown,
  Gift,
  Star,
  Trophy,
  ArrowRight,
  SlidersHorizontal,
  Grid3x3,
  List,
  Filter,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';
import { Switch } from '../../components/ui/Switch';
import { Progress } from '../../components/ui/Progress';
import { cn, formatCurrencyEUR } from '../../lib/utils';

const CATEGORIES = [
  { id: 'all', label: 'Todos', icon: Grid3x3 },
  { id: 'slots', label: 'Slots', icon: Sparkles },
  { id: 'live', label: 'Ao Vivo', icon: Flame },
  { id: 'roulette', label: 'Roleta', icon: Trophy },
  { id: 'blackjack', label: 'Blackjack', icon: Crown },
  { id: 'baccarat', label: 'Bacará', icon: Dices },
  { id: 'poker', label: 'Poker', icon: Star },
  { id: 'jackpots', label: 'Jackpots', icon: Gift },
  { id: 'megaways', label: 'Megaways', icon: Sparkles },
  { id: 'new', label: 'Novos', icon: Sparkles },
  { id: 'popular', label: 'Populares', icon: Flame },
  { id: 'fav', label: 'Favoritos', icon: Heart },
];

type Provider = 'Pragmatic' | "Play'n GO" | 'NetEnt' | 'Microgaming' | 'Evolution' | 'Playtech' | 'Turbo' | 'BTG';
type Category = 'slots' | 'live' | 'roulette' | 'blackjack' | 'baccarat' | 'poker' | 'jackpots' | 'megaways' | 'new' | 'popular';

interface Game {
  id: string;
  name: string;
  provider: Provider;
  rtp: number;
  volatility: 'Baixa' | 'Média' | 'Alta';
  categories: Category[];
  new?: boolean;
  hot?: boolean;
  jackpot?: boolean;
  jackpotValue?: number;
  megaways?: boolean;
  color: string;
  accent: string;
  tags: string[];
}

const GAMES: Game[] = [
  { id: 'g1', name: 'Sweet Bonanza', provider: 'Pragmatic', rtp: 96.51, volatility: 'Média', categories: ['slots', 'popular'], hot: true, color: 'from-pink-500 via-fuchsia-500 to-purple-600', accent: '#ff00ea', tags: ['Frutas', 'Multiplicador'] },
  { id: 'g2', name: 'Book of Dead', provider: "Play'n GO", rtp: 96.21, volatility: 'Alta', categories: ['slots', 'popular', 'new'], color: 'from-amber-400 via-orange-500 to-red-600', accent: '#f59e0b', tags: ['Aventura', 'Expanding Wilds'] },
  { id: 'g3', name: 'Gonzo\'s Quest Megaways', provider: 'NetEnt', rtp: 96.0, volatility: 'Alta', categories: ['slots', 'megaways'], megaways: true, color: 'from-emerald-400 via-teal-500 to-cyan-600', accent: '#10b981', tags: ['Megaways', 'Avalanche'] },
  { id: 'g4', name: 'Mega Moolah', provider: 'Microgaming', rtp: 88.12, volatility: 'Alta', categories: ['slots', 'jackpots', 'popular'], jackpot: true, jackpotValue: 12_845_922, hot: true, color: 'from-bet62-primary via-emerald-500 to-bet62-accent', accent: '#00ff9d', tags: ['Jackpot', '4 Níveis'] },
  { id: 'g5', name: 'Rocket Crash', provider: 'Turbo', rtp: 97.0, volatility: 'Média', categories: ['popular', 'new'], new: true, color: 'from-bet62-secondary via-rose-500 to-red-600', accent: '#ff00ea', tags: ['Crash', 'Multiplicador'] },
  { id: 'g6', name: 'Starburst XXXtreme', provider: 'NetEnt', rtp: 96.1, volatility: 'Média', categories: ['slots'], color: 'from-cyan-400 via-sky-500 to-indigo-600', accent: '#00d4ff', tags: ['Wilds', 'Spins'] },
  { id: 'g7', name: 'Roleta Europeia AO VIVO', provider: 'Evolution', rtp: 97.3, volatility: 'Baixa', categories: ['roulette', 'live'], hot: true, color: 'from-rose-500 via-red-600 to-rose-900', accent: '#ef4444', tags: ['Dealer Real', 'HD'] },
  { id: 'g8', name: 'Blackjack VIP', provider: 'Evolution', rtp: 99.5, volatility: 'Baixa', categories: ['blackjack', 'live'], color: 'from-emerald-600 via-teal-700 to-slate-900', accent: '#10b981', tags: ['Mesa VIP', 'Dealer'] },
  { id: 'g9', name: 'Speed Baccarat', provider: 'Playtech', rtp: 98.9, volatility: 'Baixa', categories: ['baccarat', 'live'], new: true, color: 'from-amber-500 via-yellow-600 to-red-700', accent: '#fbbf24', tags: ['Speed', 'Roadmap'] },
  { id: 'g10', name: 'Texas Hold\'em Poker', provider: 'Microgaming', rtp: 98.1, volatility: 'Média', categories: ['poker'], color: 'from-emerald-500 via-green-700 to-slate-900', accent: '#22c55e', tags: ['Cash Game'] },
  { id: 'g11', name: 'Big Bass Bonanza Megaways', provider: 'Pragmatic', rtp: 96.7, volatility: 'Alta', categories: ['slots', 'megaways', 'popular'], megaways: true, hot: true, color: 'from-sky-500 via-blue-600 to-indigo-800', accent: '#00d4ff', tags: ['Pesca', 'Megaways'] },
  { id: 'g12', name: 'Mega Fortune Dreams', provider: 'NetEnt', rtp: 96.6, volatility: 'Média', categories: ['slots', 'jackpots'], jackpot: true, jackpotValue: 4_120_555, color: 'from-yellow-400 via-amber-500 to-yellow-700', accent: '#fbbf24', tags: ['Jackpot', 'Luxo'] },
  { id: 'g13', name: 'Dead or Alive 2', provider: "Play'n GO", rtp: 96.8, volatility: 'Alta', categories: ['slots'], color: 'from-stone-500 via-amber-700 to-stone-800', accent: '#a16207', tags: ['Western', 'Free Spins'] },
  { id: 'g14', name: 'Cash or Crash Live', provider: 'Evolution', rtp: 96.3, volatility: 'Alta', categories: ['live', 'new'], new: true, color: 'from-fuchsia-500 via-pink-600 to-purple-900', accent: '#ff00ea', tags: ['Ao Vivo', 'Multiplicador'] },
  { id: 'g15', name: 'Crazy Time', provider: 'Evolution', rtp: 96.08, volatility: 'Alta', categories: ['live', 'popular'], hot: true, color: 'from-pink-500 via-purple-600 to-indigo-800', accent: '#ff00ea', tags: ['Game Show', 'Roda'] },
  { id: 'g16', name: 'Monopoly Live', provider: 'Evolution', rtp: 96.23, volatility: 'Média', categories: ['live'], color: 'from-red-500 via-amber-500 to-emerald-600', accent: '#ef4444', tags: ['Game Show', 'Dados'] },
  { id: 'g17', name: 'Extra Chilli Epic Spins', provider: 'BTG', rtp: 96.12, volatility: 'Alta', categories: ['slots', 'megaways', 'new'], megaways: true, new: true, color: 'from-red-500 via-orange-500 to-yellow-400', accent: '#ef4444', tags: ['Megaways', 'Spins'] },
  { id: 'g18', name: 'Age of the Gods', provider: 'Playtech', rtp: 95.98, volatility: 'Média', categories: ['slots', 'jackpots'], jackpot: true, jackpotValue: 1_870_211, color: 'from-yellow-600 via-amber-700 to-zinc-900', accent: '#f59e0b', tags: ['Mitologia', '4 Jackpots'] },
];

const PROVIDERS: Provider[] = ['Pragmatic', "Play'n GO", 'NetEnt', 'Microgaming', 'Evolution', 'Playtech', 'Turbo', 'BTG'];

const JACKPOT_TOTAL = GAMES.filter((g) => g.jackpot).reduce((s, g) => s + (g.jackpotValue ?? 0), 0);

export default function CasinoPage() {
  const [tab, setTab] = React.useState<(typeof CATEGORIES)[number]['id']>('all');
  const [search, setSearch] = React.useState('');
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [providers, setProviders] = React.useState<Set<Provider>>(new Set());
  const [onlyNew, setOnlyNew] = React.useState(false);
  const [onlyHot, setOnlyHot] = React.useState(false);
  const [favs, setFavs] = React.useState<Set<string>>(new Set());
  const [jpTotal, setJpTotal] = React.useState(JACKPOT_TOTAL);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setJpTotal((v) => v + Math.random() * 2.4);
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  const toggleProvider = (p: Provider) => {
    setProviders((prev) => {
      const n = new Set(prev);
      if (n.has(p)) n.delete(p);
      else n.add(p);
      return n;
    });
  };
  const toggleFav = (id: string) => {
    setFavs((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  const list = React.useMemo(() => {
    return GAMES.filter((g) => {
      if (tab !== 'all') {
        if (tab === 'fav') return favs.has(g.id);
        if (!g.categories.includes(tab as Category)) return false;
      }
      if (providers.size > 0 && !providers.has(g.provider)) return false;
      if (onlyNew && !g.new) return false;
      if (onlyHot && !g.hot) return false;
      if (search && !(`${g.name} ${g.provider}`.toLowerCase().includes(search.toLowerCase()))) return false;
      return true;
    });
  }, [tab, search, providers, onlyNew, onlyHot, favs]);

  const isFavTab = tab === 'fav';

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="relative">
        <div className="absolute inset-0 bg-bet62-grid [background-size:52px_52px] opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[620px] h-[620px] rounded-full bg-bet62-secondary/10 blur-3xl animate-pulse-slow" />
        <div className="absolute top-20 right-1/4 w-[520px] h-[520px] rounded-full bg-bet62-accent/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />

        <div className="relative max-w-[1700px] mx-auto px-4 lg:px-8 py-8">
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden relative border border-bet62-border"
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-bet62-secondary/20 via-bet62-bg to-bet62-primary/10`} />
            <div className="absolute -left-24 -bottom-24 w-[520px] h-[520px] rounded-full bg-bet62-gradient opacity-20 blur-3xl animate-pulse-slow" />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center p-5 md:p-12">
              <div className="min-w-0">
                <Badge variant="pink" className="mb-4 py-1 px-3">
                  <Dices size={13} className="mr-1" /> Cassino BET62
                </Badge>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                  <span className="block">
                    <span className="text-bet62-primary">Cassino</span>{' '}
                    <span className="text-bet62-white">BET62</span>
                  </span>
                  <span className="block mt-1 text-white/90">Slots, Jackpots & Dealers Reais</span>
                </h1>
                <p className="mt-4 text-white/70 text-lg max-w-xl">
                  Mais de 3.500 jogos com RTP certificado, roletas, blackjack e game shows com dealers
                  reais. Bónus exclusivo no primeiro depósito.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button size="lg" variant="glow" asChild>
                    <Link href="/registro">
                      Jogar com bónus <Gift size={16} />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#jogos">
                      Ver jogos <PlayCircle size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="min-w-0">
                <Card glow="secondary">
                  <CardContent className="p-6 space-y-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-bet62-secondary inline-flex items-center gap-2">
                        <Crown size={16} /> JACKPOTS ACUMULADOS
                      </p>
                      <Badge variant="pink" dot>HOT</Badge>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Total da Rede</p>
                      <p className="font-mono font-black text-2xl sm:text-3xl md:text-5xl text-bet62-secondary mt-1">
                        {formatCurrencyEUR(jpTotal)}
                      </p>
                      <Progress value={Math.min(100, (jpTotal / 25_000_000) * 100)} variant="secondary" className="mt-5" size="md" />
                      <div className="flex justify-between mt-1 text-[10px] uppercase tracking-widest text-white/40 font-mono">
                        <span>Mini</span><span>Minor</span><span>Mega</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {GAMES.filter((g) => g.jackpot).map((g) => (
                        <div key={g.id} className="flex items-center justify-between rounded-xl border border-bet62-border bg-bet62-bg/40 p-3 text-sm">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${g.color} shrink-0 border border-white/10`} />
                            <div className="min-w-0">
                              <p className="font-semibold truncate">{g.name}</p>
                              <p className="text-[11px] text-white/50">{g.provider}</p>
                            </div>
                          </div>
                          <p className="font-mono font-bold text-bet62-secondary text-xs sm:text-sm shrink-0 ml-2">{formatCurrencyEUR(g.jackpotValue ?? 0)}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.section>

          <div className="mt-10 rounded-2xl border border-bet62-border p-4 md:p-5 bg-bet62-surface/40 backdrop-blur-xl">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
              <div className="flex-1 lg:max-w-md">
                <Input leftIcon={<Search size={16} />} placeholder="Pesquisar jogo ou fornecedor..." value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="outline" className="py-1">
                  <Filter size={12} className="mr-1" /> Fornecedores:
                </Badge>
                <div className="flex flex-wrap gap-1.5">
                  {PROVIDERS.map((p) => (
                    <button
                      key={p}
                      onClick={() => toggleProvider(p)}
                      className={cn(
                        'px-2.5 py-1 rounded-lg text-xs border transition',
                        providers.has(p)
                          ? 'bg-bet62-primary/15 border-bet62-primary/50 text-bet62-primary'
                          : 'border-bet62-border text-white/70 hover:border-bet62-primary/30 hover:text-white',
                      )}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <div className="h-6 w-px bg-bet62-border/70 mx-1 hidden md:block" />
                <Switch label="Novos" checked={onlyNew} onChange={() => setOnlyNew((v) => !v)} glow="accent" />
                <Switch label="🔥 Hot" checked={onlyHot} onChange={() => setOnlyHot((v) => !v)} glow="secondary" />
                <div className="h-6 w-px bg-bet62-border/70 mx-1 hidden md:block" />
                <div className="inline-flex rounded-xl border border-bet62-border p-0.5">
                  <button
                    onClick={() => setView('grid')}
                    className={cn('p-2 rounded-lg transition', view === 'grid' ? 'bg-bet62-primary/15 text-bet62-primary' : 'text-white/60')}
                    aria-label="Vista grelha"
                  >
                    <Grid3x3 size={16} />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={cn('p-2 rounded-lg transition', view === 'list' ? 'bg-bet62-primary/15 text-bet62-primary' : 'text-white/60')}
                    aria-label="Vista lista"
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={tab} onValueChange={setTab} className="mt-6" id="jogos">
            <TabsList className="h-auto p-1.5 overflow-x-auto whitespace-nowrap w-full max-w-full justify-start">
              {CATEGORIES.map((c) => (
                <TabsTrigger key={c.id} value={c.id} className="!py-2 !px-3 shrink-0">
                  <span className="inline-flex items-center gap-2">
                    <c.icon size={14} />
                    {c.label}
                    {c.id === 'jackpots' ? (
                      <Badge variant="pink" className="py-0 px-1.5 text-[10px]">{GAMES.filter((g) => g.jackpot).length}</Badge>
                    ) : c.id === 'new' ? (
                      <Badge variant="blue" className="py-0 px-1.5 text-[10px]">{GAMES.filter((g) => g.new).length}</Badge>
                    ) : null}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={tab}>
              {view === 'grid' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-3 md:gap-4">
                  {list.map((g, i) => (
                    <motion.div
                      key={g.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.03 * i }}
                    >
                      <Card className="h-full overflow-hidden group relative">
                        <button
                          onClick={() => toggleFav(g.id)}
                          className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-bet62-bg/60 backdrop-blur border border-bet62-border inline-flex items-center justify-center hover:scale-110 transition"
                          aria-label="Favorito"
                        >
                          <Heart
                            size={14}
                            fill={favs.has(g.id) ? '#ff00ea' : 'none'}
                            className={cn('transition-colors', favs.has(g.id) ? 'text-bet62-secondary' : 'text-white/70')}
                          />
                        </button>
                        {g.hot ? (
                          <Badge variant="pink" className="absolute top-2 left-2 z-10 py-0 px-2" dot>
                            HOT
                          </Badge>
                        ) : g.new ? (
                          <Badge variant="blue" className="absolute top-2 left-2 z-10 py-0 px-2">NEW</Badge>
                        ) : null}
                        <div className={`relative aspect-[4/5] bg-gradient-to-br ${g.color} overflow-hidden`}>
                          <div className="absolute inset-0 bg-bet62-grid [background-size:28px_28px] opacity-20" />
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl md:text-5xl font-black tracking-tighter text-white/90 drop-shadow-lg animate-float">
                              {g.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                            </span>
                          </div>
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
                            <Button size="md" variant="glow" className="h-12">
                              <PlayCircle size={18} /> Jogar agora
                            </Button>
                          </div>
                        </div>
                        <div className="p-3">
                          <p className="font-bold truncate">{g.name}</p>
                          <div className="mt-1 flex items-center justify-between text-[11px] text-white/55">
                            <span className="truncate pr-2">{g.provider}</span>
                            <span className="font-mono text-bet62-primary shrink-0">RTP {g.rtp}%</span>
                          </div>
                          {g.jackpot && g.jackpotValue ? (
                            <div className="mt-2 rounded-lg bg-bet62-secondary/10 border border-bet62-secondary/25 px-2 py-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
                              <span className="text-[10px] uppercase tracking-widest text-bet62-secondary font-bold">Jackpot</span>
                              <span className="font-mono font-bold text-[10px] sm:text-xs text-bet62-secondary">
                                {formatCurrencyEUR(g.jackpotValue)}
                              </span>
                            </div>
                          ) : (
                            <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                              <Badge variant="outline" className="py-0 text-[10px]">{g.volatility}</Badge>
                              {g.megaways ? <Badge variant="blue" className="py-0 text-[10px]">Megaways</Badge> : null}
                              {g.tags.slice(0, 1).map((t) => (
                                <Badge key={t} variant="outline" className="py-0 text-[10px] opacity-70">{t}</Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-2">
                  {list.map((g, i) => (
                    <motion.div
                      key={g.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.02 * i }}
                    >
                      <Card>
                        <CardContent className="p-3 flex items-center gap-4">
                          <div className={`h-14 w-14 md:h-16 md:w-16 rounded-xl bg-gradient-to-br ${g.color} relative overflow-hidden shrink-0 border border-white/10`}>
                            <div className="absolute inset-0 flex items-center justify-center font-black text-white/90 text-xl">
                              {g.name[0]}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <p className="font-bold truncate">{g.name}</p>
                              {g.hot ? <Badge variant="pink" dot className="py-0">HOT</Badge> : null}
                              {g.new ? <Badge variant="blue" className="py-0">NEW</Badge> : null}
                              {g.jackpot ? <Badge variant="green" className="py-0">JP</Badge> : null}
                            </div>
                            <p className="text-xs text-white/60 mt-0.5 truncate">{g.provider} · Volatilidade {g.volatility} · RTP {g.rtp}%</p>
                            <p className="text-[11px] text-white/50 mt-1 truncate">{g.tags.join(' · ')}</p>
                          </div>
                          <div className="hidden sm:block shrink-0 text-right">
                            {g.jackpot ? (
                              <p className="font-mono font-bold text-bet62-secondary">{formatCurrencyEUR(g.jackpotValue ?? 0)}</p>
                            ) : (
                              <p className="font-mono text-bet62-primary">{g.rtp}%</p>
                            )}
                            <p className="text-[11px] text-white/50">RTP</p>
                          </div>
                          <Button size="sm" variant="glow" asChild>
                            <Link href={`/casino/jogo/${g.id}`}>
                              Jogar <ArrowRight size={14} />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
              {list.length === 0 ? (
                <Card>
                  <CardContent className="py-14 text-center">
                    <SlidersHorizontal size={28} className="mx-auto text-white/40 mb-3" />
                    <p className="font-semibold">Sem jogos para os filtros selecionados</p>
                    <p className="text-sm text-white/60 mt-1">Limpa a pesquisa ou escolhe outras categorias.</p>
                  </CardContent>
                </Card>
              ) : null}
            </TabsContent>
          </Tabs>
        </div>
        <Footer />
      </main>
    </div>
  );
}
