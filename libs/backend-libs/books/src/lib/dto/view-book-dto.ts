import { ApiProperty } from "@nestjs/swagger";

export class ViewBookDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    author: string;

    @ApiProperty()
    year: number;

    @ApiProperty()
    avaiable: boolean;

    @ApiProperty()
    pages: number;

    @ApiProperty()
    publisher: string;

    @ApiProperty()
    categoryId: number;
}