import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from '@spst-kniznica-project/backend-libs/books';
import { PrismaModule} from '@spst-kniznica-project/backend-libs/database';
import { CategoryModule } from '@spst-kniznica-project/backend-libs/category';
import { StudentModule } from '@spst-kniznica-project/backend-libs/student';
import { BookingModule } from '@spst-kniznica-project/backend-libs/booking';
import { QuotesModule } from '@spst-kniznica-project/backend-libs/quotes';
import { ThrottlerModule } from '@nestjs/throttler';
import LoggerMiddleware from 'libs/backend-libs/shared/src/lib/middlewares/logger.middleware';
import {ChatModule } from '@spst-kniznica-project/backend-libs/chat'
import {CheckerModule } from '@spst-kniznica-project/backend-libs/checker'
import { ApiCachceModule } from '@spst-kniznica-project/backend-libs/cache';
import { SocialModule } from '@spst-kniznica-project/backend-libs/social';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AdminModule } from '@spst-kniznica-project/backend-libs/admin';
import { UsersModule } from '@spst-kniznica-project/backend-libs/users';

@Module({
  imports: [
    EventEmitterModule.forRoot(
      {
        global: true
      }
    ),
    CacheModule.register({
      isGlobal: true
    }),
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
    ChatModule,
    CheckerModule,
    ApiCachceModule,
    SocialModule,
    AdminModule,
    UsersModule,
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}