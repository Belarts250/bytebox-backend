import {IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class RegisterDto {

    @IsNotEmpty()
    firstName : string;

    @IsNotEmpty()
    lastName : string;

    @IsEmail()
    email: string;

    @MinLength(5)
    password : string;
}