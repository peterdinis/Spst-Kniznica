import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";

@Injectable()
export class CategoryService {
    constructor(private readonly prismaService: PrismaService) {}

    async findAllCategories() {
        const allCategories = await this.prismaService.category.findMany();
        return allCategories;
    }

    async createNewCategory() {
        
    }
}