import { Router } from 'express';

import { exercisesRoutes } from './exercises.routes';
import { sessionsRoutes } from './sessions.routes';
import { setsRoutes } from './sets.routes';

const router = Router();

router.use('/sets', setsRoutes);
router.use('/exercises', exercisesRoutes);
router.use('/sessions', sessionsRoutes);

export { router };
