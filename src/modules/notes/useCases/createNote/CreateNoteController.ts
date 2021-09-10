import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateNoteUseCase } from './CreateNoteUseCase';

class CreateNoteController {
  handle(req: Request, res: Response): Response {
    const { title, text } = req.body;

    const createNoteUseCase = container.resolve(CreateNoteUseCase);

    createNoteUseCase.execute({ title, text });

    return res
      .status(201)
      .json({ message: 'Note created successfully' })
      .send();
  }
}

export { CreateNoteController };
