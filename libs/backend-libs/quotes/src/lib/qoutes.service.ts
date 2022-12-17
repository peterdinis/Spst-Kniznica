import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@spst-kniznica-project/backend-libs/database';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';

@Injectable()
export class QuotesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllQuotes() {
    const allQuotes = await this.prismaService.quote.findMany();
    return allQuotes;
  }

  async findOneQuote(id: number) {
    const oneQuote = await this.prismaService.quote.findUnique({
      where: {
        id,
      },
    });

    if (!oneQuote) {
      throw new NotFoundException('Quote not found');
    }

    return oneQuote;
  }

  async createNewQuote(quoteData: CreateQuoteDto) {
    try {
      const createNewQuote = await this.prismaService.quote.create({
        data: {
          author: quoteData.author,
          text: quoteData.text,
        },
      });
      return createNewQuote;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async updateNewQuote(id: number, quoteData: UpdateQuoteDto) {}
}
