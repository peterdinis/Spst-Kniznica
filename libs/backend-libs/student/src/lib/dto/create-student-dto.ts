import {IsNotEmpty, IsString, IsEmail} from "class-validator";
import {ApiProperty} from "@nestjs/swagger"

export class CreateNewStudentDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    confirmedPassword: string;
}