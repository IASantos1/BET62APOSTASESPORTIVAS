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
  CreateKycSessionDto,
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
  @ApiOperation({ summary: 'Cria sessão de verificação hospedada no Didit para o nível 1' })
  async initLevel1(
    @Request() req: { user: { sub: string } },
    @Body() body?: CreateKycSessionDto,
  ) {
    return this.kycService.createVerificationSession(req.user.sub, KYCLevel.L1, body?.callbackUrl);
  }

  @Post('init-level2')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cria sessão de verificação hospedada no Didit para o nível 2' })
  async initLevel2(
    @Request() req: { user: { sub: string } },
    @Body() body?: CreateKycSessionDto,
  ) {
    return this.kycService.createVerificationSession(req.user.sub, KYCLevel.L2, body?.callbackUrl);
  }

  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  @ApiHeader({ name: 'x-signature-v2', required: true })
  @ApiOperation({ summary: 'Webhook do provedor KYC (Didit)' })
  async handleWebhook(
    @Req() req: ExpressRequest,
    @Res() res: Response,
    @Headers('x-signature-v2') signature?: string,
  ) {
    const rawBody = (req as unknown as { rawBody?: Buffer }).rawBody;

    if (!rawBody) {
      throw new BadRequestException('Raw body not captured; check bootstrap rawBody config');
    }
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

    const provider = 'DIDIT';
    const eventType = (payload.event as string) ?? 'UNKNOWN';

    const result = await this.kycService.updateStatusViaWebhook(
      provider,
      eventType,
      req.headers as unknown as Record<string, string>,
      payload as unknown as Parameters<KYCService['updateStatusViaWebhook']>[3],
      signatureValid,
    );

    res.status(result.processed ? HttpStatus.OK : HttpStatus.ACCEPTED).json({
      received: true,
      ...result,
    });
  }
}
