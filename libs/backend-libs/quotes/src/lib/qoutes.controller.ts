import { Controller, Get } from "@nestjs/common";
import { QuotesService } from "./qoutes.service";
import { ApiOperation } from "@nestjs/swagger";

@Controller("quotes")
export class QuotesController {
    constructor(private readonly qoutesService: QuotesService) {}

    @ApiOperation({
        summary: "Find all qoutes"
    })
    
}