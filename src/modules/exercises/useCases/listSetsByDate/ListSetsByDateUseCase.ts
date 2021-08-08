import { Set } from '../../model/Set';
import { ISetsRepository } from '../../repositories/ISetsRepository';

interface IRequest {
  day: string;
  month: string;
  year: string;
}

class ListSetsByDateUseCase {
  constructor(private setsRepository: ISetsRepository) {}

  execute({ day, month, year }: IRequest): Set[] {
    const numberedYear = parseInt(year, 10);
    const numberedMonth = parseInt(month, 10);
    const numberedDay = parseInt(day, 10);

    const setsByDate = this.setsRepository.findByDate(
      numberedYear,
      numberedMonth,
      numberedDay,
    );

    return setsByDate;
  }
}

export { ListSetsByDateUseCase };
