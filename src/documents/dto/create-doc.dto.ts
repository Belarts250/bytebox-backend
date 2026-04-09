import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDocDto {
    @IsNotEmpty()
    @IsString()
    title!: string;

    @IsOptional()
    @IsString()
    description?: string;
}