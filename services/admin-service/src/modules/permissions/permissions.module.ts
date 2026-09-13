import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsGuard } from './permissions.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [
    PermissionsService,
    PermissionsGuard,
    {
      provide: APP_GUARD,
      useExisting: PermissionsGuard,
    },
  ],
  exports: [PermissionsService, PermissionsGuard],
})
export class PermissionsModule {}
