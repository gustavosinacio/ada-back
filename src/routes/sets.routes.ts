import { Router } from 'express';
import multer from 'multer';

// import { SetsRepository } from '../modules/exercises/repositories/SetsRepository';
import { createSetController } from '../modules/exercises/useCases/createSet';
import { listSetsController } from '../modules/exercises/useCases/listSets';
import { importSetsController } from '../modules/exercises/useCases/importSets';
import { listSetsByDateController } from '../modules/exercises/useCases/listSetsByDate';

const setsRoutes = Router();
const upload = multer({
  dest: './tmp',
});

setsRoutes.get('/', (req, res) => {
  return listSetsController.handle(req, res);
});

setsRoutes.post('/', (req, res) => {
  return createSetController.handle(req, res);
});

setsRoutes.post('/import', upload.single('file'), (request, response) => {
  return importSetsController.handle(request, response);
});

setsRoutes.get('/bydate', (request, response) => {
  return listSetsByDateController.handle(request, response);
});

export { setsRoutes };
