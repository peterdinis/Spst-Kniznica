import { Injectable } from '@nestjs/common';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { AnswerTheQuestionDto } from './dto/answer-question.dto';

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
      },
    });

    return newQuestion;
  }

  async updateQuestion(questionId: number, questionDto: UpdateQuestionDto) {

    const updateExistingQuestion = await this.prismaService.question.update({
      where: {
        id: questionId
      },

      data: questionDto
    });

    return updateExistingQuestion;
  }

  async answerTheQuestion(questionId: number, answerDto: AnswerTheQuestionDto) {
    return;
  }


  async removeQuestion(id: number) {
    const questionToRemoved = await this.prismaService.question.delete({
      where: {
        id
      },
    });

    return questionToRemoved;
  }
}
