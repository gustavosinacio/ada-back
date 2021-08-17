// DTO: Data Transfer Object

import { Exercise } from '../entities/Exercise';

interface ICreateExerciseDTO {
  name: string;
  description: string;
  instructions: string[];
}

interface IExercisesRepository {
  create({
    name,
    description,
    instructions,
  }: ICreateExerciseDTO): Promise<void>;
  list(): Promise<Exercise[]>;
  findByName(name: string): Promise<Exercise>;
}

export { ICreateExerciseDTO, IExercisesRepository };
