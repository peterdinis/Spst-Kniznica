import { Controller, Get, Param } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";

@Controller("booking")
export class BookingController {
    constructor(private readonly bookingService: BookingService) {}

    @ApiOperation({
        summary: "Find all borrowed books"
    })
    @ApiOkResponse()
    @Get("/")
    async allBorrowedBooks() {
        return this.bookingService.allBorrowedBooks();
    }

    @ApiOperation({
        summary: "Find borrowed book by detail"
    })
    @ApiOkResponse()
    @Get("/:id")
    async findOneBorrowedBook(
        @Param("id") id: number
    ) {
        return this.bookingService.borrowedBookDetail(id);
    }
}