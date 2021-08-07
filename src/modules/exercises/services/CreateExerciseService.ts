import { IExercisesRepository } from '../interfaces/IExercisesRepository';

interface IRequest {
  name: string;
  description: string;
  instructions: string[];
}
class CreateExerciseService {
  constructor(private exercisesRepository: IExercisesRepository) {}

  execute({ name, description, instructions }: IRequest): void {
    console.log('create exercise service');

    const exerciseAlreadyExists = this.exercisesRepository.findByName(name);

    if (exerciseAlreadyExists) {
      throw new Error('Exercise already exists!');
    }

    this.exercisesRepository.create({ name, description, instructions });
  }
}

export { CreateExerciseService };
