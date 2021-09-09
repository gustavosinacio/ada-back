import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportSetsUseCase } from './ImportSetsUseCase';

class ImportSetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importSetsUseCase = container.resolve(ImportSetsUseCase);

    await importSetsUseCase.execute(file);

    return response.send();
  }
}

export { ImportSetsController };
