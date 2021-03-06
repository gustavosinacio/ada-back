import { Router } from 'express';

import { exercisesRoutes } from './exercises.routes';
import { notesRoutes } from './notes.routes';
import { sessionsRoutes } from './sessions.routes';
import { setsRoutes } from './sets.routes';
import { usersRoutes } from './user.routes';

const router = Router();

router.use('/sets', setsRoutes);
router.use('/exercises', exercisesRoutes);
router.use('/sessions', sessionsRoutes);
router.use('/notes', notesRoutes);
router.use('/users', usersRoutes);

export { router };
