import { SetsRepository } from '../../repositories/implementations/SetsRepository';
import { ListSetsController } from './ListSetsController';
import { ListSetsUseCase } from './ListSetsUseCase';

const setsRepository = SetsRepository.getInstance();
const listSetsUseCase = new ListSetsUseCase(setsRepository);
const listSetsController = new ListSetsController(listSetsUseCase);

export { listSetsController };
