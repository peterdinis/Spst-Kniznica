import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";
import { CreateQuestionDto } from "./dto/create-question.dto";

@Injectable()
export class QuestionsService {
    constructor(private readonly prismaService: PrismaService) {}

    async allQuestions() {
        const allQuestions = await this.prismaService.question.findMany();
        return allQuestions;
    }

    async createNewQuestion(questionDto: CreateQuestionDto) {
        const newQuestion = await this.prismaService.question.create({
            data: {
                name: questionDto.name,
                answer: questionDto.answer
            }
        })

        return newQuestion;
    }
}