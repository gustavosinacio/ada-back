import {
  IExercisesRepository,
  ICreateExerciseDTO,
} from '../IExercisesRepository';
import { Exercise } from '../../model/Exercise';

// singleton;

class ExercisesRepository implements IExercisesRepository {
  private exercises: Exercise[];

  private static INSTANCE: ExercisesRepository;

  /** Private on the constructor makes me unable to just create
   * a new SetsRepository.
   * This will be usefull whenever I need to instanciate a class only once, making
   * this code a SINGLETON
   */

  private constructor() {
    this.exercises = [];
  }

  public static getInstance(): ExercisesRepository {
    if (!ExercisesRepository.INSTANCE) {
      ExercisesRepository.INSTANCE = new ExercisesRepository();
    }
    return ExercisesRepository.INSTANCE;
  }

  create({ name, description, instructions }: ICreateExerciseDTO): void {
    const exercise = new Exercise();

    Object.assign(exercise, {
      name,
      description,
      instructions,
      created_at: new Date(),
    });

    this.exercises.push(exercise);
  }

  list(): Exercise[] {
    return this.exercises;
  }

  findByName(name: string): Exercise {
    return this.exercises.find(
      (exercise) => exercise.name.toLowerCase() === name.toLowerCase(),
    );
  }
}

export { ExercisesRepository };
