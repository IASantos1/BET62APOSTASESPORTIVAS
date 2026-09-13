import { Module, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaSeedService } from './prisma-seed.service';

@Module({
  providers: [PrismaService, PrismaSeedService],
  exports: [PrismaService, PrismaSeedService],
})
export class PrismaModule implements OnModuleInit {
  constructor(private readonly prismaSeedService: PrismaSeedService) {}

  async onModuleInit() {
    await this.prismaSeedService.ensureDefaultAdmin();
  }
}
