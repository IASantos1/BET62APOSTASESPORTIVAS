// Tracker (minicampo) da BETBY: a página dela /tracker.html recebe o fornecedor e o id do jogo nesse
// fornecedor, p. ex. {"id":"statscore","sportId":"1","lang":"en-gb","eventId":6390437}.
// O id não vem nos campos que usamos; procuramos no evento campos com nome de fornecedor/tracker.
// O admin (Explorador BETBY) mostra o que existe e pode fixar o campo a usar (/api/config).
import { BETBY_CONFIG, type BetbyEvent } from './betby';

const PROVIDERS = [
  { pattern: /statscore/i, id: 'statscore' },
  { pattern: /sportradar|betradar|sr:match/i, id: 'betradar' },
  { pattern: /\\blmt\\b|liveticker/i, id: 'lmt' },
] as const;

const ID_FIELD = /^(?:id|event_?id|match_?id|fixture_?id|game_?id|external_?(?:event_?)?id|tracker_?id)$/i;

function providerOf(value: unknown): string | null {
  const text = String(value ?? '');
  return PROVIDERS.find((p) => p.pattern.test(text))?.id ?? null;
}

/** Só aceita IDs associados explicitamente a um fornecedor de tracking.
 *  event.id, desc.competitors[].id e state.provider não são IDs de tracker.
 */
export function trackerCandidates(raw: unknown): TrackerCandidate[] {
  const out: TrackerCandidate[] = [];
  const seen = new Set<string>();
  const walk = (value: unknown, path: string, depth: number, inheritedProvider: string | null) => {
    if (!value || typeof value !== 'object' || depth > 10 || Array.isArray(value)) return;
    const object = value as Record<string, unknown>;
    const ownProvider =
      providerOf(object.tracker_provider) ??
      providerOf(object.data_provider) ??
      providerOf(object.provider) ??
      inheritedProvider;
    for (const [key, child] of Object.entries(object)) {
      if (key === 'markets') continue;
      const nextPath = path ? `${path}.${key}` : key;
      const keyProvider = providerOf(key);
      const provider = keyProvider ?? ownProvider;
      if ((typeof child === 'string' || typeof child === 'number') && ID_FIELD.test(key) && provider) {
        const valueText = String(child).replace(/^sr:match:/i, '');
        if (/^\\d{3,}$/.test(valueText)) {
          const identity = `${nextPath}|${provider}|${valueText}`;
          if (!seen.has(identity)) {
            seen.add(identity);
            out.push({ path: nextPath, value: valueText, provider });
          }
        }
      } else {
        walk(child, nextPath, depth + 1, provider);
      }
    }
  };
  walk(raw, '', 0, null);
  return out;
}

export function trackerUrl(provider: string, sportId: string, eventId: string) {
  const providers = JSON.stringify({ id: provider, sportId: String(sportId), lang: BETBY_CONFIG.locale.toLowerCase(), eventId: Number(eventId) || eventId });
  const trackerBase = (process.env.NEXT_PUBLIC_BETBY_TRACKER_URL || BETBY_CONFIG.baseUrl).replace(/\/$/, '');
  return `${trackerBase}/tracker.html?providers=${encodeURIComponent(providers)}`;
}

/** O tracker deste jogo (campo fixado no admin, senão o primeiro candidato), ou null. */
export function trackerFor(raw: BetbyEvent | undefined, sportId: string | undefined, pref?: { path: string; provider: string } | null): string | null {
  if (!raw || !sportId) return null;
  if (pref) {
    const v = getPath(raw, pref.path);
    if (v !== undefined && v !== null && /^\\d{3,}$/.test(String(v).replace(/^sr:match:/, '')) && providerOf(pref.provider)) return trackerUrl(providerOf(pref.provider)!, sportId, String(v).replace(/^sr:match:/, ''));
  }
  const c = trackerCandidates(raw)[0];
  return c ? trackerUrl(c.provider, sportId, c.value) : null;
}
