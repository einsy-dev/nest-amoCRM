import { Client } from 'amocrm-js';
import { Injectable } from '@nestjs/common';
import { IAmoCrmService } from './amocrm.interface';

@Injectable()
export class AmocrmService implements IAmoCrmService {
  async client() {
    return new Client({
      domain: 'einsyeager.amocrm.ru',
      auth: {
        client_id: '6bfa2a92-a2dc-48f2-acca-d35fbf11ecba',
        client_secret:
          'JJMn7lldcMjkxbbSjZ71DnGZYRDEpZk35cOV4Fr3Oxh5vIT0jUtEqdQkWtcVvFcK',
        redirect_uri: 'http://localhost:3000',
        bearer:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNlODg3NGZiODUyOTcxZmZmNjI1YTA4MDcyNDY1YzA2NjczYTNhZGI5MDgzNTM3YzhjNzExMmY0OTVjMDNmNjQ0ZTNlMWU5YzZkNzNiN2IyIn0.eyJhdWQiOiI2YmZhMmE5Mi1hMmRjLTQ4ZjItYWNjYS1kMzVmYmYxMWVjYmEiLCJqdGkiOiJjZTg4NzRmYjg1Mjk3MWZmZjYyNWEwODA3MjQ2NWMwNjY3M2EzYWRiOTA4MzUzN2M4YzcxMTJmNDk1YzAzZjY0NGUzZTFlOWM2ZDczYjdiMiIsImlhdCI6MTcxODUzMzUyNSwibmJmIjoxNzE4NTMzNTI1LCJleHAiOjE3Mjc2NTQ0MDAsInN1YiI6IjExMTYzNTk4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODAyODQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZTQ2ZWY5ODMtYWVmMy00MjhlLWE0ZjYtYzUwOGUxMTk0MjMyIn0.ccjWjcpBkiIrcrttLZBmqd5rgRvYdseN3OIm4AcpPUQnQeBhyGTd1xF_nMoEVGUvLbJE9LX2GehXO7gU9NBgGidjHjHJTvDiuFbttUlYoL7vKP2gTz95_GxQYAS8QaSvQDFpy9a2rJwJ3IWUor5cVG_O7VoDLa7VlhvRaIfofkPJtzdQGRZWJ_hEpPCHHre0SnAgYF3UCIGFJYpHtqUUtlcGqQNMi5GZ4AYUK9a9rClbjKXsu82DcatZ2mwS1_Nc7Z_Ja_e-1ncDYtCKyTxDgTVxDXQkpQ9RaEZNlgqDQnWhmNGLRbCdSl8mYyA3kkjf5u0tUwe00tj5V1mM6CC48g',
      },
    });
  }
}
