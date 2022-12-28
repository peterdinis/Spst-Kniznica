import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import {PrismaModule} from "@spst-kniznica-project/backend-libs/database"
import { BooksModule } from '@spst-kniznica-project/backend-libs/books';

@Module({
  imports: [PrismaModule, BooksModule],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
