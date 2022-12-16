import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Social Endpoints")
@Controller("social")
export class SocialController {}