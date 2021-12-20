import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListNotesUseCase } from './ListNotesUseCase';

class ListNotesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listNotesUseCase = container.resolve(ListNotesUseCase);

    const allNotes = await listNotesUseCase.execute();

    return res.json(allNotes);
  }
}

export { ListNotesController };
