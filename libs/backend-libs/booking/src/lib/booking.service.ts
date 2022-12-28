import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { CreateNewBookingDto } from './dto/create-booking.dto';
import { BooksService } from '@spst-kniznica-project/backend-libs/books';
import { NONAVAIABLE } from './utils/book.status';

@Injectable()
export class BookingService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly bookService: BooksService
  ) {}

  async allBorrowedBooks() {
    const allBooks = await this.prismaService.booking.findMany();
    return allBooks;
  }

  async borrowedBookDetail(id: number) {
    const borrowedBookDetail = await this.prismaService.booking.findFirst({
      where: {
        id,
      },
    });

    if (!borrowedBookDetail) {
      throw new HttpException('Borrowed book with id not found', 404, {
        cause: new Error('Borrowed book with id not found'),
      });
    }

    return borrowedBookDetail;
  }

  async borrowBook(bookingDto: CreateNewBookingDto) {
    const newBorrowedBook = await this.prismaService.booking.create({
      data: {
        ...bookingDto,
      },
    });

    await this.bookService.updateBook(bookingDto.bookId, {
      status: NONAVAIABLE,
    });

    return newBorrowedBook;
  }

  async returnBook() {
    return;
  }
}
