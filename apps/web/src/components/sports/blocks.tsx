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
  shouldShowBetNow,
  type Acca,
  type BoardEvent,
  type Builder,
  type LeagueNode,
  useOddMove,
} from '../../lib/board';
import { SPORTS, SPORT_BY_KEY, countryLabel, popularLeagues, sportRank, type SportKey } from '../../lib/sports/catalog';
import { useSlip } from '../../stores/slip.store';
import { cn } from '../../lib/utils';
import { Flag } from './Flag';
import { LeagueLogo, TeamLogo, leagueApiId } from './Logos';
import { fmtOdds, fmtWhen, leagueHref, matchHref } from './links';

// ---------- odds ----------

/** Seta da última mudança da odd (verde a subir, vermelha a descer). */
export function OddArrow({ moveKey }: { moveKey: string }) {
  const mv = useOddMove(moveKey);
  if (!mv) return null;
  return (
    <span key={mv.at} className={cn('text-[10px] leading-none', mv.dir === 'up' ? 'odd-up' : 'odd-down')} aria-label={mv.dir === 'up' ? 'Odd a subir' : 'Odd a descer'}>
      {mv.dir === 'up' ? '▲' : '▼'}
    </span>
  );
}

/**
 * Botão de odd no modelo do repositório bet: rótulo pequeno por cima (1 · X · 2 ou o nome) e a odd
 * em negrito; a última mudança marca o fundo do botão (verde a subir, vermelho a descer) e a seta.
 */
export function OddButton({ event, outcomeId, marketId, label, compact = false, seamless = false, name }: { event: BoardEvent; outcomeId: string; marketId: string; label: string; compact?: boolean; seamless?: boolean; name?: string }) {
  const toggle = useSlip((s) => s.toggle);
  const selected = useSlip((s) => s.picks.some((p) => p.key === `${event.id}|${marketId}||${outcomeId}`));
  const o = event.markets[marketId]?.['']?.[outcomeId];
  const odds = Number(o?.k) || 0;
  const suspended = o?.b === 1;
  const blocked = !o || suspended || odds <= 1;
  const market = MAIN_MARKETS.find((m) => m.id === marketId);
  const team = label === '1' ? event.home : label === '2' ? event.away : 'Empate';
  const move = useOddMove(`${event.id}|${marketId}||${outcomeId}`);
  return (
    <button
      disabled={blocked}
      onClick={() => {
        const p = pickOf(event, marketId, '', outcomeId, market?.name ?? 'Resultado', team);
        if (p) toggle(p);
      }}
      className={cn(
        'flex w-full min-w-0 flex-col items-center justify-center border border-transparent px-1 text-center transition-colors',
        seamless ? 'rounded-none' : 'rounded-md',
        compact ? 'py-[7px]' : 'py-[9px]',
        selected ? 'bg-bet62-primary text-onbrand' : 'bg-bet62-odd hover:bg-bet62-odd-hover',
        blocked && 'cursor-not-allowed opacity-50',
        !selected && move && (move.dir === 'up' ? 'shadow-[inset_0_-2px_0_#22c55e]' : 'shadow-[inset_0_-2px_0_#ef4444]'),
      )}
    >
      <small className={cn('mb-0.5 block w-full truncate text-[10.5px] font-semibold leading-tight', selected ? 'text-onbrand/80' : 'text-white/60')}>{name ?? label}</small>
      <span className="flex items-center justify-center gap-1 leading-tight">
        <OddArrow moveKey={`${event.id}|${marketId}||${outcomeId}`} />
        <b className={cn('font-mono text-[12.5px] font-extrabold', selected ? 'text-onbrand' : 'text-bet62-odd-price')}>
          {suspended ? '🔒' : blocked ? '—' : fmtOdds(odds)}
        </b>
      </span>
    </button>
  );
}

/** Relógio ao vivo do modelo: ponto a pulsar e o minuto na cor do ao vivo. */
export function LiveClock({ e, big = false }: { e: BoardEvent; big?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 whitespace-nowrap font-black text-bet62-primary', big ? 'text-[15px]' : 'text-xs')}>
      <i className="pulse-dot" aria-hidden />
      {e.clock || 'Ao vivo'}
    </span>
  );
}

function TennisScoreTable({ e, home, away }: { e: BoardEvent; home: React.ReactNode; away: React.ReactNode }) {
  const setCount = Math.min(5, Math.max(3, ...(e.periods ?? []).map((period) => period.number)));
  const sets = Array.from({ length: setCount }, (_, index) => e.periods?.find((period) => period.number === index + 1));
  const columns = sets.length + (e.gameScore ? 1 : 0);

  return (
    <div
      className="grid min-w-0 flex-1 items-center gap-x-2 gap-y-1 text-[11px]"
      style={{ gridTemplateColumns: `minmax(0, 1fr) repeat(${columns}, minmax(1.5rem, auto))` }}
    >
      <span />
      {sets.map((_, index) => (
        <span key={`set-head-${index}`} className="text-center text-[9px] font-semibold text-white/45">
          {index + 1}Set
        </span>
      ))}
      {e.gameScore && <span className="text-center text-[9px] font-semibold text-white/45">Pts</span>}

      <div className="min-w-0">{home}</div>
      {sets.map((set, index) => (
        <b key={`home-set-${index}`} className="text-center font-mono text-white/80">{set?.home_score ?? '—'}</b>
      ))}
      {e.gameScore && <b className="text-center font-mono text-bet62-primary">{e.gameScore.home}</b>}

      <div className="min-w-0">{away}</div>
      {sets.map((set, index) => (
        <b key={`away-set-${index}`} className="text-center font-mono text-white/80">{set?.away_score ?? '—'}</b>
      ))}
      {e.gameScore && <b className="text-center font-mono text-bet62-primary">{e.gameScore.away}</b>}
    </div>
  );
}

/**
 * As odds principais (modelo do repositório bet): 1 X 2 em três colunas iguais; nos desportos sem
 * empate, duas. Mercado principal fechado ao vivo com outros abertos: "Aposte já"; tudo fechado:
 * "Suspenso". `names`: rótulos com o nome das equipas (cartões ao vivo).
 */
function MainOdds({ e, compact, names = false }: { e: BoardEvent; compact?: boolean; names?: boolean }) {
  const odds = mainOddsOf(e);
  if (shouldShowBetNow(e)) {
    return (
      <Link href={matchHref(e.id, true)} className="block w-full rounded-md bg-amber-400 py-[9px] text-center text-xs font-bold uppercase tracking-wide text-[#1f1a08] hover:brightness-105">
        Aposte já
      </Link>
    );
  }
  if (!odds.length) {
    return e.status === 'live' ? (
      <div className="w-full cursor-not-allowed select-none rounded-md bg-[#c0453f] py-[9px] text-center text-xs font-bold uppercase tracking-wide text-white">Suspenso</div>
    ) : (
      <div className="w-full rounded-md border border-dashed border-bet62-border py-2.5 text-center text-[11px] text-white/45">Apostas indisponíveis neste jogo</div>
    );
  }
  const label = (l: string) => (!names ? l : l === '1' ? e.home : l === '2' ? e.away : 'Empate');
  return (
    <div className={cn('grid w-full gap-[5px]', odds.length === 2 ? 'grid-cols-2' : 'grid-cols-3')}>
      {odds.map((o) => (
        <OddButton key={o.outcomeId} event={e} outcomeId={o.outcomeId} marketId={o.marketId} label={o.label} name={label(o.label)} compact={compact} />
      ))}
    </div>
  );
}

// ---------- linha de jogo (listas por liga) ----------

export function EventRow({ e }: { e: BoardEvent }) {
  const live = e.status === 'live';
  const tennis = live && e.sport === 'tenis';
  const league = leagueApiId(e.sport, e.league, e.country);
  const side = (name: string, photo: string | undefined, score?: string) => (
    <div className="flex items-center justify-between gap-2">
      <span className="flex min-w-0 items-center">
        <span className="mr-[7px] inline-grid shrink-0"><TeamLogo sport={e.sport} name={name} photoUrl={photo} league={league} size={18} /></span>
        <span className="truncate">{name}</span>
      </span>
      {live && score !== undefined && <b className="font-mono text-bet62-primary">{score}</b>}
    </div>
  );
  return (
    <div className="grid grid-cols-[60px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 border-b border-bet62-border px-3.5 py-[11px] last:border-b-0 hover:bg-bet62-surface-2/60 sm:grid-cols-[70px_minmax(0,1fr)_minmax(180px,260px)]">
      <Link href={matchHref(e.id, live)} className="contents">
        <div className="text-xs leading-[1.4] text-white/70">
          {live ? <LiveClock e={e} /> : <span className="whitespace-pre-line">{fmtWhen(e.startTime).replace(', ', '\n')}</span>}
        </div>
        {tennis ? (
          <TennisScoreTable
            e={e}
            home={<span className="flex min-w-0 items-center gap-1.5 text-[13px] font-bold"><TeamLogo sport={e.sport} name={e.home} photoUrl={e.homePhoto} league={league} size={18} /><span className="truncate">{e.home}</span></span>}
            away={<span className="flex min-w-0 items-center gap-1.5 text-[13px] font-bold"><TeamLogo sport={e.sport} name={e.away} photoUrl={e.awayPhoto} league={league} size={18} /><span className="truncate">{e.away}</span></span>}
          />
        ) : (
          <div className="min-w-0 text-[13px] font-bold leading-[1.5]">
            {side(e.home, e.homePhoto, e.score?.home)}
            {side(e.away, e.awayPhoto, e.score?.away)}
          </div>
        )}
      </Link>
      {/* Telemóvel: as odds ocupam a linha toda por baixo das equipas. */}
      <div className="col-span-2 sm:col-span-1">
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
          <div key={k} className="overflow-hidden rounded-md border border-bet62-border bg-bet62-surface">
            <Link
              href={leagueHref(e.sport, e.competition)}
              className="flex items-center justify-between gap-2 border-b border-bet62-border bg-bet62-surface-2 px-3.5 py-2.5 text-[11px] font-extrabold text-white/75 hover:text-white"
            >
              <span className="flex min-w-0 items-center gap-2">
                <LeagueLogo sport={e.sport} league={e.league} country={e.country} />
                <span className="truncate">{countryLabel(e.country)} · {e.league}</span>
              </span>
              <span>{list.length}</span>
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

/**
 * Cartão de jogo (carrosséis) no modelo do repositório bet. Pré-jogo: liga e hora em cima, as duas
 * equipas com o emblema por cima do nome e "VS" ao meio, odds 1 X 2 em baixo. Ao vivo: risca na cor
 * do ao vivo à esquerda, minuto e liga, as equipas em linhas com o resultado e as odds com os nomes.
 */
export function MatchCard({ e }: { e: BoardEvent }) {
  const live = e.status === 'live';
  const tennis = live && e.sport === 'tenis';
  const league = leagueApiId(e.sport, e.league, e.country);
  if (live) {
    return (
      <div className="flex w-[17rem] shrink-0 snap-start flex-col rounded-md border border-l-[3px] border-bet62-border border-l-bet62-primary bg-bet62-surface p-3.5">
        <Link href={matchHref(e.id, true)} className="block">
          <div className="flex items-center justify-between gap-2 text-[11.5px] text-white/55">
            <LiveClock e={e} />
            <span className="truncate">{e.league}</span>
          </div>
          {tennis ? (
            <div className="mt-2.5">
              <TennisScoreTable
                e={e}
                home={<span className="flex min-w-0 items-center gap-1.5 text-xs"><TeamLogo sport={e.sport} name={e.home} photoUrl={e.homePhoto} league={league} size={18} /><span className="truncate">{e.home}</span></span>}
                away={<span className="flex min-w-0 items-center gap-1.5 text-xs"><TeamLogo sport={e.sport} name={e.away} photoUrl={e.awayPhoto} league={league} size={18} /><span className="truncate">{e.away}</span></span>}
              />
            </div>
          ) : (
            <div className="mt-2.5 grid gap-1 text-xs text-white/75">
              {([[e.home, e.homePhoto, e.score?.home], [e.away, e.awayPhoto, e.score?.away]] as const).map(([name, photo, sc], i) => (
                <div key={i} className="flex items-center justify-between gap-2">
                  <span className="flex min-w-0 items-center">
                    <span className="mr-[7px] inline-grid shrink-0"><TeamLogo sport={e.sport} name={name} photoUrl={photo} league={league} size={18} /></span>
                    <span className="truncate">{name}</span>
                  </span>
                  <b className="font-mono text-lg font-black text-white">{sc ?? 0}</b>
                </div>
              ))}
            </div>
          )}
        </Link>
        <div className="mt-3">
          <MainOdds e={e} names />
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-[17rem] shrink-0 snap-start flex-col rounded-md border border-bet62-border bg-bet62-surface p-3.5">
      <Link href={matchHref(e.id, false)} className="flex flex-1 flex-col">
        <div className="flex justify-between gap-2 text-[11.5px] text-white/55">
          <span className="flex min-w-0 items-center gap-1.5">
            <LeagueLogo sport={e.sport} league={e.league} country={e.country} className="h-4 w-4" />
            <span className="truncate">{e.league}</span>
          </span>
          <span className="shrink-0">{fmtWhen(e.startTime)}</span>
        </div>
        <div className="my-4 grid flex-1 grid-cols-[1fr_36px_1fr] items-center text-center">
          {[
            [e.home, e.homePhoto],
            [e.away, e.awayPhoto],
          ].map(([name, photo], i) => (
            <div key={i} className={cn('min-w-0 text-xs font-extrabold', i === 1 && 'col-start-3')}>
              <span className="mx-auto mb-1.5 grid h-[35px] w-[35px] place-items-center rounded-full bg-bet62-surface-2">
                <TeamLogo sport={e.sport} name={String(name)} photoUrl={photo} league={league} size={30} />
              </span>
              <span className="line-clamp-2">{name}</span>
            </div>
          ))}
          <div className="col-start-2 row-start-1 text-[11px] font-extrabold text-white/45">VS</div>
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
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 p-1.5 text-xl">
            {leagueApiId(l.sport, l.label, l.country) || l.sport !== 'futebol' ? (
              <LeagueLogo sport={l.sport} league={l.label} country={l.country} className="h-8 w-8" />
            ) : (
              SPORT_BY_KEY[l.sport].icon
            )}
          </span>
          <b className="line-clamp-2 text-[11px] leading-tight">{l.label}</b>
          <span className="flex items-center gap-1 text-[10px] text-white/40">
            <Flag country={l.country} className="h-2.5 w-3.5" />
            {countryLabel(l.country)}
          </span>
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
        <button onClick={() => addMany(a.legs)} className="rounded-xl bg-bet62-primary px-3 py-2 text-xs font-bold text-onbrand">
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
      <button onClick={() => setBuilder(b)} className="mt-3 flex items-center justify-between rounded-xl bg-bet62-primary px-3 py-2 text-onbrand">
        <b className="font-mono">{fmtOdds(b.odds)}</b>
        <span className="text-[10px] font-bold tracking-widest">CRIADOR DE APOSTAS</span>
      </button>
    </div>
  );
}

export function EmptyPanel({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-bet62-border bg-bet62-surface/40 p-6 text-sm text-white/55">{children}</div>;
}
