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
  date: string;
  sessionName: string;
  exercise: string;
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
    Data: date,
    'Nome do treino': sessionName,
    'Nome do exercício': exercise,
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
    date,
    sessionName,
    exercise,
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
