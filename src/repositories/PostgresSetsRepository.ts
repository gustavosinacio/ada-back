import { Set } from '../model/Set';
import { ISetsRepository } from './ISetsRepository';

class PostgresSetsRepository implements ISetsRepository {
  findByDate(date: string): Set {
    throw new Error('Method not implemented.');
  }
  list(): Set[] {
    throw new Error('Method not implemented.');
  }
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
  ): void {
    throw new Error('Method not implemented.');
  }
}
