import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { BET62_EVENTS } from '@bet62/shared';
import type { UserCreatedPayload, Bet62EventEnvelope } from '@bet62/shared';

@Injectable()
export class AuthEventListener {
  private readonly logger = new Logger(AuthEventListener.name);

  @OnEvent(BET62_EVENTS.AUTH.USER_CREATED, { async: true })
  async handleUserCreated(
    payload: UserCreatedPayload,
    envelope?: Bet62EventEnvelope<UserCreatedPayload>,
  ) {
    this.logger.log(
      `[UserCreatedListener] Usuário criado: ${payload.email} (userId=${payload.userId})` +
        (envelope ? ` | envelopeId=${envelope.id}` : ''),
    );
  }

  @OnEvent(BET62_EVENTS.AUTH.USER_EMAIL_VERIFIED, { async: true })
  async handleEmailVerified(
    payload: { userId: string; verifiedAt: string },
  ) {
    this.logger.log(
      `[EmailVerifiedListener] E-mail verificado: userId=${payload.userId} em ${payload.verifiedAt}`,
    );
  }
}
