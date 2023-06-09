import { Test, TestingModule } from '@nestjs/testing';
import { ContentCategolyController } from './content_categoly.controller';

describe('ContentCategolyController', () => {
  let controller: ContentCategolyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentCategolyController],
    }).compile();

    controller = module.get<ContentCategolyController>(ContentCategolyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
