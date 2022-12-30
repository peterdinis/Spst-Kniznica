import { ApiProperty } from "@nestjs/swagger";
import { ViewBookDto } from "libs/backend-libs/books/src/lib/dto/view-book-dto";

export class ViewCategoryDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    books: ViewBookDto[]
}