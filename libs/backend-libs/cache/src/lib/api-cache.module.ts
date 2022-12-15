import { Module } from '@nestjs/common';
import { ApiCachceService } from './api-cache.service';

@Module({
  providers: [ApiCachceService],
  exports: [ApiCachceService]
})
export class ApiCachceModule {}
