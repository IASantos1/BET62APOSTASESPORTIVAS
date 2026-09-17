// #region env-aliases-bootstrap-inline (0 imports, 0 external deps, 100% crash-proof)
(() => {
  if (typeof process === 'undefined' || typeof process.env === 'undefined') return;
  const ENV_ALIASES: Array<[string, string[]]> = [
    ['PROPLINE_API_KEY', ['CHAVE_API_PROPLINE']],
    ['PROPLINE_API_BASE_URL', ['URL_BASE_DA_API_PROPLINE', 'URL_BASE_API_PROPLINE', 'URL_PROPLINE_API']],
    ['PROPLINE_WS_URL', ['URL_WS_PROPLINE', 'WS_PROPLINE_URL']],
    ['PROPLINE_WEBHOOK_SECRET', ['SEGREDO_WEBHOOK_PROPLINE']],
    ['GOAL_API_KEY', ['CHAVE_API_GOAL', 'GOAL_KEY', 'CHAVE_GOAL_API']],
    ['GOAL_API_BASE_URL', ['URL_BASE_DA_API_DO_OBJETIVO', 'URL_BASE_GOAL_API', 'URL_API_GOAL']],
    ['GOAL_API_WS_URL', ['URL_WS_GOAL_API', 'WS_GOAL_URL', 'URL_WS_API_OBJETIVO']],
    ['GOAL_API_WEBHOOK_SECRET', ['SEGREDO_WEBHOOK_GOAL_API']],
    ['ODDS_PROVIDER_NAME', ['ODDS_FOVIDER_NAME', 'NOME_PROVIDER_ODDS', 'PROVEDOR_DE_ODDS']],
    ['ODDS_PROVIDER_API_KEY', ['CHAVE_API_PROVEDOR_ODDS']],
    ['ODDS_PROVIDER_BASE_URL', ['URL_BASE_PROVEDOR_ODDS']],
    ['JWT_SECRET', ['SEGREDO_JWT']],
    ['JWT_ACCESS_SECRET', ['SEGREDO_ACESSO_JWT']],
    ['JWT_REFRESH_SECRET', ['SEGREDO_REFRESH_JWT']],
    ['STRIPE_SECRET_KEY', ['CHAVE_SECRETA_STRIPE']],
    ['STRIPE_WEBHOOK_SECRET', ['SEGREDO_WEBHOOK_STRIPE']],
    ['STRIPE_PUBLISHABLE_KEY', ['CHAVE_PUBLICAVEL_STRIPE']],
    ['DATABASE_URL', ['URL_DO_BANCO_DE_DADOS']],
  ];
  const TRUE_SET = new Set(['1', 'true', 'TRUE', 'True', 'yes', 'YES', 'sim', 'SIM', 'on', 'ON', 's', 'S', 'y', 'Y']);
  const isTrue = (v: unknown): boolean => typeof v === 'string' && TRUE_SET.has(v.trim());
  const setIfMissing = (target: string, sources: string[]): boolean => {
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
  };
  const applied: Record<string, string> = {};
  for (const [target, sources] of ENV_ALIASES) {
    if (setIfMissing(target, sources)) {
      const v = process.env[target] || '';
      applied[target] = v.length > 10 ? `${v.slice(0, 6)}…${v.slice(-4)}` : v;
    }
  }
  if (isTrue(process.env.ENABLE_GOAL) || isTrue(process.env.ATIVAR_LINHA_PROP) || isTrue(process.env.ENABLE_PROPLINE)) {
    const curr = process.env.ODDS_PROVIDER_NAME;
    if (!curr || curr.length === 0) {
      process.env.ODDS_PROVIDER_NAME = 'propline';
      applied['ODDS_PROVIDER_NAME (flag)'] = 'propline';
    }
  }
  const count = Object.keys(applied).length;
  if (count > 0) {
    try {
      // eslint-disable-next-line no-console
      console.info(`[env-aliases:odds-service] Mapeamento Railway PT/typo → EN aplicado (${count}):`, JSON.stringify(applied, null, 2));
    } catch (_e) {}
  } else {
    try {
      // eslint-disable-next-line no-console
      console.info('[env-aliases:odds-service] Nenhum mapeamento aplicado (todas as vars já em EN, 0 fallback).');
    } catch (_e) {}
  }
})();
// #endregion

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { IoAdapter } from '@nestjs/platform-socket.io';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  try {
    app.use(
      helmet({
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: false,
      }),
    );
  } catch (_e) {
    // helmet not installed
  }
  try {
    app.use(cookieParser());
  } catch (_e) {
    // cookie-parser not installed
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
  const extraOrigins = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',').map(o=>o.trim()).filter(Boolean) : [];
  const defaultOrigins = ['http://localhost:3080','http://localhost:3000'];
  const corsOrigins = Array.from(new Set([...(appUrl ? [appUrl] : []), ...extraOrigins, ...defaultOrigins]));

  app.enableCors({
    origin: corsOrigins,
    credentials: true,
  });

  try {
    app.useWebSocketAdapter(new IoAdapter(app));
  } catch (_e) {
    // IoAdapter unavailable
  }

  const ODD_GLOBAL_PREFIX = 'api/odds';
  app.setGlobalPrefix(ODD_GLOBAL_PREFIX);

  // #region debug-point H2a:odds-service-global-prefix
  (() => { const fs = require('fs'), p = '.dbg/no-prematch-live-events.env'; let u = 'http://127.0.0.1:7777/event', s = 'no-prematch-live-events'; try { const e = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : ''; u = (e.match(/DEBUG_SERVER_URL=(.+)/) || [])[1] || u; s = (e.match(/DEBUG_SESSION_ID=(.+)/) || [])[1] || s; } catch {} const d = { sessionId: s, runId: 'post-fix', hypothesisId: 'H2a', location: 'odds-service/main.ts:46', msg: '[DEBUG] odds-service setGlobalPrefix POST-FIX: @Controller vazio resolve duplo prefixo', data: { globalPrefix: ODD_GLOBAL_PREFIX, controllerDecorator: '@Controller() vazio [FIX H2a]', finalExpectedRoute: ODD_GLOBAL_PREFIX + '/events/prematch', frontendRequestPath: '/api/odds/events/prematch', mismatch: ODD_GLOBAL_PREFIX + '/events/prematch' !== '/api/odds/events/prematch', fixH2aApplied: true, routesMatch: ODD_GLOBAL_PREFIX + '/events/prematch' === '/api/odds/events/prematch' }, ts: Date.now() }; try { require('http').request(u.split('/event')[0], { method: 'POST', path: '/event', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(JSON.stringify(d)) } }, (r) => { r.on('data', () => {}); }).on('error', () => {}).end(JSON.stringify(d)); } catch {} })();
  // #endregion

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Odds Service')
    .setDescription('API do microserviço de odds da plataforma BET62')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addTag('odds', 'Operações de odds e eventos esportivos')
    .addTag('health', 'Saúde do serviço')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/odds/docs', app, document);

  const port = Number(process.env.ODDS_PORT ?? process.env.PORT ?? 3005);

  app.enableShutdownHooks();

  await app.listen(port, '0.0.0.0');

  const url = await app.getUrl();
  console.log(`Odds service is running at: ${url}`);
  console.log(`Swagger docs available at: ${url}/api/odds/docs`);
  console.log(`Health check available at: ${url}/api/odds/health`);
  console.log(`WebSocket available at: ${url.replace('http', 'ws')}/odds-ws`);
}

bootstrap();
