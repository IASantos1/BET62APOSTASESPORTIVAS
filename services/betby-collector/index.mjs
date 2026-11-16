import { createHash } from 'node:crypto';
import { mkdir, appendFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';

const config = {
  enabled: process.env.BETBY_ENABLED !== 'false',
  baseUrl: (process.env.BETBY_BASE_URL || 'https://demoapi.betby.com').replace(/\/$/, ''),
  brandId: process.env.BETBY_BRAND_ID || '1653815133341880320',
  locale: process.env.BETBY_LOCALE || 'en-GB',
  liveCursor: process.env.BETBY_LIVE_CURSOR || '0',
  prematchCursor: process.env.BETBY_PREMATCH_CURSOR || '0',
  intervalMs: Math.max(5000, Number(process.env.BETBY_POLL_INTERVAL_MS || 15000)),
  timeoutMs: Math.max(1000, Number(process.env.BETBY_TIMEOUT_MS || 12000)),
  dataDir: process.env.BETBY_DATA_DIR || '/data',
  port: Number(process.env.PORT || 8080),
  statusToken: process.env.BETBY_STATUS_TOKEN || ''
};

const paths = {
  live: `/api/v4/live/brand/${config.brandId}/${config.locale}/${config.liveCursor}`,
  prematch: `/api/v4/prematch/brand/${config.brandId}/${config.locale}/${config.prematchCursor}`
};
const state = {
  startedAt: new Date().toISOString(),
  lastRunAt: null,
  lastSuccessAt: null,
  lastError: null,
  running: false,
  feeds: { live: { ok: false, count: 0 }, prematch: { ok: false, count: 0 } }
};
const seenHashes = new Map();

function digest(value) {
  return createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

function findEvents(value, found = [], seen = new Set()) {
  if (!value || typeof value !== 'object' || seen.has(value)) return found;
  seen.add(value);
  if (Array.isArray(value)) {
    for (const item of value) findEvents(item, found, seen);
    return found;
  }
  const hasCompetitors = Array.isArray(value.competitors);
  const hasMarkets = Array.isArray(value.markets);
  const hasEventId = value.id !== undefined || value.event_id !== undefined;
  if (hasCompetitors && hasEventId) found.push(value);
  for (const child of Object.values(value)) findEvents(child, found, seen);
  return found;
}

async function writeJsonLine(file, record) {
  await mkdir(dirname(file), { recursive: true });
  await appendFile(file, JSON.stringify(record) + '\n', 'utf8');
}

// Um pedido à BETBY; guarda no estado do feed o HTTP, o motivo de bloqueio (bb-rsn) e o início da resposta.
async function requestJson(feed, url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), config.timeoutMs);
  try {
    const response = await fetch(url, {
      headers: { accept: 'application/json', 'user-agent': 'BET62-data-collector/0.1' },
      signal: controller.signal
    });
    const bodyText = await response.text();
    const blockReason = response.headers.get('bb-rsn');
    state.feeds[feed] = {
      ...state.feeds[feed],
      url,
      httpStatus: response.status,
      blockReason,
      bodyPreview: bodyText.slice(0, 300),
      checkedAt: new Date().toISOString()
    };
    if (!response.ok) {
      const reason = blockReason ? ` (bb-rsn: ${blockReason})` : '';
      throw new Error(`${feed}: HTTP ${response.status}${reason} - ${bodyText.slice(0, 300)}`);
    }
    try { return JSON.parse(bodyText); }
    catch { throw new Error(`${feed}: resposta não é JSON válido (${url})`); }
  } finally {
    clearTimeout(timeout);
  }
}

async function saveSnapshot(key, feed, url, payload, now) {
  const hash = digest(payload);
  if (seenHashes.get(key) !== hash) {
    await writeJsonLine(join(config.dataDir, 'snapshots', `${feed}.jsonl`), {
      captured_at: now, feed, url, sha256: hash, data: payload
    });
    seenHashes.set(key, hash);
  }
  return hash;
}

// O cursor (último segmento da URL) devolve um índice com as versões atuais dos eventos
// (top_events_versions / rest_events_versions); os eventos vêm de pedir cada versão no lugar do cursor.
function versionsOf(index) {
  if (!index || typeof index !== 'object') return [];
  const list = [...(Array.isArray(index.top_events_versions) ? index.top_events_versions : []),
    ...(Array.isArray(index.rest_events_versions) ? index.rest_events_versions : [])];
  return [...new Set(list.map(String).filter(v => /^\d+$/.test(v)))];
}

async function fetchFeed(feed, path) {
  const now = new Date().toISOString();
  const indexUrl = config.baseUrl + path;
  const index = await requestJson(feed, indexUrl);
  const hash = await saveSnapshot(feed, feed, indexUrl, index, now);

  const versions = versionsOf(index);
  const base = indexUrl.slice(0, indexUrl.lastIndexOf('/'));
  const versionResults = [];
  let events = findEvents(index);
  for (const version of versions) {
    const url = `${base}/${version}`;
    const payload = await requestJson(feed, url);
    await saveSnapshot(`${feed}:${version}`, feed, url, payload, now);
    const found = findEvents(payload);
    versionResults.push({ version, events: found.length, keys: Object.keys(payload || {}).slice(0, 12) });
    events = events.concat(found);
  }

  if (events.length) {
    await writeJsonLine(join(config.dataDir, 'events', `${feed}.jsonl`), {
      captured_at: now,
      feed,
      events: events.map(event => ({
        id: event.id ?? event.event_id ?? null,
        scheduled: event.scheduled ?? null,
        competitors: event.competitors ?? null,
        score: event.score ?? null,
        period_scores: event.period_scores ?? null,
        clock: event.clock ?? null,
        statistics: event.statistics ?? null,
        markets: event.markets ?? null,
        raw: event
      }))
    });
  }
  state.feeds[feed] = {
    ...state.feeds[feed],
    ok: true,
    error: null,
    count: events.length,
    indexUrl,
    indexKeys: Object.keys(index || {}).slice(0, 12),
    versions: versionResults,
    sha256: hash,
    lastCapturedAt: now
  };
}

async function poll() {
  if (!config.enabled || state.running) return;
  state.running = true;
  state.lastRunAt = new Date().toISOString();
  try {
    // Testa todos os feeds mesmo que um falhe, para o diagnóstico mostrar o estado de cada um.
    const errors = [];
    for (const [feed, path] of Object.entries(paths)) {
      try {
        await fetchFeed(feed, path);
      } catch (error) {
        const cause = error.cause ? ` (${error.cause.code || error.cause.message})` : '';
        const message = error.name === 'AbortError'
          ? `${feed}: timeout após ${config.timeoutMs}ms`
          : error.message.startsWith(`${feed}:`) ? error.message : `${feed}: ${error.message}${cause}`;
        state.feeds[feed] = { ...state.feeds[feed], ok: false, error: message };
        errors.push(message);
        console.error('[betby-collector]', message);
      }
    }
    if (errors.length) {
      state.lastError = errors.join(' | ');
    } else {
      state.lastSuccessAt = new Date().toISOString();
      state.lastError = null;
    }
  } finally {
    state.running = false;
  }
}

const server = createServer((req, res) => {
  if (req.url !== '/health' && req.url !== '/status') {
    res.writeHead(404).end('Not found');
    return;
  }
  if (req.url === '/status' && config.statusToken &&
      req.headers.authorization !== `Bearer ${config.statusToken}`) {
    res.writeHead(401).end('Unauthorized');
    return;
  }
  res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({
    service: 'bet62-betby-collector',
    enabled: config.enabled,
    config: {
      baseUrl: config.baseUrl,
      brandId: config.brandId,
      locale: config.locale,
      intervalMs: config.intervalMs,
      timeoutMs: config.timeoutMs,
      paths
    },
    ...state
  }));
});

await mkdir(config.dataDir, { recursive: true });
server.listen(config.port, '0.0.0.0', () => {
  console.log(`BETBY collector listening on :${config.port}; enabled=${config.enabled}`);
});
if (config.enabled) {
  await poll();
  setInterval(poll, config.intervalMs).unref();
}

process.on('SIGTERM', () => server.close(() => process.exit(0)));
process.on('SIGINT', () => server.close(() => process.exit(0)));
