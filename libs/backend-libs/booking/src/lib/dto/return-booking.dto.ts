import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber} from "class-validator";

export class ReturnBookingDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    bookId: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    studentId: number;
}