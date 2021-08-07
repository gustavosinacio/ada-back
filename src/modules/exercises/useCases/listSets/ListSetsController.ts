import { Request, Response } from 'express';
import { ListSetsUseCase } from './ListSetsUseCase';

class ListSetsController {
  constructor(private listSetsUseCase: ListSetsUseCase) {}
  handle(req: Request, res: Response): Response {
    const allSets = this.listSetsUseCase.execute();

    return res.json(allSets);
  }
}

export { ListSetsController };
