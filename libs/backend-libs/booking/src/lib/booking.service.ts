import {
  HttpException,
  Injectable,
  InternalServerErrorException
} from '@nestjs/common';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { CreateNewBookingDto } from './dto/create-booking.dto';
import { BooksService } from 'libs/backend-libs/books/src/lib/books.service';
import { StudentService } from '@spst-kniznica-project/backend-libs/student';
import { TeacherService } from '@spst-kniznica-project/backend-libs/teacher';

@Injectable()
export class BookingService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly booksService: BooksService,
    private readonly studentService: StudentService,
    private readonly teacherService: TeacherService
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
      throw new HttpException("message", 404, {cause: new Error("Borrowed book with id not found")})
    }

    return borrowedBookDetail;
  }

  async borrowBook(bookingDto: CreateNewBookingDto) {
   return;
  }

  async returnBook() {
    return;
  }
}
