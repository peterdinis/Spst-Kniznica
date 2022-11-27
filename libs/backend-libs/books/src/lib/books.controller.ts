import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book-dto";
import { ViewBookDto } from "./dto/view-book-dto";

@ApiTags("Books")
@Controller("books")
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @ApiOperation({
        summary: "Find all Books"
    })
    @ApiResponse({
        type: [ViewBookDto]
    })
    @Get("/")
    async allBooks() {
        return this.booksService.findAllBooks();
    }

    @ApiOperation({
        summary: "Create new book"
    })
    @ApiResponse({
        type: CreateBookDto
    })
    @Post("/")
    async createBook(@Body() createBook: CreateBookDto) {
        return await this.booksService.createNewBook(createBook)
    }
}