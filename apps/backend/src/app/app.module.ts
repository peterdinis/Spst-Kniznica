import { Module } from '@nestjs/common';
import { BooksModule } from '@spst-kniznica-project/backend-libs/books';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BooksModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
