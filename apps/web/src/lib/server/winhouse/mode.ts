import { one, query } from '../db';

// Que fonte o site mostra (escolhido no admin → WinHouse; guardado no PostgreSQL para sobreviver aos deploys):
//  both      — jogos do WinHouse (com os mercados que só a BETBY tem) + jogos que só a BETBY tem
//  winhouse  — só jogos do WinHouse (a BETBY só para o minicampo); se o WinHouse falhar, a BETBY entra
//  betby     — só a BETBY (como antes)
export type OddsMode = 'both' | 'winhouse' | 'betby';
export const MODES: OddsMode[] = ['both', 'winhouse', 'betby'];

const envMode = (): OddsMode => (MODES.includes(process.env.ODDS_SOURCE as OddsMode) ? (process.env.ODDS_SOURCE as OddsMode) : 'both');

let cache: { at: number; mode: OddsMode } | null = null;
export async function getMode(): Promise<OddsMode> {
  if (cache && Date.now() - cache.at < 10_000) return cache.mode;
  const r = await one<{ value: { mode?: string } }>(`SELECT value FROM wh_state WHERE key = 'mode'`).catch(() => null);
  const mode = MODES.includes(r?.value?.mode as OddsMode) ? (r!.value.mode as OddsMode) : envMode();
  cache = { at: Date.now(), mode };
  return mode;
}

export async function setMode(mode: OddsMode) {
  await query(
    `INSERT INTO wh_state (key, value, updated_at) VALUES ('mode', $1, now()) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()`,
    [JSON.stringify({ mode })],
  );
  cache = { at: Date.now(), mode };
}
