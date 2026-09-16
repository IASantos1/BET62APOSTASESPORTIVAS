export interface ProplineBookmaker {
  id: number | string;
  name: string;
  code: string;
  priority: number;
  isPushBased: boolean;
}

export interface ProplineSport {
  key: string;
  name: string;
  logo?: string | null;
}

export interface ProplineLeague {
  key: string;
  sport_key: string;
  name: string;
  logo?: string | null;
  country_code?: string | null;
}

export interface ProplineTeam {
  key: string;
  name: string;
  logo?: string | null;
  sport_key?: string | null;
}

export interface ProplineEventScores {
  home?: number | null;
  away?: number | null;
  half_home?: number | null;
  half_away?: number | null;
  q1_home?: number | null;
  q1_away?: number | null;
  q2_home?: number | null;
  q2_away?: number | null;
  q3_home?: number | null;
  q3_away?: number | null;
  q4_home?: number | null;
  q4_away?: number | null;
  extra_time_home?: number | null;
  extra_time_away?: number | null;
  penalties_home?: number | null;
  penalties_away?: number | null;
  current_period_home?: number | null;
  current_period_away?: number | null;
}

export type ProplineEventStatus =
  | 'scheduled'
  | 'in_progress'
  | 'halftime'
  | 'ended'
  | 'final'
  | 'postponed'
  | 'cancelled'
  | 'suspended'
  | 'awarded';

export interface ProplineEvent {
  event_id: string;
  sport_key: string;
  league_key?: string | null;
  home_team_key: string;
  away_team_key: string;
  home_team_name?: string | null;
  away_team_name?: string | null;
  start_date: string;
  scores?: ProplineEventScores | null;
  status: ProplineEventStatus;
  minute?: number | null;
  period?: string | null;
  venue?: string | null;
  city?: string | null;
  country?: string | null;
  round?: string | null;
  season?: string | null;
  stream_url?: string | null;
  coverage_live?: boolean;
  last_updated_at?: string | null;
}

export type ProplineSelectionTrend = 'up' | 'down' | 'flat' | null;

export interface ProplineOddsSelection {
  label: string;
  outcome: string;
  price: number;
  line?: number | null;
  handicap?: number | null;
  trend?: ProplineSelectionTrend;
  book_id: number | string;
  book_code: string;
  recorded_at: string;
  book_updated_at?: string | null;
  last_change_at?: string | null;
  last_seen_at?: string | null;
  liquidity?: number | null;
  payout_multiplier?: number | null;
  dfs_odds_type?: string | null;
  line_gap?: number | null;
  book_version?: string | null;
}

export interface ProplineMarket {
  market_code: string;
  market_label: string;
  market_group: string;
  period?: string | null;
  status: 'active' | 'suspended' | 'closed' | 'settled';
  line_specifiers?: Record<string, number | string> | null;
  selections: ProplineOddsSelection[];
}

export interface ProplineOddsResponse {
  event_id: string;
  bookmakers?: ProplineBookmaker[] | null;
  markets: ProplineMarket[];
  last_updated_at?: string | null;
  generated_at?: string | null;
}

export interface ProplineBasketballStats {
  points_home?: number | null;
  points_away?: number | null;
  field_goals_made_home?: number | null;
  field_goals_made_away?: number | null;
  field_goals_attempted_home?: number | null;
  field_goals_attempted_away?: number | null;
  three_points_made_home?: number | null;
  three_points_made_away?: number | null;
  three_points_attempted_home?: number | null;
  three_points_attempted_away?: number | null;
  free_throws_made_home?: number | null;
  free_throws_made_away?: number | null;
  free_throws_attempted_home?: number | null;
  free_throws_attempted_away?: number | null;
  rebounds_home?: number | null;
  rebounds_away?: number | null;
  offensive_rebounds_home?: number | null;
  offensive_rebounds_away?: number | null;
  defensive_rebounds_home?: number | null;
  defensive_rebounds_away?: number | null;
  assists_home?: number | null;
  assists_away?: number | null;
  steals_home?: number | null;
  steals_away?: number | null;
  blocks_home?: number | null;
  blocks_away?: number | null;
  turnovers_home?: number | null;
  turnovers_away?: number | null;
  fouls_home?: number | null;
  fouls_away?: number | null;
  timeouts_left_home?: number | null;
  timeouts_left_away?: number | null;
}

export interface ProplineTennisStats {
  sets_home?: number | null;
  sets_away?: number | null;
  games_home?: number | null;
  games_away?: number | null;
  sets_score_home?: (number | null)[] | null;
  sets_score_away?: (number | null)[] | null;
  aces_home?: number | null;
  aces_away?: number | null;
  double_faults_home?: number | null;
  double_faults_away?: number | null;
  first_serves_in_home?: number | null;
  first_serves_in_away?: number | null;
  first_serve_points_won_home?: number | null;
  first_serve_points_won_away?: number | null;
  second_serve_points_won_home?: number | null;
  second_serve_points_won_away?: number | null;
  break_points_won_home?: number | null;
  break_points_won_away?: number | null;
  break_points_attempted_home?: number | null;
  break_points_attempted_away?: number | null;
  service_games_won_home?: number | null;
  service_games_won_away?: number | null;
  current_server?: 'home' | 'away' | null;
  current_game_score_home?: number | null;
  current_game_score_away?: number | null;
  tiebreak?: boolean | null;
}

export interface ProplineVolleyballStats {
  sets_home?: number | null;
  sets_away?: number | null;
  sets_score_home?: (number | null)[] | null;
  sets_score_away?: (number | null)[] | null;
  attacks_home?: number | null;
  attacks_away?: number | null;
  attack_errors_home?: number | null;
  attack_errors_away?: number | null;
  blocks_home?: number | null;
  blocks_away?: number | null;
  aces_home?: number | null;
  aces_away?: number | null;
  service_errors_home?: number | null;
  service_errors_away?: number | null;
  digs_home?: number | null;
  digs_away?: number | null;
}

export interface ProplineHockeyStats {
  shots_on_goal_home?: number | null;
  shots_on_goal_away?: number | null;
  shots_home?: number | null;
  shots_away?: number | null;
  hits_home?: number | null;
  hits_away?: number | null;
  blocks_home?: number | null;
  blocks_away?: number | null;
  penalty_minutes_home?: number | null;
  penalty_minutes_away?: number | null;
  power_play_goals_home?: number | null;
  power_play_goals_away?: number | null;
  power_play_opportunities_home?: number | null;
  power_play_opportunities_away?: number | null;
  faceoffs_won_home?: number | null;
  faceoffs_won_away?: number | null;
  saves_home?: number | null;
  saves_away?: number | null;
  save_percent_home?: number | null;
  save_percent_away?: number | null;
  periods_score_home?: (number | null)[] | null;
  periods_score_away?: (number | null)[] | null;
}

export interface ProplineFootballStatsFull {
  possession_home?: number | null;
  possession_away?: number | null;
  shots_home?: number | null;
  shots_away?: number | null;
  shots_on_target_home?: number | null;
  shots_on_target_away?: number | null;
  shots_off_target_home?: number | null;
  shots_off_target_away?: number | null;
  blocked_shots_home?: number | null;
  blocked_shots_away?: number | null;
  corners_home?: number | null;
  corners_away?: number | null;
  fouls_home?: number | null;
  fouls_away?: number | null;
  offsides_home?: number | null;
  offsides_away?: number | null;
  yellow_cards_home?: number | null;
  yellow_cards_away?: number | null;
  red_cards_home?: number | null;
  red_cards_away?: number | null;
  substitutions_home?: number | null;
  substitutions_away?: number | null;
  saves_home?: number | null;
  saves_away?: number | null;
  xg_home?: number | null;
  xg_away?: number | null;
  attacks_home?: number | null;
  attacks_away?: number | null;
  dangerous_attacks_home?: number | null;
  dangerous_attacks_away?: number | null;
  free_kicks_home?: number | null;
  free_kicks_away?: number | null;
  goal_kicks_home?: number | null;
  goal_kicks_away?: number | null;
  throw_ins_home?: number | null;
  throw_ins_away?: number | null;
}

export interface ProplineStatsResponse {
  event_id: string;
  sport_key: string;
  period?: string | null;
  football?: ProplineFootballStatsFull | null;
  basketball?: ProplineBasketballStats | null;
  tennis?: ProplineTennisStats | null;
  volleyball?: ProplineVolleyballStats | null;
  hockey?: ProplineHockeyStats | null;
  generic?: Record<string, number | string | boolean | null> | null;
  recorded_at?: string | null;
  last_updated_at?: string | null;
}

export interface ProplineWsOddsChangeData {
  event_id: string;
  market_code: string;
  market_status?: 'active' | 'suspended' | 'closed' | 'settled';
  selection?: Partial<ProplineOddsSelection> & Pick<ProplineOddsSelection, 'outcome' | 'book_id' | 'book_code' | 'price'>;
  book_code?: string | null;
  period?: string | null;
  line?: number | null;
  handicap?: number | null;
  old_price?: number | null;
  new_price?: number | null;
  updated_at: string;
}

export interface ProplineWsMarketStatusData {
  event_id: string;
  market_code: string;
  status: 'active' | 'suspended' | 'closed' | 'settled';
  reason?: string | null;
  updated_at: string;
}

export interface ProplineWsScoreChangeData {
  event_id: string;
  sport_key: string;
  scores: ProplineEventScores;
  status: ProplineEventStatus;
  minute?: number | null;
  period?: string | null;
  updated_at: string;
}

export interface ProplineWsEventStatusData {
  event_id: string;
  sport_key: string;
  old_status?: ProplineEventStatus | null;
  new_status: ProplineEventStatus;
  minute?: number | null;
  period?: string | null;
  start_date?: string | null;
  reason?: string | null;
  updated_at: string;
}

export type ProplineWsEvent = 'odds_change' | 'market_status' | 'score_change' | 'event_status';

export type ProplineWsData =
  | ({ event: 'odds_change' } & ProplineWsOddsChangeData)
  | ({ event: 'market_status' } & ProplineWsMarketStatusData)
  | ({ event: 'score_change' } & ProplineWsScoreChangeData)
  | ({ event: 'event_status' } & ProplineWsEventStatusData);

export interface ProplineWsMessage {
  seq: number;
  event: ProplineWsEvent;
  data: ProplineWsData;
  received_at: string;
}

export interface ProplineWsHelloMessage {
  type: 'hello';
  server_time: string;
  max_seq: number;
  supported_events: ProplineWsEvent[];
}

export interface ProplineWsSubscribeMessage {
  action: 'subscribe';
  channels?: string[] | null;
  sport_keys?: string[] | null;
  event_ids?: string[] | null;
  seq?: number | null;
}

export interface ProplineWsAckMessage {
  type: 'ack';
  action: string;
  subscribed?: string[] | null;
}

export interface ProplineScoreResponse {
  event_id: string;
  sport_key: string;
  status: ProplineEventStatus;
  scores: ProplineEventScores;
  minute?: number | null;
  period?: string | null;
  last_updated_at: string;
}

export interface ProplineSettlementSelection {
  selection_outcome: string;
  market_code: string;
  line?: number | null;
  handicap?: number | null;
  result: 'WIN' | 'LOSE' | 'DRAW' | 'VOID' | 'PUSH' | 'HALF_WIN' | 'HALF_LOSS';
  settled_at?: string | null;
  final_score?: ProplineEventScores | null;
  void_reason?: string | null;
}

export interface ProplineSettlementResponse {
  event_id: string;
  sport_key: string;
  status: 'final' | 'ended' | 'awarded' | 'cancelled' | 'postponed';
  final_score: ProplineEventScores;
  selections: ProplineSettlementSelection[];
  settled_at: string;
  official?: boolean;
}
