import { Hash } from 'crypto';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    let hashedPassword = password;
    // hashedPassword = new Hash(hashedPassword);

    const user = await createUserUseCase.execute({
      name,
      email,
      hashedPassword,
    });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
