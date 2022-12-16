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
    summary: 'Example check for package nestjs/terminus',
  })
  @Get('example')
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }

  @ApiOperation({
    summary: 'Check database status',
  })
  @Get('database')
  checkDB() {
    return this.health.check([() => this.db.isHealthy('database')]);
  }

  @ApiOperation({
    summary: "Check SPŠT Knižnica website status"
  })
  @Get("spst")
  checkSpst() {
    return this.health.check([
      () => this.http.pingCheck('spst-website', 'https://www.spsbj.sk/'),
    ]);
  }
}
