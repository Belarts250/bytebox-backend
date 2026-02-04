import { Test, TestingModule } from '@nestjs/testing';
import { FileActivityService } from './file-activity.service';

describe('FileActivityService', () => {
  let service: FileActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileActivityService],
    }).compile();

    service = module.get<FileActivityService>(FileActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
