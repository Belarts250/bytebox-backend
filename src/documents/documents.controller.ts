import { Body, Controller, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocDto } from './dto/create-doc.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import { multerConfig } from './multer.config';

@Controller('documents')
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', multerConfig))
    async uploadDocument(
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: CreateDocDto,
        @Req() req:any,
    ) {
        const userId = req.user?.id;
        return this.documentsService.create(file, dto, userId);
    }

}
