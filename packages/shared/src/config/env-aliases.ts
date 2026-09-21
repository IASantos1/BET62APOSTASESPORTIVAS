const ENV_ALIASES: Array<[string, string[]]> = [
  ['JWT_SECRET', ['SEGREDO_JWT']],
  ['JWT_ACCESS_SECRET', ['SEGREDO_ACESSO_JWT']],
  ['JWT_REFRESH_SECRET', ['SEGREDO_REFRESH_JWT']],
  ['STRIPE_SECRET_KEY', ['CHAVE_SECRETA_STRIPE']],
  ['STRIPE_WEBHOOK_SECRET', ['SEGREDO_WEBHOOK_STRIPE']],
  ['STRIPE_PUBLISHABLE_KEY', ['CHAVE_PUBLICAVEL_STRIPE']],
  ['BIGBANG_API_KEY', ['CHAVE_API_BIGBANG']],
  ['MRDOGE_API_KEY', ['CHAVE_API_MRDOGE']],
  ['URL_DO_BANCO_DE_DADOS', ['DATABASE_URL']],
];

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
