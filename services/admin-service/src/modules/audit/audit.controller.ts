import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuditService } from './audit.service';
import { RequirePermission } from '../permissions/decorators/require-permission.decorator';
import { AdminAuditQueryDto, AdminDashboardQueryDto } from '@bet62/shared';

@ApiTags('Audit & Dashboard')
@Controller()
@ApiBearerAuth()
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Get('logs')
  @RequirePermission('audit.logs.read')
  @ApiOperation({ summary: 'Consultar logs de auditoria' })
  logs(@Query() query: AdminAuditQueryDto) {
    return this.auditService.findLogs(query);
  }

  @Get('dashboard/summary')
  @RequirePermission('dashboard.read')
  @ApiOperation({ summary: 'Resumo agregado do dashboard admin' })
  summary(@Query() query: AdminDashboardQueryDto): Promise<any> {
    return this.auditService.getDashboardSummary(query);
  }
}
