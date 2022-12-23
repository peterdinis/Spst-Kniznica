import { Injectable } from "@nestjs/common";

@Injectable()
export class TeacherService {
    async generateRandomPassword() {
        return Math.random().toString(36).slice(-10);
    }
}