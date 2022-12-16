import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';
import { PrismaHealthIndicator } from './prisma-check.service';

@ApiTags('Checkers')
@Controller('checker')
export class CheckerController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: PrismaHealthIndicator
  ) {}

  @ApiOperation({
    summary: "Example check for package nestjs/terminus"
  })
  @Get('example')
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
}
