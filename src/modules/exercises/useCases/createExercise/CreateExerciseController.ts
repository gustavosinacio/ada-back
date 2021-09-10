import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateExerciseUseCase } from './CreateExerciseUseCase';

class CreateExerciseController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description, instructions } = req.body;

    const createExerciseUseCase = container.resolve(CreateExerciseUseCase);

    const exercise = await createExerciseUseCase.execute({
      name,
      description,
      instructions,
    });

    return res.status(201).json(exercise);
  }
}

export { CreateExerciseController };
