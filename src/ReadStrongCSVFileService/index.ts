import csv from 'csv-parser';
import * as fs from 'fs';

import ExerciseRowReader from '../ExerciseRowReader';

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

class ReadStrongCSVFileService {
  data: ExerciseSet[] = [];
  amountToShow = 7;

  execute(strongFile) {
    fs.createReadStream(strongFile)
      .pipe(csv())
      .on('data', (row: UnformatedExerciseSet) => {
        data.push(ExerciseRowReader(row));
      })
      .on('end', () => {
        console.log(
          this.data.splice(
            this.data.length - this.amountToShow,
            this.amountToShow,
          ),
        );
        console.log('CSV file processed');
      });
  }
}

export default new ReadStrongCSVFileService();
