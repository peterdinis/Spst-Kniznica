import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";
import { Booking, Book, Student, Teacher } from "@prisma/client";
import { CreateNewBookingDto } from "./dto/create-booking.dto";
import { BooksService } from "libs/backend-libs/books/src/lib/books.service";

@Injectable()
export class BookingService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly booksService: BooksService
    ) {}

    async allBorrowedBooks() {
        const allBooks = await this.prismaService.booking.findMany();
        return allBooks;
    }

    async borrowedBookDetail(id: number) {
        const borrowedBookDetail = await this.prismaService.booking.findUnique({
            where: {
                id
            }
        })

        if(!borrowedBookDetail) {
            throw new NotFoundException("Book with this id not found");
        }

        return borrowedBookDetail;
    }

    async borrowBook(bookingDto: CreateNewBookingDto) {
        try {

        } catch(err) {
            throw new InternalServerErrorException(err);
        }
    }

    async returnBook() {}

    async extendBook() {}

    async displayMyBorrowedBooks() {}
}