interface Currency {
  name: string;
  buy: number;
  sell: number;
  variation: number;
}

interface Currencies {
  source: string;
  USD: Currency;
  EUR: Currency;
  GBP: Currency;
  ARS: Currency;
  CAD: Currency;
  AUD: Currency;
  JPY: Currency;
  CNY: Currency;
  BTC: Currency;
}

interface Stock {
  name: string;
  location: string;
  points: number;
  variation: number;
}

interface Stocks {
  IBOVESPA: Stock;
  NASDAQ: Stock;
  CAC: Stock;
  NIKKEI: Stock;
}

interface Results {
  currencies: Currencies;
  stocks: Stocks;
  available_sources: string[];
  taxes: number[];
}

interface HgFinanceApiResponse {
  by: string;
  valid_key: boolean;
  results: Results;
  execution_time: number;
  from_cache: boolean;
}

export default HgFinanceApiResponse;
