import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
} from '@nestjs/terminus';
import { CheckerService } from './checker.service';

@ApiTags('Checkers')
@Controller('checker')
export class CheckerController {
  constructor(
    private readonly checkerService: CheckerService
  ) {}

  @ApiOperation({
    summary: 'Check database status',
  })
  @Get('database')
  checkDB() {
    return this.checkerService.checkDatabaseStatus();
  }

  @ApiOperation({
    summary: "Check SPŠT Knižnica website status"
  })
  @Get("spst")
  checkSpst() {
    return this.checkerService.checkSpstWebsite();
  }

  @ApiOperation({
    summary: "Memory check"
  })
  @Get("memory")
  @HealthCheck()
  memoryCheck() {
    return this.checkerService.memoryCheck();
  }
}
