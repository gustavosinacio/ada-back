import {
  IExercisesRepository,
  ICreateExerciseDTO,
} from '../interfaces/IExercisesRepository';
import { Exercise } from '../model/Exercise';

class ExercisesRepository implements IExercisesRepository {
  private exercises: Exercise[];

  constructor() {
    this.exercises = [];
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
