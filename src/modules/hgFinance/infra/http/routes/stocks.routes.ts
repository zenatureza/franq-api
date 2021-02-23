import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';

import StocksController from '../controllers/StocksController';

const stocksRouter = Router();
const stocksController = new StocksController();

stocksRouter.use(ensureAuthenticated);

// TODO: add celebrate
stocksRouter.get('/:stock', stocksController.get);

export default stocksRouter;
