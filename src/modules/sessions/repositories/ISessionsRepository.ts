import { Session } from '../entities/Session';

/**
 * DTO: Data transfer object
 * Here I'll declare how the creation object should be sent
 */

interface ICreateSessionDTO {
  name?: string;
}

interface ISessionsRepository {
  create({ name }: ICreateSessionDTO): Promise<Session>;
  list(): Promise<Session[]>;
}

export { ICreateSessionDTO, ISessionsRepository };
