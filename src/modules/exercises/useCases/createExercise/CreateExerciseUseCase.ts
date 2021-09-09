import { inject, injectable } from 'tsyringe';

import { IExercisesRepository } from '../../repositories/IExercisesRepository';

interface IRequest {
  name: string;
  description: string;
  instructions: string[];
}

@injectable()
class CreateExerciseUseCase {
  constructor(
    @inject('ExercisesRepository')
    private exercisesRepository: IExercisesRepository,
  ) {}

  async execute({ name, description, instructions }: IRequest): Promise<void> {
    console.log('create exercise service');

    const exerciseAlreadyExists = await this.exercisesRepository.findByName(
      name,
    );

    if (exerciseAlreadyExists) {
      throw new Error('Exercise already exists!');
    }

    this.exercisesRepository.create({ name, description, instructions });
  }
}

export { CreateExerciseUseCase };
