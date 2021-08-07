import { Set } from '../model/Set';

interface ISetsRepository {
  findByDate(date: string): Set;
  list(): Set[];
  create(
    session_name: string,
    exercise_name: string,
    set_order: number,
    weight_kg: number,
    reps: number,
    distance_meters: number,
    seconds: number,
    notes: string[],
    session_notes: string[],
    set_notes: string[],
    rpe: number,
  ): void;
}

export { ISetsRepository };
