import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";
import { Booking, Book, Student, Teacher } from "@prisma/client";

@Injectable()
export class BookingService {
    constructor(private readonly prismaService: PrismaService) {}

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

    async borrowBook() {}

    async returnBook() {}

    async extendBook() {}

    async displayMyBorrowedBooks() {}
}