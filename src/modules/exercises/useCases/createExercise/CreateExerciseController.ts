import { Request, Response } from 'express';
import { CreateExerciseUseCase } from './CreateExerciseUseCase';

class CreateExerciseController {
  constructor(private createExerciseUseCase: CreateExerciseUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description, instructions } = req.body;

    this.createExerciseUseCase.execute({ name, description, instructions });

    return res.status(201).send();
  }
}

export { CreateExerciseController };
