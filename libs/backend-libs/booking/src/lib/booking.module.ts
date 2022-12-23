import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import {PrismaModule} from "@spst-kniznica-project/backend-libs/database"
import { BooksModule } from '@spst-kniznica-project/backend-libs/books';
import { TeacherModule } from '@spst-kniznica-project/backend-libs/teacher';
import { StudentModule } from '@spst-kniznica-project/backend-libs/student';

@Module({
  imports: [PrismaModule, BooksModule, TeacherModule, StudentModule],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
