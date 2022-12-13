import { ApiProperty } from "@nestjs/swagger";

export class ViewCategoryDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;
}