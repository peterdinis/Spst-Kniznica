import { Module } from '@nestjs/common';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { QuotesController } from './qoutes.controller';
import { QuotesService } from './qoutes.service';
import { ApiCachceModule } from '@spst-kniznica-project/backend-libs/cache';

@Module({
  imports: [PrismaModule, ApiCachceModule],
  controllers: [QuotesController],
  providers: [QuotesService]
})
export class QuotesModule {}
