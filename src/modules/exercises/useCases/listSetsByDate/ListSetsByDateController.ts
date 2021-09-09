import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSetsByDateUseCase } from './ListSetsByDateUseCase';

class ListSetsByDateController {
  handle(request: Request, response: Response): Response {
    const { year, month, day } = request.query;
    if (
      typeof year === 'string' &&
      typeof month === 'string' &&
      typeof day === 'string'
    ) {
      const listSetsByDateUseCase = container.resolve(ListSetsByDateUseCase);

      const setsByDate = listSetsByDateUseCase.execute({
        year,
        month,
        day,
      });
      return response.json(setsByDate);
    }
    throw new Error('invalid type');
  }
}

export { ListSetsByDateController };
