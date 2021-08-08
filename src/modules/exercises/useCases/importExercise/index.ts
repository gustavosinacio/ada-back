import { ImportExerciseController } from './ImportExerciseController';
import { ImportExerciseUseCase } from './ImportExerciseUseCase';

const importExerciseUseCase = new ImportExerciseUseCase();
const importExerciseController = new ImportExerciseController(
  importExerciseUseCase,
);

export { importExerciseController };
