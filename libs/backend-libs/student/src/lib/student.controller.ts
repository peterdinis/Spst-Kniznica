import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { MyProfile } from "./decorators/student.decorator";
import { CreateNewStudentDto } from "./dto/create-student-dto";
import { LoginStudentDto } from "./dto/login-student-dto";
import { StudentService } from "./student.service";
import { AuthUser } from "./utils/auth-user";
import {Request} from "express";

@ApiTags("Student")
@Controller("student")
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @ApiOperation({
        summary: "Register new student to app"
    })
    @ApiCreatedResponse({
        type: CreateNewStudentDto
    })
    @Post("/register")
    async studentRegister(
        @Body() registerStudent: CreateNewStudentDto
    ) {
        return await this.studentService.signupStudent(registerStudent);
    }

    @ApiOperation({
        summary: "Login student to app"
    })
    @ApiCreatedResponse({
        type: LoginStudentDto
    })
    @Post("/login")
    async studentLogin(
        @Body() loginStudent: LoginStudentDto,
    ) {
        return await this.studentService.loginStudent(loginStudent)
    }

    @ApiBearerAuth()
    @ApiOperation({
        summary: "Student Profile" 
    })
    /* TODO: Update this!!! */
    @ApiOkResponse()
    @Get("/profile")
    async myProfile(
        @Req() req: Request,
    ) {
        return req.user;
    }

    @ApiOperation({
        summary: "Check if email is avaiable"
    })
    @ApiCreatedResponse()
    @Post("/email/avaiable")
    async checkIfEmailIsAvailable(@Body() email: string) {
        return await this.studentService.isEmailAvailable(email);
    }

    @ApiOperation({
        summary: "Check if name is avaiable"
    })
    @ApiCreatedResponse()
    @Post("/name/avaiable")
    async checkIfNameIsAvaiable(@Body() name: string) {
        return await this.studentService.isUsernameAvailable(name);
    }

    @ApiOperation({
        summary: "Generate random Password"
    })
    @ApiOkResponse()
    @Get("/password/random")
    async generateRandomPassword() {
        return await this.studentService.generateRandomPassword();
    }
}