import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-new-category.dto';
import { ViewCategoryDto } from './dto/view-category.dto';
import {
  ApiPaginatedResponse,
  PageOptionsDto,
} from '@spst-kniznica-project/backend-libs/shared';
import { UpdateCategoryDto } from './dto/update-category-dto';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({
    summary: 'Find all categories',
  })
  @ApiOkResponse({
    type: [ViewCategoryDto],
  })
  @Get('/')
  async allCategories() {
    return await this.categoryService.findAllCategories();
  }

  @ApiOperation({
    summary: 'Search for specific category',
  })
  @ApiOkResponse({
    type: ViewCategoryDto,
  })
  @Get('/search')
  async searchForCategory(@Query('name') name: string) {
    return await this.categoryService.searchForCategory(name);
  }

  @ApiOperation({
    summary: 'Get all paginated categories',
  })
  @ApiPaginatedResponse(ViewCategoryDto)
  @Get('/paginate')
  async getPaginatedCategories(@Query() pageOptionsDto: PageOptionsDto) {
    return this.categoryService.paginateCategories(pageOptionsDto);
  }

  @ApiOperation({
    summary: 'Find one category',
  })
  @ApiOkResponse({
    type: ViewCategoryDto,
  })
  @Get('/:id')
  async getOneCategory(@Param('id') id: number) {
    return await this.categoryService.getOneCategory(id);
  }

  @ApiOperation({
    summary: 'Create new category',
  })
  @ApiCreatedResponse({
    type: CreateCategoryDto,
  })
  @Post('/')
  async createNewCategory(@Body() categoryDto: CreateCategoryDto) {
    return await this.categoryService.createNewCategory(categoryDto);
  }

  @ApiOperation({
    summary: 'Update category',
  })
  @ApiOkResponse({
    type: UpdateCategoryDto,
  })
  @Put('/:id/update')
  async updateCategory(
    @Param('id') id: number,
    @Body() categoryDto: UpdateCategoryDto
  ) {
    return await this.categoryService.updateCategory(id, categoryDto);
  }

  @ApiOperation({
    summary: 'Delete category',
  })
  @ApiOkResponse({
    type: ViewCategoryDto,
  })
  @Delete('/:id/delete')
  async deleteCategory(@Param('id') id: number) {
    return await this.categoryService.deleteCategory(id);
  }
}
