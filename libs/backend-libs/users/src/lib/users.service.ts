import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {}

    async getUser() {}

    async createUser() {}

    async loginUser() {}

    async registerUser() {}
}