export function normalizeTeamName(name: string): string {
  if (!name) return '';
  let n = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  n = n.replace(/\bfc\b|\bcf\b|\bsc\b|\bsl\b|\bgd\b|\bad\b|\bcd\b/g, '');
  n = n.replace(/\bclube\b|\batletico\b|\bassociacao\b|\bsporting\b|\bsport\b|\bclub\b|\buniao\b|\buniao\b|\bac\b|\baa\b/g, '');
  n = n.replace(/\blisboa\b|\bporto\b|\blisbon\b/g, '');
  n = n.replace(/\s+/g, ' ').trim();
  return n.replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

export function normalizeCompetitionName(name: string): string {
  if (!name) return '';
  let n = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  n = n.replace(/\bprimeira\s+liga\b|\bliga\s+nos\b|\bportuguese\s+liga\b/g, 'primeira_liga');
  n = n.replace(/\bla\s+liga\b|\blaliga\b|\bspanish\s+la\s+liga\b/g, 'la_liga');
  n = n.replace(/\bpremier\s+league\b|\benglish\s+premier\s+league\b|\bepl\b/g, 'premier_league');
  n = n.replace(/\bchampions\s+league\b|\buefa\s+champions\s+league\b/g, 'champions_league');
  n = n.replace(/\beuropa\s+league\b|\buefa\s+europa\s+league\b/g, 'europa_league');
  n = n.replace(/\bserie\s+a\b|\bitalian\s+serie\s+a\b/g, 'serie_a');
  n = n.replace(/\bbundesliga\b|\bgerman\s+bundesliga\b/g, 'bundesliga');
  n = n.replace(/\bligue\s+1\b|\bfrench\s+ligue\s+1\b/g, 'ligue_1');
  n = n.replace(/\s+/g, ' ').trim();
  return n.replace(/[^a-z0-9_\s]/g, '').replace(/\s+/g, '_').trim();
}

export function normalizeTimestamp(str: string | Date | null): Date | null {
  if (!str) return null;
  try {
    const d = str instanceof Date ? str : new Date(str);
    if (isNaN(d.getTime())) return null;
    return d;
  } catch {
    return null;
  }
}

export function normalizePlayerName(name: string): string {
  if (!name) return '';
  let n = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  n = n.replace(/\s+/g, ' ').trim();
  return n.replace(/[^a-z0-9\s\-]/g, '').replace(/\s+/g, ' ').trim();
}

export const TEAM_ALIASES_MAP: Record<string, string[]> = {
  BENFICA: ['sl benfica', 'sport lisboa e benfica', 'slb', 'benfica lissabon', 'benfica lisboa', 'slbenfica', 's.l. benfica', 's.l benfica'],
  SPORTING: ['sporting cp', 'sporting clube de portugal', 'scp', 'sporting lisbon', 'sporting lisboa', 'sportingc p'],
  PORTO: ['fc porto', 'porto', 'fcp', 'dragoes', 'dragons', 'f.c. porto', 'futebol clube do porto'],
  BRAGA: ['sc braga', 'sporting de braga', 'braga', 'scbraga'],
  BOAVISTA: ['boavista fc', 'boavista porto', 'boavista', 'cf boavista'],
  REALMADRID: ['real madrid', 'real madrid cf', 'realmadrid', 'madrid', 'los blancos', 'rma'],
  BARCELONA: ['barcelona', 'fc barcelona', 'barca', 'fcb', 'barça', 'culés', 'barcelona fc'],
  ATLETICOMADRID: ['atletico madrid', 'atlético madrid', 'atletico', 'atleti', 'atm', 'club atlético de madrid'],
  MANUNITED: ['manchester united', 'man utd', 'man united', 'mufc', 'red devils', 'manutd'],
  MANCITY: ['manchester city', 'man city', 'mancity', 'mcfc', 'citizens', 'city'],
  LIVERPOOL: ['liverpool', 'liverpool fc', 'lfc', 'the reds', 'liverpoolfootballclub'],
  CHELSEA: ['chelsea', 'chelsea fc', 'cfc', 'the blues', 'chelsea football club'],
  ARSENAL: ['arsenal', 'arsenal fc', 'afc', 'gunners', 'the gunners'],
  TOTTENHAM: ['tottenham', 'tottenham hotspur', 'spurs', 'thfc', 'tottenhamhotspur'],
};

export function resolveTeamAlias(normalizedCandidate: string): string {
  const candidate = normalizedCandidate.toLowerCase().trim();
  for (const [canonical, aliases] of Object.entries(TEAM_ALIASES_MAP)) {
    const allNames = [canonical.toLowerCase(), ...aliases.map(a => normalizeTeamName(a))];
    for (const alias of allNames) {
      if (alias === candidate) return canonical;
      if (alias.includes(candidate) && candidate.length >= 3) return canonical;
      if (candidate.includes(alias) && alias.length >= 3) return canonical;
    }
  }
  return candidate.toUpperCase().replace(/\s+/g, '');
}
