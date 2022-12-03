import { Module } from '@nestjs/common';
import { QuotesController } from './qoutes.controller';
import { QuotesService } from './qoutes.service';

@Module({
  controllers: [QuotesController],
  providers: [QuotesService],
  exports: [],
})
export class QuotesModule {}
