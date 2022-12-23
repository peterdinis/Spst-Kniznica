import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { CreateNewBookingDto } from './dto/create-booking.dto';
import { BooksService } from 'libs/backend-libs/books/src/lib/books.service';
import { NONAVAIABLE } from './utils/book.status';
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
    const borrowedBookDetail = await this.prismaService.booking.findUnique({
      where: {
        id,
      },
    });

    if (!borrowedBookDetail) {
      throw new NotFoundException('Book with this id not found');
    }

    return borrowedBookDetail;
  }

  async borrowBook(bookingDto: CreateNewBookingDto) {
    try {
      const bookForBorrow = await this.booksService.getOneBook(
        bookingDto.bookId
      );
      if (!bookForBorrow) {
        throw new NotFoundException('Book with this id not found');
      }

      if (bookForBorrow.status === NONAVAIABLE) {
        throw new ConflictException('Book can not be borrowed');
      }

      const findStudent = await this.studentService.findOneStudent(
        bookingDto.studentId
      );

      if (!findStudent) {
        throw new NotFoundException('Student with this id not found');
      }

      const findTeacher = await this.teacherService.findOneTeacher(
        bookingDto.teacherId
      );

      if (!findTeacher) {
        throw new NotFoundException('Teacher with this id not found');
      }

      if (bookingDto.studentId !== null || bookingDto.studentId !== undefined) {
        const newBookToCard = await this.prismaService.booking.create({
            data: {
                days: bookingDto.days,
                bookId: bookingDto.bookId,
                studentId: bookingDto.studentId,
                extend: bookingDto.extend,
            }
        })

        return newBookToCard;
      }

      if (bookingDto.teacherId !== null && bookingDto.teacherId !== undefined) {
        const newBookToCard = await this.prismaService.booking.create({
            data: {
                days: bookingDto.days,
                bookId: bookingDto.bookId,
                teacherId: bookingDto.teacherId,
                extend: bookingDto.extend,
            }
        })

        return newBookToCard;
      }
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  async returnBook() {}

  async extendBook() {}
}
