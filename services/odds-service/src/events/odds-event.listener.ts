import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { BET62_EVENTS } from '@bet62/shared';
import type { AdminOddOverrideDto, AdminMarketStatusDto } from '@bet62/shared';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OddsEventListener {
  private readonly logger = new Logger(OddsEventListener.name);

  constructor(private readonly prisma: PrismaService) {}

  @OnEvent(BET62_EVENTS.ADMIN.ODD_OVERRIDDEN, { async: true })
  async handleAdminOddOverride(payload: AdminOddOverrideDto & { adminUserId?: string }) {
    this.logger.log(
      `[ADMIN.ODDS.OVERRIDE] Aplicando override na seleção ${payload.selectionId}: nova odd ${payload.newOdds}${payload.reason ? ` motivo: ${payload.reason}` : ''}`,
    );
    try {
      const selection = await this.prisma.marketSelection.findUnique({
        where: { id: payload.selectionId },
      });
      if (!selection) {
        this.logger.warn(`[ADMIN.ODDS.OVERRIDE] Seleção não encontrada: ${payload.selectionId}`);
        return;
      }
      await this.prisma.marketSelection.update({
        where: { id: payload.selectionId },
        data: {
          originalOdds: selection.odds,
          odds: payload.newOdds,
          lastChangedAt: new Date(),
          lastChangedBy: payload.adminUserId ?? 'admin-override',
          meta: {
            overrideReason: payload.reason,
            overriddenAt: new Date().toISOString(),
            overriddenBy: payload.adminUserId,
            expiresAt: payload.expiresAt?.toISOString(),
          },
        },
      });
    } catch (err) {
      this.logger.error(
        `[ADMIN.ODDS.OVERRIDE] Erro aplicar override`,
        err instanceof Error ? err.stack : String(err),
      );
    }
  }

  @OnEvent(BET62_EVENTS.ADMIN.MARKET_SUSPENDED_MANUAL, { async: true })
  async handleAdminMarketStatus(
    payload: AdminMarketStatusDto & { marketId: string; adminUserId?: string },
  ) {
    this.logger.log(
      `[ADMIN.MARKET.STATUS] Atualizando mercado ${payload.marketId} para status ${payload.status}`,
    );
    try {
      const market = await this.prisma.market.findUnique({ where: { id: payload.marketId } });
      if (!market) {
        this.logger.warn(`[ADMIN.MARKET.STATUS] Mercado não encontrado: ${payload.marketId}`);
        return;
      }
      const now = new Date();
      await this.prisma.market.update({
        where: { id: payload.marketId },
        data: {
          status: payload.status,
          lastSuspendedAt: payload.status === 'SUSPENDED' ? now : market.lastSuspendedAt,
          suspendedReason: payload.reason ?? market.suspendedReason,
        },
      });
      await this.prisma.marketSelection.updateMany({
        where: { marketId: payload.marketId },
        data: {
          status: payload.status,
          lastChangedAt: now,
          lastChangedBy: payload.adminUserId ?? 'admin-market-status',
        },
      });
    } catch (err) {
      this.logger.error(
        `[ADMIN.MARKET.STATUS] Erro ao atualizar status do mercado`,
        err instanceof Error ? err.stack : String(err),
      );
    }
  }
}
