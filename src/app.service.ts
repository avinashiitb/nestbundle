import { Injectable } from '@nestjs/common';
import { NestlogService } from '@nestlog/nestlog';
import { RequestifyService } from '@requestify/requestify';

@Injectable()
export class AppService {
  constructor(
    private readonly nestlogService: NestlogService,
    private readonly requestifyService: RequestifyService,
  ) {}
  getLog(): string {
    this.nestlogService.info('logger library info testing');
    return 'logger library info testing';
  }

  async getRequest() {
    const response = await this.requestifyService.get(
      'https://api.coindesk.com/v1/bpi/currentprice.json',
    );
    return response.data;
  }
}
