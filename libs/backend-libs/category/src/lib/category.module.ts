import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { ApiCachceModule } from '@spst-kniznica-project/backend-libs/cache';
import { CaslModule } from '@spst-kniznica-project/backend-libs/casl';

@Module({
  imports: [PrismaModule, ApiCachceModule, CaslModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [],
})

export class CategoryModule {}
