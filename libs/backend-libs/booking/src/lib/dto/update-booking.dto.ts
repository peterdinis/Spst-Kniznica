import { PartialType } from "@nestjs/swagger";
import { CreateNewBookingDto } from "./create-booking.dto";

export class UpdateBookingDto extends PartialType(CreateNewBookingDto) {}