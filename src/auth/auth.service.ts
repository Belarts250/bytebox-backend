import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt'


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
}
