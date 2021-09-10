import { v4 } from 'uuid';
import {
  PrimaryColumn,
  Column,
  Entity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

import { Exercise } from '../../../modules/exercises/entities/Exercise';
import { Set } from '../../../modules/exercises/entities/Set';
import { Session } from '../../../modules/sessions/entities/Session';

@Entity('notes')
class Note {
  @PrimaryColumn()
  id?: string;

  @Column()
  title?: string;

  @Column()
  text: string;

  @Column()
  order: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Exercise, (exercise) => exercise.notes)
  @JoinColumn({ name: 'exercise_id' })
  exercise: Exercise;

  @ManyToOne(() => Set, (set) => set.notes)
  @JoinColumn({ name: 'set_id' })
  set: Set;

  @ManyToOne(() => Session, (session) => session.notes)
  @JoinColumn({ name: 'session_id' })
  session: Session;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Note };
