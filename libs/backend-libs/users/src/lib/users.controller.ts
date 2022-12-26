import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RegisterUserDto } from "./dto/register-users.dto";
import { LoginUserDto } from "./dto/login-users.dto";
import { AuthGuard } from "@nestjs/passport";
import AuthUser from "./decorators/user.decorator";
import type { User } from "@prisma/client";

@ApiTags("Application Users")
@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOperation({
        summary: "Register new user"
    })
    @ApiCreatedResponse({
        type: RegisterUserDto
    })
    @Post("/register")
    async registerUser(
        @Body() registerUserDto: RegisterUserDto
    ) {
        return this.usersService.registerUser(registerUserDto);
    }

    @ApiOperation({
        summary: "Login new user"
    })
    @ApiCreatedResponse({
        type: LoginUserDto
    })
    @Post("/login")
    async loginUser(
        @Body() loginUserDto: LoginUserDto
    ) {
        return this.usersService.loginUser(loginUserDto);
    }

    @ApiOperation({
        summary: "Profile info"
    })
    @ApiOkResponse()
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @Get("/profile")
    loggedUser(
        @AuthUser() user: User
    ) {
        return user;
    }
}