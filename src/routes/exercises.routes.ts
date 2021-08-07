import { Router } from 'express';
import { listExercisesController } from '../modules/exercises/useCases/listExercises';
import { createExercisesController } from '../modules/exercises/useCases/createExercise';

const exercisesRoutes = Router();

exercisesRoutes.post('/', (req, res) => {
  return createExercisesController.handle(req, res);
});

exercisesRoutes.get('/', (req, res) => {
  return listExercisesController.handle(req, res);
});

export { exercisesRoutes };
