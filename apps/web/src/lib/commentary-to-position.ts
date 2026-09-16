export type FootballZone =
  | 'home_goal'
  | 'home_penalty_area'
  | 'home_third'
  | 'midfield'
  | 'away_third'
  | 'away_penalty_area'
  | 'away_goal'
  | 'home_corner_left'
  | 'home_corner_right'
  | 'away_corner_left'
  | 'away_corner_right'
  | 'center';

interface ZoneRange {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

const ZONE_RANGES: Record<FootballZone, ZoneRange> = {
  home_goal: { xMin: 0, xMax: 8, yMin: 28, yMax: 44 },
  home_penalty_area: { xMin: 10, xMax: 22, yMin: 18, yMax: 50 },
  home_third: { xMin: 10, xMax: 33, yMin: 8, yMax: 60 },
  midfield: { xMin: 42, xMax: 63, yMin: 12, yMax: 56 },
  away_third: { xMin: 67, xMax: 90, yMin: 8, yMax: 60 },
  away_penalty_area: { xMin: 78, xMax: 90, yMin: 18, yMax: 50 },
  away_goal: { xMin: 92, xMax: 100, yMin: 28, yMax: 44 },
  home_corner_left: { xMin: 2, xMax: 8, yMin: 2, yMax: 10 },
  home_corner_right: { xMin: 2, xMax: 8, yMin: 90, yMax: 98 },
  away_corner_left: { xMin: 92, xMax: 98, yMin: 2, yMax: 10 },
  away_corner_right: { xMin: 92, xMax: 98, yMin: 90, yMax: 98 },
  center: { xMin: 46, xMax: 58, yMin: 28, yMax: 44 },
};

function randInRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function zoneToCoords(zone: FootballZone): { x: number; y: number } {
  const range = ZONE_RANGES[zone];
  return {
    x: randInRange(range.xMin, range.xMax),
    y: randInRange(range.yMin, range.yMax),
  };
}

export function commentaryToBallPosition(
  commentText: string,
  matchMinute: number | null | undefined,
  homePossessionPct: number | null | undefined,
): { x: number; y: number; zone: FootballZone } {
  const text = (commentText || '').toLowerCase();

  const isLeft = /esquerda|left/.test(text);
  const isRight = /direita|right/.test(text);

  const hasHomeName = /casa|home|benfica|porto|sporting|flamengo|palmeiras|liverpool|dortmund|napoli|atletico|lakers|alcaraz|adesanya/.test(
    text,
  );
  const hasAwayName = /fora|away|manchester|united|schalke|roma|sevilla|celtics|sinner|du plessis|palmeiras/.test(
    text,
  );

  const hasHomeAttack = hasHomeName && !hasAwayName;
  const hasAwayAttack = hasAwayName && !hasHomeName;

  if (/canto|corner|escanteio/.test(text)) {
    const isHomeSide = hasHomeAttack || /casa|home/.test(text);
    const isAwaySide = hasAwayAttack || /fora|away/.test(text);
    if (isLeft) {
      const zone: FootballZone = isAwaySide ? 'away_corner_left' : 'home_corner_left';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
    if (isRight) {
      const zone: FootballZone = isAwaySide ? 'away_corner_right' : 'home_corner_right';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
    const zone: FootballZone = isHomeSide ? 'home_corner_left' : 'away_corner_left';
    const coords = zoneToCoords(zone);
    return { ...coords, zone };
  }

  if (/pequena área|6 yard|six yard/.test(text)) {
    if (hasHomeAttack) {
      const zone: FootballZone = 'away_goal';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
    if (hasAwayAttack) {
      const zone: FootballZone = 'home_goal';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
  }

  if (/grande área|18 yard|eighteen yard/.test(text)) {
    if (hasHomeAttack) {
      const zone: FootballZone = 'away_penalty_area';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
    if (hasAwayAttack) {
      const zone: FootballZone = 'home_penalty_area';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
  }

  if (/área|box|penalty/.test(text)) {
    if (hasHomeAttack) {
      const zone: FootballZone = 'away_penalty_area';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
    if (hasAwayAttack) {
      const zone: FootballZone = 'home_penalty_area';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
  }

  if (/golo|goal|gol/.test(text)) {
    if (hasHomeAttack) {
      const zone: FootballZone = 'away_goal';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
    if (hasAwayAttack) {
      const zone: FootballZone = 'home_goal';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
  }

  if (/defesa|defensive|back/.test(text)) {
    if (hasHomeName) {
      const zone: FootballZone = 'home_third';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
    if (hasAwayName) {
      const zone: FootballZone = 'away_third';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
  }

  if (/meio-campo|midfield|center circle/.test(text)) {
    const zone: FootballZone = 'center';
    const coords = zoneToCoords(zone);
    return { ...coords, zone };
  }

  if (/ataque|attacking|final third/.test(text)) {
    if (hasHomeAttack) {
      const zone: FootballZone = 'away_third';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
    if (hasAwayAttack) {
      const zone: FootballZone = 'home_third';
      const coords = zoneToCoords(zone);
      return { ...coords, zone };
    }
  }

  if (matchMinute === null || matchMinute === undefined) {
    const zone: FootballZone = 'center';
    const coords = zoneToCoords(zone);
    return { ...coords, zone };
  }

  if (homePossessionPct !== null && homePossessionPct !== undefined) {
    if (homePossessionPct >= 60) {
      const zone: FootballZone = 'midfield';
      const x = randInRange(38, 52);
      const y = randInRange(ZONE_RANGES.midfield.yMin, ZONE_RANGES.midfield.yMax);
      return { x, y, zone };
    }
    if (homePossessionPct <= 40) {
      const zone: FootballZone = 'midfield';
      const x = randInRange(52, 66);
      const y = randInRange(ZONE_RANGES.midfield.yMin, ZONE_RANGES.midfield.yMax);
      return { x, y, zone };
    }
  }

  if (matchMinute <= 15) {
    const zone: FootballZone = 'home_third';
    const coords = zoneToCoords(zone);
    return { ...coords, zone };
  }
  if (matchMinute >= 75) {
    const zone: FootballZone = 'away_third';
    const coords = zoneToCoords(zone);
    return { ...coords, zone };
  }

  const zone: FootballZone = 'midfield';
  const coords = zoneToCoords(zone);
  return { ...coords, zone };
}
