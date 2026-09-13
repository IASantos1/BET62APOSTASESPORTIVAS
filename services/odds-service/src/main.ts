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

  app.setGlobalPrefix('api/odds');

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
