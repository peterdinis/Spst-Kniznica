import { Injectable } from "@nestjs/common";
import {PrismaService} from "@spst-kniznica-project/backend-libs/database"
import { CreateBookDto } from "./dto/book-seeders.dto";
import { CreateCategoryDto } from "./dto/category-seeders.dto";

@Injectable()
export class SeedersService {
    constructor(private readonly prismaService: PrismaService) {}

    async createManyBooks(newBook: CreateBookDto) {
        
    }

    async createManyCategories(newCategory: CreateCategoryDto) {
        
    }
}