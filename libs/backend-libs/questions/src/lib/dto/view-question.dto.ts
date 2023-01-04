import { ApiProperty } from "@nestjs/swagger";

export class ViewQuestionDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    answer: string;
}