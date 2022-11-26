import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from '@spst-kniznica-project/backend-libs/books';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BooksModule, ConfigModule.forRoot({
    envFilePath: ".env"
  }),],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
