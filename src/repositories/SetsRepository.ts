import { v4 as uuidV4 } from 'uuid';

import { Set } from '../model/Set';
import { ICreateSetDTO, ISetsRepository } from './ISetsRepository';

class SetsRepository implements ISetsRepository {
  private sets: Set[] = [];

  constructor() {
    this.sets = [];
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
  }: ICreateSetDTO): Set {
    const created_at = new Date();
    const set = new Set();

    Object.assign(set, {
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
    });

    this.sets.push(set);
    return set;
  }

  list(): Set[] {
    return this.sets;
  }

  findByDate(date): Set {
    return this.sets.find((set) => {
      console.log(typeof set.created_at);
      return set.created_at.includes(date);
    });
  }
}

export { SetsRepository };
