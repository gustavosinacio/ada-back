import { Set } from '../model/Set';

// DTO: Data Transfer Object
interface ICreateSetDTO {
  session_name: string;
  exercise_name: string;
  set_order: number;
  weight_kg: number;
  reps: number;
  rpe?: number;
  notes?: string[];
  set_notes?: string[];
  session_notes?: string[];
  distance_meters?: number;
  seconds?: number;
  created_at?: string;
}

interface ISetsRepository {
  /**
   * insert three number corresponding to year, month and day and return a list
   * of sets from that date
   * @param year
   * @param month
   * @param day
   * @returns set[]
   */
  findByDate(year: number, month: number, day: number): Set[];
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
    created_at,
  }: ICreateSetDTO): void;
}

export { ICreateSetDTO, ISetsRepository };
