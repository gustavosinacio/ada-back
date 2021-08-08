import { Request, Response } from 'express';
import { ImportExerciseUseCase } from './ImportExerciseUseCase';

class ImportExerciseController {
  constructor(private importExerciseUseCase: ImportExerciseUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importExerciseUseCase.execute(file);

    return response.send();
  }
}

export { ImportExerciseController };
