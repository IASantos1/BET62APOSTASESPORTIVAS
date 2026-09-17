import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { requireEnv } from '@bet62/shared';
import { TerminusModule } from '@nestjs/terminus';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './prisma/prisma.module';
import { HealthController } from './health.controller';
import { OddsProviderModule } from './odds-provider/odds-provider.module';
import { OddsModule } from './odds/odds.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../../.env'],
      expandVariables: true,
    }),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: requireEnv(configService.get<string>('JWT_SECRET'), 'JWT_SECRET'),
        signOptions: { expiresIn: '15m' },
      }),
      inject: [ConfigService],
    }),
    EventEmitterModule.forRoot({
      wildcard: false,
      delimiter: '.',
      newListener: false,
      removeListener: false,
      maxListeners: 500,
      ignoreErrors: false,
    }),
    ScheduleModule.forRoot(),
    TerminusModule,
    PrismaModule,
    OddsProviderModule,
    OddsModule,
    EventsModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
