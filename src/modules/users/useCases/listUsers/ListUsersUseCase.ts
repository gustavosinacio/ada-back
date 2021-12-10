import { inject, injectable } from 'tsyringe';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  execute(): Promise<User[]> {
    console.log('list users service');

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListUsersUseCase };
