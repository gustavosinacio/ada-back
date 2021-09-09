import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSessionUseCase } from './CreateSessionUseCase';

class CreateSessionController {
  handle(req: Request, res: Response): Response {
    const { name } = req.body;

    const createSessionUseCase = container.resolve(CreateSessionUseCase);

    createSessionUseCase.execute({ name });

    return res
      .status(201)
      .json({ message: 'Session created successfully' })
      .send();
  }
}

export { CreateSessionController };
