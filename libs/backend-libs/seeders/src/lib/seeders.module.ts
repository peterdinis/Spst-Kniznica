import { Module } from '@nestjs/common';
import { SeedersController } from './seeders.controller';
import { SeedersService } from './seeders.service';

@Module({
  controllers: [SeedersController],
  providers: [SeedersService],
  exports: [],
})
export class SeedersModule {}
