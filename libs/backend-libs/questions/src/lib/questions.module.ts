import { Module } from '@nestjs/common';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';

@Module({
  imports: [PrismaModule],
  controllers: [QuestionsController],
  providers: [QuestionsService],
  exports: [],
})
export class QuestionsModule {}
