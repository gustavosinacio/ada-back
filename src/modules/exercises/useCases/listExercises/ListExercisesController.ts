import { Request, Response } from 'express';
import { ListExercisesUseCase } from './ListExercisesUseCase';

class ListExercisesController {
  constructor(private listExercisesUseCase: ListExercisesUseCase) {}
  handle(req: Request, res: Response): Response {
    const allExercises = this.listExercisesUseCase.execute();

    return res.json(allExercises);
  }
}

export { ListExercisesController };
