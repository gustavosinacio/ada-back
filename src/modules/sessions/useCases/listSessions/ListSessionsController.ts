import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSessionsUseCase } from './ListSessionsUseCase';

class ListSessionsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listSessionsUseCase = container.resolve(ListSessionsUseCase);

    const allSessions = await listSessionsUseCase.execute();

    return res.json(allSessions);
  }
}

export { ListSessionsController };
