export interface StockPrice {
  day: Date;
  close: number;
  open: number;
  high: number;
  low: number;
}

export declare type AvailableTickers = 'AAPL' | 'CAC';

export default interface IStockPricesProvider {
  getPrices(
    ticker: AvailableTickers,
    startDate: Date,
    endDate: Date,
  ): Promise<StockPrice[]>;
}
