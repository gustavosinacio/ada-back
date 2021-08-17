import { Request, Response } from 'express';
import { ListExercisesUseCase } from './ListExercisesUseCase';

class ListExercisesController {
  constructor(private listExercisesUseCase: ListExercisesUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const allExercises = await this.listExercisesUseCase.execute();

    return response.json(allExercises);
  }
}

export { ListExercisesController };
