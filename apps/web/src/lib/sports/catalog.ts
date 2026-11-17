// Desportos e ligas mostrados no site: a mesma seleção do projeto IASantos1/bet (Destaques, Desporto,
// Ao Vivo), aplicada aos dados da BETBY. A BETBY envia muitos desportos e ligas; só entram os
// desportos de SPORTS e, em cada um, as ligas que as regras copiadas desse projeto aceitam.
import { divisionOf } from './footballdivisions.js';
import { leagueCountry } from './countryleagues.js';
import { leagueTier } from './leagues.js';
import { tourOf } from './tennistours.js';
import { BASKETBALL_TREE, FOOTBALL_TREE, MINOR, MINOR_TT, WOMEN, YOUTH, YOUTH_LEAGUE, leagueKey } from './trees.js';

export type SportKey =
  | 'futebol' | 'basquetebol' | 'tenis' | 'futamericano' | 'hoquei' | 'boxe' | 'voleibol' | 'andebol' | 'dardos'
  | 'mma' | 'raguebi' | 'futsal' | 'basebol' | 'criquete' | 'tenismesa' | 'badminton' | 'esports';

/** Na ordem do site (futebol sempre primeiro), com o nome e o ícone do outro projeto. */
export const SPORTS: { key: SportKey; name: string; icon: string; match: RegExp }[] = [
  { key: 'futebol', name: 'Futebol', icon: '⚽', match: /^(soccer|football)$/ },
  { key: 'basquetebol', name: 'Basquetebol', icon: '🏀', match: /^basketball$/ },
  { key: 'tenis', name: 'Ténis', icon: '🎾', match: /^tennis$/ },
  { key: 'futamericano', name: 'Futebol Americano', icon: '🏈', match: /^american ?football$/ },
  { key: 'hoquei', name: 'Hóquei no Gelo', icon: '🏒', match: /^ice ?hockey$/ },
  { key: 'boxe', name: 'Boxe', icon: '🥊', match: /^boxing$/ },
  { key: 'voleibol', name: 'Voleibol', icon: '🏐', match: /^volleyball$/ },
  { key: 'andebol', name: 'Andebol', icon: '🤾', match: /^handball$/ },
  { key: 'dardos', name: 'Dardos', icon: '🎯', match: /^darts$/ },
  { key: 'mma', name: 'MMA', icon: '🥋', match: /^(mma|mixed martial arts|ufc)$/ },
  { key: 'raguebi', name: 'Râguebi', icon: '🏉', match: /^rugby( union| league)?$/ },
  { key: 'futsal', name: 'Futsal', icon: '⚽', match: /^futsal$/ },
  { key: 'basebol', name: 'Basebol', icon: '⚾', match: /^baseball$/ },
  { key: 'criquete', name: 'Críquete', icon: '🏏', match: /^cricket$/ },
  { key: 'tenismesa', name: 'Ténis de mesa', icon: '🏓', match: /^table ?tennis$/ },
  { key: 'badminton', name: 'Badminton', icon: '🏸', match: /^badminton$/ },
  { key: 'esports', name: 'CS2 (eSports)', icon: '🎮', match: /^(counter-?strike( 2)?|cs2|cs:? ?go|esport counter-?strike)$/ },
];
export const SPORT_BY_KEY = Object.fromEntries(SPORTS.map((s) => [s.key, s])) as Record<SportKey, (typeof SPORTS)[number]>;
export const sportRank = (k: string) => {
  const i = SPORTS.findIndex((s) => s.key === k);
  return i < 0 ? 99 : i;
};

/** Desporto da BETBY ({ name, slug }) → o nosso, ou null quando não é mostrado. */
export function sportKeyOf(sport?: { name?: string; slug?: string }): SportKey | null {
  for (const raw of [sport?.slug, sport?.name]) {
    const n = String(raw || '').toLowerCase().replace(/-/g, ' ').trim();
    if (!n) continue;
    const hit = SPORTS.find((s) => s.match.test(n) || s.match.test(n.replace(/ /g, '')));
    if (hit) return hit.key;
  }
  return null;
}

const treeNames = (tree: unknown) => (tree as [string, string[]][]).flatMap(([, leagues]) => leagues);
const FOOTBALL_LISTED = new Set(treeNames(FOOTBALL_TREE).map(leagueKey));
const BASKETBALL_LISTED = new Set(treeNames(BASKETBALL_TREE).map(leagueKey));
const TOUR_CATEGORY = /^(atp|wta|challenger|atp challenger|wta 125)/i;

export interface LeagueInfo {
  /** "England. Premier League": o formato que as regras do outro projeto esperam. */
  fullName: string;
  country: string;
  label: string;
  tier: number;
}

/**
 * Se a liga entra no site e com que prioridade. `category` é o país/região da BETBY ("England",
 * "International"), `tournament` o nome da liga.
 */
export function classifyLeague(
  sport: SportKey,
  category: string,
  tournament: string,
  includeUnlistedFootball = false,
): LeagueInfo | null {
  const country = String(category || '').trim();
  const name = String(tournament || '').trim();
  if (!name) return null;
  const fullName = country ? `${country}. ${name}` : name;
  // Femininas, jovens, virtuais e circuitos menores ficam de fora (como no outro projeto).
  if (WOMEN.test(fullName) || YOUTH.test(fullName) || YOUTH_LEAGUE.test(name) || MINOR.test(fullName)) return null;
  if (sport === 'tenismesa' && MINOR_TT.test(fullName)) return null;
  const tier = leagueTier(sport, fullName);
  const base = { fullName, country: country || 'World', label: name, tier };
  switch (sport) {
    case 'futebol':
      if (
        divisionOf(fullName)
        || tier <= 2
        || FOOTBALL_LISTED.has(leagueKey(fullName))
        || FOOTBALL_LISTED.has(leagueKey(name))
        || includeUnlistedFootball
      ) return base;
      return null;
    case 'tenis': {
      const tour = tourOf(fullName) || tourOf(name);
      if (tour) return { ...base, country: tour.group, label: tour.label || name };
      return TOUR_CATEGORY.test(country) ? { ...base, country: country.toUpperCase().startsWith('WTA') ? 'WTA' : country.toUpperCase().startsWith('ATP') && !/challenger/i.test(country) ? 'ATP' : 'Challengers' } : null;
    }
    case 'basquetebol':
      if (BASKETBALL_LISTED.has(leagueKey(fullName)) || BASKETBALL_LISTED.has(leagueKey(name))) return base;
      break;
    default:
      break;
  }
  const c = leagueCountry(sport, fullName);
  return c ? { ...base, country: c } : null;
}

// Países como o menu lateral os mostra.
const COUNTRY_PT: Record<string, string> = {
  England: 'Inglaterra', Spain: 'Espanha', Italy: 'Itália', Germany: 'Alemanha', France: 'França', Portugal: 'Portugal',
  Brazil: 'Brasil', Netherlands: 'Países Baixos', Belgium: 'Bélgica', Turkey: 'Turquia', Scotland: 'Escócia',
  'United States': 'Estados Unidos', USA: 'Estados Unidos', Mexico: 'México', Argentina: 'Argentina', Austria: 'Áustria',
  Switzerland: 'Suíça', Greece: 'Grécia', Denmark: 'Dinamarca', Sweden: 'Suécia', Norway: 'Noruega', Poland: 'Polónia',
  'Czech Republic': 'Chéquia', Croatia: 'Croácia', Serbia: 'Sérvia', Romania: 'Roménia', Russia: 'Rússia', Japan: 'Japão',
  'South Korea': 'Coreia do Sul', China: 'China', Australia: 'Austrália', 'Saudi Arabia': 'Arábia Saudita', Chile: 'Chile',
  Colombia: 'Colômbia', Uruguay: 'Uruguai', Paraguay: 'Paraguai', Peru: 'Peru', Ecuador: 'Equador', Finland: 'Finlândia',
  Israel: 'Israel', Lithuania: 'Lituânia', Slovenia: 'Eslovénia', Slovakia: 'Eslováquia', Bulgaria: 'Bulgária',
  Europe: 'Europa', World: 'Internacional', International: 'Internacional', 'South America': 'América do Sul',
  Africa: 'África', 'International Clubs': 'Internacional',
};
export const countryLabel = (c: string) => COUNTRY_PT[c] ?? c;

// As ligas mais procuradas primeiro (cartões da página inicial), como no outro projeto.
const TOP_LEAGUES: [SportKey, RegExp, string | null][] = [
  ['futebol', /premier league/i, 'england'], ['futebol', /la ?liga|primera divisi/i, 'spain'], ['futebol', /s[eé]rie a/i, 'italy'],
  ['futebol', /bundesliga/i, 'germany'], ['futebol', /ligue 1/i, 'france'], ['futebol', /liga portugal|primeira liga|betclic/i, 'portugal'],
  ['futebol', /champions league/i, null], ['futebol', /europa league/i, null], ['futebol', /conference league/i, null],
  ['futebol', /eredivisie/i, 'netherlands'], ['futebol', /s[eé]rie a|brasileir/i, 'brazil'],
  ['basquetebol', /\bnba\b/i, null], ['basquetebol', /euroleague|euroliga/i, null],
  ['futamericano', /\bnfl\b/i, null], ['hoquei', /\bnhl\b/i, null], ['andebol', /ehf champions league|^champions league/i, null],
  ['voleibol', /superlega|cev champions league/i, null],
];

export function popularLeagues<T extends { sport: SportKey; country: string; label: string; count: number }>(all: T[], max = 16, only = ''): T[] {
  const list = all.filter((l) => l.count && (!only || l.sport === only));
  const picked: T[] = [];
  const used = new Set<T>();
  const take = (l?: T) => {
    if (l && !used.has(l)) {
      used.add(l);
      picked.push(l);
    }
  };
  for (const [sport, re, country] of TOP_LEAGUES) {
    take(list.find((l) => l.sport === sport && re.test(l.label) && (!country || l.country.toLowerCase() === country)));
  }
  for (const l of [...list].sort((a, b) => b.count - a.count)) {
    if (picked.length >= max) break;
    take(l);
  }
  return picked.slice(0, max);
}

// Os grandes clubes cujas vitórias abrem as "Apostas vencedoras" da página inicial (do outro projeto).
const BIG_TEAMS = new Set([
  'real madrid', 'barcelona', 'atletico madrid', 'atletico de madrid', 'atl madrid', 'paris saint-germain', 'paris saint germain', 'psg', 'paris sg',
  'juventus', 'milan', 'inter', 'internazionale', 'inter milan', 'atalanta', 'napoli', 'roma',
  'bayern munich', 'bayern munchen', 'bayern', 'borussia dortmund', 'dortmund', 'bayer leverkusen', 'leverkusen',
  'manchester city', 'man city', 'liverpool', 'arsenal', 'chelsea', 'manchester united', 'man united', 'man utd', 'tottenham', 'tottenham hotspur',
  'benfica', 'porto', 'sporting', 'sporting cp', 'sporting clube de portugal', 'braga', 'sporting braga',
  'ajax', 'psv', 'psv eindhoven', 'marseille', 'olympique marseille', 'olympique de marseille', 'monaco', 'lille', 'losc lille',
  'sevilla', 'villarreal', 'athletic club', 'athletic bilbao', 'real sociedad',
]);
const AFFIX = /^(fc|cf|ac|afc|sc|ssc|as|sl|sv|rc|ca|cd|ud|ogc|bv|vfb|vfl|tsg|1\.?)\s+|\s+(fc|cf|ac|afc|bc|cp)$/g;
const plain = (s: string) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[.']/g, '').replace(/\s+/g, ' ').trim();
export const isBigTeam = (name: string) => {
  let n = plain(name);
  for (let k = 0; k < 2; k++) n = n.replace(AFFIX, '').trim();
  return BIG_TEAMS.has(n);
};
