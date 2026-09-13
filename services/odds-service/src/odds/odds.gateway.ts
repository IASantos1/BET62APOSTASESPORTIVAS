import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger, OnModuleInit, UsePipes, ValidationPipe } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { Interval, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { OddsService } from './odds.service';
import type { SportType } from '@bet62/shared';

interface LiveFilter {
  sports?: SportType[];
  leagueIds?: string[];
}

interface SubscriptionRecord {
  eventIds: Set<string>;
  liveFilters: LiveFilter[];
  client: Socket;
}

@WebSocketGateway({
  namespace: '/odds-ws',
  cors: {
    origin: process.env.CORS_ORIGIN?.split(',') ?? '*',
    credentials: true,
  },
  transports: ['websocket', 'polling'],
  path: '/socket.io',
})
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
export class OddsGateway implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {
  private readonly logger = new Logger(OddsGateway.name);

  @WebSocketServer()
  server!: Server;

  private readonly clients: Map<string, SubscriptionRecord> = new Map();

  constructor(
    private readonly oddsService: OddsService,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {}

  async onModuleInit() {
    try {
      const job = CronJob.from({
        cronTime: '*/5 * * * * *',
        onTick: () => this.broadcastLiveUpdates(),
        start: true,
      });
      this.schedulerRegistry.addCronJob('odds-ws-live-broadcast', job);
    } catch (e) {
      this.logger.debug('Cron job registration skipped (already exists or scheduler not ready)');
    }
  }

  handleConnection(client: Socket) {
    this.clients.set(client.id, {
      eventIds: new Set(),
      liveFilters: [],
      client,
    });
    this.logger.log(`[WS] Cliente conectado: ${client.id}. Total: ${this.clients.size}`);
    client.emit('connected', { clientId: client.id, serverTime: new Date().toISOString() });
  }

  handleDisconnect(client: Socket) {
    this.clients.delete(client.id);
    this.logger.log(`[WS] Cliente desconectado: ${client.id}. Total: ${this.clients.size}`);
  }

  @SubscribeMessage('subscribe:event')
  handleSubscribeEvent(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { eventId: string },
  ): { status: string; subscribed: boolean; eventId: string } {
    const rec = this.clients.get(client.id);
    if (!rec) return { status: 'error', subscribed: false, eventId: payload.eventId };
    rec.eventIds.add(payload.eventId);
    this.logger.debug(`[WS] Cliente ${client.id} inscreveu-se no evento ${payload.eventId}`);
    return { status: 'ok', subscribed: true, eventId: payload.eventId };
  }

  @SubscribeMessage('unsubscribe:event')
  handleUnsubscribeEvent(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { eventId: string },
  ): { status: string; unsubscribed: boolean; eventId: string } {
    const rec = this.clients.get(client.id);
    if (!rec) return { status: 'error', unsubscribed: false, eventId: payload.eventId };
    rec.eventIds.delete(payload.eventId);
    return { status: 'ok', unsubscribed: true, eventId: payload.eventId };
  }

  @SubscribeMessage('subscribe:live')
  handleSubscribeLive(
    @ConnectedSocket() client: Socket,
    @MessageBody() filter: LiveFilter = {},
  ): { status: string; subscribed: boolean; filter: LiveFilter } {
    const rec = this.clients.get(client.id);
    if (!rec) return { status: 'error', subscribed: false, filter };
    rec.liveFilters.push(filter);
    return { status: 'ok', subscribed: true, filter };
  }

  @SubscribeMessage('ping')
  handlePing(@ConnectedSocket() client: Socket): { pong: true; serverTime: string } {
    client.emit('pong', { serverTime: new Date().toISOString() });
    return { pong: true, serverTime: new Date().toISOString() };
  }

  @Interval('odds-ws-heartbeat', 15000)
  broadcastHeartbeat() {
    if (!this.server) return;
    this.server.emit('heartbeat', { serverTime: new Date().toISOString(), connectedClients: this.clients.size });
  }

  @Interval('odds-ws-live-tick', 5000)
  async broadcastLiveUpdates() {
    if (!this.server || this.clients.size === 0) return;
    try {
      const liveEvents = await this.oddsService.getLiveEvents({ limit: 500 });
      const snapshotMap = new Map<string, unknown>();
      for (const ev of liveEvents.events) {
        snapshotMap.set(ev.id, ev);
      }
      for (const [clientId, rec] of this.clients.entries()) {
        for (const eventId of rec.eventIds) {
          const snapshot = snapshotMap.get(eventId);
          if (snapshot) {
            rec.client.emit('event:update', { eventId, payload: snapshot, at: new Date().toISOString() });
          }
        }
        if (rec.liveFilters.length > 0) {
          for (const filter of rec.liveFilters) {
            const filtered = liveEvents.events.filter((e) => {
              if (filter.sports?.length && !filter.sports.includes(e.sportType as SportType)) return false;
              if (filter.leagueIds?.length && e.leagueId && !filter.leagueIds.includes(e.leagueId)) return false;
              return true;
            });
            rec.client.emit('live:batch', { events: filtered, at: new Date().toISOString(), filter });
          }
        }
      }
    } catch (err) {
      this.logger.warn('Falha ao broadcast live updates', err instanceof Error ? err.stack : String(err));
    }
  }
}
