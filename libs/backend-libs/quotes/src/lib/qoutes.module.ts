import { Module } from '@nestjs/common';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { QuotesController } from './qoutes.controller';
import { QuotesService } from './qoutes.service';

@Module({
  imports: [PrismaModule],
  controllers: [QuotesController],
  providers: [QuotesService],
  exports: [],
})
export class QuotesModule {}
