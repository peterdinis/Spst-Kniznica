import { HttpException, HttpStatus } from "@nestjs/common";

export class TeacherExpection extends HttpException {
    constructor() {
      super('Forbidden', HttpStatus.FORBIDDEN);
    }
  }