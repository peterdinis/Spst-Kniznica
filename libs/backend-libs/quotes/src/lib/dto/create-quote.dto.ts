import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateQuoteDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    author: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    text: string;
}