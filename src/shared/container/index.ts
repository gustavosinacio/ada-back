import { container } from 'tsyringe';

import { IExercisesRepository } from '../../modules/exercises/repositories/IExercisesRepository';
import { ExercisesRepository } from '../../modules/exercises/repositories/implementations/ExercisesRepository';
import { ISetsRepository } from '../../modules/exercises/repositories/ISetsRepository';
import { SetsRepository } from '../../modules/exercises/repositories/implementations/SetsRepository';
import { ISessionsRepository } from '../../modules/sessions/repositories/ISessionsRepository';
import { SessionsRepository } from '../../modules/sessions/repositories/implementations/SessionsRepository';
import { INotesRepository } from '../../modules/notes/repositories/INotesRepository';
import { NotesRepository } from '../../modules/notes/repositories/implementations/NotesRepository';

// IExerciseRepository
container.registerSingleton<IExercisesRepository>(
  'ExercisesRepository',
  ExercisesRepository,
);

container.registerSingleton<ISetsRepository>('SetsRepository', SetsRepository);

container.registerSingleton<ISessionsRepository>(
  'SessionsRepository',
  SessionsRepository,
);

container.registerSingleton<INotesRepository>(
  'NotesRepository',
  NotesRepository,
);

/**
 *  convert to tsyringe injectable:
 * - register singleton here if not registered already
 * - remove constructor on controller
 * - call container.resolve on controller
 * - add @inject and @injectable on useCase
 * - change requests on router
 * - remove old useCase index that runs old way to instanciate controller
 */
