import { Request, Response } from 'express';
import { ListSetsByDateUseCase } from './ListSetsByDateUseCase';

class ListSetsByDateController {
  constructor(private listSetsByDateUseCase: ListSetsByDateUseCase) {}

  handle(request: Request, response: Response): Response {
    const { year, month, day } = request.query;
    if (
      typeof year === 'string' &&
      typeof month === 'string' &&
      typeof day === 'string'
    ) {
      const setsByDate = this.listSetsByDateUseCase.execute({
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
