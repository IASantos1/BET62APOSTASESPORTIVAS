'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  AlertTriangle,
  RefreshCw,
  Info,
  Server,
  KeyRound,
  ExternalLink,
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Sidebar } from '../components/layout/Sidebar';
import { Betslip, FloatingBetslipToggle } from '../components/layout/Betslip';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { OddsButton } from '../components/ui/OddsButton';
import { Progress } from '../components/ui/Progress';
import { formatCurrencyEUR, cn } from '../lib/utils';
import { useBetslipStore } from '../stores/betslip.store';
import { apiClient } from '../lib/api-client';

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

type EventScore = { home?: number | null; away?: number | null };
type BaseSelection = {
  id?: string;
  name: string;
  label?: string;
  code?: string;
  outcome?: string;
  odds: number;
  status?: "active" | "suspended" | "settled" | "void";
};
type BaseMarket = {
  id?: string;
  code?: string;
  type?: string;
  name?: string;
  status?: "active" | "suspended" | "settled" | "void";
  selections: BaseSelection[];
};
type BaseEvent = {
  id: string;
  sportType: string;
  name: string;
  homeTeamName?: string;
  awayTeamName?: string;
  leagueName?: string;
  status: string;
  kickoffAt: string | Date;
  liveScoreJson?: EventScore | null;
  liveClockJson?: { minute?: number | null } | null;
  marketsCount?: number;
  markets?: BaseMarket[];
  selections?: BaseSelection[];
};

const MATCH_1X2_MARKET_CODES = new Set([
  'MATCH_WINNER_1X2', 'MATCH_1X2', '1X2', 'FULL_TIME_1X2', 'FT_1X2',
  'MATCH_WINNER', 'WINNER', 'FULL_TIME_RESULT', 'RESULT_FT',
  // 'h2h' e o codigo generico da PropLine para o mercado de
  // vencedor/moneyline em TODOS os esportes (futebol, tenis, basquete...),
  // nao so futebol — sem isso nenhum esporte batia neste filtro.
  'H2H',
]);
const HOME_SELECTION_CODES = new Set(['HOME', '1', 'HOME_TEAM', 'HOME_WIN', 'CASA']);
const DRAW_SELECTION_CODES = new Set(['DRAW', 'X', 'DRAW_X', 'EMPATE', 'TIE']);
const AWAY_SELECTION_CODES = new Set(['AWAY', '2', 'AWAY_TEAM', 'AWAY_WIN', 'FORA']);

function findMatch1X2Odds(ev: BaseEvent): { home: number | null; draw: number | null; away: number | null } {
  const markets = ev.markets ?? [];
  let home: number | null = null;
  let draw: number | null = null;
  let away: number | null = null;
  for (const m of markets) {
    if (!m) continue;
    const normalizedCode = String(m.type ?? m.code ?? m.name ?? '').trim().toUpperCase().replace(/[^A-Z0-9_]/g, '');
    const isMatch =
      MATCH_1X2_MARKET_CODES.has(normalizedCode) ||
      normalizedCode.includes('1X2') ||
      normalizedCode.includes('MATCHWINNER') ||
      (normalizedCode.includes('WINNER') && !normalizedCode.includes('TOURNAMENT'));
    if (!isMatch) continue;
    if (m.status && m.status !== 'active') continue;
    for (const s of m.selections ?? []) {
      if (!s) continue;
      if (s.status && s.status !== 'active') continue;
      // A API ja manda `outcome` normalizado ('home'/'away'/'draw') — usar
      // isso primeiro. `code`/`name` ficam so como fallback para fontes
      // mais antigas que nao tragam esse campo.
      const outcomeClean = String(s.outcome ?? '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
      const code = String(s.code ?? s.name ?? '').trim().toUpperCase();
      const clean = outcomeClean || code.replace(/[^A-Z0-9]/g, '');
      const oddsValue = Number(s.odds);
      if (!Number.isFinite(oddsValue) || oddsValue <= 1) continue;
      if (HOME_SELECTION_CODES.has(clean) || clean === '1' || code.endsWith(' 1')) {
        if (home === null || oddsValue > home) home = oddsValue;
      } else if (DRAW_SELECTION_CODES.has(clean) || clean === 'X' || /^X\b/.test(code) || /EMPA?TE/.test(code)) {
        if (draw === null || oddsValue > draw) draw = oddsValue;
      } else if (AWAY_SELECTION_CODES.has(clean) || clean === '2' || code.endsWith(' 2')) {
        if (away === null || oddsValue > away) away = oddsValue;
      }
    }
    if (home !== null || draw !== null || away !== null) break;
  }
  return { home, draw, away };
}

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
          <div className="grid grid-cols-3 gap-2 pt-1">
            {[0, 1, 2].map((k) => (
              <div key={k} className="h-9 rounded-lg bg-bet62-surface/40 animate-pulse" />
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
      transition={{ duration: 0.35, delay: 0.04 * i }}
    >
      <Card className="h-full">
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 w-24 rounded-full bg-bet62-surface/40 animate-pulse" />
            <div className="h-3 w-32 rounded bg-bet62-surface/40 animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-bet62-surface/40 animate-pulse shrink-0" />
                <div className="h-5 w-32 rounded bg-bet62-surface/40 animate-pulse" />
              </div>
              <div className="h-5 w-12 rounded bg-bet62-surface/40 animate-pulse" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-bet62-surface/40 animate-pulse shrink-0" />
                <div className="h-5 w-32 rounded bg-bet62-surface/40 animate-pulse" />
              </div>
              <div className="h-5 w-12 rounded bg-bet62-surface/40 animate-pulse" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {[0, 1, 2].map((k) => (
              <div key={k} className="h-11 rounded-lg bg-bet62-surface/40 animate-pulse" />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function formatKickoff(k: string | Date): string {
  try {
    const d = typeof k === 'string' ? new Date(k) : k;
    if (isNaN(d.getTime())) return String(k);
    return d.toLocaleString('pt-PT', { weekday: 'short', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  } catch {
    return String(k);
  }
}

function FeaturedEventCard({ ev }: { ev: BaseEvent }) {
  const router = useRouter();
  const home = ev.homeTeamName ?? ev.name.split(' vs ')[0] ?? 'Casa';
  const away = ev.awayTeamName ?? ev.name.split(' vs ')[1] ?? 'Fora';
  const score: EventScore = ev.liveScoreJson ?? {};
  const isLive = ev.status === 'LIVE' || ev.status === 'HALF_TIME';
  const minute = typeof (ev.liveClockJson as { minute?: number } | null)?.minute === 'number'
    ? `${(ev.liveClockJson as { minute: number }).minute}'`
    : null;

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <Card
        role="button"
        tabIndex={0}
        onClick={() => router.push(`/live/match/${encodeURIComponent(ev.id)}`)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') router.push(`/live/match/${encodeURIComponent(ev.id)}`);
        }}
        className="h-full hover:border-bet62-primary/40 transition cursor-pointer"
      >
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="!py-0.5 text-[11px] truncate">
              {ev.leagueName ?? ev.sportType}
            </Badge>
            {isLive ? (
              <Badge variant="danger" dot className="!py-0.5 text-[11px]">
                <Flame size={11} /> {minute ?? 'LIVE'}
              </Badge>
            ) : (
              <Badge variant="blue" className="!py-0.5 text-[11px]">
                <Clock size={11} /> {formatKickoff(ev.kickoffAt)}
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <CircleUser size={20} className="shrink-0 text-bet62-surface-2" />
              <p className="font-bold truncate text-sm">{home}</p>
            </div>
            <div className="text-center shrink-0">
              {isLive ? (
                <p className="font-mono font-black text-lg text-bet62-primary leading-none">
                  {score.home ?? 0}-{score.away ?? 0}
                </p>
              ) : (
                <p className="text-white/30 font-mono text-xs">VS</p>
              )}
            </div>
            <div className="flex items-center gap-2 justify-end min-w-0">
              <p className="font-bold truncate text-sm">{away}</p>
              <CircleUser size={20} className="shrink-0 text-bet62-surface-2" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {(() => {
              const odds = findMatch1X2Odds(ev);
              const anyReal = odds.home !== null || odds.draw !== null || odds.away !== null;
              return [
                { label: 'Casa', price: odds.home, placeholder: anyReal ? '—' : 'Em atualização' },
                { label: 'Empate', price: odds.draw, placeholder: '—' },
                { label: 'Fora', price: odds.away, placeholder: '—' },
              ].map((cell) => (
                <OddsButton key={cell.label} label={cell.label} price={cell.price} placeholder={cell.placeholder} />
              ));
            })()}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function LiveEventCard({ ev }: { ev: BaseEvent }) {
  const router = useRouter();
  const home = ev.homeTeamName ?? ev.name.split(' vs ')[0] ?? 'Casa';
  const away = ev.awayTeamName ?? ev.name.split(' vs ')[1] ?? 'Fora';
  const score: EventScore = ev.liveScoreJson ?? {};

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <Card
        role="button"
        tabIndex={0}
        onClick={() => router.push(`/live/match/${encodeURIComponent(ev.id)}`)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') router.push(`/live/match/${encodeURIComponent(ev.id)}`);
        }}
        className="h-full overflow-hidden hover:border-bet62-primary/40 transition group cursor-pointer"
      >
        <div className="h-1 bg-bet62-primary/60 animate-pulse-slow" />
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="green" dot className="!py-0.5 text-[10px] truncate">
              <Flame size={11} /> {ev.leagueName ?? ev.sportType}
            </Badge>
            <Badge variant="danger" dot className="!py-0.5 text-[10px]">
              {typeof (ev.liveClockJson as { minute?: number } | null)?.minute === 'number'
                ? `${(ev.liveClockJson as { minute: number }).minute}'`
                : ev.status}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <CircleUser size={16} className="shrink-0 text-bet62-surface-2" />
                <p className="font-bold truncate text-sm">{home}</p>
              </div>
              <p className="font-mono font-black text-bet62-primary leading-none text-lg shrink-0">
                {score.home ?? 0}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <CircleUser size={16} className="shrink-0 text-bet62-surface-2" />
                <p className="font-bold truncate text-sm">{away}</p>
              </div>
              <p className="font-mono font-black text-bet62-primary leading-none text-lg shrink-0">
                {score.away ?? 0}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {(() => {
              const odds = findMatch1X2Odds(ev);
              const anyReal = odds.home !== null || odds.draw !== null || odds.away !== null;
              return [
                { label: '1', price: odds.home, placeholder: anyReal ? '—' : 'Em atualização' },
                { label: 'X', price: odds.draw, placeholder: '—' },
                { label: '2', price: odds.away, placeholder: '—' },
              ].map((cell) => (
                <OddsButton key={cell.label} label={cell.label} price={cell.price} placeholder={cell.placeholder} />
              ));
            })()}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function UpcomingEventCard({ ev }: { ev: BaseEvent }) {
  const router = useRouter();
  const home = ev.homeTeamName ?? ev.name.split(' vs ')[0] ?? 'Casa';
  const away = ev.awayTeamName ?? ev.name.split(' vs ')[1] ?? 'Fora';

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <Card
        role="button"
        tabIndex={0}
        onClick={() => router.push(`/live/match/${encodeURIComponent(ev.id)}`)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') router.push(`/live/match/${encodeURIComponent(ev.id)}`);
        }}
        className="h-full hover:border-bet62-primary/40 transition group cursor-pointer"
      >
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="!py-0.5 text-[11px] truncate">
              <Trophy size={11} /> {ev.leagueName ?? ev.sportType}
            </Badge>
            <Badge variant="blue" className="!py-0.5 text-[11px]">
              <Clock size={11} /> {formatKickoff(ev.kickoffAt)}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <CircleUser size={20} className="shrink-0 text-bet62-surface-2" />
                <p className="font-bold truncate">{home}</p>
              </div>
              <Badge variant="outline" className="!py-0.5 text-[10px]">
                CASA
              </Badge>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <CircleUser size={20} className="shrink-0 text-bet62-surface-2" />
                <p className="font-bold truncate">{away}</p>
              </div>
              <Badge variant="outline" className="!py-0.5 text-[10px]">
                FORA
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {(() => {
              const odds = findMatch1X2Odds(ev);
              const anyReal = odds.home !== null || odds.draw !== null || odds.away !== null;
              return [
                { label: '1', price: odds.home, placeholder: anyReal ? '—' : 'Em atualização' },
                { label: 'X', price: odds.draw, placeholder: '—' },
                { label: '2', price: odds.away, placeholder: '—' },
              ].map((cell) => (
                <OddsButton key={cell.label} label={cell.label} price={cell.price} placeholder={cell.placeholder} />
              ));
            })()}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function HomePage() {
  const [betslipOpen, setBetslipOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [prematch, setPrematch] = React.useState<BaseEvent[]>([]);
  const [live, setLive] = React.useState<BaseEvent[]>([]);
  const [refetchAt, setRefetchAt] = React.useState<number>(Date.now());
  const lastSetPrematchAt = React.useRef<number>(0);
  const lastSetLiveAt = React.useRef<number>(0);
  const addToBetslip = useBetslipStore((s) => s.addSelection);
  void addToBetslip;

  React.useEffect(() => {
    const t = window.setInterval(() => setRefetchAt(Date.now()), 30_000);
    return () => window.clearInterval(t);
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    const firstRun = loading;
    if (firstRun) setLoading(true);
    const runAll = async () => {
      try {
        const [prematchRes, footballPrematchRes, footballLiveRes, liveRes] = await Promise.all([
          apiClient.get<{ events: BaseEvent[]; total: number; page: number; limit: number }>('/odds/events/prematch?limit=50', { auth: false }),
          (async () => {
            try {
              return await apiClient.get<{ events: BaseEvent[]; total: number; page: number; limit: number }>('/odds/events/prematch?sports=FOOTBALL&limit=50', { auth: false });
            } catch {
              return { events: [] as BaseEvent[], total: 0, page: 1, limit: 50 };
            }
          })(),
          (async () => {
            try {
              return await apiClient.get<{ events: BaseEvent[]; total: number; page: number; limit: number }>('/odds/events/live?sports=FOOTBALL&limit=50', { auth: false });
            } catch {
              return { events: [] as BaseEvent[], total: 0, page: 1, limit: 50 };
            }
          })(),
          apiClient.get<{ events: BaseEvent[]; total: number; page: number; limit: number }>('/odds/events/live?limit=50', { auth: false }),
        ]);
        if (cancelled) return;
        const now = Date.now();
        const k = (ev: BaseEvent) => { const t = new Date(ev.kickoffAt).getTime(); return Number.isFinite(t) ? t : now; };
        const seen = new Set<string>();
        const merged: BaseEvent[] = [];
        for (const src of [footballPrematchRes?.events ?? [], prematchRes?.events ?? []]) {
          for (const ev of src) {
            if (!ev || !ev.id) continue;
            if (seen.has(ev.id)) {
              const prev = merged.find((m) => m.id === ev.id);
              if (prev && (!prev.markets || prev.markets.length === 0) && ev.markets && ev.markets.length > 0) {
                prev.markets = ev.markets;
                if (typeof (ev.marketsCount as unknown) === 'number') prev.marketsCount = ev.marketsCount;
              }
              continue;
            }
            seen.add(ev.id);
            merged.push(ev);
          }
        }
        const liveSeen = new Set<string>();
        const liveMerged: BaseEvent[] = [];
        for (const src of [footballLiveRes?.events ?? [], liveRes?.events ?? []]) {
          for (const ev of src) {
            if (!ev || !ev.id) continue;
            if (liveSeen.has(ev.id)) {
              const prev = liveMerged.find((m) => m.id === ev.id);
              if (prev && (!prev.markets || prev.markets.length === 0) && ev.markets && ev.markets.length > 0) {
                prev.markets = ev.markets;
                if (typeof (ev.marketsCount as unknown) === 'number') prev.marketsCount = ev.marketsCount;
              }
              continue;
            }
            liveSeen.add(ev.id);
            liveMerged.push(ev);
          }
        }
        const isLiveStatus = (s: string) => s === 'LIVE' || s === 'HALF_TIME' || s === 'HT' || s === 'IN_PLAY';
        const liveAll = liveMerged.filter((ev) => isLiveStatus(ev.status));
        const sortedLiveAll = liveAll.length > 0
          ? liveAll
          : liveMerged.slice().sort((a, b) => k(b) - k(a)).slice(0, 10);
        const futureCutoffMs = now - 180 * 60 * 1000;
        const futurePrematch = merged.filter((ev) => {
          if (isLiveStatus(ev.status)) return false;
          const t = k(ev);
          return t >= futureCutoffMs;
        }).sort((a, b) => k(a) - k(b));
        const fallbackPrematch = futurePrematch.length === 0
          ? merged.slice().sort((a, b) => k(b) - k(a)).slice(0, 18)
          : futurePrematch;
        const nowTs = Date.now();
        if (firstRun || fallbackPrematch.length > 0 || nowTs - lastSetPrematchAt.current > 60_000) {
          setPrematch(fallbackPrematch);
          lastSetPrematchAt.current = nowTs;
        }
        if (firstRun || sortedLiveAll.length > 0 || nowTs - lastSetLiveAt.current > 60_000) {
          setLive(sortedLiveAll);
          lastSetLiveAt.current = nowTs;
        }
        const pCount = fallbackPrematch.length;
        const lCount = sortedLiveAll.length;
        if (typeof console !== 'undefined') {
          // eslint-disable-next-line no-console
          console.table({
            'Home fetch 200 OK': firstRun ? '1ª carga OK' : 'Refresh OK',
            'Prematch (geral)': prematchRes?.events?.length ?? 0,
            'Prematch Goal API football EXTRA': footballPrematchRes?.events?.length ?? 0,
            'Ao vivo Goal API football EXTRA': footballLiveRes?.events?.length ?? 0,
            'Ao vivo (geral)': liveRes?.events?.length ?? 0,
            'Prematch unicos final (merge + dedupe + odds cross-over)': merged.length,
            'Prematch futuro ou recente (<=3h pass.)': pCount,
            'Ao vivo status LIVE/HT': lCount,
            'Prematch.total backend': prematchRes?.total ?? 'N/A',
            'Football.total backend': footballPrematchRes?.total ?? 'N/A',
            'Live.total backend': liveRes?.total ?? 'N/A',
            'API Keys?': pCount + lCount === 0 ? '⚠️  VERIFICAR RAILWAY PROPLINE_API_KEY + GOAL_API_KEY' : '✅ OK',
          });
        }
        if (!firstRun) setError(null);
      } catch (err) {
        if (cancelled) return;
        const msg = err instanceof Error ? err.message : String(err);
        if (firstRun || prematch.length === 0) {
          setError(msg || 'Falha ao carregar jogos. A tentar novamente em 30 segundos...');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void runAll();
    return () => {
      cancelled = true;
    };
  }, [refetchAt]);

  const featured = prematch.slice(0, 6);
  const upcoming = prematch.slice(6, 18);
  const liveNow = live.slice(0, 5);

  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      {error ? (
        <div className="relative z-40 mx-4 mt-4 max-w-[1400px] lg:mx-auto lg:px-8">
          <Card className="border-red-500/40 bg-red-500/5 backdrop-blur-xl shadow-xl shadow-red-900/20">
            <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                  <AlertTriangle size={20} className="text-red-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-red-300 text-sm flex items-center gap-2">
                    <span className="uppercase tracking-widest text-[10px] px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20">Aviso</span>
                    Não foi possível carregar os jogos
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-white/65 font-mono truncate max-w-full">
                    {error}
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/40">
                    Próxima tentativa automática em ~30s · Clica no botão para tentar já
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

      {!loading && !error && prematch.length === 0 && live.length === 0 ? (
        <div className="relative z-39 mx-4 mt-4 max-w-[1400px] lg:mx-auto lg:px-8">
          <Card className="border-amber-500/30 bg-amber-500/5 backdrop-blur-xl shadow-xl shadow-amber-900/10">
            <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mt-0.5">
                <Info size={20} className="text-amber-400" />
              </div>
              <div className="flex-1 min-w-0 space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="amber" className="uppercase tracking-widest text-[10px] px-2 py-0.5">
                    <Server size={10} className="mr-1" /> Sincronização em curso
                  </Badge>
                  <span className="text-xs text-white/45 font-mono">HTTP 200 · events.length=0</span>
                </div>
                <p className="font-bold text-amber-200 text-sm">
                  Nenhum evento recebido dos provedores de odds ainda
                </p>
                <ol className="list-decimal pl-4 marker:text-amber-400 marker:font-bold space-y-1.5 text-xs text-white/70 leading-relaxed">
                  <li>
                    <span className="font-semibold text-white/85">Railway Dashboard:</span> Serviços <code className="font-mono text-[11px] bg-bet62-surface border border-bet62-border rounded px-1.5 py-0.5">odds-service</code>, <code className="font-mono text-[11px] bg-bet62-surface border border-bet62-border rounded px-1.5 py-0.5">api-gateway</code>, <code className="font-mono text-[11px] bg-bet62-surface border border-bet62-border rounded px-1.5 py-0.5">web</code> → ⟳ <span className="font-semibold">Redeploy</span> com <span className="underline decoration-dashed decoration-amber-400/80">☑️ Clear build cache before redeploying</span> LIGADO (obrigatório).
                  </li>
                  <li>
                    <span className="font-semibold text-white/85">Depois do redeploy:</span> a primeira sincronização Goal API + PropLine demora 1-3 minutos. Clica em "Tentar novamente" ou aguarda 2 minutos e faz Hard Refresh.
                  </li>
                  <li>
                    <span className="font-semibold text-white/85"><KeyRound size={12} className="inline mr-1" /> Variáveis obrigatórias:</span> <code className="font-mono text-[11px] bg-bet62-surface border border-bet62-border rounded px-1.5 py-0.5">PROPLINE_API_KEY</code>, <code className="font-mono text-[11px] bg-bet62-surface border border-bet62-border rounded px-1.5 py-0.5">GOAL_API_KEY</code>, <code className="font-mono text-[11px] bg-bet62-surface border border-bet62-border rounded px-1.5 py-0.5">ENABLE_GOAL=true</code>, <code className="font-mono text-[11px] bg-bet62-surface border border-bet62-border rounded px-1.5 py-0.5">ENABLE_PROPLINE=true</code> (serviço odds-service).
                  </li>
                  <li>
                    <span className="font-semibold text-white/85">DevTools → Console:</span> procura por <code className="font-mono text-[11px] bg-bet62-surface border border-bet62-border rounded px-1.5 py-0.5">console.table</code> BET62 — tem a contagem exata de "Goal API football extra" e "Futuro ou recente".
                  </li>
                </ol>
                <div className="pt-1 flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setRefetchAt(Date.now())}
                    className="border-amber-500/30 hover:!bg-amber-500/10 hover:!border-amber-500/60 transition text-amber-100"
                  >
                    <RefreshCw size={14} /> Tentar novamente agora
                  </Button>
                  <Link href="/ajuda" className="inline-flex">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-white/70"
                      asChild
                    >
                      <span><ExternalLink size={14} /> Central de Ajuda</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}
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
                            {formatCurrencyEUR(JACKPOT)}
                          </p>
                          <Progress value={(JACKPOT / 200000) * 100} variant="primary" size="md" className="mt-5" />
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
                  <p className="text-sm text-white/60 mt-1">
                    {loading ? 'A sincronizar...' : `Os eventos mais populares desta semana (${featured.length} eventos)`}
                  </p>
                </div>
                <Link href="/events" className="text-sm text-bet62-primary hover:underline underline-offset-4 inline-flex items-center gap-1">
                  Ver todos <ChevronRight size={14} />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {loading
                  ? [0, 1, 2, 3, 4, 5].map((i) => <FeaturedSkeleton key={i} i={i} />)
                  : featured.length > 0
                  ? featured.map((ev) => <FeaturedEventCard key={ev.id} ev={ev} />)
                  : (
                    <Card className="md:col-span-2 xl:col-span-3">
                      <CardContent className="py-12 text-center">
                        <Clock size={30} className="mx-auto text-bet62-primary/50 mb-3" />
                        <p className="font-semibold">Sem eventos em destaque</p>
                        <p className="text-sm text-white/60 mt-1">
                          Os jogos em destaque serão publicados automaticamente após sincronização com PropLine / Goal API.
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
                    <Badge variant="green" dot className="text-xs">{loading ? '...' : liveNow.length} em jogo</Badge>
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
                {loading
                  ? [0, 1, 2, 3, 4].map((i) => <LiveSkeleton key={i} i={i} />)
                  : liveNow.length > 0
                  ? liveNow.map((ev) => <LiveEventCard key={ev.id} ev={ev} />)
                  : (
                    <Card className="md:col-span-2 xl:col-span-5">
                      <CardContent className="py-12 text-center">
                        <Activity size={30} className="mx-auto text-bet62-primary/50 mb-3" />
                        <p className="font-semibold">Sem jogos ao vivo neste momento</p>
                        <p className="text-sm text-white/60 mt-1">
                          Os eventos ao vivo serão listados em tempo real assim que começarem, via PropLine / Goal API.
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
                  <p className="text-sm text-white/60 mt-1">
                    {loading ? 'A carregar calendário...' : `Grandes jogos a chegar · Odds definidas (${upcoming.length} eventos)`}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {loading
                  ? [0, 1, 2, 3, 4, 5].map((i) => <UpcomingSkeleton key={i} i={i} />)
                  : upcoming.length > 0
                  ? upcoming.map((ev) => <UpcomingEventCard key={ev.id} ev={ev} />)
                  : (
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
