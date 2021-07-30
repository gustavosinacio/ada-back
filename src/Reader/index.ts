import csvParser from 'csv-parser';
import fs from 'fs';

interface unformatedExerciseSet {
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

interface exerciseSet {
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

const Reader = async (): Promise<exerciseSet[]> => {
  const data: Array<exerciseSet> = [];

  fs.createReadStream('strong.csv')
    .pipe(csvParser())
    .on('data', (row: unformatedExerciseSet) => {
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

      const formatedRow: exerciseSet = {
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

      data.push(formatedRow);
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });

  console.log(1, data);
  return data;
};

export default Reader;
