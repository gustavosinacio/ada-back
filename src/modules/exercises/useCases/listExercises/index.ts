import { ExercisesRepository } from '../../repositories/implementations/ExercisesRepository';
import { ListExercisesController } from './ListExercisesController';
import { ListExercisesUseCase } from './ListExercisesUseCase';

const exercisesRepository = ExercisesRepository.getInstance();
const listExercisesUseCase = new ListExercisesUseCase(exercisesRepository);
const listExercisesController = new ListExercisesController(
  listExercisesUseCase,
);

export { listExercisesController };
