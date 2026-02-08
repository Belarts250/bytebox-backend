import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt'
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    async register(dto: RegisterDto){
        const existingUser = await this.prisma.user.findUnique({
            where: {email: dto.email},
        })

        if(existingUser){
            throw new BadRequestException('Email already exists')
        }

        const hashedPassword = await bcrypt.hash(dto.password, 10)

        const user = await this.prisma.user.create({
            data: {
                firstName: dto.firstName,
                lastName: dto.lastName,
                email: dto.email,
                password: hashedPassword,
                role: 'USER',
            }
        })

        const { password, ...result} = user

        return result;
    }

    async login(dto: LoginDto){
        const user = await this.prisma.user.findUnique({
            where: {email: dto.email}
        })

        if(!user){
            throw new UnauthorizedException('Invalid credentials')

        }

        const passwordMatch = await bcrypt.compare(
            dto.password,
            user.password
        )

        if(!passwordMatch){
            throw new UnauthorizedException('Invaalid credentials')
        }

        const {password, ...result } = user

        return result
    }
}
