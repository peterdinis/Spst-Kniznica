import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';
import { CaslModule } from '@spst-kniznica-project/backend-libs/casl';

@Module({
  imports: [PrismaModule, CaslModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [],
})

export class CategoryModule {}
