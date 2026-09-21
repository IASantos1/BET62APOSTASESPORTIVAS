import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  app.use(helmet());
  app.enableCors({
    origin: true,
    credentials: true,
  });
  app.setGlobalPrefix('api/odds');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('BET62 Odds Service')
    .setDescription('API de futebol alimentada por MrDoge')
    .setVersion('1.0.0')
    .build();
  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, config));

  const port = Number(process.env.ODDS_PORT ?? process.env.PORT ?? 3005);
  await app.listen(port, '0.0.0.0');
  const url = await app.getUrl();
  Logger.log(`Odds service running on ${url}`, 'Bootstrap');
}

bootstrap();
