import { SetsRepository } from '../../repositories/implementations/SetsRepository';
import { CreateSetController } from './CreateSetController';
import { CreateSetUseCase } from './CreateSetUseCase';

const setsRepository = SetsRepository.getInstance();
const createSetUseCase = new CreateSetUseCase(setsRepository);
const createSetController = new CreateSetController(createSetUseCase);

export { createSetController };
//"created_at": "2021-05-17 12:41:01"
