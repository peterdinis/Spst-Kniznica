import { Module } from '@nestjs/common';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { StudentGateway } from './student.gateway';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    /* TODO: Update this later */
    JwtModule.register({
      secret: "SOMERANDOM",
      signOptions: {
        expiresIn: 1000000,
      },
    }),
  ],
  controllers: [StudentController],
  providers: [StudentService, JwtStrategy, StudentGateway]
})
export class StudentModule {}
