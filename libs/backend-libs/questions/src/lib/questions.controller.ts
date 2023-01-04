import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { QuestionsService } from "./questions.service";
import { ViewQuestionDto } from "./dto/view-question.dto";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";
import { AnswerTheQuestionDto } from "./dto/answer-question.dto";

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

    @ApiOperation({
        summary: "Create new question"
    })
    @ApiCreatedResponse({
        type: CreateQuestionDto
    })
    @Post("/")
    async createNewQuestion(@Body() questionDto: CreateQuestionDto) {
        return await this.questionService.createNewQuestion(questionDto)
    }

    @ApiOperation({
        summary: "Update question"
    })
    @ApiOkResponse()
    @Put("/:id/update")
    async updateQuestion(@Param("questionId") questionId: number, @Body() updateQuestion: UpdateQuestionDto) {
        return await this.questionService.updateQuestion(questionId, updateQuestion);
    }

    @ApiOperation({
        summary: "Answer question"
    })
    @ApiOkResponse()
    @Put("/:id/question/answer")
    async answerQuestion(@Param("questionId") questionId: number, @Body() answerQuestion: AnswerTheQuestionDto) {
        return await this.questionService.answerQuestion(questionId, answerQuestion);
    }

    @ApiOperation({
        summary: "Delete question"
    })
    @ApiOkResponse()
    @Delete("/:id/delete")
    async deleteQuestion(@Param("questionId") questionId: number) {
        return await this.questionService.removeQuestion(questionId);
    }
}