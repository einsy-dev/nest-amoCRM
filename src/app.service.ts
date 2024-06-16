import { Client } from 'amocrm-js';
import { AmocrmService } from './amocrm/amocrm.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private client: Client;
  constructor(private readonly AmocrmService: AmocrmService) {
    (async () => {
      this.client = await this.AmocrmService.client();
    })();
  }
  async getLeads({ query }): Promise<any> {
    const res: any = await this.client.request.get('/api/v4/leads', query);
    console.log(res.data);
    return res.data;
  }
}
