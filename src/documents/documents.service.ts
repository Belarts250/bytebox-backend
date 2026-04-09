import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateDocDto } from './dto/create-doc.dto';

@Injectable()
export class DocumentsService {
    constructor(private prisma: PrismaService) {}

    async create(file: Express.Multer.File, dto: CreateDocDto, userId: string) {
        if(!file) {
            throw new BadRequestException('File is required');

            const document = await this.prisma.document.create({
                data: {
                    title: dto.title,
                    description: dto.description ?? '',
                    fileName: file.filename,
                    fileType: file.mimetype,
                    fileSize: file.size,
                    userId: userId,
                }
            });

            await this.prisma.fileActivity.create({
                data: {
                    action: 'UPLOAD',
                    documentId: document.id,
                    userId: userId,
                }
            })

            return {
                message: 'Document uploaded successfully',
                document,
            }

        }
    }
}
