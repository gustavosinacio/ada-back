import { inject, injectable } from 'tsyringe';
import { Note } from '../../entities/Note';
import { INotesRepository } from '../../repositories/INotesRepository';

@injectable()
class ListNotesUseCase {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesRepository,
  ) {}

  execute(): Promise<Note[]> {
    return this.notesRepository.list();
  }
}

export { ListNotesUseCase };
