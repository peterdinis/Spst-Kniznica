import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { CreateNewBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingService {
  constructor(private readonly prismaService: PrismaService) {}

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
    /* const newBorrowedBook = await this.prismaService.booking.create({
      data: {
        ...bookingDto
      },
    });

    return newBorrowedBook; */
    return;
  }

  async returnBook() {
    return;
  }
}
