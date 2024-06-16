import { Client } from 'amocrm-js';
import { AmocrmService } from './amocrm/amocrm.service';
import { Injectable } from '@nestjs/common';
import { filter } from 'rxjs';

@Injectable()
export class AppService {
  private client: Client;

  constructor(private readonly AmocrmService: AmocrmService) {
    (async () => {
      this.client = await this.AmocrmService.client();
    })();
  }

  // Главный метод
  async getLeads({ query }): Promise<Array<any>> {
    const res: any = await this.client.request.get('/api/v4/leads', query);
    let result = res.data._embedded.leads;
    // Перебираем лиды
    for (let index = 0; index < result.length; index++) {
      // Получаем контакт ответственного
      result[index].user = await this.getContacts(
        result[index].responsible_user_id,
      );
      // Получаем статус
      let pipeline = await this.getPipeline(result[index].pipeline_id);
      result[index].status = pipeline.find(
        (item) => item.id == result[index].status_id,
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

  async getPipeline(pipeline_id) {
    const pipeline: any = await this.client.request.get(
      '/api/v4/leads/pipelines',
      { pipeline_id },
    );
    return pipeline.data._embedded.pipelines[0]._embedded.statuses;
  }
}
