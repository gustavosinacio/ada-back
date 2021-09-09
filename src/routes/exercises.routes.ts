import { Router } from 'express';

import listExercisesController from '../modules/exercises/useCases/listExercises';
import { CreateExerciseController } from '../modules/exercises/useCases/createExercise/CreateExerciseController';

const exercisesRoutes = Router();

const createExercisesController = new CreateExerciseController();

exercisesRoutes.post('/', createExercisesController.handle);

exercisesRoutes.get('/', (request, response) => {
  return listExercisesController().handle(request, response);
});

export { exercisesRoutes };
