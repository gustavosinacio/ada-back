import { Router, Request, Response } from 'express';
import { CreateSetService } from '../services/CreateSetService';

import { SetsRepository } from '../repositories/SetsRepository';
import { PostgresSetsRepository } from '../repositories/PostgresSetsRepository';

const setsRoutes = Router();
const setsRepository = new SetsRepository();

setsRoutes.get('/sets', (request: Request, response: Response) => {
  return response.json(setsRepository.list()).send();
});

setsRoutes.post('/sets', (request: Request, response: Response) => {
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
  } = request.body;
  const createSetService = new CreateSetService(setsRepository);
  const newSet = createSetService.execute({
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

  return response.status(201).json({ message: 'Success', newSet }).send();
});

setsRoutes.get('/setsbydate', (req, res) => {
  console.log(req.query);

  return res.json(setsRepository.findByDate(req.query.date));
});

export { setsRoutes };
