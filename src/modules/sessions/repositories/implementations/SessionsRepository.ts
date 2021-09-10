import { getRepository, Repository } from 'typeorm';
import { Session } from '../../entities/Session';
import { ICreateSessionDTO, ISessionsRepository } from '../ISessionsRepository';

class SessionsRepository implements ISessionsRepository {
  private repository: Repository<Session>;

  constructor() {
    this.repository = getRepository(Session);
  }

  async create({ name }: ICreateSessionDTO): Promise<Session> {
    const session = this.repository.create({ name });

    await this.repository.save(session);

    return session;
  }

  async list(): Promise<Session[]> {
    const sessions = await this.repository.find();
    return sessions;
  }
}

export { SessionsRepository };
