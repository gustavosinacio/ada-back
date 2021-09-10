import { v4 } from 'uuid';
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Note } from '../../../modules/notes/entities/Note';

@Entity('sessions')
class Session {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Note, (note) => note.session)
  notes: Note[];

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Session };
