import { RegisterUserDto } from "./register-users.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateUserDto extends PartialType(RegisterUserDto) {}