import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO, IUsersRepository } from '../IUsersRepository';
import { User } from '../../entities/User';

//singleton

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, hashedPassword }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create();

    Object.assign(user, {
      name,
      email,
      hashedPassword,
    });

    await this.repository.save(user);

    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }
}

export { UsersRepository };
