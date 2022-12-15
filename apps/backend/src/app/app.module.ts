import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from '@spst-kniznica-project/backend-libs/books';
import { PrismaModule} from '@spst-kniznica-project/backend-libs/database';
import { CategoryModule } from '@spst-kniznica-project/backend-libs/category';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from '@spst-kniznica-project/backend-libs/student';
import { BookingModule } from '@spst-kniznica-project/backend-libs/booking';
import { QuotesModule } from '@spst-kniznica-project/backend-libs/quotes';
import { ThrottlerModule } from '@nestjs/throttler';
import { SeedersModule } from '@spst-kniznica-project/backend-libs/seeders';
import LoggerMiddleware from 'libs/backend-libs/shared/src/lib/middlewares/logger.middleware';
import {ChatModule } from '@spst-kniznica-project/backend-libs/chat'
import {CheckerModule } from '@spst-kniznica-project/backend-libs/checker'


@Module({
  imports: [
    CacheModule.register(),
    CategoryModule,
    BooksModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 50,
    }),
    PrismaModule,
    StudentModule,
    CategoryModule,
    BookingModule,
    QuotesModule,
    SeedersModule,
    ChatModule,
    CheckerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}