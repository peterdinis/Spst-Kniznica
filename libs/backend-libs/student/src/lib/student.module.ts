import { Module } from '@nestjs/common';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [PrismaModule],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [],
})
export class StudentModule {}
