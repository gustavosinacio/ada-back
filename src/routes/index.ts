import { Router } from 'express';

import { exercisesRoutes } from './exercises.routes';
import { setsRoutes } from './sets.routes';

const router = Router();

router.use('/sets', setsRoutes);
router.use('/exercises', exercisesRoutes);

export { router };
