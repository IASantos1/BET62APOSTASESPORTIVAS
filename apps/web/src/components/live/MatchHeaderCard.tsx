'use client';

import * as React from 'react';
import { Clock, CircleDot, Square, Flag } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TeamLogo } from '../ui/TeamLogo';
import { cn } from '../../lib/utils';

interface MatchPreview {
  homeTeam: { name: string; logoUrl?: string };
  awayTeam: { name: string; logoUrl?: string };
  score: { home: number; away: number };
  league: { name: string; logoUrl?: string };
  clock: { minute: number; period: string; running: boolean; stoppage?: number };
}

interface MatchHeaderCardProps {
  matchId: string;
}

const MOCK_MATCH: MatchPreview = {
  homeTeam: { name: 'Benfica' },
  awayTeam: { name: 'Sporting' },
  score: { home: 1, away: 1 },
  league: { name: 'Liga Portugal Bwin' },
  clock: { minute: 67, period: '2ºT', running: true, stoppage: 0 },
};

const MOCK_EVENTS = [
  { type: 'goal', team: 'h', minute: 23, label: 'Golo', icon: CircleDot, color: 'text-bet62-primary' },
  { type: 'goal', team: 'a', minute: 51, label: 'Golo', icon: CircleDot, color: 'text-bet62-secondary' },
  { type: 'yellow', team: 'h', minute: 34, label: 'Cartão Amarelo', icon: Square, color: 'text-yellow-400' },
  { type: 'corner', team: 'a', minute: 62, label: 'Canto', icon: Flag, color: 'text-bet62-accent' },
];

export function MatchHeaderCard({ matchId }: MatchHeaderCardProps) {
  const [match, setMatch] = React.useState<MatchPreview | null>(null);
  const [showEvents, setShowEvents] = React.useState(true);

  React.useEffect(() => {
    setMatch(MOCK_MATCH);
  }, [matchId]);

  const data = match ?? MOCK_MATCH;
  const { homeTeam, awayTeam, score, league, clock } = data;

  const formatClock = () => {
    if (clock.period === 'HT') return 'Intervalo';
    if (clock.period === 'FT') return `FT ${clock.minute}'${clock.stoppage ? `+${clock.stoppage}` : ''}`;
    return `${clock.minute}'${clock.stoppage ? `+${clock.stoppage}` : ''} ${clock.running ? 'LIVE' : ''}`;
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-5 space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {league.logoUrl ? (
              <img src={league.logoUrl} alt={league.name} className="w-6 h-6 rounded object-contain" />
            ) : (
              <div className="w-6 h-6 rounded bg-bet62-primary/15 flex items-center justify-center text-[10px] font-black text-bet62-primary">
                LP
              </div>
            )}
            <span className="font-semibold text-sm">{league.name}</span>
          </div>
          <Badge variant="green" dot className="py-0.5 px-2.5">
            LIVE
          </Badge>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6">
          <div className="flex flex-col items-center gap-2 min-w-0">
            <TeamLogo src={homeTeam.logoUrl} name={homeTeam.name} color="primary" size={56} />
            <p className="font-bold text-center truncate w-full">{homeTeam.name}</p>
          </div>

          <div className="text-center shrink-0">
            <div className="inline-flex items-center gap-2 md:gap-4 px-4 py-3 rounded-2xl border border-bet62-border bg-bet62-bg/60">
              <span className="font-mono font-black text-4xl md:text-5xl tabular-nums leading-none text-bet62-primary animate-pulse">
                {score.home}
              </span>
              <span className="text-white/30 text-2xl md:text-3xl font-black">–</span>
              <span className="font-mono font-black text-4xl md:text-5xl tabular-nums leading-none text-bet62-secondary animate-pulse">
                {score.away}
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
          {clock.stoppage ? (
            <Badge variant="amber" className="py-0 px-2 text-[10px]">
              +{clock.stoppage}' Paragem
            </Badge>
          ) : null}
        </div>

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
              {MOCK_EVENTS.map((ev, i) => (
                <div
                  key={i}
                  className={cn(
                    'rounded-xl border border-bet62-border bg-bet62-surface/40 p-2.5 flex items-center gap-2',
                    ev.team === 'h' ? 'border-l-[3px] border-l-bet62-primary' : 'border-l-[3px] border-l-bet62-secondary',
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
      </CardContent>
    </Card>
  );
}
