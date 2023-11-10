import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestlogModule } from '@nestlog/nestlog';
import { RequestifyModule } from '@requestify/requestify';

@Module({
  imports: [NestlogModule, RequestifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
