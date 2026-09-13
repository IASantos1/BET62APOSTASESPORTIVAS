import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  app.use(helmet());

  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
  const extraOrigins = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',').map(o=>o.trim()).filter(Boolean) : [];
  const defaultOrigins = ['http://localhost:3080','http://localhost:3000'];
  const corsOrigins = Array.from(new Set([...(appUrl ? [appUrl] : []), ...extraOrigins, ...defaultOrigins]));

  app.enableCors({
    origin: corsOrigins,
    credentials: true,
  });

  app.setGlobalPrefix('api/bonus');

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
    .setTitle('BET62 Bonus Service')
    .setDescription('Microserviço de bônus, campanhas e rollover da BET62')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addTag('bonus', 'Bônus, campanhas, rollover, freebets e free spins')
    .addTag('health', 'Saúde do serviço')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableShutdownHooks();

  const port = Number(process.env.BONUS_PORT ?? process.env.PORT ?? 3007);
  await app.listen(port, '0.0.0.0');

  const url = await app.getUrl();
  Logger.log(`Bonus service running on ${url}`, 'Bootstrap');
  Logger.log(`Docs: ${url}/docs`, 'Bootstrap');
  Logger.log(`Prefix: /api/bonus`, 'Bootstrap');
}

bootstrap();
