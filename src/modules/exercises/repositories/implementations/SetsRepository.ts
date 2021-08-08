import { Set } from '../../model/Set';
import { ICreateSetDTO, ISetsRepository } from '../ISetsRepository';

// singleton;

class SetsRepository implements ISetsRepository {
  private sets: Set[] = [];

  private static INSTANCE: SetsRepository;

  /** Private on the constructor makes me unable to just create
   * a new SetsRepository.
   * This will be usefull whenever I need to instanciate a class only once, making
   * this code a SINGLETON
   */
  private constructor() {
    this.sets = [];
  }

  public static getInstance(): SetsRepository {
    if (!SetsRepository.INSTANCE) {
      SetsRepository.INSTANCE = new SetsRepository();
    }
    return SetsRepository.INSTANCE;
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
    created_at,
  }: ICreateSetDTO): Set {
    const set = new Set();
    let date = new Date();

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
      created_at: created_at || date,
    });

    this.sets.push(set);
    return set;
  }

  list(): Set[] {
    return this.sets;
  }

  findByDate(year: number, month: number, day: number): Set[] {
    const DATE_OFFSET = 1;
    const filteredSets = this.sets.filter((set) => {
      const setYear = set.created_at.getFullYear();
      const setMonth = set.created_at.getMonth() + DATE_OFFSET;
      const setDay = set.created_at.getDate();

      if (setYear === year && setMonth === month && setDay === day) {
        return set;
      }
    });

    return filteredSets;
  }
}

export { SetsRepository };
