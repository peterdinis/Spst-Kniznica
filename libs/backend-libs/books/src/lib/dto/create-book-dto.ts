import {IsString, IsNotEmpty, IsNumber, IsBoolean} from "class-validator";
import {ApiProperty} from "@nestjs/swagger"

export class CreateBookDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    author: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    image: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    year: number;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    avaiable: boolean;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    pages: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    publisher: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}