import GetCurrencyPricesService from '@modules/hgFinance/services/GetCurrencyPricesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class CurrenciesController {
  public async get(request: Request, response: Response): Promise<Response> {
    const { currency, dayNumbers } = request.params;

    const getCurrencyPricesService = container.resolve(
      GetCurrencyPricesService,
    );

    const data = await getCurrencyPricesService.execute({
      currency,
      dayNumbers: parseInt(dayNumbers),
    });

    return response.json(data);
  }
}
