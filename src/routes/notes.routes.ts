import { Router } from 'express';
import { CreateNoteController } from '../modules/notes/useCases/createNote/CreateNoteController';

const notesRoutes = Router();

const createNoteController = new CreateNoteController();

notesRoutes.post('/', createNoteController.handle);

export { notesRoutes };
