import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";

@ApiTags("Example")
@Controller("app")
export class AppController {
    constructor(private readonly appService: AppService) {}
}