import { SetsRepository } from '../../repositories/implementations/SetsRepository';
import { ListSetsController } from './ListSetsController';
import { ListSetsUseCase } from './ListSetsUseCase';

export default (): ListSetsController => {
  const setsRepository = new SetsRepository();
  const listSetsUseCase = new ListSetsUseCase(setsRepository);
  const listSetsController = new ListSetsController(listSetsUseCase);

  return listSetsController;
};
