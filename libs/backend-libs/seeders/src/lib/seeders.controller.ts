import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Seeders")
@Controller("seeders")
export class SeedersController {}