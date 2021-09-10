import { Exercise } from '../entities/Exercise';

// DTO: Data Transfer Object
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
  }: ICreateExerciseDTO): Promise<Exercise>;
  list(): Promise<Exercise[]>;
  findByName(name: string): Promise<Exercise>;
}

export { ICreateExerciseDTO, IExercisesRepository };
