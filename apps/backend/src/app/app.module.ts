import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from '@spst-kniznica-project/backend-libs/books';
import { PrismaModule} from '@spst-kniznica-project/backend-libs/database';
import { CategoryModule } from '@spst-kniznica-project/backend-libs/category';
import { BookingModule } from '@spst-kniznica-project/backend-libs/booking';
import { ThrottlerModule } from '@nestjs/throttler';
import LoggerMiddleware from 'libs/backend-libs/shared/src/lib/middlewares/logger.middleware';
import {ChatModule } from '@spst-kniznica-project/backend-libs/chat'
import {CheckerModule } from '@spst-kniznica-project/backend-libs/checker'
import { SocialModule } from '@spst-kniznica-project/backend-libs/social';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AdminModule } from '@spst-kniznica-project/backend-libs/admin';
import { UsersModule } from '@spst-kniznica-project/backend-libs/users';
import { QuestionsModule } from '@spst-kniznica-project/backend-libs/questions';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationsModule } from '@spst-kniznica-project/backend-libs/notifications';

@Module({
  imports: [
    HttpModule,
    EventEmitterModule.forRoot(
      {
        global: true
      }
    ),
    ScheduleModule.forRoot(),
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
    CategoryModule,
    BookingModule,
    ChatModule,
    CheckerModule,
    SocialModule,
    AdminModule,
    UsersModule,
    QuestionsModule,
    NotificationsModule
  ],

  providers: [
    AppService
  ],

  controllers: [
    AppController
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}