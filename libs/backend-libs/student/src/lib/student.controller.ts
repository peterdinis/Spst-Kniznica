import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { StudentD } from "./decorators/student.decorator";
import { CreateNewStudentDto } from "./dto/create-student-dto";
import { LoginStudentDto } from "./dto/login-student-dto";
import { StudentService } from "./student.service";
import { AuthUser } from "./utils/auth-user";

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

    @ApiBearerAuth() // TODO: Not Working !!!
    @ApiOperation({
        summary: "Student Profile" 
    })
    @ApiOkResponse()
    @Get("/profile")
    async myProfile(
        @StudentD() student: AuthUser
    ) {
        return student;
    }
}