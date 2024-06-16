import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/leads')
  async getLeads(@Query() query): Promise<Array<any>> {
    return this.appService.getLeads(query);
  }
}
