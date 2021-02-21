import { Router, Request, Response } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

routes.get(
  '/',
  async (_: Request, response: Response): Promise<Response> => {
    return response.json({
      error:
        'Access: https://github.com/zenatureza/franq-app to discover how to use the api.',
    });
  },
);

export default routes;
