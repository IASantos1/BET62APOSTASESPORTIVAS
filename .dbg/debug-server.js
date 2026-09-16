// Minimal BET62 Debug Server - Node.js stdlib only
// Args: --session <id> --outdir .dbg --clean --idle 1200 --port 7777
const http = require('http');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function getArg(name, def) {
  const i = args.indexOf('--' + name);
  if (i < 0 || i + 1 >= args.length) return def;
  return args[i + 1];
}
const sessionId = getArg('session', 'default-session');
const outdir = getArg('outdir', '.dbg');
const clean = args.includes('--clean');
const idleMs = Number(getArg('idle', '0')) * 1000;
const startPort = Number(getArg('port', '7777'));
const remote = args.includes('--remote');

fs.mkdirSync(outdir, { recursive: true });
const logFile = path.resolve(outdir, `trae-debug-log-${sessionId}.ndjson`);
const envFile = path.resolve(outdir, `${sessionId}.env`);
if (clean && fs.existsSync(logFile)) fs.truncateSync(logFile, 0);

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};

let lastActivity = Date.now();
const logs = [];

function readEnvLines() {
  try {
    return fs.readFileSync(logFile, 'utf8').split('\n').filter(Boolean).length;
  } catch {
    return 0;
  }
}

function startServer(port) {
  const host = remote ? '0.0.0.0' : '127.0.0.1';
  const server = http.createServer((req, res) => {
    lastActivity = Date.now();
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (req.method === 'OPTIONS') {
      res.writeHead(204, CORS);
      return res.end();
    }
    if (url.pathname === '/health' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json', ...CORS });
      return res.end(JSON.stringify({
        status: 'ok',
        uptimeMs: Date.now() - startedAt,
        logCount: logs.length,
        ndjsonLines: readEnvLines(),
        sessionId,
      }));
    }
    if (url.pathname === '/logs' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/x-ndjson', ...CORS });
      try {
        const content = fs.existsSync(logFile) ? fs.readFileSync(logFile, 'utf8') : '';
        return res.end(content);
      } catch (e) {
        return res.end(JSON.stringify({ error: String(e) }));
      }
    }
    if (url.pathname === '/logs' && req.method === 'DELETE') {
      try { fs.truncateSync(logFile, 0); logs.length = 0; } catch {}
      res.writeHead(204, CORS);
      return res.end();
    }
    if (url.pathname === '/event' && req.method === 'POST') {
      let body = '';
      req.on('data', (c) => { body += c.toString(); if (body.length > 1_000_000) req.destroy(); });
      req.on('end', () => {
        try {
          let ev;
          try { ev = JSON.parse(body); } catch { res.writeHead(400, CORS); return res.end('invalid json'); }
          if (!ev || typeof ev !== 'object') { res.writeHead(400, CORS); return res.end('invalid body'); }
          ev.sessionId = ev.sessionId || sessionId;
          if (!ev.ts) ev.ts = Date.now();
          const line = JSON.stringify(ev) + '\n';
          fs.appendFileSync(logFile, line, 'utf8');
          logs.push(ev);
          res.writeHead(200, { 'Content-Type': 'application/json', ...CORS });
          return res.end(JSON.stringify({ ok: true, received: logs.length }));
        } catch (e) {
          res.writeHead(500, CORS);
          return res.end(String(e));
        }
      });
      return;
    }
    res.writeHead(404, CORS);
    res.end('not found');
  });

  server.on('error', (e) => {
    if (e.code === 'EADDRINUSE' && port < startPort + 10) {
      console.error(`Port ${port} ocupado, tentar ${port + 1}...`);
      return startServer(port + 1);
    }
    console.error(e);
    process.exit(1);
  });

  server.listen(port, host, () => {
    const apiUrl = `http://${host === '0.0.0.0' ? '127.0.0.1' : host}:${port}/event`;
    fs.writeFileSync(envFile, `DEBUG_SERVER_URL=${apiUrl}\nDEBUG_SESSION_ID=${sessionId}\n`, 'utf8');
    startedAt = Date.now();
    console.log('\n@@DEBUG_SERVER_INFO');
    console.log(JSON.stringify({
      api_url: apiUrl,
      session_id: sessionId,
      log_dir: path.resolve(outdir),
      log_file: path.resolve(logFile),
      env_file: path.resolve(envFile),
    }, null, 2));
    console.log('@@END_DEBUG_SERVER_INFO\n');
    if (idleMs > 0) {
      const timer = setInterval(() => {
        if (Date.now() - lastActivity > idleMs) {
          clearInterval(timer);
          server.close(() => process.exit(0));
        }
      }, 5000);
    }
  });
}

let startedAt = Date.now();
startServer(startPort);
