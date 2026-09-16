export type SportsProviderName = "goal_api" | "propline";
export type SportsProviderDimension =
  | "data"
  | "stats"
  | "odds"
  | "settlement";

export interface SportProviderAssignment {
  data: SportsProviderName;
  stats: SportsProviderName;
  odds: SportsProviderName;
  settlement: SportsProviderName;
}

export interface SportsProviderEndpointConfig {
  baseUrl: string;
  wsUrl: string;
  apiKeyEnvName: string;
  shortLivedWsToken: boolean;
}

export const SPORTS_PROVIDER_CONFIG: {
  endpoints: Record<SportsProviderName, SportsProviderEndpointConfig>;
  bySport: Record<string, SportProviderAssignment>;
  allSports: string[];
} = {
  endpoints: {
    goal_api: {
      baseUrl: process.env.GOAL_API_BASE_URL ?? "https://api.goal-api.com/v1",
      wsUrl: process.env.GOAL_API_WS_URL ?? "wss://api.goal-api.com/ws",
      apiKeyEnvName: "GOAL_API_KEY",
      shortLivedWsToken: true,
    },
    propline: {
      baseUrl:
        process.env.PROPLINE_API_BASE_URL ?? "https://api.prop-line.com",
      wsUrl:
        process.env.PROPLINE_WS_URL ?? "",
      apiKeyEnvName: "PROPLINE_API_KEY",
      shortLivedWsToken: false,
    },
  },
  allSports: [
    "FOOTBALL",
    "BASKETBALL",
    "TENNIS",
    "BASEBALL",
    "HOCKEY",
    "NFL",
    "VOLLEYBALL",
    "DARTS",
    "TABLE_TENNIS",
    "GOLF",
    "UFC",
    "F1",
    "ESPORTS",
  ],
  bySport: {
    FOOTBALL: {
      data: "goal_api",
      stats: "goal_api",
      odds: "propline",
      settlement: "goal_api",
    },
    BASKETBALL: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
    TENNIS: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
    BASEBALL: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
    HOCKEY: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
    NFL: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
    VOLLEYBALL: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
    DARTS: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
    TABLE_TENNIS: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
    GOLF: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
    UFC: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
    F1: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
    ESPORTS: {
      data: "propline",
      stats: "propline",
      odds: "propline",
      settlement: "propline",
    },
  },
};

export function getProviderForSport(
  sport: string,
  dimension: SportsProviderDimension,
): SportsProviderName {
  const normalised = sport.trim().toUpperCase();
  const cfg = SPORTS_PROVIDER_CONFIG.bySport[normalised];
  if (!cfg) return "propline";
  return cfg[dimension] ?? "propline";
}

export function isGoalApiSport(sport: string): boolean {
  return sport.trim().toUpperCase() === "FOOTBALL";
}
