import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";
import { CreateBookDto } from "./dto/create-book-dto";

@Injectable()
export class BooksService {
    constructor(private readonly prismaService: PrismaService) {}

    async findAllBooks() {
        const allBooks = await this.prismaService.book.findMany();
        return allBooks;
    }

    async createNewBook(bookData: CreateBookDto) {
        const newBook = await this.prismaService.book.create({
            data: {
                name: bookData.name,
                author: bookData.author,
                description: bookData.description,
                available: bookData.avaiable,
                pages: bookData.pages,
                publisher: bookData.publisher,
                year: bookData.year,
                image: bookData.image
            }
        })

        return newBook;
    }
}