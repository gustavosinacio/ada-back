import { getRepository, Repository } from 'typeorm';

import { Set } from '../../entities/Set';
import { ICreateSetDTO, ISetsRepository } from '../ISetsRepository';

import { Note } from '../../../notes/entities/Note';

// singleton;

class SetsRepository implements ISetsRepository {
  private repository: Repository<Set>;

  private static INSTANCE: SetsRepository;

  /** Private on the constructor makes me unable to just create
   * a new SetsRepository.
   * This will be usefull whenever I need to instanciate a class only once, making
   * this code a SINGLETON
   */
  constructor() {
    this.repository = getRepository(Set);
  }

  async create({
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
  }: ICreateSetDTO): Promise<Set> {
    let date = new Date();

    const set = this.repository.create();

    Object.assign(set, {
      session_name,
      exercise_name,
      set_order,
      weight_kg,
      reps,
      distance_meters,
      seconds,
      // notes,
      // session_notes,
      // set_notes,
      rpe,
      created_at: created_at || date,
    });
    const Notes = notes.map((note) => {
      const newNote = new Note();
      newNote.text = note;

      return newNote;
    });

    set.notes = Notes;

    await this.repository.save(set);

    return set;
  }

  async list(): Promise<Set[]> {
    const sets = await this.repository.find();
    return sets;
  }

  async findByDate(year: number, month: number, day: number): Promise<Set[]> {
    // const DATE_OFFSET = 1;
    // const filteredSets = this.sets.filter((set) => {
    //   const setYear = set.created_at.getFullYear();
    //   const setMonth = set.created_at.getMonth() + DATE_OFFSET;
    //   const setDay = set.created_at.getDate();
    //   if (setYear === year && setMonth === month && setDay === day) {
    //     return set;
    //   }
    // });
    // return filteredSets;
    return [];
  }
}

export { SetsRepository };
