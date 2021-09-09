import { inject, injectable } from 'tsyringe';
import { Session } from '../../entities/Session';
import { ISessionsRepository } from '../../repositories/ISessionRepository';

@injectable()
class ListSessionsUseCase {
  constructor(
    @inject('SessionsRepository')
    private sessionsRepository: ISessionsRepository,
  ) {}

  execute(): Promise<Session[]> {
    console.log('list sessions');

    const sessions = this.sessionsRepository.list();
    return sessions;
  }
}

export { ListSessionsUseCase };
