import { inject, injectable } from 'tsyringe';
import { Session } from '../../entities/Session';
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

  async execute({ name }: IRequest): Promise<Session> {
    console.log('create session service');

    const session = await this.sessionsRepository.create({ name });

    return session;
  }
}

export { CreateSessionUseCase };
