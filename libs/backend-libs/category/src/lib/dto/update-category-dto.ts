import {PartialType} from "@nestjs/swagger"
import {CreateCategoryDto} from "./create-new-category.dto";

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}