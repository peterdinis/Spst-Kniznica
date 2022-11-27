import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService],
  exports: [],
})

export class CategoryModule {}
