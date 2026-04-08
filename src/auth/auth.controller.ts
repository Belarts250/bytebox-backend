import { Controller, Body, Post, UsePipes, ValidationPipe, HttpCode, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { LogoutDto } from './dto/logout.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    @UsePipes(new ValidationPipe())
    register(@Body() dto: RegisterDto) {
        return this.authService.register(dto)
    
    }
    //login
    @Post('login')
    @HttpCode(200)
    @UsePipes(new ValidationPipe())
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto)
    }

    //logout
  
    @Post('logout')
@HttpCode(200)
async logout(@Body() dto: LogoutDto) {

  if (!dto.refreshToken) {
    throw new BadRequestException('refreshToken is required');
  }

  return this.authService.logout(dto.refreshToken);
}
    
}
