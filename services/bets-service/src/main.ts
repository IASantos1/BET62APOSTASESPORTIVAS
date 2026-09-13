import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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

  app.setGlobalPrefix('api/bets');

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
    .setTitle('Bets Service')
    .setDescription('API do microserviço de apostas da plataforma BET62')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addTag('bets', 'Operações de apostas')
    .addTag('settlement', 'Liquidação de apostas e eventos')
    .addTag('health', 'Saúde do serviço')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/bets/docs', app, document);

  const port = Number(process.env.BETS_PORT ?? process.env.PORT ?? 3006);

  app.enableShutdownHooks();

  await app.listen(port, '0.0.0.0');

  const url = await app.getUrl();
  console.log(`Bets service is running at: ${url}`);
  console.log(`Swagger docs available at: ${url}/api/bets/docs`);
  console.log(`Health check available at: ${url}/api/bets/health`);
}

bootstrap();
