import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import pinoHttp from 'pino-http';
import { logger } from './lib/logger';
import { CONFIG } from './lib/config';
import { errorHandler } from './middlewares/errorHandler';
import healthRouter from './routes/health';
import apiRouter from './routes/index';

export function createApp() {
  const app = express();

  if (CONFIG.isProduction) {
    app.set('trust proxy', 1);
  }

  // Rotas de webhook que precisam do corpo raw (Stripe, Didit, ...) sao
  // montadas AQUI, antes do express.json(), nas fases que as introduzirem —
  // cada uma com seu proprio express.raw({ type: 'application/json' }).

  app.use(
    pinoHttp({
      logger,
      serializers: {
        req: (req) => ({ method: req.method, url: req.url }),
        res: (res) => ({ statusCode: res.statusCode }),
      },
    }),
  );

  // CORS so e necessario quando o frontend roda em origem diferente (dev, ou
  // producao caso o api-gateway seja retirado); em producao com gateway na
  // frente, tudo e same-origin.
  if (!CONFIG.isProduction) {
    app.use(cors({ origin: true, credentials: true }));
  } else if (CONFIG.corsOrigins.length > 0) {
    app.use(cors({ origin: CONFIG.corsOrigins, credentials: true }));
  }

  app.use(cookieParser());
  app.use(express.json({ limit: '15mb' }));
  app.use(express.urlencoded({ extended: true, limit: '15mb' }));

  app.use(healthRouter);
  app.use('/api', apiRouter);

  app.use(errorHandler);

  return app;
}
