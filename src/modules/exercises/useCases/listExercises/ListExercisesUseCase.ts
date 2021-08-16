import { Exercise } from '../../model/Exercise';
import { IExercisesRepository } from '../../repositories/IExercisesRepository';

class ListExercisesUseCase {
  constructor(private exercisesRepository: IExercisesRepository) {}

  execute(): Exercise[] {
    console.log('list exercises service');

    const exercises = this.exercisesRepository.list();
    return exercises;
  }
}

export { ListExercisesUseCase };
