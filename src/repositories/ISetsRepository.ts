import { Set } from '../model/Set';

// DTO: Data Transfer Object
interface ICreateSetDTO {
  session_name: string;
  exercise_name: string;
  set_order: number;
  weight_kg: number;
  reps: number;
  distance_meters: number;
  seconds: number;
  notes: string[];
  session_notes: string[];
  set_notes: string[];
  rpe: number;
}

interface ISetsRepository {
  findByDate(date: string): Set;
  list(): Set[];
  create({
    session_name,
    exercise_name,
    set_order,
    weight_kg,
    reps,
    distance_meters,
    seconds,
    notes,
    session_notes,
    set_notes,
    rpe,
  }: ICreateSetDTO): void;
}

export { ICreateSetDTO, ISetsRepository };
