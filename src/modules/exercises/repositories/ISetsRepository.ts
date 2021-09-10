import { Set } from '../entities/Set';

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
  created_at?: Date;
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
  findByDate(year: number, month: number, day: number): Promise<Set[]>;
  list(): Promise<Set[]>;
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
  }: ICreateSetDTO): Promise<Set>;
}

export { ICreateSetDTO, ISetsRepository };
