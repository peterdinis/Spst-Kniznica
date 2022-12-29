import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";

@ApiTags("Example")
@Controller("app")
export class AppController {
    constructor(private readonly appService: AppService) {}

    @ApiOperation({
        summary: "Testing endpoint"
    })
    @ApiOkResponse()
    @Get("/example")
    async getExample() {
        return await this.appService.exampleData();
    }
}