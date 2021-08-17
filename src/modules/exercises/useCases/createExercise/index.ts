import { ExercisesRepository } from '../../repositories/implementations/ExercisesRepository';
import { CreateExerciseController } from './CreateExerciseController';
import { CreateExerciseUseCase } from './CreateExerciseUseCase';

export default (): CreateExerciseController => {
  const exercisesRepository = new ExercisesRepository();
  const createExerciseUseCase = new CreateExerciseUseCase(exercisesRepository);
  const createExercisesController = new CreateExerciseController(
    createExerciseUseCase,
  );

  return createExercisesController;
};
