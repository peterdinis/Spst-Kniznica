import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateNewStudentDto } from './dto/create-student-dto';
import { Prisma } from '@prisma/client';
import { JwtPayload } from './interfaces/jwt-payload';

@Injectable()
export class StudentService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async signupStudent(registerDto: CreateNewStudentDto) {
    try {
      const hashedPassword = await bcrypt.hash(registerDto.password, 12) as any;

     /*  const newUser =await this.prismaService.student.create({
        data: {
          username: registerDto.username,
          email: registerDto.email,
          firstName: registerDto.firstName,
          lastName: registerDto.lastName
          password: registerDto.password,

        }
      });

      return newUser; */
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          // unique constraint
          throw new ConflictException('Student already exists in database');
        } else throw e;
      } else throw e;
    }
  }

  async loginStudent() {}

  async validateUser(payload: JwtPayload) {
    const user = (await this.prismaService.student.findUnique({
      where: { id: payload.id } as any,
    })) as any; // TODO: Fix this problem

    if (
      user !== null &&
      user.email === payload.email &&
      user.username === payload.username
    ) {
      return user;
    }
    throw new UnauthorizedException('User is not authorized...');
  }

  async isUsernameAvailable(username: string): Promise<boolean> {
    const user = await this.prismaService.student.findUnique({
      where: { username: username.toLowerCase() },
      select: { username: true },
    });
    return user === null;
  }

  async isEmailAvailable(email: string): Promise<boolean> {
    const user = await this.prismaService.student.findUnique({
      where: { email: email.toLowerCase() },
      select: { email: true },
    });
    return user === null;
  }
}
