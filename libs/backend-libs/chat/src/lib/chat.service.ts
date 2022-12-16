import { Injectable } from "@nestjs/common";
import { CreateRoomDto } from "./dto/create-room-dto";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";

@Injectable()
export class ChatService {
    constructor(private readonly prismaService: PrismaService) {}
    
    async createNewRoom(createRoomDto: CreateRoomDto) {
        return;
    }

    async allRooms() {
        return;
    }

    async updateRoom() {
        return;
    }

    async deleteRoom() {}
}