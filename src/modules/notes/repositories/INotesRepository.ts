import { Note } from '../entities/Note';

interface ICreateNoteDTO {
  title?: string;
  text?: string;
}

interface INotesRepository {
  create({ title, text }: ICreateNoteDTO): Promise<Note>;
  list(): Promise<Note[]>;
}

export { ICreateNoteDTO, INotesRepository };
