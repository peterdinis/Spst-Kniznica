import { Module } from '@nestjs/common';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  controllers: [BooksController],
  providers: [PrismaService, BooksService],
  exports: [],
})
export class BooksModule {}
