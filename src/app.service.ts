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
  async getLeads({ query }): Promise<Array<any>> {
    const res: any = await this.client.request.get('/api/v4/leads', query);
    let result = res.data._embedded.leads;

    for (let index = 0; index < result.length; index++) {
      result[index].user = await this.getContacts(
        result[index].responsible_user_id,
      );
    }

    return result;
  }
  async getContacts(responsible_user_id) {
    const contacts: any = await this.client.request.get('/api/v4/contacts', {
      responsible_user_id: responsible_user_id,
      limit: 1,
    });
    return contacts.data._embedded.contacts[0];
  }
}
