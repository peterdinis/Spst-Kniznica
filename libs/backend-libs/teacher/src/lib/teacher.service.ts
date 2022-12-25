import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";

@Injectable()
export class TeacherService {
    constructor(private readonly prismaService: PrismaService) {}

    async findOneTeacher(id: number) {
        const oneTeacher = await this.prismaService.teacher.findUnique({
            where: { id},
        })

        return oneTeacher;
    }

    async generateRandomPassword() {
        return Math.random().toString(36).slice(-10);
    }
}