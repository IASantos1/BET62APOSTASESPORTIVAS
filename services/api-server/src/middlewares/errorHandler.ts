import type { Request, Response, NextFunction } from 'express';
import { logger } from '../lib/logger';

export class HttpError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

// Middleware central de erro — o Bet62Novo de referencia nao tem um (usa
// try/catch manual por rota), o que deixamos como melhoria deliberada aqui:
// toda rota pode simplesmente `next(err)` e ter uma resposta JSON consistente.
export function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction): void {
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.message });
    return;
  }

  logger.error({ err, path: req.path, method: req.method }, 'Unhandled error');
  res.status(500).json({ error: 'Internal server error' });
}
