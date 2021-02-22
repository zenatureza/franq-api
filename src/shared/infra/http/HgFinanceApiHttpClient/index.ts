import { AxiosInstance, AxiosResponse } from 'axios';
import { inject, injectable } from 'tsyringe';
import HgFinanceApiResponse from './HgFinanceApiResponse';
import IHgFinanceApi from './IHgFinanceApi';

@injectable()
export default class HgFinanceApiHttpClient implements IHgFinanceApi {
  constructor(
    @inject('HgFinanceApiHttpClient')
    private readonly httpClient: AxiosInstance,
  ) {}

  public async getData(): Promise<AxiosResponse<HgFinanceApiResponse>> {
    const response = await this.httpClient.get('/', {
      params: {
        key: process.env.HGFINANCE_KEY,
      },
    });

    return response;
  }
}
