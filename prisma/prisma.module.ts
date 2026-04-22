// prisma.module.ts
import { Module } from '@nestjs/common';
import {PrismaService} from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // <-- IMPORTANT, allows other modules to use it
})
export class PrismaModule {}