import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";

@Injectable()
export class AdminService {
    constructor(private readonly prismaService: PrismaService) {}
}