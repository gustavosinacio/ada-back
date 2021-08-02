import { response, Router } from 'express';
import { Request, Response } from 'express';

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
  const date = new Date();

  return response.json({
    message: 'Entry added successfully!',
    comment,
    date,
  });
}

setsRoutes.get('/sets', (request: Request, response: Response) => {
  const fakeSet = {
    date: '2021-07-30 13:33:56',
    sessionName: '4 Back Biceps',
    exercise: 'Reverse Fly (Dumbbell)',
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

export { setsRoutes };
