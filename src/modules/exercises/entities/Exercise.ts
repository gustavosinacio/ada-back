import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('Exercises')
class Exercise {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  instructions?: string[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Exercise };
