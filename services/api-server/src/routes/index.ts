import { Router } from 'express';

const router = Router();

// Agregador de rotas por dominio. Populado incrementalmente:
//   router.use('/auth', authRouter);
//   router.use('/wallet', walletRouter);
//   ... etc, na mesma ordem do plano de migracao.

export default router;
