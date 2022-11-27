import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";
import { CreateBookDto } from "./dto/create-book-dto";
import { UpdateBookDto } from "./dto/update-book-dto";

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

    async getOneBook(id: number) {
        const oneBook = await this.prismaService.book.findUnique({
            where: {
                id
            }
        })

        if(!oneBook) {
            throw new NotFoundException("Book not found");
        }

        return oneBook;
    }

    async updateBook(id: number, updateData: UpdateBookDto) {
        const updateBook = await this.prismaService.book.update({
            where: {
                id
            },

            data: updateData
        })

        if(!updateBook) {
            throw new NotFoundException("Book not found")
        }

        return updateBook;
    }

    async deleteBook(id: number) {
        const oneBook = await this.prismaService.book.delete({
            where: {
                id
            }
        })

        if(!oneBook) {
            throw new NotFoundException("Book not found");
        }

        return oneBook;
    }
}