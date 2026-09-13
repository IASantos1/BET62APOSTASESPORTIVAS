import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
  DiskHealthIndicator,
} from '@nestjs/terminus';
import { PrismaHealthIndicator } from './prisma/prisma.health';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
    private readonly disk: DiskHealthIndicator,
    private readonly prismaHealth: PrismaHealthIndicator,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Verificar saúde do serviço' })
  @ApiOkResponse({
    description: 'Serviço está saudável',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'ok' },
        service: { type: 'string', example: 'bets-service' },
      },
    },
  })
  async check() {
    return {
      status: 'ok',
      service: 'bets-service',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('full')
  @HealthCheck()
  @ApiOperation({ summary: 'Health check completo' })
  async fullCheck() {
    return this.health.check([
      () => ({
        service: {
          status: 'up',
          details: { name: 'bets-service' },
        },
      }),
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
      () => this.memory.checkRSS('memory_rss', 300 * 1024 * 1024),
      () => this.prismaHealth.isHealthy('prisma'),
    ]);
  }
}
