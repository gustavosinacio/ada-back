import { inject, injectable } from 'tsyringe';
import { Set } from '../../entities/Set';
import { ISetsRepository } from '../../repositories/ISetsRepository';

@injectable()
class ListSetsUseCase {
  constructor(
    @inject('SetsRepository')
    private setsRepository: ISetsRepository,
  ) {}

  execute(): Promise<Set[]> {
    console.log('list sets service');

    const sets = this.setsRepository.list();
    return sets;
  }
}

export { ListSetsUseCase };
