import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('sessions')
class Session {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Session };
