import { HttpException, HttpStatus } from "@nestjs/common";

export class AdminException extends HttpException {
    constructor() {
      super('Forbidden', HttpStatus.FORBIDDEN);
    }
  }