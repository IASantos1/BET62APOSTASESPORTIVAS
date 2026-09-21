// #region env-aliases-bootstrap-inline (0 imports, 0 external deps, 100% crash-proof)
(() => {
  if (typeof process === 'undefined' || typeof process.env === 'undefined') return;
  const ENV_ALIASES: Array<[string, string[]]> = [
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
  const count = Object.keys(applied).length;
  if (count > 0) {
    try {
      // eslint-disable-next-line no-console
      console.info(`[env-aliases:api-gateway] Mapeamento Railway PT/typo → EN aplicado (${count}):`, JSON.stringify(applied, null, 2));
    } catch (_e) {}
  } else {
    try {
      // eslint-disable-next-line no-console
      console.info('[env-aliases:api-gateway] Nenhum mapeamento aplicado (todas as vars já em EN, 0 fallback).');
    } catch (_e) {}
  }
})();
// #endregion

// @ts-nocheck — resolução de tipos temporária enquanto prisma generate não roda
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // helmet() por padrao aplica um CSP com script-src 'self' (sem 'unsafe-inline'
  // nem nonce), o que bloqueia os <script>self.__next_f.push(...)</script>
  // inline que o Next.js App Router injeta no HTML para hidratar os client
  // components — sem eles, o React nunca hidrata e NENHUM botao/tab da SPA
  // responde a clique (apesar da pagina carregar normalmente via SSR). Como o
  // Next aqui nao usa nonce/hash de CSP, liberamos 'unsafe-inline' em
  // script-src mantendo o resto dos defaults do helmet.
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          'script-src': ["'self'", "'unsafe-inline'"],
        },
      },
    }),
  );

  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
  const extraOrigins = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',').map(o=>o.trim()).filter(Boolean) : [];
  const defaultOrigins = ['http://localhost:3080','http://localhost:3000'];
  const corsOrigins = Array.from(new Set([...(appUrl ? [appUrl] : []), ...extraOrigins, ...defaultOrigins]));

  app.enableCors({
    origin: corsOrigins,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Nenhum controller deste gateway precisa de prefixo "/api" (HealthController
  // ja mapeia /health diretamente); o roteamento de /api/* e feito manualmente
  // pelo ApiReverseProxyMiddlewareController. setGlobalPrefix aqui so atrapalha:
  // o Nest passa a rejeitar com 404, ANTES de qualquer middleware rodar,
  // qualquer requisicao que nao comece com "/api" e nao esteja no exclude —
  // e isso incluia toda rota do frontend (/, /login, etc.), quebrando o proxy
  // para o Next.js inteiro.

  const config = new DocumentBuilder()
    .setTitle('BET62 API Gateway')
    .setDescription('API Gateway do BET62')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.enableShutdownHooks();

  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');
}

bootstrap();
