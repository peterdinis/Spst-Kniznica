import { ApiProperty } from '@nestjs/swagger';
import { ViewBookingDto } from '@spst-kniznica-project/backend-libs/booking';

export class ViewUsersDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  role: string;
}
