import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateNewBookingDto {
  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  from: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  to: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  bookId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  extended: boolean;
}
