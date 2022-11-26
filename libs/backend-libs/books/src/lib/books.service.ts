import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";

@Injectable()
export class BooksService {
    constructor(private readonly prismaService: PrismaService) {}

    
}