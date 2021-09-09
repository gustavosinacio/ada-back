import { Exercise } from '../../entities/Exercise';
import { IExercisesRepository } from '../../repositories/IExercisesRepository';

class ListExercisesUseCase {
  constructor(private exercisesRepository: IExercisesRepository) {}

  execute(): Promise<Exercise[]> {
    console.log('list exercises service');

    const exercises = this.exercisesRepository.list();
    return exercises;
  }
}

export { ListExercisesUseCase };
