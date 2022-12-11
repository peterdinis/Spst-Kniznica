import { MiddlewareConsumer, Module } from '@nestjs/common';
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
/* TODO: Fix import */
import LoggerMiddleware from 'libs/backend-libs/shared/src/lib/middlewares/logger.middleware';
import { SeedersModule } from '@spst-kniznica-project/backend-libs/seeders';

@Module({
  imports: [
    CategoryModule,
    BooksModule,
    ConfigModule.forRoot({
      envFilePath: '.env.local',
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
    SeedersModule
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