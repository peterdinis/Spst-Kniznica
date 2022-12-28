import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateRoomDto } from "./dto/create-room-dto";
import { UpdateRoomDto } from "./dto/update-room.dto";

@ApiTags("Chat endpoints")
@Controller("chat")
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @ApiOperation({
        summary: "All avaiable rooms"
    })
    @ApiOkResponse()
    @Get("/rooms")
    async allRooms() {
        return await this.chatService.allRooms();
    }

    @ApiOperation({
        summary: "Create new room"
    })
    @ApiCreatedResponse()
    @Post("/rooms")
    async createNewRoom(@Body() roomDto: CreateRoomDto) {
        return await this.chatService.createNewRoom(roomDto);
    }

    @ApiOperation({
        summary: "Update room"
    })
    @ApiOkResponse({type: UpdateRoomDto})
    @Put("/rooms/:id/update")
    async updateRoom(@Param("id") id: number, @Body() roomDto: UpdateRoomDto) {
        return await this.chatService.updateRoom(id, roomDto);
    }

    @ApiOperation({
        summary: "Delete room"
    })
    @ApiOkResponse()
    @Delete("/rooms/:id/delete")
    async deleteRoom(@Param("id") id: number) {
        return await this.chatService.deleteRoom(id);
    }
}