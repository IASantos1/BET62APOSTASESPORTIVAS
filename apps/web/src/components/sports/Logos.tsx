'use client';

// Emblemas: ligas pelo id da API-Football (logótipo oficial no media.api-sports.io, sem chave nem
// quota, como no outro projeto); equipas pelo servidor (/api/logo/team, API-Football com cache).
// Sem emblema: a bandeira do país (ligas) ou as iniciais (equipas).
import * as React from 'react';
import { Flag } from './Flag';
import { cn } from '../../lib/utils';
import type { SportKey } from '../../lib/sports/catalog';

const LEAGUE_LOGOS: [RegExp, string | null, number][] = [
  [/^premier league$/i, 'england', 39], [/^championship$/i, 'england', 40], [/^fa cup$/i, 'england', 45],
  [/^(la ?liga|primera divisi[oó]n)$/i, 'spain', 140], [/segunda divisi[oó]n|la ?liga 2|laliga2|laliga hypermotion/i, 'spain', 141], [/copa del rey/i, 'spain', 143],
  [/^s[eé]rie a$/i, 'italy', 135], [/^s[eé]rie b$/i, 'italy', 136], [/coppa italia/i, 'italy', 137],
  [/^bundesliga$/i, 'germany', 78], [/^2\.? ?bundesliga$/i, 'germany', 79], [/dfb.?pokal/i, 'germany', 81],
  [/^ligue 1$/i, 'france', 61], [/^ligue 2$/i, 'france', 62], [/coupe de france/i, 'france', 66],
  [/^(primeira liga|liga portugal( betclic)?|betclic)$/i, 'portugal', 94], [/(segunda liga|liga portugal 2)/i, 'portugal', 95], [/ta[cç]a de portugal/i, 'portugal', 96],
  [/^eredivisie$/i, 'netherlands', 88], [/eerste divisie/i, 'netherlands', 89], [/(pro league|jupiler|first division a)/i, 'belgium', 144],
  [/^premiership$/i, 'scotland', 179], [/s[uü]per lig/i, 'turkey', 203], [/super league/i, 'greece', 197], [/super league/i, 'switzerland', 207],
  [/^bundesliga$/i, 'austria', 218], [/superliga/i, 'denmark', 119], [/allsvenskan/i, 'sweden', 113], [/eliteserien/i, 'norway', 103],
  [/ekstraklasa/i, 'poland', 106], [/(czech liga|first league|chance liga)/i, 'czech republic', 345],
  [/champions league/i, null, 2], [/europa league/i, null, 3], [/conference league/i, null, 848], [/libertadores/i, null, 13],
  [/sudamericana/i, null, 11], [/world cup/i, null, 1], [/(euro championship|^euro\b)/i, null, 4], [/nations league/i, null, 5],
  [/^(s[eé]rie a|brasileir[aã]o( s[eé]rie a)?)$/i, 'brazil', 71], [/^(s[eé]rie b|brasileir[aã]o s[eé]rie b)$/i, 'brazil', 72],
  [/liga profesional|primera divisi[oó]n/i, 'argentina', 128], [/^(mls|major league soccer)$/i, 'usa', 253], [/^(mls|major league soccer)$/i, 'united states', 253],
  [/liga mx/i, 'mexico', 262], [/(pro league|saudi)/i, 'saudi arabia', 307], [/j1 league/i, 'japan', 98],
];
const OTHER_SPORTS: [SportKey, RegExp, string][] = [
  ['basquetebol', /^nba$/i, 'https://media.api-sports.io/basketball/leagues/12.png'],
  ['basquetebol', /euroleague/i, 'https://media.api-sports.io/basketball/leagues/120.png'],
  ['hoquei', /^nhl$/i, 'https://media.api-sports.io/hockey/leagues/57.png'],
  ['futamericano', /^nfl$/i, 'https://media.api-sports.io/american-football/leagues/1.png'],
  ['basebol', /^mlb$/i, 'https://media.api-sports.io/baseball/leagues/1.png'],
];

/** Id da liga na API-Football (futebol), para o emblema e para as equipas da liga. */
export function leagueApiId(sport: string, league: string, country: string): number | null {
  if (sport !== 'futebol') return null;
  const name = String(league || '').trim();
  const c = String(country || '').toLowerCase().trim();
  return LEAGUE_LOGOS.find(([re, ctry]) => re.test(name) && (!ctry || ctry === c))?.[2] ?? null;
}

export function leagueLogoUrl(sport: string, league: string, country: string): string | null {
  if (sport === 'futebol') {
    const id = leagueApiId(sport, league, country);
    return id ? `https://media.api-sports.io/football/leagues/${id}.png` : null;
  }
  const name = String(league || '').trim();
  return OTHER_SPORTS.find(([s, re]) => s === sport && re.test(name))?.[2] ?? null;
}

const broken = new Set<string>();

// O logótipo oficial da Liga Portugal termina na faixa do patrocinador (Betclic): mostra-se cortado
// acima dela, como no outro projeto (img.cut-sponsor).
const SPONSOR_CUT = new Set([94]);

export function LeagueLogo({ sport, league, country, className }: { sport: string; league: string; country: string; className?: string }) {
  const url = leagueLogoUrl(sport, league, country);
  const cut = SPONSOR_CUT.has(leagueApiId(sport, league, country) ?? -1);
  const [failed, setFailed] = React.useState(false);
  if (!url || failed || broken.has(url)) return <Flag country={country} className={className} />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt=""
      loading="lazy"
      onError={() => {
        broken.add(url);
        setFailed(true);
      }}
      className={cn('h-5 w-5 shrink-0 object-contain', cut && 'cut-sponsor', className)}
    />
  );
}

const initials = (name: string) =>
  String(name || '')
    .replace(/\(.*?\)/g, '')
    .split(/\s+/)
    .filter((w) => w && !/^(fc|cf|sc|ac|cd|club|de|da|do)$/i.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');

// Desportos com endpoint oficial de equipas na API-Sports.
const LOGO_SPORTS = new Set(['futebol', 'basquetebol', 'hoquei', 'futamericano', 'basebol', 'voleibol', 'andebol', 'raguebi']);

export function TeamLogo({ sport, name, league, photoUrl, size = 28, className }: { sport: string; name: string; league?: number | null; photoUrl?: string | null; size?: number; className?: string }) {
  // No ténis, usar retrato apenas quando o próprio fornecedor o envia no evento.
  const src = sport === 'tenis'
    ? (photoUrl || null)
    : LOGO_SPORTS.has(sport)
      ? `/api/logo/team?s=${encodeURIComponent(sport)}&n=${encodeURIComponent(name)}${league ? `&l=${league}` : ''}`
      : null;
  const [failed, setFailed] = React.useState(false);
  // Um erro transitório (quota, timeout ou cold start) não deve condenar o emblema
  // durante toda a sessão. Volta a tentar periodicamente e quando o nome muda.
  React.useEffect(() => {
    setFailed(false);
    if (!src) return;
    const retry = window.setInterval(() => setFailed(false), 60_000);
    return () => window.clearInterval(retry);
  }, [src]);
  const box = { width: size, height: size };
  if (!src || failed) {
    return (
      <span
        style={box}
        className={cn('inline-grid shrink-0 place-items-center rounded-full bg-white/10 font-bold text-white/70', className)}
      >
        <span style={{ fontSize: Math.max(9, size * 0.36) }}>{initials(name)}</span>
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      loading="lazy"
      width={size}
      height={size}
      style={box}
      onError={() => {
        setFailed(true);
      }}
      className={cn('shrink-0 object-contain', className)}
    />
  );
}
