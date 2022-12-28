import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Questions")
@Controller("questions")
export class QuestionsController {}