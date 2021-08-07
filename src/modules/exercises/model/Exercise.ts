import { v4 as uuidV4 } from 'uuid';

class Exercise {
  id?: string;
  name: string;
  description?: string;
  instructions?: string[];
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Exercise };
