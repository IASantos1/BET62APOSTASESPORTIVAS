// Copiado de IASantos1/bet (server/winhouse.js @ 3839a10): árvores de ligas e filtros de competições.

export const FOOTBALL_TREE = [
  ['Africa', ['Africa Cup of Nations']],
  ['Argentina', ['Argentina. Primera B Metropolitana', 'Argentina. Primera B Nacional', 'Argentina. Primera Division', 'Copa Argentina']],
  ['Australia', ['Australia. A League']],
  ['Austria', ['Austria. Bundesliga']],
  ['Belgium', ['Belgium. Jupiler League']],
  ['Brazil', ['Brazil. Campeonato Brasileiro. Serie A', 'Brazil. Campeonato Brasileiro. Serie B', 'Brazil. Copa do Brasil']],
  ['Canada', ['Canada. Premier League']],
  ['Chile', ['Chile Cup', 'Chile. Primera Division']],
  ['Colombia', ['Colombia. Categoria Primera A', 'Colombia. Categoria Primera B']],
  ['Czech Republic', ['Czech Republic. Chance Liga']],
  ['Denmark', ['Denmark. Superliga']],
  ['Ecuador', ['Ecuador. Serie A']],
  ['England', ['England. Championship', 'England. League One', 'England. League Two', 'England. National League', 'England. Premier League']],
  ['Europe', ['UEFA Champions League', 'UEFA Conference League', 'UEFA Europa League', 'UEFA Nations League']],
  ['Finland', ['Finland. Veikkausliiga']],
  ['France', ['France. Ligue 1', 'France. Ligue 2']],
  ['Germany', ['Germany DFB Pokal', 'Germany. 2. Bundesliga', 'Germany. Bundesliga']],
  ['Greece', ['Greece. SuperLeague', 'Greek Cup']],
  ['Israel', ['Israel. Liga Alef. North']],
  ['Italy', ['Italy. Serie A', 'Italy. Serie B', 'Italy. Serie C. Group A']],
  ['Japan', ['Japan. J-League Division 2']],
  ['Mexico', ['Mexico. Liga MX']],
  ['Netherlands', ['Netherlands. Eerste Divisie', 'Netherlands. Eredivisie']],
  ['Norway', ['Norway. Eliteserien']],
  ['Paraguay', ['Paraguay. Fourth Division', 'Paraguay. Primera Division']],
  ['Peru', ['Peru. Liga 1']],
  ['Poland', ['Poland Championship. Liga 2', 'Poland. Ekstraklasa']],
  ['Portugal', ['Portugal. Primeira Liga', 'Portugal. Segunda Liga']],
  ['Romania', ['Romania. Liga 1']],
  ['Serbia', ['Serbia. 1st League', 'Serbia. SuperLiga']],
  ['South America', ['Copa Libertadores', 'Copa Sudamericana']],
  ['South Korea', ['South Korea. League K3']],
  ['Spain', ['Spain. La Liga', 'Spain. Primera Division RFEF. Group 1', 'Spain. Primera Division RFEF. Group 2', 'Spain. Segunda Division']],
  ['Sweden', ['Sweden. Allsvenskan', 'Sweden. Division 1']],
  ['Switzerland', ['Switzerland. SuperLeague']],
  ['Turkey', ['Turkey. SuperLiga']],
  ['United States', ['USA. MLS']],
  ['Uruguay', ['Uruguay. Primera Division']],
  ['World', ['Club Friendlies', 'Friendlies. National Teams']],
];

export const BASKETBALL_TREE = [
  ['Europe', ['ABA League', 'Euroleague']],
  ['France', ['France. LNB']],
  ['Germany', ['Germany. BBL']],
  ['Italy', ['Italy. Lega A']],
  ['Philippines', ['Philippines. NCAA']],
  ['Spain', ['Spain. Liga ACB']],
  ['United States', ['NBA', 'WNBA']],
];

const WOMEN = /\b(women|woman|womens|feminino|feminina|femenino|femenina|féminin|feminine|femmes?|damen|frauen|ladies|mulheres|wta)\b|\((w|f)\)/i;
const YOUTH = /\b(u-?\s?\d{2}|sub-?\s?\d{2}|under-?\s?\d{2}|juvenil|juvenis|youth|jugend|primavera|academy)\b/i;
// Words that are youth only in a competition's name: clubs are called them too (Boca Juniors,
// Argentinos Juniors, Junior de Barranquilla, Academia Puerto Cabello).
const YOUTH_LEAGUE = /\b(junior|juniors|júnior|juniores|academia)\b/i;
// Virtual / e-football (FIFA 4x4, 5x5, subsoccer, cyber…), the small table tennis circuits
// (ATT, Setka Cup, TT Cup…) and UTR tennis: played around the clock, of little interest.
const MINOR = new RegExp([
  String.raw`\b(e-?soccer|e-?football|e-?sports? battle|cyber|subsoccer|sub soccer|h2h gg|gt leagues|esoccer|e-?basketball|ebasket|e-?hockey|e-?tennis|e-?volley|e-?cricket|e-?baseball|e-?nfl|e-?ufc|virtual|simulated|simulation|srl)\b`,
  String.raw`\b\d\s?x\s?\d\b`,
  String.raw`\bfifa\b(?!\s*(world cup|club world cup|intercontinental|series|copa do mundo|mundial))`,
  String.raw`\b(att|setka cup|tt cup|win cup|tt elite series|tt star series|pro tennis series|utr)\b`,
].join('|'), 'i');
const MINOR_TT = /\bliga pro\b/i; // table tennis only ("LigaPro" is also Ecuador's football league)

export { WOMEN, YOUTH, YOUTH_LEAGUE, MINOR, MINOR_TT };

/** Um nome de competição comparado sem maiúsculas, acentos, pontos ou espaços. */
export const leagueKey = (name) => String(name || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '');
