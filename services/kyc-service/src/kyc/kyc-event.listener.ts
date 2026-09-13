import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { KYCService } from './kyc.service';
import {
  BET62_EVENTS,
  BET62_STREAMS,
  Bet62EventEnvelope,
  UserCreatedPayload,
  KYCLevel,
  KYCStatus,
  createEnvelope,
  KycLevelUpdatedPayload,
  KYC_LEVEL_LIMITS,
} from '@bet62/shared';

@Injectable()
export class KYCEventListener {
  private readonly logger = new Logger(KYCEventListener.name);

  constructor(
    private readonly kycService: KYCService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @OnEvent(BET62_EVENTS.AUTH.USER_CREATED)
  async handleUserCreated(event: Bet62EventEnvelope<UserCreatedPayload>) {
    const { userId } = event.payload;
    this.logger.log(`USER_CREATED received: creating UserKYC L0 for user=${userId}`);
    const userKyc = await this.kycService.createUserKycIfNotExists(userId);

    const policy = KYC_LEVEL_LIMITS[KYCLevel.L0];
    const payload: KycLevelUpdatedPayload = {
      userId,
      oldLevel: KYCLevel.L0,
      newLevel: userKyc.level,
      status: KYCStatus.NOT_STARTED,
      timestamp: new Date().toISOString(),
      limitsApplied: {
        depositDaily: policy.depositDaily,
        depositWeekly: policy.depositWeekly,
        depositMonthly: policy.depositMonthly,
        withdrawalDaily: policy.withdrawalDaily,
        withdrawalMonthly: policy.withdrawalMonthly,
        stakeMax: policy.stakePerBetMax,
      },
    };
    const envelope = createEnvelope({
      event: BET62_EVENTS.KYC.LEVEL_UPDATED,
      aggregateType: 'KYC',
      aggregateId: userId,
      payload,
      correlationId: event.correlationId,
      causationId: event.id,
      producer: 'kyc-service',
    });
    this.eventEmitter.emit(`${BET62_STREAMS.KYC}:emit`, envelope);
    this.eventEmitter.emit(BET62_EVENTS.KYC.LEVEL_UPDATED, envelope);
    this.logger.debug(`KYC L0 record created for user=${userId}`);
  }
}
