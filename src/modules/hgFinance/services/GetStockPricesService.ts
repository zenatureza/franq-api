import IStockPricesProvider, {
  AvailableTickers,
  StockPrice,
} from '@shared/infra/providers/StockPricesProvider/interfaces/IStockProvider';
import { inject, injectable } from 'tsyringe';

interface Request {
  // stock name
  ticker: AvailableTickers;
  startDate: Date;
  endDate: Date;
}

@injectable()
class GetStockPricesService {
  constructor(
    @inject('StockPricesProvider')
    private readonly stockPricesProvider: IStockPricesProvider,
  ) {}

  public async execute({
    ticker,
    startDate,
    endDate,
  }: Request): Promise<StockPrice[]> {
    const stockPrices = await this.stockPricesProvider.getPrices(
      ticker,
      startDate,
      endDate,
    );

    return stockPrices;
  }
}

export default GetStockPricesService;
