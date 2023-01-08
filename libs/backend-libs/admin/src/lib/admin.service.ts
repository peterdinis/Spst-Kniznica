import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { RegisterAdminDto } from './dto/register-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async getAdmin(username: string) {
    const admin = await this.prismaService.admin.findFirst({
      where: {
        username,
      },
    });

    if (!admin) {
      throw new NotFoundException('Admin not found');
    }

    delete admin.password;
    return admin;
  }

  async createNewAdmin(registerAdminDto: RegisterAdminDto) {
    return;
  }

  async loginAdmin(loginAdminDto: LoginAdminDto) {
    return;
  }
}
