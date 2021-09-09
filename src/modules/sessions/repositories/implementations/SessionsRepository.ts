import { getRepository, Repository } from 'typeorm';
import { Session } from '../../entities/Session';
import { ICreateSessionDTO, ISessionsRepository } from '../ISessionRepository';

class SessionsRepository implements ISessionsRepository {
  private repository: Repository<Session>;

  constructor() {
    this.repository = getRepository(Session);
  }

  async create({ name }: ICreateSessionDTO): Promise<void> {
    const session = this.repository.create({ name });

    await this.repository.save(session);
  }

  async list(): Promise<Session[]> {
    const sessions = await this.repository.find();
    return sessions;
  }
}

export { SessionsRepository };
