import { Request, Response } from 'express';
import { ImportSetsUseCase } from './ImportSetsUseCase';

class ImportSetsController {
  constructor(private importSetsUseCase: ImportSetsUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    await this.importSetsUseCase.execute(file);

    return response.send();
  }
}

export { ImportSetsController };
