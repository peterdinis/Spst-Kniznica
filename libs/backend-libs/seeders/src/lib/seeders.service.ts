import { Injectable } from "@nestjs/common";
import {PrismaService} from "@spst-kniznica-project/backend-libs/database"

@Injectable()
export class SeedersService {
    constructor(private readonly prismaService: PrismaService) {}

    async createManyBooks() {}

    async createManyCategories() {}
}