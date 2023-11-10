import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/log')
  logExample(): string {
    return this.appService.getLog();
  }

  @Get('/http')
  httpExample() {
    return this.appService.getRequest();
  }
}
