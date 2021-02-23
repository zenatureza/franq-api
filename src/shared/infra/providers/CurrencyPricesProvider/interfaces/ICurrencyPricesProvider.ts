export interface CurrencyPrice {
  // bid
  buy: number;

  // ask
  sell: number;

  // yyyy/MM/DD
  date: string;
}

export default interface ICurrencyPricesProvider {
  getPrices(currency: string, dayNumbers: number): Promise<CurrencyPrice[]>;
}
