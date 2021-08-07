import moment from 'moment';
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

  findByDate(year: number, month: number, day: number): Set[] {
    const DATE_OFFSET = 1;
    return this.sets.filter((set) => {
      console.log({ year, month, day, setDate: set.created_at });

      const setYear = set.created_at.getFullYear();
      const setMonth = set.created_at.getMonth() + DATE_OFFSET;
      const setDay = set.created_at.getDay() + DATE_OFFSET;

      if (setYear === year && setMonth === month && setDay === day) {
        return set;
      }
    });
  }
}

export { SetsRepository };
