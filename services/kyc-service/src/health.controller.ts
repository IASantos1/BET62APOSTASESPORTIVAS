import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Health')
@Controller()
export class HealthController {
  @Get('health')
  @ApiOperation({ summary: 'Verifica status do serviço' })
  healthCheck() {
    return {
      status: 'ok',
      service: 'kyc-service',
      timestamp: new Date().toISOString(),
    };
  }
}
