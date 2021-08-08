import csv from 'csv-parser';
import fs from 'fs';
import { ISetsRepository } from '../../repositories/ISetsRepository';

class ImportSetsUseCase {
  constructor(private setsRepository: ISetsRepository) {}

  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parserFile = csv();

    stream.pipe(parserFile);
    parserFile.on('data', async (line) => {
      console.log(line);
    });
  }
}

export { ImportSetsUseCase };
