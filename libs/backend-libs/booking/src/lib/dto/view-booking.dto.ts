import { ApiProperty } from "@nestjs/swagger";

export class ViewBookingDto {
    @ApiProperty()
    days: string;

    @ApiProperty()
    bookId: number;

    @ApiProperty()
    studentId: number;

    @ApiProperty()
    teacherId: number;

    @ApiProperty()
    extend: boolean;
}