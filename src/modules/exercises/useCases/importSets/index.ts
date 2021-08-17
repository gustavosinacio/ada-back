import { SetsRepository } from '../../repositories/implementations/SetsRepository';
import { ImportSetsController } from './ImportSetsController';
import { ImportSetsUseCase } from './ImportSetsUseCase';

export default (): ImportSetsController => {
  const setsRepository = new SetsRepository();
  const importSetsUseCase = new ImportSetsUseCase(setsRepository);
  const importSetsController = new ImportSetsController(importSetsUseCase);

  return importSetsController;
};
