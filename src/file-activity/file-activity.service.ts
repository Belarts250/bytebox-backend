import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FileActivityService {


  constructor(private prisma: PrismaService) {}


  async findByType(type: string) {
    return this.prisma.fileActivity.findMany({
      where: {
        document: {
          fileType: type
        }
      }
    });
  }

 
  async deleteFile(id: number) {
    return this.prisma.fileActivity.delete({
      where: {
        id
      }
    });
  }
}