// DTO: Data Transfer Object

import { Exercise } from '../entities/Exercise';

interface ICreateExerciseDTO {
  name: string;
  description: string;
  instructions: string[];
}

interface IExercisesRepository {
  create({ name, description, instructions }: ICreateExerciseDTO): void;
  list(): Exercise[];
  findByName(name: string): Exercise;
}

export { ICreateExerciseDTO, IExercisesRepository };
