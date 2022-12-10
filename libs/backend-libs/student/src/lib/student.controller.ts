import { Body, Controller, Post } from "@nestjs/common";
import { CreateNewStudentDto } from "./dto/create-student-dto";
import { StudentService } from "./student.service";

@Controller("student")
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post("/register")
    async studentRegister(
        @Body() registerStudent: CreateNewStudentDto
    ) {
        return await this.studentService.signupStudent(registerStudent);
    }
}