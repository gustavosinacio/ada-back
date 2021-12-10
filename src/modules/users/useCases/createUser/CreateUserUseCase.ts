import { inject, injectable } from 'tsyringe';
import { User } from '../../entities/User';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  hashedPassword: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email, hashedPassword }: IRequest): Promise<User> {
    //execute
    console.log('create user service');
    console.log(9821, name, email, hashedPassword);

    const user = this.usersRepository.create({ name, email, hashedPassword });

    return user;
  }
}

export { CreateUserUseCase };
