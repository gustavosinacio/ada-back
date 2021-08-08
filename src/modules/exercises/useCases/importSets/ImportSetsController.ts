import { Request, Response } from 'express';
import { ImportSetsUseCase } from './ImportSetsUseCase';

class ImportSetsController {
  constructor(private importSetsUseCase: ImportSetsUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importSetsUseCase.execute(file);

    return response.send();
  }
}

export { ImportSetsController };
