import { Request, Response } from 'express';
import { CreateExerciseUseCase } from './CreateExerciseUseCase';

class CreateExerciseController {
  constructor(private createExerciseUseCase: CreateExerciseUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description, instructions } = req.body;

    await this.createExerciseUseCase.execute({
      name,
      description,
      instructions,
    });

    return res.status(201).send();
  }
}

export { CreateExerciseController };
