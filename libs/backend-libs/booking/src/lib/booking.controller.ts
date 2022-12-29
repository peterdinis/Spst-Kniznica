import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { BookingService } from './booking.service';
import {
  ApiCreatedResponse,
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
    summary: 'Find all my borrowed books',
  })
  @ApiOkResponse()
  @Get('/borrowed/:email')
  async myBorrowedBooks(@Param('email') email: string) {
    return await this.bookingService.displayMyBorowedBooks(email);
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
  @ApiOkResponse({
    type: ExtendedBookingDto,
  })
  @Put('/book/extend')
  async extendBook(@Body() extend: ExtendedBookingDto) {
    return await this.bookingService.extendedBook(extend);
  }
}
