import { container } from 'tsyringe';
import axios, { AxiosInstance } from 'axios';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import BCryptHashProvider from '@shared/infra/providers/HashProvider/implementations/BCryptHashProvider';
import IHashProvider from '@shared/infra/providers/HashProvider/interfaces/IHashProvider';
import WinstonLogProvider from '@shared/infra/providers/LogProvider/implementations/WinstonLogProvider';
import ILogProvider from '@shared/infra/providers/LogProvider/interfaces/ILogProvider';
import HttpLogger from '@shared/infra/http/middlewares/httpLogger';

import hgFinanceApiConfig from '@config/hgFinanceApi';
import HgFinanceApiHttpClient from '@shared/infra/http/HgFinanceApiHttpClient';
import IStockPricesProvider from '@shared/infra/providers/StockPricesProvider/interfaces/IStockProvider';
import YahooStockPricesProvider from '@shared/infra/providers/StockPricesProvider/implementations/YahooStockPricesProvider';
import awesomeApi from '@config/awesomeApi';
import ICurrencyPricesProvider from '@shared/infra/providers/CurrencyPricesProvider/interfaces/ICurrencyPricesProvider';
import AwesomeApiCurrencyPricesProvider from '@shared/infra/providers/CurrencyPricesProvider/implementations/AwesomeApiCurrencyPricesProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
container.registerSingleton<IStockPricesProvider>(
  'StockPricesProvider',
  YahooStockPricesProvider,
);
container.registerSingleton<ICurrencyPricesProvider>(
  'CurrencyPricesProvider',
  AwesomeApiCurrencyPricesProvider,
);
container.registerSingleton<ILogProvider>('LogProvider', WinstonLogProvider);

container.registerSingleton<HttpLogger>('HttpLogger', HttpLogger);

container.registerSingleton<HgFinanceApiHttpClient>(
  'HgFinanceApi',
  HgFinanceApiHttpClient,
);

container.registerInstance<AxiosInstance>(
  'HgFinanceApiHttpClient',
  axios.create({
    baseURL: hgFinanceApiConfig.baseURL,
  }),
);

container.registerInstance<AxiosInstance>(
  'AwesomeApiHttpClient',
  axios.create({
    baseURL: awesomeApi.baseURL,
  }),
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
