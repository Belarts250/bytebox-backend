import { Controller, Get, Delete, Param } from '@nestjs/common';
import { FileActivityService } from './file-activity.service';

@Controller('files')
export class FileActivityController {
  constructor(private readonly filesActivityService: FileActivityService) {}

  @Get(':type')
  findByType(@Param('type') type: string) {
    return this.filesActivityService.findByType(type);
  }

  @Delete(':id')
  deleteFile(@Param('id') id: number) {
    return this.filesActivityService.deleteFile(id);
  }
}