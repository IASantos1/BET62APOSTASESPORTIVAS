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
  type                 TEXT        NOT NULL CHECK (type IN ('deposit', 'withdrawal', 'withdrawal_refund', 'bet', 'payout', 'refund', 'admin_credit', 'admin_debit')),
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
