import { inject, injectable } from 'tsyringe';
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
  execute({
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
  }: IRequest): void {
    console.log('create set service');

    this.setsRepository.create({
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
  }
}

export { CreateSetUseCase };
