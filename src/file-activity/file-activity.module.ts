import { Module } from '@nestjs/common';
import { FileActivityService } from './file-activity.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [FileActivityService],
  exports: [FileActivityService],
})
//export
export class FileActivityModule {}
