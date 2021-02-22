import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';

import HgFinanceController from '../controllers/HgFinanceController';

const hgFinanceRouter = Router();
const hgFinanceController = new HgFinanceController();

hgFinanceRouter.use(ensureAuthenticated);

hgFinanceRouter.get('/', hgFinanceController.index);

export default hgFinanceRouter;
