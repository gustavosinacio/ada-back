import express from 'express';
import { thisCourseInfo, addEntry } from './routes';

const app = express();

app.use(express.json());

app.listen(3333, () => console.log('--- Server is running on port 3333'));

app.get('/', thisCourseInfo);

app.post('/entry', addEntry);
