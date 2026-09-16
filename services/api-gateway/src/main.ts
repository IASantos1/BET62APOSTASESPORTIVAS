import '@bet62/shared';
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
    .setDescription('API Gateway do BET62 - Plataforma de Apostas Esportivas')
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
