import { v4 as uuidV4 } from 'uuid';

class Set {
  id?: string;
  created_at: string;
  session_name: string;
  exercise_name: string;
  set_order: number;
  weight_kg: number;
  reps: number;
  distance_meters: number;
  seconds: number;
  notes: string[];
  session_notes: string[];
  set_notes: string[];
  rpe: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Set };
