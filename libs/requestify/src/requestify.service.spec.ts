import { Test, TestingModule } from '@nestjs/testing';
import { RequestifyService } from './requestify.service';

describe('RequestifyService', () => {
  let service: RequestifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestifyService],
    }).compile();

    service = module.get<RequestifyService>(RequestifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
