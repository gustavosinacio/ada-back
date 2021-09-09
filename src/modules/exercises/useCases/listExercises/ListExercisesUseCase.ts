import { inject, injectable } from 'tsyringe';
import { Exercise } from '../../entities/Exercise';
import { IExercisesRepository } from '../../repositories/IExercisesRepository';

@injectable()
class ListExercisesUseCase {
  constructor(
    @inject('ExercisesRepository')
    private exercisesRepository: IExercisesRepository,
  ) {}

  execute(): Promise<Exercise[]> {
    console.log('list exercises service');

    const exercises = this.exercisesRepository.list();
    return exercises;
  }
}

export { ListExercisesUseCase };
