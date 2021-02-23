import ICurrencyPricesProvider, {
  CurrencyPrice,
} from '@shared/infra/providers/CurrencyPricesProvider/interfaces/ICurrencyPricesProvider';
import { inject, injectable } from 'tsyringe';

interface Request {
  currency: string;
  dayNumbers: number;
}

@injectable()
class GetCurrencyPricesService {
  constructor(
    @inject('CurrencyPricesProvider')
    private readonly currencyPricesProvider: ICurrencyPricesProvider,
  ) {}

  public async execute({
    currency,
    dayNumbers,
  }: Request): Promise<CurrencyPrice[]> {
    const currencyPrices = await this.currencyPricesProvider.getPrices(
      currency,
      dayNumbers,
    );

    return currencyPrices;
  }
}

export default GetCurrencyPricesService;
