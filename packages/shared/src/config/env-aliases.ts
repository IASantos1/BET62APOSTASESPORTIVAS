const ENV_ALIASES: Array<[string, string[]]> = [
  ['PROPLINE_API_KEY', ['CHAVE_API_PROPLINE']],
  ['PROPLINE_API_BASE_URL', ['URL_BASE_DA_API_PROPLINE', 'URL_BASE_API_PROPLINE', 'URL_PROPLINE_API']],
  ['PROPLINE_WS_URL', ['URL_WS_PROPLINE', 'WS_PROPLINE_URL']],
  ['PROPLINE_WEBHOOK_SECRET', ['SEGREDO_WEBHOOK_PROPLINE']],
  ['GOAL_API_KEY', ['CHAVE_API_GOAL', 'GOAL_KEY', 'CHAVE_GOAL_API']],
  ['GOAL_API_BASE_URL', ['URL_BASE_DA_API_DO_OBJETIVO', 'URL_BASE_GOAL_API', 'URL_API_GOAL']],
  ['GOAL_API_WS_URL', ['URL_WS_GOAL_API', 'WS_GOAL_URL', 'URL_WS_API_OBJETIVO']],
  ['GOAL_API_WEBHOOK_SECRET', ['SEGREDO_WEBHOOK_GOAL_API', 'GOAL_API_WEBHOOK_SECRET']],
  ['ODDS_PROVIDER_NAME', ['ODDS_FOVIDER_NAME', 'NOME_PROVIDER_ODDS', 'PROVEDOR_DE_ODDS']],
  ['ODDS_PROVIDER_API_KEY', ['CHAVE_API_PROVEDOR_ODDS']],
  ['ODDS_PROVIDER_BASE_URL', ['URL_BASE_PROVEDOR_ODDS']],
  ['JWT_SECRET', ['SEGREDO_JWT']],
  ['JWT_ACCESS_SECRET', ['SEGREDO_ACESSO_JWT']],
  ['JWT_REFRESH_SECRET', ['SEGREDO_REFRESH_JWT']],
  ['STRIPE_SECRET_KEY', ['CHAVE_SECRETA_STRIPE']],
  ['STRIPE_WEBHOOK_SECRET', ['SEGREDO_WEBHOOK_STRIPE']],
  ['STRIPE_PUBLISHABLE_KEY', ['CHAVE_PUBLICAVEL_STRIPE']],
  ['URL_DO_BANCO_DE_DADOS', ['DATABASE_URL']],
];

const TRUE_SET = new Set(['1', 'true', 'TRUE', 'True', 'yes', 'YES', 'sim', 'SIM', 'on', 'ON', 's', 'S', 'y', 'Y']);

function isTrue(value: string | undefined): boolean {
  if (typeof value !== 'string') return false;
  return TRUE_SET.has(value.trim());
}

function setIfMissing(target: string, sources: string[]): boolean {
  const existing = process.env[target];
  if (typeof existing === 'string' && existing.length > 0) return false;
  for (const src of sources) {
    const v = process.env[src];
    if (typeof v === 'string' && v.length > 0) {
      process.env[target] = v;
      return true;
    }
  }
  return false;
}

export function applyEnvAliases(opts?: { log?: boolean }): Record<string, string> {
  const applied: Record<string, string> = {};
  if (typeof process === 'undefined' || typeof process.env === 'undefined') return applied;
  for (const [target, sources] of ENV_ALIASES) {
    if (setIfMissing(target, sources)) {
      const v = process.env[target] ?? '';
      applied[target] = v.length > 10 ? `${v.slice(0, 6)}…${v.slice(-4)}` : v;
    }
  }
  if (isTrue(process.env.ENABLE_GOAL) || isTrue(process.env.ATIVAR_LINHA_PROP)) {
    const currentProvider = process.env.ODDS_PROVIDER_NAME;
    if (!currentProvider || currentProvider.length === 0) {
      process.env.ODDS_PROVIDER_NAME = 'propline';
      applied['ODDS_PROVIDER_NAME (flag ENABLE_GOAL/ATIVAR_LINHA_PROP)'] = 'propline';
    }
  }
  if (opts?.log && Object.keys(applied).length > 0) {
    try {
      // eslint-disable-next-line no-console
      console.info(
        `[env-aliases] Mapeamento Railway variantes PT/typo → EN aplicado (${Object.keys(applied).length}):`,
        JSON.stringify(applied, null, 2),
      );
    } catch (_e) {}
  }
  return applied;
}

if (typeof process !== 'undefined' && typeof process.env !== 'undefined') {
  applyEnvAliases({ log: true });
}
