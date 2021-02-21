import { AxiosResponse } from 'axios';
import HgFinanceApiResponse from './HgFinanceApiResponse';

export default interface IHgFinanceApi {
  getData(): Promise<AxiosResponse<HgFinanceApiResponse>>;
}
