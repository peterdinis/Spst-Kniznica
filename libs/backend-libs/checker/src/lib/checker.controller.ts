import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { PrismaHealthIndicator } from './prisma-check.service';

@ApiTags('Checkers')
@Controller('checker')
export class CheckerController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: PrismaHealthIndicator,
    private memory: MemoryHealthIndicator
  ) {}

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

  @ApiOperation({
    summary: "Memory check"
  })
  @Get("memory")
  @HealthCheck()
  memoryCheck() {
    return this.health.check([
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
    ]);
  }
}
