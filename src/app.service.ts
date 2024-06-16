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
  async getLeads(): Promise<any> {
    const res = await this.client.leads.get();
    return res.getData();
  }
}
