import { inject, injectable } from 'tsyringe';
import { Set } from '../../entities/Set';
import { ISetsRepository } from '../../repositories/ISetsRepository';

interface IRequest {
  session_name: string;
  exercise_name: string;
  set_order: number;
  weight_kg: number;
  reps: number;
  distance_meters: number;
  seconds: number;
  notes: string[];
  session_notes: string[];
  set_notes: string[];
  rpe: number;
}

@injectable()
class CreateSetUseCase {
  constructor(
    @inject('SetsRepository')
    private setsRepository: ISetsRepository,
  ) {}
  async execute({
    session_name,
    exercise_name,
    set_order,
    weight_kg,
    reps,
    distance_meters,
    seconds,
    notes,
    session_notes,
    set_notes,
    rpe,
  }: IRequest): Promise<Set> {
    console.log('create set service');

    const set = await this.setsRepository.create({
      session_name,
      exercise_name,
      set_order,
      weight_kg,
      reps,
      distance_meters,
      seconds,
      notes,
      session_notes,
      set_notes,
      rpe,
    });

    return set;
  }
}

export { CreateSetUseCase };
