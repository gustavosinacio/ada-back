import { Router } from 'express';
import { CreateExerciseService } from '../modules/exercises/services/CreateExerciseService';
import { ExercisesRepository } from '../modules/exercises/repositories/ExercisesRepository';

const exercisesRoutes = Router();
const exercisesRepository = new ExercisesRepository();

exercisesRoutes.post('/', (req, res) => {
  const { name, description, instructions } = req.body;
  const createExerciseService = new CreateExerciseService(exercisesRepository);

  createExerciseService.execute({ name, description, instructions });

  return res.status(201).send();
});

exercisesRoutes.get('/', (req, res) => {
  return res.json(exercisesRepository.list());
});

export { exercisesRoutes };
