import { Controller, Get, Post, Param, Body, Put, Delete, Query } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ApiPaginatedResponse, PageOptionsDto } from "@spst-kniznica-project/backend-libs/shared";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book-dto";
import { UpdateBookDto } from "./dto/update-book-dto";
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
        return await this.booksService.findAllBooks();
    }

    @ApiOperation({
        summary: "Search for specific book"
    })
    @ApiOkResponse({
        type: ViewBookDto
    })
    @Get("/search")
    async searchForBook(
        @Query("name") name: string,
    ) {
        return await this.booksService.searchingForBook(name);
    }

    @ApiOperation({
        summary: "Get all paginated books"
    })
    @ApiPaginatedResponse(ViewBookDto)
    @Get("/paginate")
    async getPaginatedBooks(
        @Query() pageOptionsDto: PageOptionsDto
    ) {
        return this.booksService.paginateBooks(pageOptionsDto)
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

    @ApiOperation({
        summary: "Book detail"
    })
    @ApiResponse({
        type: ViewBookDto
    })
    @Get("/:id")
    async oneBook(
        @Param("id") id: number
    ) {
        return await this.booksService.getOneBook(id);
    }

    @ApiOperation({
        summary: "Update book"
    })
    @ApiResponse({
        type: UpdateBookDto
    })
    @Put("/:id/update")
    async updateBook(
        @Param("id") id: number, 
        @Body() updateBookData: UpdateBookDto
    ) {
        return await this.booksService.updateBook(id, updateBookData)
    }

    @ApiOperation({
        summary: "Delete book"
    })
    @Delete("/:id/delete")
    async deleteBook(@Param("id") id: number) {
        return await this.booksService.deleteBook(id);
    }
}