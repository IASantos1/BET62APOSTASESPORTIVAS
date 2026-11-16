'use client';

// Blocos das páginas de desporto (no estilo do outro projeto, com o visual deste): linha compacta de
// jogo, grupos por liga, carrossel, cartões de jogo, ligas, desportos e apostas prontas.
import Link from 'next/link';
import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  MAIN_MARKETS,
  mainOddsOf,
  pickOf,
  type Acca,
  type BoardEvent,
  type Builder,
  type LeagueNode,
} from '../../lib/board';
import { SPORTS, SPORT_BY_KEY, countryLabel, popularLeagues, sportRank, type SportKey } from '../../lib/sports/catalog';
import { useSlip } from '../../stores/slip.store';
import { cn } from '../../lib/utils';
import { fmtOdds, fmtWhen, leagueHref, matchHref } from './links';

// ---------- odds ----------

export function OddButton({ event, outcomeId, marketId, label, compact = false }: { event: BoardEvent; outcomeId: string; marketId: string; label: string; compact?: boolean }) {
  const toggle = useSlip((s) => s.toggle);
  const selected = useSlip((s) => s.picks.some((p) => p.key === `${event.id}|${marketId}||${outcomeId}`));
  const o = event.markets[marketId]?.['']?.[outcomeId];
  const odds = Number(o?.k) || 0;
  const blocked = !o || o.b === 1 || odds <= 1;
  const market = MAIN_MARKETS.find((m) => m.id === marketId);
  const team = label === '1' ? event.home : label === '2' ? event.away : 'Empate';
  return (
    <button
      disabled={blocked}
      onClick={() => {
        const p = pickOf(event, marketId, '', outcomeId, market?.name ?? 'Resultado', team);
        if (p) toggle(p);
      }}
      className={cn(
        'flex items-center justify-between gap-1 rounded-lg border px-2 text-sm transition',
        compact ? 'h-9 min-w-[3.6rem]' : 'h-10 flex-1',
        selected
          ? 'border-bet62-primary bg-bet62-primary text-white'
          : 'border-bet62-border bg-bet62-bg/50 hover:border-bet62-primary/50',
        blocked && 'opacity-40 cursor-not-allowed',
      )}
    >
      <span className={cn('text-xs', selected ? 'text-white/80' : 'text-white/45')}>{label}</span>
      <b className={cn('font-mono', selected ? 'text-white' : 'text-bet62-primary')}>{blocked ? '—' : fmtOdds(odds)}</b>
    </button>
  );
}

function MainOdds({ e, compact }: { e: BoardEvent; compact?: boolean }) {
  const odds = mainOddsOf(e);
  if (!odds.length) return <span className="text-xs text-white/35">—</span>;
  return (
    <div className={cn('flex gap-1.5', !compact && 'w-full')}>
      {odds.map((o) => (
        <OddButton key={o.outcomeId} event={e} outcomeId={o.outcomeId} marketId={o.marketId} label={o.label} compact={compact} />
      ))}
    </div>
  );
}

// ---------- linha de jogo (listas por liga) ----------

export function EventRow({ e }: { e: BoardEvent }) {
  const live = e.status === 'live';
  const more = Object.keys(e.markets).length;
  return (
    <div className="border-t border-bet62-border/60 px-3 py-2 first:border-t-0">
      <div className="flex items-center gap-3">
        <Link href={matchHref(e.id, live)} className="flex min-w-0 flex-1 items-center gap-3">
          <div className="w-14 shrink-0 whitespace-pre-line text-[11px] leading-tight">
            {live ? (
              <span className="font-semibold text-bet62-primary">● {e.clock || 'Ao vivo'}</span>
            ) : (
              <span className="text-white/50">{fmtWhen(e.startTime).replace(', ', '\n')}</span>
            )}
          </div>
          <div className="min-w-0 flex-1 text-sm">
            <div className="flex items-center justify-between gap-2">
              <span className="truncate">{e.home}</span>
              {live && e.score && <b className="font-mono">{e.score.home}</b>}
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="truncate">{e.away}</span>
              {live && e.score && <b className="font-mono">{e.score.away}</b>}
            </div>
          </div>
        </Link>
        <div className="hidden sm:block">
          <MainOdds e={e} compact />
        </div>
        <Link href={matchHref(e.id, live)} className="w-9 shrink-0 text-right text-xs text-white/45 hover:text-white">
          +{more}
        </Link>
      </div>
      {/* Telemóvel: as odds ficam por baixo das equipas */}
      <div className="mt-2 sm:hidden">
        <MainOdds e={e} />
      </div>
    </div>
  );
}

/** Jogos agrupados por liga (desporto, depois prioridade da liga). `limit` = nº de ligas. */
export function CompetitionGroups({ events, limit = Infinity }: { events: BoardEvent[]; limit?: number }) {
  const groups = new Map<string, BoardEvent[]>();
  const ordered = [...events].sort(
    (a, b) => sportRank(a.sport) - sportRank(b.sport) || a.tier - b.tier || a.competition.localeCompare(b.competition) || (a.startTime ?? 0) - (b.startTime ?? 0),
  );
  for (const e of ordered) {
    const k = `${e.sport}|${e.competition}`;
    groups.set(k, [...(groups.get(k) ?? []), e]);
  }
  return (
    <div className="space-y-3">
      {[...groups.entries()].slice(0, limit).map(([k, list]) => {
        const e = list[0];
        return (
          <div key={k} className="overflow-hidden rounded-2xl border border-bet62-border bg-bet62-surface/50">
            <Link
              href={leagueHref(e.sport, e.competition)}
              className="flex items-center justify-between gap-2 bg-white/[0.03] px-3 py-2 text-xs hover:bg-white/[0.06]"
            >
              <span className="flex min-w-0 items-center gap-2">
                <span>{SPORT_BY_KEY[e.sport].icon}</span>
                <span className="truncate text-white/50">{countryLabel(e.country)}</span>
                <b className="truncate text-white">{e.league}</b>
              </span>
              <span className="text-white/40">{list.length}</span>
            </Link>
            {list.map((x) => (
              <EventRow key={x.id} e={x} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

// ---------- carrossel e cartões ----------

export function Carousel({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const move = (dir: number) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' });
  return (
    <div className="relative group">
      <div ref={ref} className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
      <button onClick={() => move(-1)} aria-label="Anterior" className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-bet62-surface-2 p-1.5 shadow md:group-hover:block">
        <ChevronLeft size={18} />
      </button>
      <button onClick={() => move(1)} aria-label="Seguinte" className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-bet62-surface-2 p-1.5 shadow md:group-hover:block">
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export function MatchCard({ e }: { e: BoardEvent }) {
  const live = e.status === 'live';
  return (
    <div className="snap-start w-[17rem] shrink-0 rounded-2xl border border-bet62-border bg-bet62-surface/60 p-3 space-y-3">
      <Link href={matchHref(e.id, live)} className="block space-y-2">
        <div className="flex items-center justify-between gap-2 text-[11px]">
          <span className="truncate text-white/50">
            {SPORT_BY_KEY[e.sport].icon} {e.league}
          </span>
          {live ? <span className="shrink-0 font-semibold text-bet62-primary">● {e.clock || 'Ao vivo'}</span> : <span className="shrink-0 text-white/50">{fmtWhen(e.startTime)}</span>}
        </div>
        <div className="space-y-1 text-sm font-semibold">
          {[
            [e.home, e.score?.home],
            [e.away, e.score?.away],
          ].map(([name, s], i) => (
            <div key={i} className="flex justify-between gap-2">
              <span className="truncate">{name}</span>
              {live && s !== undefined && <b className="font-mono">{s}</b>}
            </div>
          ))}
        </div>
      </Link>
      <MainOdds e={e} />
    </div>
  );
}

export function SectionHead({ title, href, live }: { title: string; href?: string; live?: boolean }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-lg font-black tracking-tight">
        {live && <span className="h-2 w-2 rounded-full bg-bet62-primary animate-pulse" />}
        {title}
      </h2>
      {href && (
        <Link href={href} className="text-xs text-white/50 hover:text-white">
          Ver todos ›
        </Link>
      )}
    </div>
  );
}

export function LeagueCards({ leagues, sport = '' }: { leagues: LeagueNode[]; sport?: string }) {
  const list = popularLeagues(leagues, 16, sport);
  if (!list.length) return null;
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {list.map((l) => (
        <Link
          key={`${l.sport}|${l.competition}`}
          href={leagueHref(l.sport, l.competition)}
          className="flex w-28 shrink-0 flex-col items-center gap-1.5 rounded-2xl border border-bet62-border bg-bet62-surface/50 px-2 py-3 text-center hover:border-bet62-primary/40"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-xl">{SPORT_BY_KEY[l.sport].icon}</span>
          <b className="line-clamp-2 text-[11px] leading-tight">{l.label}</b>
          <span className="text-[10px] text-white/40">{countryLabel(l.country)}</span>
        </Link>
      ))}
    </div>
  );
}

export function SportTiles({ events, active, onPick }: { events: BoardEvent[]; active: string; onPick: (s: string) => void }) {
  const counts: Record<string, number> = {};
  for (const e of events) counts[e.sport] = (counts[e.sport] || 0) + 1;
  const tile = (key: string, icon: string, name: string, n?: number) => (
    <button
      key={key || 'all'}
      onClick={() => onPick(key)}
      className={cn(
        'flex w-20 shrink-0 flex-col items-center gap-1 rounded-2xl border px-2 py-2.5 text-center text-[11px]',
        active === key ? 'border-bet62-primary bg-bet62-primary/15 text-white' : 'border-bet62-border bg-bet62-surface/40 text-white/70 hover:text-white',
      )}
    >
      <span className="text-xl">{icon}</span>
      <span className="leading-tight">{name}</span>
      {n !== undefined && <span className="text-[10px] text-white/40">{n}</span>}
    </button>
  );
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {tile('', '✨', 'Popular')}
      {SPORTS.filter((s) => counts[s.key]).map((s) => tile(s.key, s.icon, s.name, counts[s.key]))}
    </div>
  );
}

// ---------- apostas prontas ----------

export function AccaCard({ a }: { a: Acca }) {
  const addMany = useSlip((s) => s.addMany);
  return (
    <div className="snap-start flex w-[19rem] shrink-0 flex-col rounded-2xl border border-bet62-border bg-bet62-surface/60 p-3">
      {a.big && <span className="mb-2 self-start rounded-full bg-amber-400/15 px-2 py-0.5 text-[11px] font-semibold text-amber-300">⭐ Grandes favoritos</span>}
      <div className="flex-1 space-y-2">
        {a.legs.map((l) => (
          <div key={l.key} className="rounded-xl bg-white/[0.03] px-2.5 py-1.5">
            <p className="truncate text-[11px] text-white/45">
              {SPORT_BY_KEY[l.sport as SportKey]?.icon} {fmtWhen(l.startTime)} · {l.match}
            </p>
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="truncate">
                <span className="text-white/45">{l.marketName}: </span>
                <b>{l.label}</b>
              </span>
              <b className="font-mono text-bet62-primary">{fmtOdds(l.odds)}</b>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-white/40">Início do último jogo: {fmtWhen(a.lastStart)}</p>
      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="text-sm text-white/60">
          Odds totais <b className="font-mono text-white">{fmtOdds(a.odds)}</b>
        </span>
        <button onClick={() => addMany(a.legs)} className="rounded-xl bg-bet62-primary px-3 py-2 text-xs font-bold text-white">
          Adicionar ao boletim
        </button>
      </div>
    </div>
  );
}

export function BuilderCard({ b }: { b: Builder }) {
  const setBuilder = useSlip((s) => s.setBuilder);
  return (
    <div className="snap-start flex w-[17rem] shrink-0 flex-col rounded-2xl border border-bet62-border bg-bet62-surface/60 p-3">
      <p className="truncate font-semibold">{b.match}</p>
      <p className="text-[11px] text-white/45">
        {b.competition} · {fmtWhen(b.startTime)}
      </p>
      <ul className="mt-2 flex-1 space-y-1 text-sm">
        {b.legs.map((l) => (
          <li key={l.key} className="truncate">
            <span className="text-white/45">{l.marketName} - </span>
            <b>{l.label}</b>
          </li>
        ))}
      </ul>
      <button onClick={() => setBuilder(b)} className="mt-3 flex items-center justify-between rounded-xl bg-bet62-primary px-3 py-2 text-white">
        <b className="font-mono">{fmtOdds(b.odds)}</b>
        <span className="text-[10px] font-bold tracking-widest">CRIADOR DE APOSTAS</span>
      </button>
    </div>
  );
}

export function EmptyPanel({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-bet62-border bg-bet62-surface/40 p-6 text-sm text-white/55">{children}</div>;
}
