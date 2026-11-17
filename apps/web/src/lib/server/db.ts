import { Pool, types, type PoolClient, type QueryResultRow } from 'pg';

// DATE (oid 1082) como texto "AAAA-MM-DD": sem conversões de fuso horário.
types.setTypeParser(1082, (v: string) => v);

// PostgreSQL (Railway: variável DATABASE_URL do serviço Postgres). O esquema é criado/atualizado
// no primeiro pedido; todas as alterações são idempotentes (IF NOT EXISTS).
//
// Dinheiro sempre em cêntimos (inteiros). Cada mudança de saldo fica registada em `transactions`
// com o saldo resultante — o saldo do utilizador nunca muda sem uma linha no registo.
const SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  id              BIGSERIAL PRIMARY KEY,
  email           TEXT        NOT NULL UNIQUE,
  first_name      TEXT        NOT NULL,
  last_name       TEXT        NOT NULL DEFAULT '',
  birthdate       DATE        NOT NULL,
  phone           TEXT,
  nif             TEXT,
  country         TEXT        NOT NULL DEFAULT 'PT',
  password_hash   TEXT        NOT NULL,
  role            TEXT        NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  status          TEXT        NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'blocked')),
  balance_cents   BIGINT      NOT NULL DEFAULT 0 CHECK (balance_cents >= 0),
  excluded_until  TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Colunas acrescentadas depois da primeira versão (perfil).
ALTER TABLE users ADD COLUMN IF NOT EXISTS prefs     JSONB NOT NULL DEFAULT '{}'::jsonb;
ALTER TABLE users ADD COLUMN IF NOT EXISTS iban      TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS iban_name TEXT;

CREATE TABLE IF NOT EXISTS sessions (
  token_hash  TEXT        PRIMARY KEY,
  user_id     BIGINT      NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at  TIMESTAMPTZ NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  user_agent  TEXT,
  ip          TEXT
);
CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id);

CREATE TABLE IF NOT EXISTS transactions (
  id                   BIGSERIAL PRIMARY KEY,
  user_id              BIGINT      NOT NULL REFERENCES users(id),
  type                 TEXT        NOT NULL CHECK (type IN ('deposit', 'withdrawal', 'withdrawal_refund', 'bet', 'payout', 'refund', 'admin_credit', 'admin_debit', 'cashout')),
  amount_cents         BIGINT      NOT NULL,
  balance_after_cents  BIGINT      NOT NULL,
  reference            TEXT,
  note                 TEXT,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS transactions_user ON transactions(user_id, id DESC);

-- Limites de jogo responsável (o jogador só os pode baixar de imediato; subir espera 24 h).
CREATE TABLE IF NOT EXISTS user_limits (
  user_id       BIGINT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  deposit_day   BIGINT,
  deposit_week  BIGINT,
  deposit_month BIGINT,
  pending       JSONB,
  pending_at    TIMESTAMPTZ,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Bilhetes (a colocação e a liquidação chegam na fase seguinte; a tabela já existe para /apostas).
CREATE TABLE IF NOT EXISTS bets (
  id              BIGSERIAL PRIMARY KEY,
  user_id         BIGINT      NOT NULL REFERENCES users(id),
  kind            TEXT        NOT NULL CHECK (kind IN ('single', 'multiple')),
  stake_cents     BIGINT      NOT NULL CHECK (stake_cents > 0),
  odds            NUMERIC(12, 3) NOT NULL,
  potential_cents BIGINT      NOT NULL,
  status          TEXT        NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'won', 'lost', 'void', 'cashout', 'review', 'rejected')),
  payout_cents    BIGINT      NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  settled_at      TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS bets_user ON bets(user_id, id DESC);

CREATE TABLE IF NOT EXISTS bet_legs (
  id            BIGSERIAL PRIMARY KEY,
  bet_id        BIGINT  NOT NULL REFERENCES bets(id) ON DELETE CASCADE,
  event_id      TEXT    NOT NULL,
  event_name    TEXT    NOT NULL,
  sport         TEXT    NOT NULL,
  start_time    TIMESTAMPTZ,
  live          BOOLEAN NOT NULL DEFAULT false,
  market_id     TEXT    NOT NULL,
  variant       TEXT    NOT NULL DEFAULT '',
  outcome_id    TEXT    NOT NULL,
  market_name   TEXT    NOT NULL,
  outcome_name  TEXT    NOT NULL,
  odds          NUMERIC(12, 3) NOT NULL,
  status        TEXT    NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'won', 'lost', 'void', 'half_won', 'half_lost')),
  settled_at    TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS bet_legs_bet ON bet_legs(bet_id);
CREATE INDEX IF NOT EXISTS bet_legs_open_event ON bet_legs(event_id) WHERE status = 'open';

-- Fase 2: criador de apostas (várias seleções do mesmo jogo) e dados para a liquidação.
ALTER TABLE bets DROP CONSTRAINT IF EXISTS bets_kind_check;
ALTER TABLE bets ADD CONSTRAINT bets_kind_check CHECK (kind IN ('single', 'multiple', 'builder'));
ALTER TABLE bets ADD COLUMN IF NOT EXISTS note TEXT;
ALTER TABLE bet_legs ADD COLUMN IF NOT EXISTS sport_id TEXT;
ALTER TABLE bet_legs ADD COLUMN IF NOT EXISTS result_note TEXT;

-- Resultados da BETBY, enviados pela página Liquidação do admin (lidos no navegador do admin).
CREATE TABLE IF NOT EXISTS event_results (
  event_id      TEXT        PRIMARY KEY,
  sport         TEXT,
  status        TEXT        NOT NULL CHECK (status IN ('live', 'finished', 'cancelled')),
  match_status  INTEGER,
  home_score    INTEGER,
  away_score    INTEGER,
  periods       JSONB       NOT NULL DEFAULT '[]'::jsonb,
  clock         TEXT,
  score_at      TIMESTAMPTZ,
  source        TEXT        NOT NULL DEFAULT 'betby-admin',
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Registo de cada decisão de liquidação (quem, quando, porquê).
CREATE TABLE IF NOT EXISTS settlements (
  id          BIGSERIAL PRIMARY KEY,
  bet_id      BIGINT REFERENCES bets(id),
  leg_id      BIGINT REFERENCES bet_legs(id),
  event_id    TEXT,
  action      TEXT        NOT NULL,
  detail      TEXT,
  source      TEXT        NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Bilhete partilhado: link público só com o bilhete (sem dados da conta).
ALTER TABLE bets ADD COLUMN IF NOT EXISTS share_token TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS bets_share_token ON bets(share_token) WHERE share_token IS NOT NULL;

-- Odds atuais da BETBY das seleções em aberto (enviadas pela página Liquidação do admin), para o cash out.
CREATE TABLE IF NOT EXISTS leg_prices (
  event_id    TEXT        NOT NULL,
  market_id   TEXT        NOT NULL,
  variant     TEXT        NOT NULL,
  outcome_id  TEXT        NOT NULL,
  odds        NUMERIC(12, 3),
  active      BOOLEAN     NOT NULL,
  at          TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (event_id, market_id, variant, outcome_id)
);

-- Cada cash out pago (auditoria).
CREATE TABLE IF NOT EXISTS cashouts (
  id           BIGSERIAL PRIMARY KEY,
  bet_id       BIGINT      NOT NULL REFERENCES bets(id),
  user_id      BIGINT      NOT NULL REFERENCES users(id),
  stake_cents  BIGINT      NOT NULL,
  value_cents  BIGINT      NOT NULL,
  fair_cents   BIGINT      NOT NULL,
  seen_cents   BIGINT      NOT NULL,
  live         BOOLEAN     NOT NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Movimento de cash out na carteira (bases criadas antes desta versão).
ALTER TABLE transactions DROP CONSTRAINT IF EXISTS transactions_type_check;
ALTER TABLE transactions ADD CONSTRAINT transactions_type_check CHECK (type IN ('deposit', 'withdrawal', 'withdrawal_refund', 'bet', 'payout', 'refund', 'admin_credit', 'admin_debit', 'cashout'));

-- Confirmação das odds de cada bilhete (o navegador envia a odd; a página Liquidação do admin
-- compara-a com a BETBY). Sem confirmação, um bilhete ganho não é pago sozinho: vai a análise.
ALTER TABLE bets ADD COLUMN IF NOT EXISTS odds_check TEXT NOT NULL DEFAULT 'pending';
ALTER TABLE bets ADD COLUMN IF NOT EXISTS odds_check_note TEXT;

-- WinHouse: jogos, placar, relógio e cotações lidos pelo servidor (coletor em lib/server/winhouse).
-- As cotações ficam como vêm (JSONB compacto): as da lista (2–3 mercados, frescas) e as da página
-- do jogo (todos os mercados). betby_id liga o jogo ao mesmo jogo na BETBY (minicampo, mercados extra).
CREATE TABLE IF NOT EXISTS wh_events (
  id            TEXT        PRIMARY KEY,
  sport         TEXT        NOT NULL,
  sport_id      INT         NOT NULL,
  competition   TEXT        NOT NULL,
  country       TEXT,
  home          TEXT        NOT NULL,
  away          TEXT        NOT NULL,
  home_logo     TEXT,
  away_logo     TEXT,
  start_time    TIMESTAMPTZ NOT NULL,
  status        TEXT        NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'live', 'ended', 'gone', 'merged')),
  home_score    INT,
  away_score    INT,
  minutes       NUMERIC(7, 2),
  clock_raw     TEXT,
  clock_since   TIMESTAMPTZ,
  score_since   TIMESTAMPTZ,
  live_since    TIMESTAMPTZ,
  missing_since TIMESTAMPTZ,
  list_odds     JSONB       NOT NULL DEFAULT '[]'::jsonb,
  list_at       TIMESTAMPTZ,
  page_odds     JSONB       NOT NULL DEFAULT '[]'::jsonb,
  page_at       TIMESTAMPTZ,
  page_status   INT,
  watched_at    TIMESTAMPTZ,
  verdict       JSONB,
  end_reason    TEXT,
  ended_at      TIMESTAMPTZ,
  merged_into   TEXT,
  betby_id      TEXT,
  link_status   TEXT,
  seen_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS wh_events_status ON wh_events(status, start_time);

-- Estado do coletor (quem recolhe, saúde das rotas, fuso estimado), partilhado entre instâncias.
CREATE TABLE IF NOT EXISTS wh_state (
  key         TEXT        PRIMARY KEY,
  value       JSONB       NOT NULL DEFAULT '{}'::jsonb,
  owner       TEXT,
  until       TIMESTAMPTZ,
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
`;

const g = globalThis as unknown as { __bet62Pool?: Pool; __bet62Schema?: Promise<void> };

export function hasDatabase() {
  return Boolean(process.env.DATABASE_URL);
}

function pool() {
  if (!process.env.DATABASE_URL) throw new DatabaseMissing();
  if (!g.__bet62Pool) {
    const url = process.env.DATABASE_URL;
    // Railway (rede interna *.railway.internal) não usa TLS; o endereço público usa.
    const internal = /\.railway\.internal|localhost|127\.0\.0\.1/.test(url);
    g.__bet62Pool = new Pool({
      connectionString: url,
      max: 10,
      ssl: internal || /sslmode=disable/.test(url) ? undefined : { rejectUnauthorized: false },
    });
  }
  return g.__bet62Pool;
}

export class DatabaseMissing extends Error {
  constructor() {
    super('Base de dados não configurada (DATABASE_URL).');
  }
}

async function ready() {
  g.__bet62Schema ??= pool()
    .query(SCHEMA)
    .then(() => undefined)
    .catch((e) => {
      g.__bet62Schema = undefined;
      throw e;
    });
  return g.__bet62Schema;
}

export async function query<T extends QueryResultRow = QueryResultRow>(text: string, params: unknown[] = []) {
  await ready();
  return (await pool().query<T>(text, params)).rows;
}

export async function one<T extends QueryResultRow = QueryResultRow>(text: string, params: unknown[] = []) {
  return (await query<T>(text, params))[0] ?? null;
}

/** Corre `fn` numa transação (BEGIN/COMMIT, ROLLBACK em erro). */
export async function tx<T>(fn: (c: PoolClient) => Promise<T>) {
  await ready();
  const c = await pool().connect();
  try {
    await c.query('BEGIN');
    const out = await fn(c);
    await c.query('COMMIT');
    return out;
  } catch (e) {
    await c.query('ROLLBACK').catch(() => undefined);
    throw e;
  } finally {
    c.release();
  }
}
