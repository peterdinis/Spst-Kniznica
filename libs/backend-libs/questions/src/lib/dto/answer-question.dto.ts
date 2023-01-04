import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,  IsString } from "class-validator";

export class AnswerTheQuestionDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    newAnswer: string;
}