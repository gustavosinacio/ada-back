import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSetsUseCase } from './ListSetsUseCase';

class ListSetsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listSetsUseCase = container.resolve(ListSetsUseCase);

    const allSets = await listSetsUseCase.execute();

    return res.json(allSets);
  }
}

export { ListSetsController };
