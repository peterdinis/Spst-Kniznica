import { Body, Controller, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { BookingService } from './booking.service';
import {
  ApiCreatedResponse,
  ApiExcludeEndpoint,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateNewBookingDto } from './dto/create-booking.dto';
import { ViewBookingDto } from './dto/view-booking.dto';
import { ReturnBookingDto } from './dto/return-booking.dto';
import { ExtendedBookingDto } from './dto/extended-booking.dto';

@ApiTags('Borrowing')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({
    summary: 'Find all borrowed books',
  })
  @ApiOkResponse({
    type: [ViewBookingDto],
  })
  @Get('/')
  async allBorrowedBooks() {
    return this.bookingService.allBorrowedBooks();
  }

  @ApiOperation({
    summary: 'Find borrowed book by detail',
  })
  @ApiOkResponse({
    type: ViewBookingDto,
  })
  @Get('/:id')
  async findOneBorrowedBook(@Param('id') id: number) {
    return this.bookingService.borrowedBookDetail(id);
  }

  @ApiOperation({
    summary: 'Borrow book',
  })
  @ApiCreatedResponse({
    type: CreateNewBookingDto,
  })
  @Post('/')
  async borrowBook(@Body() bookingDto: CreateNewBookingDto) {
    return await this.bookingService.borrowBook(bookingDto);
  }

  @ApiOperation({
    summary: "Display my borrowed books"
  })
  @ApiOkResponse()
  @Get("/myBorrowedBooks")
  async myBorrowedBooks(@Query("username") username: string) {
    return await this.bookingService.displayMyBorowedBooks(username);
  }

  @ApiOperation({
    summary: 'Return Book',
  })
  @ApiOkResponse()
  @Patch('/book/return')
  async returnBook(@Body() returnBookingDto: ReturnBookingDto) {
    return await this.bookingService.returnBook(returnBookingDto);
  }

  @ApiOperation({
    summary: 'Extended book',
  })
  @ApiExcludeEndpoint()
  @ApiOkResponse({
    type: ExtendedBookingDto,
  })
  @Put('/book/extend')
  async extendBook(@Body() extend: ExtendedBookingDto) {
    return await this.bookingService.extendedBook(extend);
  }
}
