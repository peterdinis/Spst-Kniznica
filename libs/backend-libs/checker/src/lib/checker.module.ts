import { Module } from '@nestjs/common';
import { CheckerController } from './checker.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [CheckerController],
})
export class CheckerModule {}
