import { Body, Controller, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocDto } from './dto/create-doc.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import { multerConfig } from './multer.config';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('documents')
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) {}
    @UseGuards(JWTAuthGuard)
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', multerConfig))
    async uploadDocument(
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: CreateDocDto,
        @Req() req:any,
    ) {
        const userId = "some-valid-user-id-from-db";
        console.log("FILE:", file);
        console.log("DTO:", dto);
        console.log("USER:", req.user);
        return this.documentsService.create(file, dto, userId);
    }

}
