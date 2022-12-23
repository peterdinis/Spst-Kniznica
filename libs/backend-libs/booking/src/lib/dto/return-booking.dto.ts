import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class ReturnBookingDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    bookId: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    teacherId: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    studentId: number;
}