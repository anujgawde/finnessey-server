import { Test, TestingModule } from '@nestjs/testing';
import { PerplexityController } from './perplexity.controller';
import { PerplexityService } from './perplexity.service';

describe('PerplexityController', () => {
  let controller: PerplexityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerplexityController],
      providers: [PerplexityService],
    }).compile();

    controller = module.get<PerplexityController>(PerplexityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
