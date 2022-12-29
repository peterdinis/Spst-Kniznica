import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    constructor(private readonly httpService: HttpService) {}

    async exampleData() {
        return await this.httpService.get("https://jsonplaceholder.typicode.com/users")
    }
}