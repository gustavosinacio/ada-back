import { SetsRepository } from '../../repositories/implementations/SetsRepository';
import { ImportSetsController } from './ImportSetsController';
import { ImportSetsUseCase } from './ImportSetsUseCase';

const setsRepository = SetsRepository.getInstance();
const importSetsUseCase = new ImportSetsUseCase(setsRepository);
const importSetsController = new ImportSetsController(importSetsUseCase);

export { importSetsController };
