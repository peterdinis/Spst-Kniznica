import { Injectable } from '@nestjs/common';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { CreateQuestionDto } from './dto/create-question.dto';
import { AnswerTheQuestionDto } from './dto/answer-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

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
        answer: questionDto.answer,
      },
    });

    return newQuestion;
  }

  async updateQuestion(id: number, questionDto: UpdateQuestionDto) {
    const oneQuestion = await this.prismaService.question.findFirst({
      where: {
        id: id,
      }
    })

    const updatingQuestion = await this.prismaService.question.update({
      where: {
        id: oneQuestion.id,
      },

      data: questionDto
    })

    return updatingQuestion;
  }

  async answerQuestion(id: number,answerQuestionDto: AnswerTheQuestionDto) {
    const oneQuestion = await this.prismaService.question.findFirst({
      where: {
        id
      },
    });

    const answerTheQuestion = await this.prismaService.question.update({
      where: {
        id: oneQuestion.id,
      },

      data: {
        answer: answerQuestionDto.newAnswer,
      },
    });

    return answerTheQuestion;
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
