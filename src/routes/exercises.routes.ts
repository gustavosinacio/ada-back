import 'reflect-metadata';
import { Router } from 'express';

import { ListExercisesController } from '../modules/exercises/useCases/listExercises/ListExercisesController';
import { CreateExerciseController } from '../modules/exercises/useCases/createExercise/CreateExerciseController';

const exercisesRoutes = Router();

const createExercisesController = new CreateExerciseController();
const listExercisesController = new ListExercisesController();

exercisesRoutes.post('/', createExercisesController.handle);

exercisesRoutes.get('/', listExercisesController.handle);

export { exercisesRoutes };
