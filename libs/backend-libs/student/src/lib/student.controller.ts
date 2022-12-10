import { Body, Controller, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation } from "@nestjs/swagger";
import { CreateNewStudentDto } from "./dto/create-student-dto";
import { LoginStudentDto } from "./dto/login-student-dto";
import { StudentService } from "./student.service";

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
}