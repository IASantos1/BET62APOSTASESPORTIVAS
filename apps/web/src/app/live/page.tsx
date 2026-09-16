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
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Betslip, FloatingBetslipToggle } from '../../components/layout/Betslip';
import { EventMarketsModal } from '../../components/layout/EventMarketsModal';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Input } from '../../components/ui/Input';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import { cn } from '../../lib/utils';

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

export default function LivePage() {
  const router = useRouter();
  const [betslipOpen, setBetslipOpen] = React.useState(false);
  const [sport, setSport] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1800);
    return () => window.clearTimeout(t);
  }, []);

  void router;

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
                  MERCADO AO VIVO · {loading ? 'A sincronizar com provedores...' : 'Dados em tempo real'}
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
                  <Timer size={14} /> JOGOS A DECORRER: <span className="font-mono font-bold ml-1">{loading ? '...' : 0}</span>
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
            {!loading ? (
              <Card>
                <CardContent className="py-14 text-center">
                  <Zap size={32} className="mx-auto text-bet62-primary/50 mb-3" />
                  <p className="font-semibold">A aguardar dados dos provedores reais</p>
                  <p className="text-sm text-white/60 mt-1">
                    Os jogos ao vivo serão listados automaticamente assim que forem sincronizados via PropLine / Goal API.
                  </p>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>
        <Footer />
      </main>
      <Betslip open={betslipOpen} onClose={() => setBetslipOpen(false)} />
      <FloatingBetslipToggle onClick={() => setBetslipOpen(true)} open={betslipOpen} />
      <EventMarketsModal event={null} onClose={() => {}} onSelect={() => {}} />
    </div>
  );
}
