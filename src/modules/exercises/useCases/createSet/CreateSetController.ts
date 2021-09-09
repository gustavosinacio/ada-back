import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSetUseCase } from './CreateSetUseCase';

class CreateSetController {
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

    const createSetUseCase = container.resolve(CreateSetUseCase);

    createSetUseCase.execute({
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
