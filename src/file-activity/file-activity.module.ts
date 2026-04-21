import { Module } from '@nestjs/common';
import { FileActivityService } from './file-activity.service';

@Module({
  providers: [FileActivityService],
  exports: [FileActivityService],
})
export class FileActivityModule {}
