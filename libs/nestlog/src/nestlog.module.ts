import { Module } from '@nestjs/common';
import { NestlogService } from './nestlog.service';

@Module({
  providers: [NestlogService],
  exports: [NestlogService],
})
export class NestlogModule {}
