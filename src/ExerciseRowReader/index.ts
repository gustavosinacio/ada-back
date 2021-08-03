interface UnformatedExerciseSet {
  Data: string;
  ['Nome do treino']: string;
  ['Nome do exercício']: string;
  ['Ordem da série']: string;
  Peso: string;
  Reps: string;
  ['Distância']: string;
  Segundos: string;
  Notas: string;
  'Notas do treino': string;
  RPE: string;
}

interface ExerciseSet {
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

const RowReader = (row: UnformatedExerciseSet): ExerciseSet => {
  const {
    Data: created_at,
    'Nome do treino': sessionName,
    'Nome do exercício': exerciseName,
    'Ordem da série': setOrder,
    Peso: kg,
    Reps: reps,
    Distância: distance,
    Segundos: seconds,
    Notas: notes,
    'Notas do treino': sessionNotes,
    RPE: rpe,
    ...rest
  } = row;

  const formatedRow: ExerciseSet = {
    created_at,
    sessionName,
    exerciseName,
    setOrder,
    kg,
    reps,
    distance,
    seconds,
    notes,
    sessionNotes,
    rpe,
    ...rest,
  };

  return formatedRow;
};

export default RowReader;
