import { inject, injectable } from 'tsyringe';
import { Note } from '../../entities/Note';
import { INotesRepository } from '../../repositories/INotesRepository';

interface IRequest {
  title?: string;
  text: string;
}

@injectable()
class CreateNoteUseCase {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesRepository,
  ) {}

  async execute({ title, text }: IRequest): Promise<Note> {
    console.log('create note service');

    const note = await this.notesRepository.create({ title, text });

    return note;
  }
}

export { CreateNoteUseCase };
