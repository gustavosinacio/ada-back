import { Router } from 'express';
import multer from 'multer';

import { listExercisesController } from '../modules/exercises/useCases/listExercises';
import { createExercisesController } from '../modules/exercises/useCases/createExercise';
import { importExerciseController } from '../modules/exercises/useCases/importExercise';

const exercisesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

exercisesRoutes.post('/', (request, response) => {
  return createExercisesController.handle(request, response);
});

exercisesRoutes.get('/', (request, response) => {
  return listExercisesController.handle(request, response);
});

exercisesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importExerciseController.handle(request, response);
});

export { exercisesRoutes };
