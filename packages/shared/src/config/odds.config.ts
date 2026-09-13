export interface OddsProviderConfig {
  type: "mock" | "custom" | "sportradar" | "thesportsdb" | "apifootball";
  baseUrl: string;
  apiKey?: string;
  apiSecret?: string;
  rateLimitPerMin: number;
  rateLimitPerHour: number;
  rateLimitPerDay: number;
  concurrency: number;
  timeoutMs: number;
  retries: number;
  retryDelayMs: number;
  sync: {
    sportsIntervalMin: number;
    leaguesIntervalMin: number;
    teamsIntervalMin: number;
    prematchIntervalSec: number;
    liveIntervalSec: number;
    oddsHistoryIntervalSec: number;
    liveAdaptiveInterval: {
      zeroLiveSec: number;
      lowLiveCountSec: number;
      highLiveCountSec: number;
      highLiveCountThreshold: number;
    };
  };
  cache: {
    prematchEventTtlSec: number;
    liveEventTtlSec: number;
    oddsTtlSec: number;
    leaguesTtlSec: number;
    sportsTtlSec: number;
  };
  markets: {
    enabled: string[];
    liveEnabled: string[];
    disabledForPrematch: string[];
    maxSelectionsPerEvent: number;
    maxPrematchEventsPerLeague: number;
    maxLiveEventsPerSport: number;
  };
  providerSpecific?: Record<string, unknown>;
}

export const DEFAULT_ODDS_PROVIDER_CONFIG: OddsProviderConfig = {
  type: "mock",
  baseUrl: "https://api.mock-odds.local",
  rateLimitPerMin: 300,
  rateLimitPerHour: 18000,
  rateLimitPerDay: 250000,
  concurrency: 10,
  timeoutMs: 10000,
  retries: 3,
  retryDelayMs: 500,
  sync: {
    sportsIntervalMin: 1440,
    leaguesIntervalMin: 360,
    teamsIntervalMin: 720,
    prematchIntervalSec: 300,
    liveIntervalSec: 15,
    oddsHistoryIntervalSec: 60,
    liveAdaptiveInterval: {
      zeroLiveSec: 60,
      lowLiveCountSec: 20,
      highLiveCountSec: 5,
      highLiveCountThreshold: 30,
    },
  },
  cache: {
    prematchEventTtlSec: 180,
    liveEventTtlSec: 10,
    oddsTtlSec: 5,
    leaguesTtlSec: 3600,
    sportsTtlSec: 86400,
  },
  markets: {
    enabled: [
      "MATCH_WINNER_1X2",
      "OVER_UNDER_TOTAL",
      "BTTS_YES_NO",
      "DOUBLE_CHANCE",
      "ASIAN_HANDICAP",
      "CORRECT_SCORE",
      "HALF_TIME_RESULT",
      "HALF_TIME_FULL_TIME",
      "DRAW_NO_BET",
      "TOTAL_CORNERS",
      "TOTAL_CARDS",
      "FIRST_GOAL_SCORER",
      "ANYTIME_GOAL_SCORER",
      "MATCH_WINNER_12",
      "MONEYLINE",
      "SPREAD",
      "TOTAL",
      "SET_WINNER",
      "GAME_WINNER",
    ],
    liveEnabled: [
      "MATCH_WINNER_1X2",
      "OVER_UNDER_TOTAL",
      "BTTS_YES_NO",
      "NEXT_GOAL",
      "ASIAN_HANDICAP",
      "DOUBLE_CHANCE",
      "DRAW_NO_BET",
      "MONEYLINE",
      "SPREAD",
      "TOTAL",
      "SET_WINNER",
      "GAME_WINNER",
    ],
    disabledForPrematch: ["NEXT_GOAL"],
    maxSelectionsPerEvent: 80,
    maxPrematchEventsPerLeague: 100,
    maxLiveEventsPerSport: 50,
  },
};

export const SPORT_METADATA: Record<string, { name: string; icon: string; color: string; tier: "P1" | "P2" | "P3" | "P4" | "P5" }> = {
  FOOTBALL: { name: "Futebol", icon: "⚽", color: "#22c55e", tier: "P1" },
  BASKETBALL: { name: "Basquete", icon: "🏀", color: "#f97316", tier: "P1" },
  TENNIS: { name: "Tênis", icon: "🎾", color: "#eab308", tier: "P1" },
  VOLLEYBALL: { name: "Vôlei", icon: "🏐", color: "#3b82f6", tier: "P2" },
  HOCKEY: { name: "Hóquei no Gelo", icon: "🏒", color: "#06b6d4", tier: "P2" },
  F1: { name: "Fórmula 1", icon: "🏎️", color: "#ef4444", tier: "P2" },
  UFC: { name: "UFC / MMA", icon: "🥊", color: "#dc2626", tier: "P2" },
  GOLF: { name: "Golfe", icon: "⛳", color: "#16a34a", tier: "P3" },
  DARTS: { name: "Dardos", icon: "🎯", color: "#a855f7", tier: "P3" },
  TABLE_TENNIS: { name: "Tênis de Mesa", icon: "🏓", color: "#14b8a6", tier: "P3" },
  ESPORTS: { name: "E-Sports", icon: "🎮", color: "#8b5cf6", tier: "P4" },
};

export const MARKET_METADATA: Record<string, { label: string; group: string; description: string; bettable: boolean; specifiers: string[] }> = {
  MATCH_WINNER_1X2: { label: "Resultado Final 1X2", group: "Principais", description: "Casa, Empate, Fora", bettable: true, specifiers: [] },
  MATCH_WINNER_12: { label: "Vitória Dupla 12", group: "Principais", description: "Casa ou Fora (sem empate)", bettable: true, specifiers: [] },
  OVER_UNDER_TOTAL: { label: "Mais/Menos Total", group: "Totais", description: "Total gols/pontos/jogos", bettable: true, specifiers: ["line"] },
  OVER_UNDER_HOME: { label: "Mais/Menos Casa", group: "Totais", description: "Total gols time casa", bettable: true, specifiers: ["line"] },
  OVER_UNDER_AWAY: { label: "Mais/Menos Fora", group: "Totais", description: "Total gols time fora", bettable: true, specifiers: ["line"] },
  BTTS_YES_NO: { label: "Ambos Marcam", group: "Gols", description: "Sim/Não ambos marcarem", bettable: true, specifiers: [] },
  CORRECT_SCORE: { label: "Resultado Exato", group: "Resultados", description: "Placar exato do jogo", bettable: true, specifiers: ["home", "away"] },
  HALF_TIME_RESULT: { label: "Resultado Intervalo", group: "Intervalo", description: "1X2 no primeiro tempo", bettable: true, specifiers: [] },
  HALF_TIME_FULL_TIME: { label: "Intervalo/Final", group: "Intervalo", description: "Resultado intervalo + final", bettable: true, specifiers: [] },
  DOUBLE_CHANCE: { label: "Chance Dupla", group: "Principais", description: "Duas possibilidades (1X, 12, X2)", bettable: true, specifiers: [] },
  ASIAN_HANDICAP: { label: "Handicap Asiático", group: "Handicap", description: "Handicap com meio gols", bettable: true, specifiers: ["handicap"] },
  EUROPEAN_HANDICAP: { label: "Handicap Europeu", group: "Handicap", description: "Handicap inteiro com empate", bettable: true, specifiers: ["handicap"] },
  FIRST_GOAL_SCORER: { label: "Primeiro Goleador", group: "Jogadores", description: "Primeiro jogador a marcar", bettable: true, specifiers: ["playerId"] },
  ANYTIME_GOAL_SCORER: { label: "Goleador a Qualquer Momento", group: "Jogadores", description: "Jogador marca em qualquer momento", bettable: true, specifiers: ["playerId"] },
  EXACT_GOALS: { label: "Gols Exatos", group: "Gols", description: "Número exato de gols totais", bettable: true, specifiers: ["count"] },
  DRAW_NO_BET: { label: "Anula Empate", group: "Principais", description: "Empate devolve stake", bettable: true, specifiers: [] },
  TOTAL_CORNERS: { label: "Total Escanteios", group: "Estatísticas", description: "Mais/Menos escanteios", bettable: true, specifiers: ["line"] },
  TOTAL_CARDS: { label: "Total Cartões", group: "Estatísticas", description: "Mais/Menos cartões (25 p/ amarelo)", bettable: true, specifiers: ["line"] },
  NEXT_GOAL: { label: "Próximo Gol", group: "Ao Vivo", description: "Qual time fará o próximo gol (live)", bettable: true, specifiers: [] },
  WINNING_MARGIN: { label: "Margem de Vitória", group: "Resultados", description: "Diferença de pontos/gols", bettable: true, specifiers: ["range"] },
  SET_WINNER: { label: "Vencedor do Set", group: "Tênis/Vôlei", description: "Vencedor de cada set", bettable: true, specifiers: ["set"] },
  GAME_WINNER: { label: "Vencedor do Game", group: "Tênis", description: "Vencedor de cada game", bettable: true, specifiers: ["game"] },
  TIE_NO_BET: { label: "Anula Empate", group: "Basquete", description: "Empate devolve stake", bettable: true, specifiers: [] },
  TOTAL_POINTS: { label: "Total Pontos", group: "Basquete", description: "Mais/Menos pontos totais", bettable: true, specifiers: ["line"] },
  MONEYLINE: { label: "Vencedor (ML)", group: "Basquete/EUA", description: "Vencedor da partida (sem empate)", bettable: true, specifiers: [] },
  SPREAD: { label: "Handicap (Spread)", group: "Basquete/EUA", description: "Vitória com margem handicap", bettable: true, specifiers: ["spread"] },
  TOTAL: { label: "Total", group: "Basquete/EUA", description: "Mais/Menos total de pontos", bettable: true, specifiers: ["line"] },
};
