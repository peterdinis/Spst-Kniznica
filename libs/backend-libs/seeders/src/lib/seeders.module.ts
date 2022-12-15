import { Module } from '@nestjs/common';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { SeedersController } from './seeders.controller';
import { SeedersService } from './seeders.service';

@Module({
  imports: [PrismaModule],
  controllers: [SeedersController],
  providers: [SeedersService]
})
export class SeedersModule {}
