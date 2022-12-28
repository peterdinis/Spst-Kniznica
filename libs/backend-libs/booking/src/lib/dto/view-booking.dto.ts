import { ApiProperty } from "@nestjs/swagger";

export class ViewBookingDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    from: string

    @ApiProperty()
    to: string

    @ApiProperty()
    bookId: number;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    createdAt: string;

    @ApiProperty()
    updatedAt: string;

    @ApiProperty()
    extended: boolean;
}