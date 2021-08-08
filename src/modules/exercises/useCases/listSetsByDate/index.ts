import { SetsRepository } from '../../repositories/implementations/SetsRepository';
import { ListSetsByDateController } from './ListSetsByDateController';
import { ListSetsByDateUseCase } from './ListSetsByDateUseCase';

const setsRepository = SetsRepository.getInstance();
const listSetsByDateUseCase = new ListSetsByDateUseCase(setsRepository);
const listSetsByDateController = new ListSetsByDateController(
  listSetsByDateUseCase,
);

export { listSetsByDateController };
