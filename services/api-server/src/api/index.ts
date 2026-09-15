// @bet62/shared inclui DTOs com decorators do class-validator, que dependem
// do polyfill global do reflect-metadata (mesma convencao usada em todos os
// servicos NestJS do monorepo).
import 'reflect-metadata';
import { createServer } from 'node:http';
import { createApp } from '../app';
import { logger } from '../lib/logger';
import { CONFIG } from '../lib/config';

// Conexoes de longa duracao (SSE, jobs em background nas proximas fases) nao
// podem cair por causa de uma promise rejeitada perdida em algum lugar —
// nunca derrubamos o processo por isso, so logamos.
process.on('unhandledRejection', (reason) => {
  logger.error({ reason }, 'Unhandled promise rejection');
});
process.on('uncaughtException', (err) => {
  logger.error({ err }, 'Uncaught exception');
});

const app = createApp();
const server = createServer(app);

server.listen(CONFIG.port, '0.0.0.0', () => {
  logger.info(`api-server listening on port ${CONFIG.port} (${CONFIG.nodeEnv})`);

  // Workers/crons em background (BullMQ, AML rescreen, etc.) sao iniciados
  // AQUI, depois do server.listen, nas fases que os introduzirem.
});
