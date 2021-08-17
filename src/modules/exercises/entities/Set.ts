import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('sets')
class Set {
  @PrimaryColumn()
  id?: string;

  @Column()
  session_name: string;

  @Column()
  exercise_name: string;

  @Column()
  set_order: number;

  @Column()
  weight_kg: number;

  @Column()
  reps: number;

  @Column()
  rpe: number;

  @Column()
  distance_meters: number;

  @Column()
  seconds: number;

  @CreateDateColumn()
  created_at?: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { Set };
