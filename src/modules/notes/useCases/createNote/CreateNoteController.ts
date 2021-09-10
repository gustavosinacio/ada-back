import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateNoteUseCase } from './CreateNoteUseCase';

class CreateNoteController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, text } = req.body;

    const createNoteUseCase = container.resolve(CreateNoteUseCase);

    const note = await createNoteUseCase.execute({ title, text });

    return res.status(201).json(note);
  }
}

export { CreateNoteController };
