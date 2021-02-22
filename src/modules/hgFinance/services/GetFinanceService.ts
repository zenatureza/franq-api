import { injectable, inject } from 'tsyringe';

import HgFinanceApiHttpClient from '@shared/infra/http/HgFinanceApiHttpClient';
import HgFinanceApiResponse from '@shared/infra/http/HgFinanceApiHttpClient/HgFinanceApiResponse';

@injectable()
class GetFinanceService {
  constructor(
    @inject('HgFinanceApi')
    private hgFinanceApi: HgFinanceApiHttpClient,
  ) {}

  public async execute(): Promise<HgFinanceApiResponse> {
    const result = await this.hgFinanceApi.getData();
    return result.data;
  }
}

export default GetFinanceService;
