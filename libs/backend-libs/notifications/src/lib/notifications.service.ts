import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";

@Injectable()
export class NotificationsService {
    constructor(private readonly prismaService: PrismaService) {}
}