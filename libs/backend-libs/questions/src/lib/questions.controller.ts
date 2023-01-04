import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { QuestionsService } from "./questions.service";
import { ViewQuestionDto } from "./dto/view-question.dto";

@ApiTags("Questions")
@Controller("questions")
export class QuestionsController {
    constructor(private readonly questionService: QuestionsService) {}

    @ApiOperation({
        summary: "All app questions"
    })
    @ApiOkResponse({
        type: [ViewQuestionDto]
    })
    @Get("/")
    async allQuestions() {
        return await this.questionService.allQuestions();
    }
}