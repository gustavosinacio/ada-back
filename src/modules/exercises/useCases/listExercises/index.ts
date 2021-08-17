import { ExercisesRepository } from '../../repositories/implementations/ExercisesRepository';
import { ListExercisesController } from './ListExercisesController';
import { ListExercisesUseCase } from './ListExercisesUseCase';

export default (): ListExercisesController => {
  const exercisesRepository = new ExercisesRepository();
  const listExercisesUseCase = new ListExercisesUseCase(exercisesRepository);
  const listExercisesController = new ListExercisesController(
    listExercisesUseCase,
  );

  return listExercisesController;
};
