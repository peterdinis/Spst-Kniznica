import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-new-category.dto";
import { ViewCategoryDto } from "./dto/view-category.dto";

@ApiTags("Category")
@Controller("category")
export class CategoryController {
    constructor (private readonly categoryService: CategoryService) {}

    @ApiOperation({
        summary: "Find all categories"
    })
    @ApiOkResponse({
        type: [ViewCategoryDto]
    })
    @Get("/")
    async allCategories() {
        return await this.categoryService.findAllCategories();
    }


    @ApiOperation({
        summary: "Find one category"
    })
    @ApiOkResponse({
        type: ViewCategoryDto
    })
    @Get("/:id")
    async getOneCategory(@Param("id") id: number) {
        return await this.categoryService.getOneCategory(id);
    }

    @ApiOperation({
        summary: "Create new category"
    })
    @ApiCreatedResponse({
        type: CreateCategoryDto
    })
    @Post("/")
    async createNewCategory(@Body() categoryDto: CreateCategoryDto) {
        return await this.categoryService.createNewCategory(categoryDto)
    }
}