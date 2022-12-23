import { Controller, Get } from "@nestjs/common";
import { TeacherService } from "./teacher.service";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Teacher")
@Controller("teacher")
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}

    @ApiOperation({
        summary: "Generate random password"
    })
    @ApiOkResponse()
    @Get("/password/random")
    async generateRandomPassword() {
        return await this.teacherService.generateRandomPassword()
    }
}