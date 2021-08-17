import { Router } from 'express';

import listExercisesController from '../modules/exercises/useCases/listExercises';
import createExercisesController from '../modules/exercises/useCases/createExercise';

const exercisesRoutes = Router();

exercisesRoutes.post('/', (request, response) => {
  return createExercisesController().handle(request, response);
});

exercisesRoutes.get('/', (request, response) => {
  return listExercisesController().handle(request, response);
});

export { exercisesRoutes };
