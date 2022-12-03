import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from '@spst-kniznica-project/backend-libs/books';
import { PrismaModule} from '@spst-kniznica-project/backend-libs/database';
import { CategoryModule } from '@spst-kniznica-project/backend-libs/category';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from '@spst-kniznica-project/backend-libs/student';
import { BookingModule } from '@spst-kniznica-project/backend-libs/booking';
import { QuotesModule } from '@spst-kniznica-project/backend-libs/quotes';

@Module({
  imports: [
    CategoryModule,
    BooksModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    PrismaModule,
    StudentModule,
    CategoryModule,
    BookingModule,
    QuotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
