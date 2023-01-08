import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';

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
}
