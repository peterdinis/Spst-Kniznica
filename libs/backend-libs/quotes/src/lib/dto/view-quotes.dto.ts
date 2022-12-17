import { ApiProperty } from "@nestjs/swagger";

export class ViewQouteDto {
    @ApiProperty()
    author: string;

    @ApiProperty()
    text: string;
}