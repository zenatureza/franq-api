import GetStockPricesService from '@modules/hgFinance/services/GetStockPricesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class StocksController {
  public async get(request: Request, response: Response): Promise<Response> {
    const { stock: ticker } = request.params;

    // format: YYYY-MM-DD
    const { startDate, endDate } = request.query;

    const getStockPricesService = container.resolve(GetStockPricesService);

    const data = await getStockPricesService.execute({
      ticker,
      startDate: new Date(startDate as string),
      endDate: new Date(endDate as string),
    });

    return response.json(data);
  }
}
