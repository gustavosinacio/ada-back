import { User } from '../entities/User';

// DTO: Data Transfer Object
interface ICreateUserDTO {
  name: string;
  email: string;
  hashedPassword: string;
}

interface IUsersRepository {
  create({ name, email, hashedPassword }: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
}

export { ICreateUserDTO, IUsersRepository };
