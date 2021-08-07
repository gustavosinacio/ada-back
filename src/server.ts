import express from 'express';
import { exercisesRoutes } from './routes/exercises.routes';
import { setsRoutes } from './routes/sets.routes';

const app = express();

app.use(express.json());
app.use('/sets', setsRoutes);
app.use('/exercises', exercisesRoutes);

app.listen(3333, () => console.log('--- Server is running on port 3333'));

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'v0' });
});
