import { Controller, Get, Delete, Param } from '@nestjs/common';
import { FileActivityService } from './file-activity.service';

@Controller('files')
export class FileActivityController {
  constructor(private readonly filesActivityService: FileActivityService) {}

  // GET /files/:type
  @Get(':type')
  findByType(@Param('type') type: string) {
    return this.filesActivityService.findByType(type);
  }

  // DELETE /files/:id
  @Delete(':id')
  deleteFile(@Param('id') id: string) {
    return this.filesActivityService.deleteFile(id);
  }
}