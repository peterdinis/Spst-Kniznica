import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";
import { RegisterUserDto } from "./dto/register-users.dto";
import * as bcrypt from "bcrypt";
import {JwtService} from "@nestjs/jwt";
import { LoginUserDto } from "./dto/login-users.dto";
import { UpdateUserDto } from "./dto/update-users.dto";

@Injectable()
export class UsersService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly jwtService: JwtService
    ) {}

    async findUserByEmail(email: string) {
        const user = await this.prismaService.user.findFirst({
            where: { email }
        });

        if(!user) {
            throw new NotFoundException("User not found");
        }

        return user;
    }

    async getUser(username: string) {
        const user = await this.prismaService.user.findFirst({
            where: { username }
        });

        if(!user) {
            throw new NotFoundException("User not found");
        }

        delete user.password;
        return user;
    }

    async searchForUser(username: string) {
        const user = await this.prismaService.user.findFirst({
            where: { username }
        });
        return user;
    }

    async createUser(registerDto: RegisterUserDto) {
        const existing = await this.prismaService.user.findFirst({
            where: {
                username: registerDto.username
            }
        });

        if(existing) {
            throw new ConflictException('Username already exists');
        }

        const hashedPassword = await bcrypt.hash(registerDto.password, 10);

        const user = await this.prismaService.user.create({
            data: {
                ...registerDto,
                password: hashedPassword
            }
        });

        delete user.password;
        return user;
    }

    async loginUser(loginDto: LoginUserDto) {
        const { username, password } = loginDto;

        const user = await this.prismaService.user.findFirst({
            where: { username }
        });

        if(!user) {
            throw new NotFoundException('user not found');
        }

        const validatePassword = await bcrypt.compare(password, user.password);

        if (!validatePassword) {
            throw new UnauthorizedException('invalid password');
        }

        return {
            token: this.jwtService.sign({
                username
            }),
            user
        }
    }

    async registerUser(registerDto: RegisterUserDto) {
        const user = await this.createUser(registerDto);
        return {
            token: this.jwtService.sign({ username: user.username }),
            user
        }
    }

    async updateProfile(id: number, updatedData: UpdateUserDto) {
        const updatedUser = await this.prismaService.user.update({
            where: {
                id
            },

            data: updatedData
        })

        return updatedUser;
    }
}