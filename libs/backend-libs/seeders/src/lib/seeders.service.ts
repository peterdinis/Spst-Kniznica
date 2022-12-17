import { Injectable } from "@nestjs/common";
import {PrismaService} from "@spst-kniznica-project/backend-libs/database"
import { CreateBookDto } from "./dto/book-seeders.dto";
import { CreateCategoryDto } from "./dto/category-seeders.dto";


/* 
createMany is not supported on SQLite unfortunately: #10710 Documented here:
After switch to pg test these endpoints
*/

@Injectable()
export class SeedersService {
    constructor(private readonly prismaService: PrismaService) {}

    async createManyBooks(newBook: CreateBookDto) {
        const newBooks = await this.prismaService.book.create({
            data: newBook
        })

        return newBooks;
    }

    async createManyCategories(newCategory: CreateCategoryDto) {
        const newCategories = await this.prismaService.category.create({
            data: newCategory
        })

        return newCategories;
    }
}