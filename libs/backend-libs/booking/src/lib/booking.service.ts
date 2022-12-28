import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { CreateNewBookingDto } from './dto/create-booking.dto';
import { BooksService } from '@spst-kniznica-project/backend-libs/books';
import { AVAIABLE, NONAVAIABLE } from './utils/book.status';
import { ReturnBookingDto } from './dto/return-booking.dto';
import { ExtendedBookingDto } from './dto/extended-booking.dto';

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
    try {
      const newBorrowedBook = await this.prismaService.booking.create({
        data: {
          ...bookingDto,
        },
      });

      await this.bookService.updateBook(bookingDto.bookId, {
        status: NONAVAIABLE,
      });

      return newBorrowedBook;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async returnBook(returnBokingDto: ReturnBookingDto) {
    try {
      const existingBorrowedBook = await this.prismaService.booking.findUnique({
        where: {
          id: returnBokingDto.bookId,
        },
      });

      if (!existingBorrowedBook) {
        throw new NotFoundException('Booking not found');
      }

      const removeFromList = await this.prismaService.booking.delete({
        where: {
          id: existingBorrowedBook.bookId,
        },
      });

      if (!removeFromList) {
        throw new NotFoundException('Book not found');
      }

      await this.bookService.updateBook(returnBokingDto.bookId, {
        status: AVAIABLE,
      });

    return removeFromList;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async extendedBook(extendDto: ExtendedBookingDto) {
    try {
      const existingBorrowedBook = await this.prismaService.booking.findUnique({
        where: {
          id: extendDto.bookId,
        },
      });

      if (!existingBorrowedBook) {
        throw new NotFoundException('Booking not found');
      }

      const extendedExisitngBook = await this.prismaService.booking.update({
        where: {
          id: extendDto.bookId
        },

        data: {
          to: extendDto.to
        }
      });

      await this.bookService.updateBook(extendDto.bookId, {
        status: AVAIABLE,
      });

      return extendedExisitngBook;


    } catch(err) {
      throw new BadRequestException(err);
    }
  }
}
