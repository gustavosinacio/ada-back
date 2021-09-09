import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListExercisesUseCase } from './ListExercisesUseCase';

class ListExercisesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listExercisesUseCase = container.resolve(ListExercisesUseCase);

    const allExercises = await listExercisesUseCase.execute();

    return response.json(allExercises);
  }
}

export { ListExercisesController };
