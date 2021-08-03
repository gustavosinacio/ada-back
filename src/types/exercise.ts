export interface UnformatedExerciseSet {
  Data: string;
  ['Nome do treino']: string;
  ['Nome do exercício']: string;
  ['Ordem da série']: string;
  Peso: string;
  Reps: string;
  ['Distância']: string;
  Segundos: string;
  Notas: string;
  ['Notas do treino']: string;
  RPE: string;
}

export interface ExerciseSet {
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
}
