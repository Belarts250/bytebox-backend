import { Module } from '@nestjs/common';
import { FileActivityService } from './file-activity.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [FileActivityService],
  exports: [FileActivityService],
})
// eslint-disable-next-line prettier/prettier
export class FileActivityModule {}
