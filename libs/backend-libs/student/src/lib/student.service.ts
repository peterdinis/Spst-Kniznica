import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class StudentService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly jwtService: JwtService
    ) {}

    async signupStudent() {}

    async loginStudent() {}
}