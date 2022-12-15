import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ApiCachceService } from '@spst-kniznica-project/backend-libs/cache';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { CreateCategoryDto } from './dto/create-new-category.dto';

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
          id
        }
      })

      return oneBook;
    } catch (e) {
      throw new NotFoundException(e)
    }
  }
}
