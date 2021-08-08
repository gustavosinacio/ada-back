import { Request, Response } from 'express';
import { CreateSetUseCase } from './CreateSetUseCase';

class CreateSetController {
  constructor(private createSetUseCase: CreateSetUseCase) {}
  handle(req: Request, res: Response): Response {
    const {
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
    } = req.body;
    this.createSetUseCase.execute({
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

    return res.status(201).json({ message: 'Success' }).send();
  }
}

export { CreateSetController };
