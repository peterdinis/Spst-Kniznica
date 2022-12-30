import { Module } from '@nestjs/common';
import { CheckerController } from './checker.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { PrismaHealthIndicator } from './prisma-check.service';
import { CheckerService } from './checker.service';

@Module({
  imports: [TerminusModule, HttpModule, PrismaModule],
  controllers: [CheckerController],
  providers: [PrismaHealthIndicator, CheckerService]
})
export class CheckerModule {}
