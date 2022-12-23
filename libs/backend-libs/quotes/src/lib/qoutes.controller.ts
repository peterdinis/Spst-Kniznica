import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { QuotesService } from "./qoutes.service";
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ViewQouteDto } from "./dto/view-quotes.dto";
import { CreateQuoteDto } from "./dto/create-quote.dto";
import { UpdateQuoteDto } from "./dto/update-quote.dto";

@ApiTags("Quotes")
@Controller("quotes")
export class QuotesController {
    constructor(private readonly qoutesService: QuotesService) {}

    @ApiOperation({
        summary: "Find all qoutes"
    })
    @ApiOkResponse({
        type: [ViewQouteDto]
    })
    @Get("/")
    async allQuotes() {
        return await this.qoutesService.findAllQuotes();
    }

    @ApiOperation({
        summary: "Create new qoute"
    })
    @ApiCreatedResponse({
        type: CreateQuoteDto
    })
    @Post("/")
    async createQoute(
        @Body() createQuoteDto: CreateQuoteDto
    ) {
        return await this.qoutesService.createNewQuote(createQuoteDto)
    }

    @ApiOperation({
        summary: "Find one qoute"
    })
    @ApiOkResponse({
        type: ViewQouteDto
    })
    @Get("/:id")
    async findOneQuote(
        @Param("id") id: number
    ) {
        return await this.qoutesService.findOneQuote(id);
    }

    @ApiOperation({
        summary: "Update qoute"
    })
    @ApiOkResponse({
        type: ViewQouteDto
    })
    @Put("/:id/update")
    async updateQoute(
        @Param("id") id: number, 
        @Body() updateQouteDto: UpdateQuoteDto
    ) {
        return await this.qoutesService.updateNewQuote(id, updateQouteDto);
    }

    @ApiOperation({
        summary: "Delete qoute"
    })
    @ApiOkResponse({
        type: ViewQouteDto
    })
    @Delete("/:id/delete")
    async deleteQuote(
        @Param("id") id: number
    ) {
        return await this.qoutesService.deleteQuote(id);
    }
}