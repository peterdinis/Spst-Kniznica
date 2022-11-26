import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { BooksService } from "./books.service";

@ApiTags("Books")
@Controller("books")
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @ApiOperation({
        summary: "Find all Books"
    })
    @Get("/")
    async allBooks() {
        return this.booksService.findAllBooks();
    }
}