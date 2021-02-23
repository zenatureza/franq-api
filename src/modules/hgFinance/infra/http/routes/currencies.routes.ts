import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';

import CurrenciesController from '../controllers/CurrenciesController';

const currenciesRouter = Router();
const currenciesController = new CurrenciesController();

currenciesRouter.use(ensureAuthenticated);

// TODO: add celebrate
currenciesRouter.get('/:currency/:dayNumbers', currenciesController.get);

export default currenciesRouter;
