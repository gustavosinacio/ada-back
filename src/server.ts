import express from 'express';
import { setsRoutes } from './routes/sets.routes';

const app = express();

app.use(express.json());
app.use(setsRoutes);

app.listen(3333, () => console.log('--- Server is running on port 3333'));

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'v0' });
});
