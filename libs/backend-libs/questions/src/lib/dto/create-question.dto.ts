import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateQuestionDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
}