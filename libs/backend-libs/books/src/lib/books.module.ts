import { Module } from '@nestjs/common';
import { ApiCachceModule } from '@spst-kniznica-project/backend-libs/cache';
import { CaslModule } from '@spst-kniznica-project/backend-libs/casl';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [PrismaModule, ApiCachceModule, CaslModule],
  controllers: [BooksController],
  providers: [ BooksService],
  exports: [],
})
export class BooksModule {}
