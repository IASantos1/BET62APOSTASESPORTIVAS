import {
  normalizeTeamName,
  normalizeCompetitionName,
  resolveTeamAlias,
} from '../normalization/team-normalizer';

export interface GoalFixtureRow {
  id?: string | number;
  league?: { id?: string | number; name?: string } | null;
  home?: { id?: string | number; name?: string } | null;
  away?: { id?: string | number; name?: string } | null;
  date?: string | null;
  timestamp?: number | null;
  kickoff_at?: string | null;
}

export interface ProplineEventRow {
  event_id?: string;
  sport_key?: string;
  league_key?: string | null;
  home_team_key?: string;
  away_team_key?: string;
  home_team_name?: string | null;
  away_team_name?: string | null;
  start_date?: string;
}

export interface MatchConfidenceResult {
  score: number;
  source: string;
}

export function computeStableKey(
  sportCode: string,
  homeName: string,
  awayName: string,
  kickoffDate: Date,
): string {
  const home = resolveTeamAlias(normalizeTeamName(homeName || ''));
  const away = resolveTeamAlias(normalizeTeamName(awayName || ''));
  const year = kickoffDate.getUTCFullYear();
  const month = String(kickoffDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(kickoffDate.getUTCDate()).padStart(2, '0');
  const hour = String(kickoffDate.getUTCHours()).padStart(2, '0');
  const minute = String(kickoffDate.getUTCMinutes()).padStart(2, '0');
  const iso = `${year}-${month}-${day}T${hour}:${minute}:00Z`;
  return `${sportCode.toUpperCase()}:${home}:${away}:${iso}`;
}

export function normalizeKickoffWindow(
  k: Date,
  toleranceHours: number = 6,
): { start: Date; end: Date } {
  const ms = toleranceHours * 60 * 60 * 1000;
  const start = new Date(k.getTime() - ms);
  const end = new Date(k.getTime() + ms);
  return { start, end };
}

function extractGoalKickoff(goal: GoalFixtureRow | null): Date | null {
  if (!goal) return null;
  if (goal.kickoff_at) {
    const d = new Date(goal.kickoff_at);
    if (!isNaN(d.getTime())) return d;
  }
  if (goal.timestamp) {
    const d = new Date(goal.timestamp * 1000);
    if (!isNaN(d.getTime())) return d;
  }
  if (goal.date) {
    const d = new Date(goal.date);
    if (!isNaN(d.getTime())) return d;
  }
  return null;
}

function extractProplineKickoff(prop: ProplineEventRow | null): Date | null {
  if (!prop || !prop.start_date) return null;
  const d = new Date(prop.start_date);
  return isNaN(d.getTime()) ? null : d;
}

export function resolveMatchConfidence(
  goalRow: GoalFixtureRow | null,
  proplineRow: ProplineEventRow | null,
): MatchConfidenceResult {
  if (!goalRow && !proplineRow) {
    return { score: 0, source: 'no_data' };
  }

  if (goalRow && proplineRow) {
    if (goalRow.id && proplineRow.event_id) {
      const stableKeyGoal = (() => {
        const hn = goalRow.home?.name || '';
        const an = goalRow.away?.name || '';
        const kd = extractGoalKickoff(goalRow);
        if (!kd) return null;
        return computeStableKey('FOOTBALL', hn, an, kd);
      })();
      const stableKeyProp = (() => {
        const hn = proplineRow.home_team_name || proplineRow.home_team_key || '';
        const an = proplineRow.away_team_name || proplineRow.away_team_key || '';
        const kd = extractProplineKickoff(proplineRow);
        if (!kd) return null;
        return computeStableKey('FOOTBALL', hn, an, kd);
      })();

      if (stableKeyGoal && stableKeyProp && stableKeyGoal === stableKeyProp) {
        return { score: 0.95, source: 'stable_key_match' };
      }
    }

    const goalHome = normalizeTeamName(goalRow.home?.name || '');
    const goalAway = normalizeTeamName(goalRow.away?.name || '');
    const propHome = normalizeTeamName(proplineRow.home_team_name || proplineRow.home_team_key || '');
    const propAway = normalizeTeamName(proplineRow.away_team_name || proplineRow.away_team_key || '');

    const goalLeague = normalizeCompetitionName(goalRow.league?.name || '');
    const propLeague = normalizeCompetitionName(proplineRow.league_key || '');

    const goalKickoff = extractGoalKickoff(goalRow);
    const propKickoff = extractProplineKickoff(proplineRow);

    const teamsMatch =
      (resolveTeamAlias(goalHome) === resolveTeamAlias(propHome) &&
        resolveTeamAlias(goalAway) === resolveTeamAlias(propAway)) ||
      (resolveTeamAlias(goalHome) === resolveTeamAlias(propAway) &&
        resolveTeamAlias(goalAway) === resolveTeamAlias(propHome));

    const leagueMatch = goalLeague && propLeague && goalLeague === propLeague;

    if (teamsMatch && goalKickoff && propKickoff) {
      const diffMs = Math.abs(goalKickoff.getTime() - propKickoff.getTime());
      const diffHours = diffMs / (60 * 60 * 1000);

      if (diffHours <= 6 && leagueMatch) {
        return { score: 0.85, source: 'teams_competition_kickoff_6h' };
      }
      if (diffHours <= 12) {
        return { score: 0.65, source: 'teams_kickoff_12h' };
      }
    }

    if (teamsMatch) {
      return { score: 0.4, source: 'teams_only' };
    }
  }

  return { score: 0, source: 'no_match' };
}
