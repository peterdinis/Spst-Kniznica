import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateNewBookingDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  days: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  bookId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  studentId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  teacherId: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  extend: boolean;
}
