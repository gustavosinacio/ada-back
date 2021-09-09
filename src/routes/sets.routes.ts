import { Router } from 'express';
import multer from 'multer';

// import { SetsRepository } from '../modules/exercises/repositories/SetsRepository';
import createSetController from '../modules/exercises/useCases/createSet';
import { ListSetsController } from '../modules/exercises/useCases/listSets/ListSetsController';
import { ImportSetsController } from '../modules/exercises/useCases/importSets/ImportSetsController';
// import { listSetsByDateController } from '../modules/exercises/useCases/listSetsByDate';

const setsRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const importSetsController = new ImportSetsController();
const listSetsController = new ListSetsController();

setsRoutes.get('/', listSetsController.handle);

setsRoutes.post('/', (req, res) => {
  return createSetController().handle(req, res);
});

setsRoutes.post('/import', upload.single('file'), importSetsController.handle);

// setsRoutes.get('/bydate', (request, response) => {
//   return listSetsByDateController().handle(request, response);
// });

export { setsRoutes };
