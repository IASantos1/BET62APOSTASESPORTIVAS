import type { SportKey } from '../../lib/sports/catalog';

/** Página de uma liga: /desporto/liga/<nome>?sport=<desporto> (o mesmo nome pode existir em dois desportos). */
export const leagueHref = (sport: SportKey, competition: string) =>
  `/desporto/liga/${encodeURIComponent(competition)}?sport=${sport}`;

export const matchHref = (id: string, live: boolean) => `/live/match/${id}${live ? '' : '?feed=prematch'}`;

export function fmtWhen(ms: number | null) {
  if (!ms) return '';
  const d = new Date(ms);
  const today = new Date();
  const tomorrow = new Date(Date.now() + 86_400_000);
  const time = d.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
  if (d.toDateString() === today.toDateString()) return `Hoje, ${time}`;
  if (d.toDateString() === tomorrow.toDateString()) return `Amanhã, ${time}`;
  return `${d.toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit' })}, ${time}`;
}

export const fmtOdds = (n: number) => (n ? n.toFixed(2) : '—');
