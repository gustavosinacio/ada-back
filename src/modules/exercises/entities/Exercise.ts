import { v4 as uuidV4 } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Note } from '../../../modules/notes/entities/Note';

@Entity('exercises')
class Exercise {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description?: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Note, (note) => note.exercise)
  notes: Note[];

  // TODO change to fk
  // @OneToMany(() => Instructions, (instruction) => instruction.exercise)
  // instructions: Instructions[];

  //TODO remove this
  @Column()
  instructions?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Exercise };
