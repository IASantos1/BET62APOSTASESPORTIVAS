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

  app.setGlobalPrefix('api/notifications');

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
    .setTitle('BET62 Notifications Service')
    .setDescription('Microserviço de Notificações: in-app, email, push, SMS, preferências e dispatcher')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addTag('notifications', 'Endpoints para usuários: listar, marcar lidas, preferências, push tokens')
    .addTag('health', 'Saúde do serviço')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableShutdownHooks();

  const port = Number(process.env.NOTIFICATIONS_PORT ?? process.env.PORT ?? 3009);
  await app.listen(port, '0.0.0.0');

  const url = await app.getUrl();
  Logger.log(`Notifications service running on ${url}`, 'Bootstrap');
  Logger.log(`Docs: ${url}/docs`, 'Bootstrap');
  Logger.log(`Prefix: /api/notifications`, 'Bootstrap');
}

bootstrap();
