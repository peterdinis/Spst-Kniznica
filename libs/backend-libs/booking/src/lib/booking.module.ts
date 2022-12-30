import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import {PrismaModule} from "@spst-kniznica-project/backend-libs/database"
import { BooksModule } from '@spst-kniznica-project/backend-libs/books';
import { UsersModule } from '@spst-kniznica-project/backend-libs/users';
import { NotificationsModule } from '@spst-kniznica-project/backend-libs/notifications';

@Module({
  imports: [PrismaModule, BooksModule, UsersModule, NotificationsModule],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
