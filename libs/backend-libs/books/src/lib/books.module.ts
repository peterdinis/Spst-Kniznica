import { Module } from '@nestjs/common';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [PrismaModule],
  controllers: [BooksController],
  providers: [ BooksService],
  exports: [BooksService],
})
export class BooksModule {}
