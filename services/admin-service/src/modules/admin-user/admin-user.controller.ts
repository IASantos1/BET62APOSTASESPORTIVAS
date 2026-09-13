import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Query,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { AdminUserService } from './admin-user.service';
import { CurrentAdmin, type CurrentAdminPayload } from '../auth/decorators/current-user.decorator';
import { RequireRoles } from '../auth/decorators/roles.decorator';
import { RequirePermission } from '../permissions/decorators/require-permission.decorator';
import { AdminRole, AdminCreateUserDto, AdminUserActionDto } from '@bet62/shared';

@ApiTags('Admin Users')
@Controller('users')
@ApiBearerAuth()
export class AdminUserController {
  constructor(private readonly adminUserService: AdminUserService) {}

  @Post()
  @RequireRoles(AdminRole.SUPER_ADMIN, AdminRole.OPERATOR, AdminRole.SUPPORT_MANAGER)
  @RequirePermission('admin.users.create')
  @ApiOperation({ summary: 'Criar novo admin' })
  create(
    @Body() dto: AdminCreateUserDto,
    @CurrentAdmin() user: CurrentAdminPayload,
  ) {
    return this.adminUserService.create(dto, user.adminUserId);
  }

  @Get()
  @RequirePermission('admin.users.read')
  @ApiOperation({ summary: 'Listar admins com filtros' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  list(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('role') role?: AdminRole,
    @Query('disabled') disabled?: string,
    @Query('search') search?: string,
  ) {
    return this.adminUserService.list({
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
      role,
      disabled: disabled === undefined ? undefined : disabled === 'true',
      search,
    });
  }

  @Get(':id')
  @RequirePermission('admin.users.read')
  @ApiOperation({ summary: 'Obter admin por id' })
  get(@Param('id') id: string) {
    return this.adminUserService.get(id);
  }

  @Put(':id/role')
  @RequireRoles(AdminRole.SUPER_ADMIN)
  @RequirePermission('admin.users.update.role')
  @ApiOperation({ summary: 'Atualizar role do admin' })
  updateRole(
    @Param('id') id: string,
    @Body('role') role: AdminRole,
    @CurrentAdmin() user: CurrentAdminPayload,
  ) {
    return this.adminUserService.updateRole(id, role, user.adminUserId);
  }

  @Post(':id/disable')
  @RequireRoles(AdminRole.SUPER_ADMIN, AdminRole.SUPPORT_MANAGER)
  @RequirePermission('admin.users.disable')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Desativar admin' })
  disable(
    @Param('id') id: string,
    @Body() dto: AdminUserActionDto,
    @CurrentAdmin() user: CurrentAdminPayload,
  ) {
    return this.adminUserService.disable(id, dto, user.adminUserId);
  }

  @Post(':id/enable')
  @RequireRoles(AdminRole.SUPER_ADMIN, AdminRole.SUPPORT_MANAGER)
  @RequirePermission('admin.users.disable')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reativar admin' })
  enable(
    @Param('id') id: string,
    @CurrentAdmin() user: CurrentAdminPayload,
  ) {
    return this.adminUserService.enable(id, user.adminUserId);
  }

  @Post(':id/reset-password')
  @RequireRoles(AdminRole.SUPER_ADMIN)
  @RequirePermission('admin.users.resetPassword')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Resetar senha do admin' })
  resetPassword(
    @Param('id') id: string,
    @Body('password') newPassword: string,
    @CurrentAdmin() user: CurrentAdminPayload,
  ) {
    return this.adminUserService.resetPassword(id, newPassword, user.adminUserId);
  }

  @Post(':id/force-2fa')
  @RequireRoles(AdminRole.SUPER_ADMIN)
  @RequirePermission('admin.users.force2fa')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Forçar troca de senha/2FA no próximo login' })
  forceTwoFactor(
    @Param('id') id: string,
    @CurrentAdmin() user: CurrentAdminPayload,
  ) {
    return this.adminUserService.forceTwoFactor(id, user.adminUserId);
  }

  @Delete(':id')
  @RequireRoles(AdminRole.SUPER_ADMIN)
  @RequirePermission('admin.users.delete')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Soft delete admin' })
  delete(
    @Param('id') id: string,
    @CurrentAdmin() user: CurrentAdminPayload,
  ) {
    return this.adminUserService.delete(id, user.adminUserId);
  }
}
