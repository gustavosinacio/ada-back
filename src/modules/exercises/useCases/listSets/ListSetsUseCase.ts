import { Set } from '../../entities/Set';
import { ISetsRepository } from '../../repositories/ISetsRepository';

class ListSetsUseCase {
  constructor(private setsRepository: ISetsRepository) {}

  execute(): Set[] {
    console.log('list sets service');

    const sets = this.setsRepository.list();
    return sets;
  }
}

export { ListSetsUseCase };
