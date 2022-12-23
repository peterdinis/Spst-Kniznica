import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ViewBookingDto } from "./dto/view-booking.dto";
import { CreateNewBookingDto } from "./dto/create-booking.dto";

@ApiTags("Borrowing")
@Controller("booking")
export class BookingController {
    constructor(private readonly bookingService: BookingService) {}

    @ApiOperation({
        summary: "Find all borrowed books"
    })
    @ApiOkResponse({
        type: [ViewBookingDto]
    })
    @Get("/")
    async allBorrowedBooks() {
        return this.bookingService.allBorrowedBooks();
    }

    @ApiOperation({
        summary: "Find borrowed book by detail"
    })
    @ApiOkResponse({
        type: ViewBookingDto
    })
    @Get("/:id")
    async findOneBorrowedBook(
        @Param("id") id: number
    ) {
        return this.bookingService.borrowedBookDetail(id);
    }

    @ApiOperation({
        summary: "Borrow book"
    })
    @ApiCreatedResponse()
    @Post("/")
    async borrowBook(@Body() bookingDto: CreateNewBookingDto) {
        return await this.bookingService.borrowBook(bookingDto);
    }
}