import { Router } from 'express';
import { ListSessionsController } from '../modules/sessions/useCases/listSessions/ListSessionsController';
import { CreateSessionController } from '../modules/sessions/useCases/createSession/CreateSessionController';

const sessionsRoutes = Router();

const createSessionController = new CreateSessionController();
const listSessionsController = new ListSessionsController();

sessionsRoutes.post('/', createSessionController.handle);
sessionsRoutes.get('/', listSessionsController.handle);

export { sessionsRoutes };
