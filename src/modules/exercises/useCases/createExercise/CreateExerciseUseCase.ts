import { IExercisesRepository } from '../../repositories/IExercisesRepository';

interface IRequest {
  name: string;
  description: string;
  instructions: string[];
}
class CreateExerciseUseCase {
  constructor(private exercisesRepository: IExercisesRepository) {}

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
