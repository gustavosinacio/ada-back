import { container } from 'tsyringe';

import { IExercisesRepository } from '../../modules/exercises/repositories/IExercisesRepository';
import { ExercisesRepository } from '../../modules/exercises/repositories/implementations/ExercisesRepository';
import { ISetsRepository } from '../../modules/exercises/repositories/ISetsRepository';
import { SetsRepository } from '../../modules/exercises/repositories/implementations/SetsRepository';

// IExerciseRepository
container.registerSingleton<IExercisesRepository>(
  'ExercisesRepository',
  ExercisesRepository,
);

container.registerSingleton<ISetsRepository>('SetsRepository', SetsRepository);

/**
 *  convert to tsyringe injectable:
 * - register singleton here if not registered already
 * - remove constructor on controller
 * - call container.resolve on controller
 * - add @inject and @injectable on useCase
 * - change requests on router
 * - remove old useCase index that runs old way to instanciate controller
 */
