'use client';

import * as React from 'react';
import { Clock, Square, Flag } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TeamLogo } from '../ui/TeamLogo';
import { cn } from '../../lib/utils';

export interface MatchPreviewEvent {
  type: string;
  team: 'h' | 'a' | 'neutral';
  minute: number;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

export interface MatchPreview {
  homeTeam: { name: string; logoUrl?: string };
  awayTeam: { name: string; logoUrl?: string };
  score: { home: number | null; away: number | null };
  league: { name: string; logoUrl?: string };
  clock: { minute: number | null; period: string; running: boolean; stoppage?: number };
  status?: 'PRE_MATCH' | 'LIVE' | 'HALF_TIME' | 'FINISHED' | string;
  events?: MatchPreviewEvent[];
}

interface MatchHeaderCardProps {
  matchId: string;
  match?: MatchPreview | null;
}

export function MatchHeaderCard({ matchId, match }: MatchHeaderCardProps) {
  const [data, setData] = React.useState<MatchPreview | null>(match ?? null);
  const [showEvents, setShowEvents] = React.useState(true);

  React.useEffect(() => {
    if (match !== undefined) {
      setData(match);
    }
  }, [matchId, match]);

  if (!data) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-8 flex flex-col items-center justify-center min-h-[240px] gap-2 text-white/40">
          <Clock size={28} className="animate-pulse" />
          <p className="text-sm font-semibold">A carregar dados da partida...</p>
        </CardContent>
      </Card>
    );
  }

  const { homeTeam, awayTeam, score, league, clock, events } = data;

  const formatClock = () => {
    if (!clock) return '';
    if (clock.period === 'HT' || clock.period === 'Intervalo') return 'Intervalo';
    if (clock.period === 'FT' || clock.period === 'Final') {
      return `FT ${clock.minute ?? 90}'${clock.stoppage ? `+${clock.stoppage}` : ''}`;
    }
    return `${clock.minute ?? 0}'${clock.stoppage ? `+${clock.stoppage}` : ''} ${clock.running ? 'LIVE' : ''}`;
  };

  const isLive = clock?.running || data.status === 'LIVE' || data.status === 'HALF_TIME';

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-5 space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {league.logoUrl ? (
              <img src={league.logoUrl} alt={league.name} className="w-6 h-6 rounded object-contain" />
            ) : (
              <div className="w-6 h-6 rounded bg-bet62-primary/15 flex items-center justify-center text-[10px] font-black text-bet62-primary">
                {(league.name || 'LP').slice(0, 2).toUpperCase()}
              </div>
            )}
            <span className="font-semibold text-sm">{league.name}</span>
          </div>
          {isLive ? (
            <Badge variant="green" dot className="py-0.5 px-2.5">
              LIVE
            </Badge>
          ) : data.status === 'FINISHED' || clock?.period === 'FT' ? (
            <Badge variant="outline" className="py-0.5 px-2.5">
              Terminado
            </Badge>
          ) : (
            <Badge variant="outline" className="py-0.5 px-2.5">
              Pré-Jogo
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6">
          <div className="flex flex-col items-center gap-2 min-w-0">
            <TeamLogo src={homeTeam.logoUrl} name={homeTeam.name} color="primary" size={56} />
            <p className="font-bold text-center truncate w-full">{homeTeam.name}</p>
          </div>

          <div className="text-center shrink-0">
            <div className="inline-flex items-center gap-2 md:gap-4 px-4 py-3 rounded-2xl border border-bet62-border bg-bet62-bg/60">
              <span className="font-mono font-black text-4xl md:text-5xl tabular-nums leading-none text-bet62-primary">
                {score.home ?? '-'}
              </span>
              <span className="text-white/30 text-2xl md:text-3xl font-black">–</span>
              <span className="font-mono font-black text-4xl md:text-5xl tabular-nums leading-none text-bet62-secondary">
                {score.away ?? '-'}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 min-w-0">
            <TeamLogo src={awayTeam.logoUrl} name={awayTeam.name} color="secondary" size={56} />
            <p className="font-bold text-center truncate w-full">{awayTeam.name}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm">
          <Clock size={16} className="text-bet62-primary" />
          <span className="font-mono font-bold text-bet62-primary">
            {formatClock()}
          </span>
          {clock?.stoppage ? (
            <Badge variant="amber" className="py-0 px-2 text-[10px]">
              +{clock.stoppage}' Paragem
            </Badge>
          ) : null}
        </div>

        {events && events.length > 0 ? (
          <div>
            <button
              type="button"
              onClick={() => setShowEvents((s) => !s)}
              className="w-full flex items-center justify-between text-xs uppercase tracking-wider text-white/55 font-semibold mb-2 hover:text-white/80 transition"
            >
              <span>Últimos eventos</span>
              <span className={cn('transition-transform', showEvents ? 'rotate-90' : '')}>›</span>
            </button>
            {showEvents ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {events.map((ev, i) => (
                  <div
                    key={i}
                    className={cn(
                      'rounded-xl border border-bet62-border bg-bet62-surface/40 p-2.5 flex items-center gap-2',
                      ev.team === 'h'
                        ? 'border-l-[3px] border-l-bet62-primary'
                        : ev.team === 'a'
                          ? 'border-l-[3px] border-l-bet62-secondary'
                          : 'border-l-[3px] border-l-white/20',
                    )}
                  >
                    <ev.icon size={14} className={ev.color} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold truncate">{ev.label}</p>
                      <p className="text-[10px] text-white/50 font-mono">{ev.minute}'</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
