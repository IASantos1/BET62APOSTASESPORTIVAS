import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { requireEnv } from '@bet62/shared';
import * as schema from './schema/index';

const databaseUrl = requireEnv(process.env.DATABASE_URL, 'DATABASE_URL');

export const pool = new Pool({
  connectionString: databaseUrl,
  ssl: process.env.DB_SSL_NO_VERIFY === 'true' ? { rejectUnauthorized: false } : undefined,
});

export const db = drizzle(pool, { schema });
