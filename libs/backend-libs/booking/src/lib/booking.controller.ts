import { Controller, Get, Param } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ViewBookingDto } from "./dto/view-booking.dto";

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
}