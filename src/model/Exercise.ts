import { v4 as uuidV4 } from 'uuid';

class Exercise {
  id?: string;
  created_at: string;
  sessionName: string;
  exerciseName: string;
  setOrder: string;
  kg: string;
  reps: string;
  distance: string;
  seconds: string;
  notes: string;
  sessionNotes: string;
  rpe: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Exercise };
