import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '../database/database.module'
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import {PassportModule} from '@nestjs/passport'
import { JWTStrategy } from './strategies/jwt.strategy';


@Module({
  imports: [DatabaseModule,
     PassportModule,
      JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [JWTStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
