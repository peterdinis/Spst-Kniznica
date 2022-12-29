import { Module } from '@nestjs/common';
import { CaslModule } from '@spst-kniznica-project/backend-libs/casl';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [PrismaModule, CaslModule],
  controllers: [BooksController],
  providers: [ BooksService],
  exports: [BooksService],
})
export class BooksModule {}
