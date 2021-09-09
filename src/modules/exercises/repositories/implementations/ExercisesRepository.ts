import { getRepository, Repository } from 'typeorm';

import {
  IExercisesRepository,
  ICreateExerciseDTO,
} from '../IExercisesRepository';
import { Exercise } from '../../entities/Exercise';

// singleton;

class ExercisesRepository implements IExercisesRepository {
  private repository: Repository<Exercise>;

  /** Private on the constructor makes me unable to just create
   * a new SetsRepository.
   * This will be usefull whenever I need to instanciate a class only once, making
   * this code a SINGLETON
   */

  constructor() {
    this.repository = getRepository(Exercise);
  }

  async create({
    name,
    description,
    instructions,
  }: ICreateExerciseDTO): Promise<void> {
    const exercise = this.repository.create();

    Object.assign(exercise, {
      name,
      description,
      instructions,
    });

    await this.repository.save(exercise);
  }

  async list(): Promise<Exercise[]> {
    const exercises = await this.repository.find();
    return exercises;
  }

  async findByName(name: string): Promise<Exercise> {
    const exercises = await this.repository.findOne({ name });
    return exercises;
  }
}

export { ExercisesRepository };
