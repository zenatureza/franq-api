import IStockPricesProvider, {
  AvailableTickers,
  StockPrice,
} from '../interfaces/IStockProvider';
import yahooStockPrices from 'yahoo-stock-prices';
import getMonthDayYearFromDate from '@shared/util/getMonthDayYearFromDate';
import getFormattedDate from '@shared/util/getFormattedDate';

export default class YahooStockPricesProvider implements IStockPricesProvider {
  public async getPrices(
    ticker: AvailableTickers,
    startDate: Date,
    endDate: Date,
  ): Promise<StockPrice[]> {
    const {
      day: startDay,
      month: startMonth,
      year: startYear,
    } = getMonthDayYearFromDate(startDate);
    const {
      day: endDay,
      month: endMonth,
      year: endYear,
    } = getMonthDayYearFromDate(endDate);

    const prices = await yahooStockPrices.getHistoricalPrices(
      startMonth,
      startDay,
      startYear,
      endMonth,
      endDay,
      endYear,
      ticker,
      '1d',
    );

    const stockPrices = prices.map(price => {
      const close = (price.close as number).toFixed(4);

      return {
        date: getFormattedDate(price.date),
        close,
        open: price.open,
        high: price.high,
        low: price.low,
      };
    });

    return stockPrices;
  }
}
