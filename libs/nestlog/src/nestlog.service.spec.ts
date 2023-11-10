import { Test, TestingModule } from '@nestjs/testing';
import { NestlogService } from './nestlog.service';

describe('NestlogService', () => {
  let service: NestlogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestlogService],
    }).compile();

    service = module.get<NestlogService>(NestlogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
