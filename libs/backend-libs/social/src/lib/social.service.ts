import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";

@Injectable()
export class SocialService {
    constructor(private readonly prismaService: PrismaService) {}

    async login() {
        /* const findOneUser = await this.prismaService.socialUser.findOne(); */
    }
}