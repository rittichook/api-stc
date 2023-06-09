import { Test, TestingModule } from '@nestjs/testing';
import { ContentCategolyService } from './content_categoly.service';

describe('ContentCategolyService', () => {
  let service: ContentCategolyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentCategolyService],
    }).compile();

    service = module.get<ContentCategolyService>(ContentCategolyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
