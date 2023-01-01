import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { RegisterUserDto } from './dto/register-users.dto';
import { LoginUserDto } from './dto/login-users.dto';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from './decorators/user.decorator';
import type { User } from '@prisma/client';
import { ViewUsersDto } from './dto/view-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@ApiTags('Application Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Register new user',
  })
  @ApiCreatedResponse({
    type: RegisterUserDto,
  })
  @Post('/register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.usersService.registerUser(registerUserDto);
  }

  @ApiOperation({
    summary: "Search for specific user"
  })
  @Get("/search")
  async searchForUser(@Query("username") username: string) {
    return await this.usersService.searchForUser(username)
  }

  @ApiOperation({
    summary: 'Login new user',
  })
  @ApiCreatedResponse({
    type: LoginUserDto,
  })
  @Post('/login')
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.loginUser(loginUserDto);
  }

  @ApiOperation({
    summary: 'Profile info',
  })
  @ApiOkResponse({
    type: ViewUsersDto,
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  loggedUser(@AuthUser() user: User) {
    return user;
  }

  @ApiOperation({
    summary: 'Update Profile',
  })
  @ApiOkResponse({
    type: UpdateUserDto,
  })
  @Put('/:id/update')
  async updateUserProfile(
    @Param('id') id: number,
    @Body() updateDto: UpdateUserDto
  ) {
    return await this.usersService.updateProfile(id, updateDto);
  }
}
