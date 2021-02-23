import { Router, Request, Response } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import hgfinanceRouter from '@modules/hgFinance/infra/http/routes/hgfinance.routes';
import currenciesRouter from '@modules/hgFinance/infra/http/routes/currencies.routes';
import stocksRouter from '@modules/hgFinance/infra/http/routes/stocks.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/hgfinance', hgfinanceRouter);
routes.use('/currencies', currenciesRouter);
routes.use('/stocks', stocksRouter);

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
