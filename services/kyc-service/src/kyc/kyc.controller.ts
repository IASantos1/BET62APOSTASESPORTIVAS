import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  Headers,
  HttpCode,
  HttpStatus,
  BadRequestException,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { Request as ExpressRequest, Response } from 'express';
import { KYCService } from './kyc.service';
import {
  GenerateKycSdkTokenDto,
  KYCLevel,
} from '@bet62/shared';

@ApiTags('kyc')
@Controller()
export class KYCController {
  constructor(private readonly kycService: KYCService) {}

  @Get('status')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Retorna status KYC do usuário autenticado' })
  async getStatus(@Request() req: { user: { sub: string } }) {
    return this.kycService.getStatus(req.user.sub);
  }

  @Post('init-level1')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Inicia verificação KYC nível 1' })
  async initLevel1(
    @Request() req: { user: { sub: string } },
    @Body() body: { callbackUrl?: string; applicantData?: Record<string, unknown> },
  ) {
    return this.kycService.initLevel1(req.user.sub, body.callbackUrl, body.applicantData);
  }

  @Post('init-level2')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Inicia verificação KYC nível 2' })
  async initLevel2(
    @Request() req: { user: { sub: string } },
    @Body() body: { callbackUrl?: string; applicantData?: Record<string, unknown> },
  ) {
    return this.kycService.initLevel2(req.user.sub, body.callbackUrl, body.applicantData);
  }

  @Get('sdk-token')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Gera token do SDK Sumsub para o frontend' })
  async getSdkToken(
    @Request() req: { user: { sub: string } },
    @Body() body?: GenerateKycSdkTokenDto,
  ): Promise<any> {
    const targetLevel = (body?.targetLevel as KYCLevel) ?? KYCLevel.L1;
    return this.kycService.generateSDKToken(req.user.sub, targetLevel);
  }

  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  @ApiHeader({ name: 'x-sumsub-signature', required: true })
  @ApiOperation({ summary: 'Webhook do provedor KYC (Sumsub)' })
  async handleWebhook(
    @Req() req: ExpressRequest,
    @Res() res: Response,
    @Headers('x-sumsub-signature') signature?: string,
  ) {
    const rawBody = (req as unknown as { rawBody?: Buffer }).rawBody ??
      (req.body instanceof Buffer
        ? req.body
        : Buffer.from(JSON.stringify(req.body ?? {})));

    if (!signature) {
      throw new UnauthorizedException('Missing signature header');
    }

    const signatureValid = this.kycService.validateWebhookHMAC(rawBody, signature);
    if (!signatureValid) {
      throw new UnauthorizedException('Invalid HMAC signature');
    }

    let payload: Record<string, unknown>;
    try {
      payload = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body as Record<string, unknown>);
    } catch {
      throw new BadRequestException('Invalid JSON payload');
    }

    const provider = 'SUMSUB';
    const eventType = (payload.type as string) ?? 'UNKNOWN';

    const result = await this.kycService.updateStatusViaWebhook(
      provider,
      eventType,
      req.headers as unknown as Record<string, string>,
      payload as unknown as Parameters<KYCService['updateStatusViaWebhook']>[3],
      rawBody,
      signatureValid,
    );

    res.status(result.processed ? HttpStatus.OK : HttpStatus.ACCEPTED).json({
      received: true,
      ...result,
    });
  }
}
