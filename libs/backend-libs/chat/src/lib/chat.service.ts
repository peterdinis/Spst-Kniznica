import { Injectable } from "@nestjs/common";
import { CreateRoomDto } from "./dto/create-room-dto";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";
import { ApiCachceService } from "@spst-kniznica-project/backend-libs/cache";

@Injectable()
export class ChatService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly apiCacheService: ApiCachceService
    ) {}
    
    async createNewRoom(createRoomDto: CreateRoomDto) {
        const newBook = await this.prismaService.chat.create({
            data: {
                name: createRoomDto.name,
                description: createRoomDto.description,
                roomId: createRoomDto.roomId
            }
        })
        await this.apiCacheService.clearCache();
        return newBook;
    }

    async allRooms() {
        const allRooms = await this.prismaService.chat.findMany();
        return allRooms;
    }

    async updateRoom() {
        return;
    }

    async deleteRoom() {}
}