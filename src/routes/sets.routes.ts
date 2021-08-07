import { Router, Request, Response } from 'express';
import { CreateSetService } from '../modules/exercises/services/CreateSetService';

import { SetsRepository } from '../modules/exercises/repositories/SetsRepository';
import { PostgresSetsRepository } from '../modules/exercises/repositories/PostgresSetsRepository';

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

  const { year, month, day } = req.query;
  const numberedYear = parseInt(year, 10);
  const numberedMonth = parseInt(month, 10);
  const numberedDay = parseInt(day, 10);

  const found = setsRepository.findByDate(
    numberedYear,
    numberedMonth,
    numberedDay,
  );

  return res.json(found);
});

export { setsRoutes };
