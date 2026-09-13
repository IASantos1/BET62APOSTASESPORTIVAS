import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { NotificationStatus } from '@bet62/shared';

export interface SendEmailInput {
  toEmail: string;
  subject: string;
  textBody?: string;
  htmlBody?: string;
  fromName?: string;
  replyTo?: string;
  templateVars?: Record<string, unknown>;
  attachmentUrls?: string[];
  correlationId?: string;
}

@Injectable()
export class EmailProvider {
  private readonly logger = new Logger(EmailProvider.name);

  constructor(private readonly prisma: PrismaService) {}

  async queue(input: SendEmailInput) {
    const record = await this.prisma.emailQueue.create({
      data: {
        toEmail: input.toEmail,
        fromName: input.fromName,
        replyTo: input.replyTo,
        subject: input.subject,
        textBody: input.textBody,
        htmlBody: input.htmlBody,
        templateVars: input.templateVars,
        attachmentUrls: input.attachmentUrls ?? [],
        status: NotificationStatus.QUEUED,
      },
    });
    return { queued: true, id: record.id };
  }

  async deliver(queueId: string) {
    const record = await this.prisma.emailQueue.findUnique({ where: { id: queueId } });
    if (!record) return { success: false, error: 'NOT_FOUND' };

    try {
      this.logger.log(
        `[MOCK EMAIL] Sending to=${record.toEmail} subject="${record.subject}" attachments=${record.attachmentUrls.length}`,
      );
      this.logger.debug(`[MOCK EMAIL] textBody=${JSON.stringify(record.textBody?.slice(0, 200))}`);
      await this.prisma.emailQueue.update({
        where: { id: queueId },
        data: {
          status: NotificationStatus.SENT,
          sentAt: new Date(),
          attempts: { increment: 1 },
        },
      });
      return { success: true, providerMessageId: `mock-email-${queueId}` };
    } catch (err) {
      const error = (err as Error).message;
      await this.prisma.emailQueue.update({
        where: { id: queueId },
        data: {
          status: NotificationStatus.FAILED,
          attempts: { increment: 1 },
          lastError: error,
        },
      });
      return { success: false, error };
    }
  }
}
