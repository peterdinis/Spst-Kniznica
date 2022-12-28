import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class ExtendedBookingDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    bookId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    to: string;
}