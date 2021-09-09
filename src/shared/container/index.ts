import { container } from 'tsyringe';

import { IExercisesRepository } from '../../modules/exercises/repositories/IExercisesRepository';
import { ExercisesRepository } from '../../modules/exercises/repositories/implementations/ExercisesRepository';

// IExerciseRepository
container.registerSingleton<IExercisesRepository>(
  'ExercisesRepository',
  ExercisesRepository,
);
