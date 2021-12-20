import { Router } from 'express';
import { CreateNoteController } from '../modules/notes/useCases/createNote/CreateNoteController';
import { ListNotesController } from '../modules/notes/useCases/listNotes/ListNotesController';

const notesRoutes = Router();

const createNoteController = new CreateNoteController();
const listNotesController = new ListNotesController();

notesRoutes.post('/', createNoteController.handle);
notesRoutes.get('/', listNotesController.handle);

export { notesRoutes };
