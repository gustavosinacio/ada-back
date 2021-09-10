import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSessionUseCase } from './CreateSessionUseCase';

class CreateSessionController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const createSessionUseCase = container.resolve(CreateSessionUseCase);

    const session = await createSessionUseCase.execute({ name });

    return res.status(201).json(session);
  }
}

export { CreateSessionController };
