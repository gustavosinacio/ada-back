import { Router } from 'express';
import multer from 'multer';

import { CreateSetController } from '../modules/exercises/useCases/createSet/CreateSetController';
import { ListSetsController } from '../modules/exercises/useCases/listSets/ListSetsController';
import { ImportSetsController } from '../modules/exercises/useCases/importSets/ImportSetsController';
// import { listSetsByDateController } from '../modules/exercises/useCases/listSetsByDate';

const setsRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const importSetsController = new ImportSetsController();
const listSetsController = new ListSetsController();
const createSetController = new CreateSetController();

setsRoutes.get('/', listSetsController.handle);

setsRoutes.post('/', createSetController.handle);

setsRoutes.post('/import', upload.single('file'), importSetsController.handle);

// setsRoutes.get('/bydate', (request, response) => {
//   return listSetsByDateController().handle(request, response);
// });

export { setsRoutes };
