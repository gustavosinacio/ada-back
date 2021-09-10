import { inject, injectable } from 'tsyringe';
import { Exercise } from '../../entities/Exercise';

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

  async execute({
    name,
    description,
    instructions,
  }: IRequest): Promise<Exercise> {
    console.log('create exercise service');

    const exerciseAlreadyExists = await this.exercisesRepository.findByName(
      name,
    );

    if (exerciseAlreadyExists) {
      throw new Error('Exercise already exists!');
    }

    const exercise = this.exercisesRepository.create({
      name,
      description,
      instructions,
    });

    return exercise;
  }
}

export { CreateExerciseUseCase };
