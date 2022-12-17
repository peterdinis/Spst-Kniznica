import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SeedersService } from "./seeders.service";
import { CreateBookDto } from "./dto/book-seeders.dto";
import { CreateCategoryDto } from "./dto/category-seeders.dto";

@ApiTags("Seeders")
@Controller("seeders")
export class SeedersController {
    constructor(private readonly seedersService: SeedersService) {}

    @Post("/books")
    async seedingBooks(
        @Body() testBookDto: CreateBookDto
    ) {
        return await this.seedersService.createManyBooks(testBookDto)
    }

    @Post("/categories")
    async seedingCategories(
        @Body() testCategoryDto: CreateCategoryDto
    ) {
        return await this.seedersService.createManyCategories(testCategoryDto)
    }
}