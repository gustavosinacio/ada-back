import { Request, Response } from 'express';
import { ListSetsUseCase } from './ListSetsUseCase';

class ListSetsController {
  constructor(private listSetsUseCase: ListSetsUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const allSets = await this.listSetsUseCase.execute();

    return res.json(allSets);
  }
}

export { ListSetsController };
