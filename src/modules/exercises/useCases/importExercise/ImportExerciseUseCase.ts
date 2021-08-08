import { Multer } from 'multer';

class ImportExerciseUseCase {
  constructor() {}

  execute(file: Multer.File): void {
    console.log(file);
  }
}

export { ImportExerciseUseCase };
