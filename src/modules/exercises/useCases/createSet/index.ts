import { SetsRepository } from '../../repositories/implementations/SetsRepository';
import { CreateSetController } from './CreateSetController';
import { CreateSetUseCase } from './CreateSetUseCase';

export default (): CreateSetController => {
  const setsRepository = new SetsRepository();
  const createSetUseCase = new CreateSetUseCase(setsRepository);
  const createSetController = new CreateSetController(createSetUseCase);

  return createSetController;
};
