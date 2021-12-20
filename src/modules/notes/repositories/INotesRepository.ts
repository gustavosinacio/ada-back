import { Note } from '../entities/Note';

interface ICreateNoteDTO {
  title?: string;
  text?: string;
  order?: number;
}

interface INotesRepository {
  create({ title, text, order }: ICreateNoteDTO): Promise<Note>;
  list(): Promise<Note[]>;
}

export { ICreateNoteDTO, INotesRepository };
