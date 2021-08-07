import { ExercisesRepository } from '../../repositories/implementations/ExercisesRepository';
import { CreateExerciseController } from './CreateExerciseController';
import { CreateExerciseUseCase } from './CreateExerciseUseCase';

const exercisesRepository = ExercisesRepository.getInstance();
const createExerciseUseCase = new CreateExerciseUseCase(exercisesRepository);
const createExercisesController = new CreateExerciseController(
  createExerciseUseCase,
);

export { createExercisesController };
