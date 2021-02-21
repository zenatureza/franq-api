import { AxiosInstance, AxiosResponse } from 'axios';
import { inject, injectable } from 'tsyringe';
import HgFinanceApiResponse from './HgFinanceApiResponse';
import IHgFinanceApi from './IHgFinanceApi';

@injectable()
export default class HgFinanceApiHttpClient implements IHgFinanceApi {
  constructor(
    @inject('hgFinanceApiHttpClient')
    private readonly httpClient: AxiosInstance,
  ) {}

  public async getData(): Promise<AxiosResponse<HgFinanceApiResponse>> {
    const response = await this.httpClient.get('/');

    return response;
  }
}
