export type GoalApiFixtureStatus =
  | 'NS'
  | '1H'
  | 'HT'
  | '2H'
  | 'FT'
  | 'AET'
  | 'PEN'
  | 'CANC'
  | 'PST'
  | 'INT'
  | 'TBD'
  | 'LIVE'
  | 'ET'
  | 'BT';

export interface GoalApiLeague {
  id: number | string;
  name: string;
  type?: string | null;
  country?: string | null;
  country_code?: string | null;
  logo?: string | null;
  flag?: string | null;
  season?: number | string | null;
  round?: string | null;
}

export interface GoalApiTeam {
  id: number | string;
  name: string;
  logo?: string | null;
  country?: string | null;
  country_code?: string | null;
  founded?: number | null;
  national?: boolean | null;
  stadium?: string | null;
  stadium_capacity?: number | null;
}

export interface GoalApiScore {
  halftime?: { home: number | null; away: number | null } | null;
  fulltime?: { home: number | null; away: number | null } | null;
  extratime?: { home: number | null; away: number | null } | null;
  penalty?: { home: number | null; away: number | null } | null;
  current?: { home: number | null; away: number | null } | null;
  total?: { home: number | null; away: number | null } | null;
}

export interface GoalApiClock {
  minute?: number | null;
  second?: number | null;
  stoppage?: number | null;
  period?: number | string | null;
  period_name?: string | null;
  running?: boolean | null;
  updated_at?: string | null;
}

export interface GoalApiPlayer {
  id: number | string;
  name?: string | null;
  number?: number | null;
  pos?: string | null;
  grid?: string | null;
}

export interface GoalApiLineupTeam {
  team_id?: number | string;
  team_name?: string | null;
  formation?: string | null;
  startXI?: GoalApiPlayer[];
  substitutes?: GoalApiPlayer[];
  coach?: { id?: number | string; name?: string | null } | null;
  missing_players?: GoalApiPlayer[];
}

export interface GoalApiLineups {
  fixture_id?: number | string;
  home?: GoalApiLineupTeam;
  away?: GoalApiLineupTeam;
  updated_at?: string | null;
}

export type GoalApiEventType =
  | 'goal'
  | 'own_goal'
  | 'penalty_goal'
  | 'penalty_miss'
  | 'yellow_card'
  | 'red_card'
  | 'second_yellow'
  | 'substitution'
  | 'var_review'
  | 'kick_off'
  | 'half_time'
  | 'second_half'
  | 'extra_time'
  | 'penalties'
  | 'match_end'
  | 'injury'
  | 'timeout';

export interface GoalApiLiveEvent {
  id?: number | string;
  fixture_id?: number | string;
  type?: GoalApiEventType | string;
  minute?: number | null;
  extra_minute?: number | null;
  team_id?: number | string | null;
  team_name?: string | null;
  player_id?: number | string | null;
  player_name?: string | null;
  player_number?: number | null;
  assist_id?: number | string | null;
  assist_name?: string | null;
  detail?: string | null;
  var_decision?: string | null;
  score_after?: { home?: number | null; away?: number | null } | null;
  period?: string | null;
  created_at?: string | null;
}

export interface GoalApiCommentary {
  id?: number | string;
  fixture_id?: number | string;
  minute?: number | null;
  extra_minute?: number | null;
  comment?: string | null;
  team_id?: number | string | null;
  team_name?: string | null;
  zone?: string | null;
  event_type?: string | null;
  created_at?: string | null;
}

export interface GoalApiStatItem {
  type?: string | null;
  value?: string | number | null;
}

export interface GoalApiTeamStats {
  team_id?: number | string;
  team_name?: string | null;
  stats?: GoalApiStatItem[];
}

export interface GoalApiStats {
  fixture_id?: number | string;
  home?: GoalApiTeamStats;
  away?: GoalApiTeamStats;
  updated_at?: string | null;
}

export interface GoalApiStandingRow {
  rank?: number | null;
  team_id?: number | string;
  team_name?: string | null;
  team_logo?: string | null;
  points?: number | null;
  played?: number | null;
  win?: number | null;
  draw?: number | null;
  lose?: number | null;
  goals_for?: number | null;
  goals_against?: number | null;
  goals_diff?: number | null;
  form?: string | null;
}

export interface GoalApiStandings {
  league_id?: number | string;
  league_name?: string | null;
  season?: string | number | null;
  standings?: GoalApiStandingRow[][];
}

export interface GoalApiH2hFixture {
  fixture_id?: number | string;
  league?: GoalApiLeague;
  home?: GoalApiTeam;
  away?: GoalApiTeam;
  score?: GoalApiScore;
  status?: GoalApiFixtureStatus | string;
  date?: string | null;
  timestamp?: number | null;
}

export interface GoalApiH2hResponse {
  teamA?: GoalApiTeam;
  teamB?: GoalApiTeam;
  h2h?: GoalApiH2hFixture[];
  latest_teamA?: GoalApiH2hFixture[];
  latest_teamB?: GoalApiH2hFixture[];
  next_teamA?: GoalApiH2hFixture[];
  next_teamB?: GoalApiH2hFixture[];
}

export interface GoalApiVideo {
  id?: number | string;
  fixture_id?: number | string;
  title?: string | null;
  url?: string | null;
  thumbnail?: string | null;
  created_at?: string | null;
}

export interface GoalApiNews {
  id?: number | string;
  title?: string | null;
  content?: string | null;
  author?: string | null;
  source_url?: string | null;
  image_url?: string | null;
  team_id?: number | string | null;
  fixture_id?: number | string | null;
  published_at?: string | null;
}

export interface GoalApiFixture {
  id: number | string;
  league?: GoalApiLeague;
  home?: GoalApiTeam;
  away?: GoalApiTeam;
  score?: GoalApiScore;
  clock?: GoalApiClock;
  status?: GoalApiFixtureStatus | string;
  status_detail?: string | null;
  date?: string | null;
  timestamp?: number | null;
  kickoff_at?: string | null;
  actual_kickoff_at?: string | null;
  venue?: string | null;
  venue_city?: string | null;
  referee?: string | null;
  round?: string | null;
  odds?: Record<string, unknown> | null;
  last_updated_at?: string | null;
}

export type GoalApiWebhookEventType =
  | 'fixture.status'
  | 'fixture.score'
  | 'fixture.events'
  | 'fixture.statistics';

export interface GoalApiWebhookEvent<T = unknown> {
  id?: string;
  type: GoalApiWebhookEventType | string;
  timestamp?: string | number;
  fixture_id?: number | string;
  payload?: T;
  signature?: string;
}

export const GOAL_STATUS_TO_BET62: Record<string, string> = {
  NS: 'scheduled',
  TBD: 'suspended',
  PST: 'suspended',
  INT: 'suspended',
  LIVE: 'in_progress',
  '1H': 'in_progress',
  HT: 'halftime',
  '2H': 'in_progress',
  ET: 'in_progress',
  BT: 'in_progress',
  FT: 'final',
  AET: 'final',
  PEN: 'final',
  CANC: 'cancelled',
};

export const GOAL_PERIOD_TO_BET62: Record<string, string> = {
  NS: 'null',
  '1H': 'period1',
  HT: 'ht',
  '2H': 'period2',
  ET: 'et',
  PEN: 'pens',
  FT: 'ft',
  AET: 'ft',
  CANC: 'null',
};
