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
import { useBetslipStore } from '../stores/betslip.store';

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

function FeaturedSkeleton({ i }: { i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.04 * i }}
    >
      <Card className="h-full">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 w-28 rounded-md bg-bet62-surface/40 animate-pulse" />
            <div className="h-4 w-20 rounded-md bg-bet62-surface/40 animate-pulse" />
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-bet62-surface/40 animate-pulse shrink-0" />
              <div className="h-5 w-28 rounded bg-bet62-surface/40 animate-pulse" />
            </div>
            <div className="h-4 w-6 rounded bg-bet62-surface/40 animate-pulse" />
            <div className="flex items-center gap-2 justify-end">
              <div className="h-5 w-28 rounded bg-bet62-surface/40 animate-pulse" />
              <div className="h-9 w-9 rounded-full bg-bet62-surface/40 animate-pulse shrink-0" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {[0, 1, 2].map((k) => (
              <div key={k} className="h-14 rounded-xl bg-bet62-surface/40 animate-pulse" />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function LiveSkeleton({ i }: { i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.04 * i }}
    >
      <Card className="h-full overflow-hidden" glow="none">
        <div className="h-1 bg-bet62-primary/60" />
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 w-20 rounded-full bg-bet62-surface/40 animate-pulse" />
            <div className="h-3 w-24 rounded bg-bet62-surface/40 animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-bet62-surface/40 animate-pulse shrink-0" />
                <div className="h-5 w-24 rounded bg-bet62-surface/40 animate-pulse" />
              </div>
              <div className="h-7 w-10 rounded bg-bet62-surface/40 animate-pulse" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-bet62-surface/40 animate-pulse shrink-0" />
                <div className="h-5 w-24 rounded bg-bet62-surface/40 animate-pulse" />
              </div>
              <div className="h-7 w-10 rounded bg-bet62-surface/40 animate-pulse" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <div className="h-3 w-8 rounded bg-bet62-surface/40 animate-pulse" />
              <div className="h-3 w-12 rounded bg-bet62-surface/40 animate-pulse" />
              <div className="h-3 w-8 rounded bg-bet62-surface/40 animate-pulse" />
            </div>
            <div className="h-1.5 rounded-full bg-bet62-surface/40 animate-pulse" />
          </div>
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {[0, 1, 2].map((k) => (
              <div key={k} className="h-14 rounded-lg bg-bet62-surface/40 animate-pulse" />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function UpcomingSkeleton({ i }: { i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 * i }}
    >
      <Card className="h-full">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center justify-between mb-3">
            <div className="h-4 w-28 rounded-md bg-bet62-surface/40 animate-pulse" />
            <div className="h-4 w-24 rounded-md bg-bet62-surface/40 animate-pulse" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-xl bg-bet62-surface/40 animate-pulse shrink-0" />
                <div className="h-5 w-28 rounded bg-bet62-surface/40 animate-pulse" />
              </div>
              <div className="h-4 w-6 rounded bg-bet62-surface/40 animate-pulse" />
              <div className="flex items-center gap-2 justify-end">
                <div className="h-5 w-28 rounded bg-bet62-surface/40 animate-pulse" />
                <div className="h-10 w-10 rounded-xl bg-bet62-surface/40 animate-pulse shrink-0" />
              </div>
            </div>
            <div className="hidden sm:grid grid-cols-3 gap-1.5 shrink-0 w-[180px]">
              {[0, 1, 2].map((k) => (
                <div key={k} className="h-14 rounded-xl bg-bet62-surface/40 animate-pulse" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function HomePage() {
  const [betslipOpen, setBetslipOpen] = React.useState(false);
  const [jackpot, setJackpot] = React.useState(JACKPOT);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const idA = window.setInterval(() => {
      setJackpot((v) => v + Math.random() * 0.45);
    }, 2200);
    const idB = window.setTimeout(() => setLoading(false), 1800);
    return () => {
      window.clearInterval(idA);
      window.clearTimeout(idB);
    };
  }, []);

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
                {loading ? [0, 1, 2, 3, 4, 5].map((i) => <FeaturedSkeleton key={i} i={i} />) : (
                  <Card className="md:col-span-2 xl:col-span-3">
                    <CardContent className="py-12 text-center">
                      <Clock size={30} className="mx-auto text-bet62-primary/50 mb-3" />
                      <p className="font-semibold">A sincronizar eventos com os provedores reais</p>
                      <p className="text-sm text-white/60 mt-1">
                        Os jogos em destaque serão automaticamente publicados assim que a integração PropLine / Goal API for concluída.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </section>

            <section>
              <div className="flex items-end justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="green" dot className="text-xs">{loading ? '...' : '0'} em jogo</Badge>
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
                {loading ? [0, 1, 2, 3, 4].map((i) => <LiveSkeleton key={i} i={i} />) : (
                  <Card className="md:col-span-2 xl:col-span-5">
                    <CardContent className="py-12 text-center">
                      <Activity size={30} className="mx-auto text-bet62-primary/50 mb-3" />
                      <p className="font-semibold">Sem jogos ao vivo neste momento</p>
                      <p className="text-sm text-white/60 mt-1">
                        Os eventos ao vivo serão listados em tempo real assim que começarem.
                      </p>
                    </CardContent>
                  </Card>
                )}
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
                {loading ? [0, 1, 2, 3, 4, 5].map((i) => <UpcomingSkeleton key={i} i={i} />) : (
                  <Card className="md:col-span-2">
                    <CardContent className="py-12 text-center">
                      <CalendarDays size={30} className="mx-auto text-bet62-accent/50 mb-3" />
                      <p className="font-semibold">Calendário de eventos a carregar</p>
                      <p className="text-sm text-white/60 mt-1">
                        Todos os eventos das próximas 48h serão apresentados aqui após conexão aos provedores oficiais.
                      </p>
                    </CardContent>
                  </Card>
                )}
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
