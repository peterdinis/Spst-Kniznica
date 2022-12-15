import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { ApiCachceModule } from '@spst-kniznica-project/backend-libs/cache';

@Module({
  imports: [PrismaModule, ApiCachceModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [],
})

export class CategoryModule {}
