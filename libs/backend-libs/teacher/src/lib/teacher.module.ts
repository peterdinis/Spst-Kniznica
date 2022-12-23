import { Module } from '@nestjs/common';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { TeacherController } from './teacher.controller';
import { TeacherGateway } from './teacher.gateway';
import { TeacherService } from './teacher.service';

@Module({
  imports: [PrismaModule],
  controllers: [TeacherController],
  providers: [TeacherService, TeacherGateway],
  exports: [TeacherService],
})
export class TeacherModule {}
