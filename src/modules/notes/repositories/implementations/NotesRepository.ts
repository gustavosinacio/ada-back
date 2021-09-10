import { getRepository, Repository } from 'typeorm';

import { ICreateNoteDTO, INotesRepository } from '../INotesRepository';
import { Note } from '../../entities/Note';

class NotesRepository implements INotesRepository {
  private repository: Repository<Note>;

  constructor() {
    this.repository = getRepository(Note);
  }

  async create({ title, text }: ICreateNoteDTO): Promise<Note> {
    const note = this.repository.create({ title, text });

    await this.repository.save(note);

    return note;
  }

  async list(): Promise<Note[]> {
    const notes = await this.repository.find();
    return notes;
  }

  async findByTitle(title: string): Promise<Note[] | Note> {
    const notes = await this.repository.find({ title });
    return notes;
  }
}

export { NotesRepository };
