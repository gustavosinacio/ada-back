import { response, Router } from 'express';
import { Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Exercise } from '../model/Exercise';

const setsRoutes = Router();

function thisCourseInfo(request: Request, response: Response) {
  return response.json({
    platform: 'rocketseat ignite',
    started: new Date('2021-07-31T01:00Z'),
    course: 'nodeJS with typescript',
  });
}
function addEntry(request: Request, response: Response) {
  const { comment } = request?.body;
  const created_at = new Date();

  return response.json({
    message: 'Entry added successfully!',
    comment,
    created_at,
  });
}

setsRoutes.get('/sets', (request: Request, response: Response) => {
  const fakeSet = {
    created_at: '2021-07-30 13:33:56',
    sessionName: '4 Back Biceps',
    exerciseName: 'Reverse Fly (Dumbbell)',
    setOrder: '2',
    kg: '16.0',
    reps: '11',
    distance: '',
    seconds: '',
    notes: '',
    sessionNotes: '',
    rpe: '',
  };

  return response.status(200).json([fakeSet, fakeSet, fakeSet]).send();
});

setsRoutes.post('/sets', (request: Request, response: Response) => {
  const {
    sessionName,
    exerciseName,
    setOrder,
    kg,
    reps,
    distance,
    seconds,
    notes,
    sessionNotes,
    rpe,
  } = request.body;

  const created_at = new Date();
  const exercise = new Exercise();

  Object.assign(exercise, {
    sessionName,
    exerciseName,
    setOrder,
    kg,
    reps,
    distance,
    seconds,
    notes,
    sessionNotes,
    rpe,
    created_at,
  });

  const uuid = uuidV4();

  return response
    .status(201)
    .json({ message: `set ${uuid} created at ${created_at}`, exercise });
});

export { setsRoutes };
