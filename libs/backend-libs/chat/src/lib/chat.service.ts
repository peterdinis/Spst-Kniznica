import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room-dto';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class ChatService {
  constructor(
    private readonly prismaService: PrismaService
  ) {}

  async createNewRoom(createRoomDto: CreateRoomDto) {
    const newBook = await this.prismaService.chat.create({
      data: {
        name: createRoomDto.name,
        description: createRoomDto.description,
        roomId: createRoomDto.roomId,
      },
    });
    return newBook;
  }

  async allRooms() {
    const allRooms = await this.prismaService.chat.findMany();
    return allRooms;
  }

  async updateRoom(id: number, updateData: UpdateRoomDto) {
    try {
      const updatedRoom = await this.prismaService.chat.update({
        where: {
          id,
        },

        data: updateData,
      });

      if (!updatedRoom) {
        throw new NotFoundException('Room not found');
      }
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async deleteRoom(id: number) {
    const oneRoom = await this.prismaService.chat.delete({
        where: {
            id
        }
    })

    if(!oneRoom) {
        throw new NotFoundException("Room not found");
    }

    return oneRoom;
  }
}
