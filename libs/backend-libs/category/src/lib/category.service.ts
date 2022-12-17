import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ApiCachceService } from '@spst-kniznica-project/backend-libs/cache';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { CreateCategoryDto } from './dto/create-new-category.dto';
import { UpdateCategoryDto } from './dto/update-category-dto';

@Injectable()
export class CategoryService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly apiCacheService: ApiCachceService
  ) {}

  async findAllCategories() {
    const allCategories = await this.prismaService.category.findMany();
    return allCategories;
  }

  async createNewCategory(categoryDto: CreateCategoryDto) {
    try {
      const createNewBook = await this.prismaService.category.create({
        data: {
          name: categoryDto.name,
          description: categoryDto.description,
        },
      });

      await this.apiCacheService.clearCache();
      return createNewBook;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async getOneCategory(id: number) {
    try {
      const oneBook = await this.prismaService.category.findUnique({
        where: {
          id,
        },
      });

      return oneBook;
    } catch (e) {
      throw new NotFoundException(e);
    }
  }

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const updateCategory = await this.prismaService.category.update({
        where: {
          id,
        },
        data: updateCategoryDto,
      });

      if (!updateCategory) {
        throw new NotFoundException('Category not found');
      }

      await this.apiCacheService.clearCache();
      return updateCategory;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async deleteCategory(id: number) {
    const oneCategory = await this.prismaService.category.delete({
      where: {
        id,
      },
    });

    if (!oneCategory) {
      throw new NotFoundException('Category not found');
    }
    await this.apiCacheService.clearCache();
    return oneCategory;
  }
}
