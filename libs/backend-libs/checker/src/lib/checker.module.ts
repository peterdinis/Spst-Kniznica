import { Module } from '@nestjs/common';
import { CheckerController } from './checker.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';

@Module({
  imports: [TerminusModule, HttpModule, PrismaModule],
  controllers: [CheckerController],
})
export class CheckerModule {}
