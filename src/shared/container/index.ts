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

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
container.registerSingleton<ILogProvider>('LogProvider', WinstonLogProvider);

container.registerSingleton<HttpLogger>('HttpLogger', HttpLogger);

container.registerInstance<AxiosInstance>(
  'hgFinanceApiHttpClient',
  axios.create({
    baseURL: hgFinanceApiConfig.baseURL,
  }),
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
