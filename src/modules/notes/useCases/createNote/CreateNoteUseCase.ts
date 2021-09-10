import { inject, injectable } from 'tsyringe';
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

  async execute({ title, text }: IRequest): Promise<void> {
    console.log('create note service');

    this.notesRepository.create({ title, text });
  }
}

export { CreateNoteUseCase };
