// Tracker (minicampo) da BETBY: a página dela /tracker.html recebe o fornecedor e o id do jogo nesse
// fornecedor, p. ex. {"id":"statscore","sportId":"1","lang":"en-gb","eventId":6390437}.
// O id não vem nos campos que usamos; procuramos no evento campos com nome de fornecedor/tracker.
// O admin (Explorador BETBY) mostra o que existe e pode fixar o campo a usar (/api/config).
import { BETBY_CONFIG, type BetbyEvent } from './betby';

const NAME = /(statscore|tracker|lmt|betradar|sportradar|radar|ext(ernal)?_?(event_?)?id|provider|widget|stats?_?id|sr_?id|match_?id|event_?id|fixture_?id|game_?id)/i;

export interface TrackerCandidate {
  path: string;
  value: string;
  provider: string;
}

/** Campos do evento que parecem um id de tracker (até 4 níveis). */
export const getPath = (o: unknown, path: string) => path.split('.').reduce<unknown>((v, k) => (v && typeof v === 'object' ? (v as Record<string, unknown>)[k] : undefined), o);

export function trackerCandidates(raw: unknown): TrackerCandidate[] {
  const out: TrackerCandidate[] = [];
  const walk = (v: unknown, path: string, depth: number) => {
    if (!v || typeof v !== 'object' || depth > 8) return;
    for (const [k, x] of Object.entries(v as Record<string, unknown>)) {
      if (k === 'markets') continue;
      const p = path ? `${path}.${k}` : k;
      if ((typeof x === 'string' || typeof x === 'number') && (NAME.test(k) || NAME.test(path)) && /\d{3,}/.test(String(x))) {
        const text = `${p} ${x}`.toLowerCase();
        const provider = text.includes('statscore') ? 'statscore' : /betradar|sportradar|sr:match|radar/.test(text) ? 'betradar' : 'statscore';
        out.push({ path: p, value: String(x).replace(/^sr:match:/, ''), provider });
      } else walk(x, p, depth + 1);
    }
  };
  walk(raw, '', 0);
  return out;
}



export function trackerUrl(provider: string, sportId: string, eventId: string) {
  const providers = JSON.stringify({ id: provider, sportId: String(sportId), lang: BETBY_CONFIG.locale.toLowerCase(), eventId: Number(eventId) || eventId });
  const trackerBase = (process.env.NEXT_PUBLIC_BETBY_TRACKER_URL || BETBY_CONFIG.baseUrl).replace(/\\/$/, '');
  return `${trackerBase}/tracker.html?providers=${encodeURIComponent(providers)}`;
}

/** O tracker deste jogo (campo fixado no admin, senão o primeiro candidato), ou null. */
export function trackerFor(raw: BetbyEvent | undefined, sportId: string | undefined, pref?: { path: string; provider: string } | null): string | null {
  if (!raw || !sportId) return null;
  if (pref) {
    const v = getPath(raw, pref.path);
    if (v !== undefined && v !== null && v !== '') return trackerUrl(pref.provider, sportId, String(v).replace(/^sr:match:/, ''));
  }
  const c = trackerCandidates(raw)[0];
  return c ? trackerUrl(c.provider, sportId, c.value) : null;
}
