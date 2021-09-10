import { inject, injectable } from 'tsyringe';
import { ISessionsRepository } from '../../repositories/ISessionsRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateSessionUseCase {
  constructor(
    @inject('SessionsRepository')
    private sessionsRepository: ISessionsRepository,
  ) {}

  async execute({ name }: IRequest): Promise<void> {
    console.log('create session service');

    this.sessionsRepository.create({ name });
  }
}

export { CreateSessionUseCase };
