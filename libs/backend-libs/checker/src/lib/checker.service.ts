import {
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { PrismaHealthIndicator } from './prisma-check.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckerService {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: PrismaHealthIndicator,
    private memory: MemoryHealthIndicator
  ) {}

  async checkDatabaseStatus() {
    return this.health.check([() => this.db.isHealthy('database')]);
  }

  async checkSpstWebsite() {
    return this.health.check([
      () => this.http.pingCheck('spst-website', 'https://www.spsbj.sk/'),
    ]);
  }

  async memoryCheck() {
    return this.health.check([
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
    ]);
  }
}
