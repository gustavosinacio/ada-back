import { Set } from '../model/Set';
import { ISetsRepository, ICreateSetDTO } from './ISetsRepository';

class PostgresSetsRepository implements ISetsRepository {
  findByDate(date: string): Set {
    console.log('findByDate', date);
    return null;
  }
  list(): Set[] {
    throw new Error('Method not implemented.');
  }
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
  }: ICreateSetDTO): void {
    throw new Error('Method not implemented.');
  }
}

export { PostgresSetsRepository };
