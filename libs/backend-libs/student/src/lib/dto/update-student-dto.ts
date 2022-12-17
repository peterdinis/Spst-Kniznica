import {PartialType} from "@nestjs/swagger"
import {CreateNewStudentDto} from "./create-student-dto";

export class UpdateStudentDto extends PartialType(CreateNewStudentDto) {}