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
