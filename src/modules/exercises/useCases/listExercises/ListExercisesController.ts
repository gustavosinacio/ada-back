import { Request, Response } from 'express';
import { ListExercisesUseCase } from './ListExercisesUseCase';

class ListExercisesController {
  constructor(private listExercisesUseCase: ListExercisesUseCase) {}
  handle(request: Request, response: Response): Response {
    const allExercises = this.listExercisesUseCase.execute();

    return response.json(allExercises);
  }
}

export { ListExercisesController };
