import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'api-server',
    timestamp: new Date().toISOString(),
  });
});

export default router;
