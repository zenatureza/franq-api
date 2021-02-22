import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetFinanceService from '@modules/hgFinance/services/GetFinanceService';

export default class HgFinanceController {
  public async index(request: Request, response: Response): Promise<Response> {
    const getFinanceService = container.resolve(GetFinanceService);

    const data = await getFinanceService.execute();

    return response.json(data);
  }
}
