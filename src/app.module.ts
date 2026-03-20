import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DocumentsModule } from './documents/documents.module';
import { FileActivityModule } from './file-activity/file-activity.module';
import { ContactController } from './contact/contact.controller';
import { EmailService } from './email/email.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    DocumentsModule,
    FileActivityModule
  ],
  controllers: [ContactController, AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
