import { Body, Controller, Get, Post } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateRoomDto } from "./dto/create-room-dto";

@ApiTags("Chat endpoints")
@Controller("chat")
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @ApiOperation({
        summary: "All avaiable rooms"
    })
    @ApiOkResponse()
    @Get("/")
    async allRooms() {
        return await this.chatService.allRooms();
    }

    @ApiOperation({
        summary: "Create new room"
    })
    @ApiCreatedResponse()
    @Post("/")
    async createNewRoom(@Body() roomDto: CreateRoomDto) {
        return await this.chatService.createNewRoom(roomDto);
    }
}