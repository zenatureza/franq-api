import getFormattedDate from '@shared/util/getFormattedDate';
import { AxiosInstance } from 'axios';
import { inject, injectable } from 'tsyringe';
import ICurrencyPricesProvider, {
  CurrencyPrice,
} from '../interfaces/ICurrencyPricesProvider';

interface AwesomeApiResponse {
  // buy
  bid: number;

  // sell
  ask: number;

  timestamp: number;
}

@injectable()
class AwesomeApiCurrencyPricesProvider implements ICurrencyPricesProvider {
  constructor(
    @inject('AwesomeApiHttpClient')
    private readonly httpClient: AxiosInstance,
  ) {}

  public async getPrices(
    currency: string,
    dayNumbers: number,
  ): Promise<CurrencyPrice[]> {
    const { data } = await this.httpClient.get<AwesomeApiResponse[]>(
      `/daily/${currency}-BRL/${dayNumbers}`,
    );

    return data.map(price => {
      return {
        buy: parseFloat(price.bid as any),
        sell: parseFloat(price.ask as any),
        date: getFormattedDate(price.timestamp),
      };
    });
  }
}

export default AwesomeApiCurrencyPricesProvider;
